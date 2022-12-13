import type { AxiosResponse } from "axios";
import axios from "axios";
import { LEGACY_ROUTES_NUMBERS_MATCHING } from "@/consts/legacy-stops-codes-matching";

export interface ArrivingInfoDTO {
  routeNumber: string;
  destinationStopName: string;
  arrivalTime: number;
}

interface ArrivingInfoResponse {
  RouteNumber: string;
  DestinationStopName: string;
  ArrivalTime: number;
}

type ArrivalTimeResponse = {
  ArrivalTime: ArrivingInfoResponse[];
};

export interface RouteInfoDTO {
  color: string;
  id: string;
  longName: string;
  routeNumber: string;
  routeStops: [];
  stopA: string;
  stopB: string;
  type: "bus" | "metro";
}

interface RouteInfoResponse {
  Color: string;
  Id: string;
  LongName: string;
  RouteNumber: string;
  RouteStops: [];
  StopA: string;
  StopB: string;
  Type: "bus" | "metro";
}

type RoutesResponse = {
  Route: RouteInfoResponse[];
};

interface StopInfoResponse {
  code?: string;
  id: string;
  lat: number;
  lon: number;
  name: string;
}

export interface StopInfoDTO extends StopInfoResponse {
  code: string;
}

type StopsResponse = StopInfoResponse[];

interface RouteSchemeResponse {
  DirectionDescription?: string;
  Stops: [
    {
      Forward: boolean;
      HasBoard: boolean;
      Lat: number;
      Lon: number;
      Name: string;
      Routes: string[];
      StopId: string; //code
      Type: "bus" | "metro";
      Virtual: boolean;
    }
  ];
}

export interface StopInfoInRouteSchemeDTO {
  code: string;
  lat: number;
  lon: number;
  name: string;
  type: "bus" | "metro";
  isVirtual: boolean;
  routesIds: string[];
  isForward: boolean;
  hasBoard: boolean;
}

export interface RouteSchemeDTO {
  directionDescription?: string;
  stops: StopInfoInRouteSchemeDTO[];
}

type RoutesAtStopResponse = {
  agencyName: string; // "თბილისის სატრანსპორტო კომპანია",
  color: string; // "11518A",
  id: string; // "1:R13420",
  longName: string; // "მ/ს დიდუბე - მ/ს სახელმწიფო უნივერსიტეტი",
  mode: string; // "BUS",
  shortName: string; // "89",
}[];

export const ArrivingApi = {
  getArrivalTime(stopCode: string): Promise<ArrivingInfoDTO[]> {
    return axios
      .get(
        // TODO use parameters
        `https://transfer.msplus.ge:2443/otp/routers/ttc/stopArrivalTimes?stopId=${stopCode}`
      )
      .then((response: AxiosResponse<ArrivalTimeResponse>) =>
        response.data.ArrivalTime.map(
          (arrivalTimeRow: ArrivingInfoResponse) => ({
            routeNumber: arrivalTimeRow.RouteNumber,
            destinationStopName: arrivalTimeRow.DestinationStopName,
            arrivalTime: arrivalTimeRow.ArrivalTime,
          })
        )
      );
  },
  getAllRoutes(): Promise<RouteInfoDTO[]> {
    return axios
      .get(
        // TODO use parameters
        "https://transfer.msplus.ge:2443/otp/routers/ttc/routes"
      )
      .then((response: AxiosResponse<RoutesResponse>) =>
        response.data.Route.map((routeInfo: RouteInfoResponse) => ({
          color: routeInfo.Color,
          id: routeInfo.Id,
          longName: routeInfo.LongName,
          routeNumber: routeInfo.RouteNumber,
          routeStops: routeInfo.RouteStops,
          stopA: routeInfo.StopA,
          stopB: routeInfo.StopB,
          type: routeInfo.Type,
        })) // Delete metro routes
          .filter(
            (route) => route.routeNumber !== "1" && route.routeNumber !== "2"
          )
      );
  },
  getAllStops(): Promise<StopInfoDTO[]> {
    return axios
      .get("https://transfer.msplus.ge:2443/otp/routers/ttc/index/stops")
      .then((response: AxiosResponse<StopsResponse>) =>
        response.data
          .filter((stop) => stop.code !== undefined)
          .map((stop) => ({
            code: stop.code !== undefined ? stop.code : "", // TODO
            ...stop,
          }))
          // Delete metro stops
          .filter((stop) => stop.code !== "1" && stop.code !== "2")
      );
  },
  /**
   * Именно id, а не code и именно id, а не name
   */
  getRoutesNumbersAtStop(stopId: string): Promise<string[]> {
    return axios
      .get(
        // TODO use parameters
        `https://transfer.msplus.ge:2443/otp/routers/ttc/index/stops/${stopId}/routes`
      )
      .then((response: AxiosResponse<RoutesAtStopResponse>) =>
        response.data
          .map((routeData) => {
            const probablyLegacyRouteNumberMatching =
              LEGACY_ROUTES_NUMBERS_MATCHING.find(
                (routeLegacy) => routeLegacy.legacyCode === routeData.shortName
              );
            return (
              probablyLegacyRouteNumberMatching?.actualCode ??
              routeData.shortName
            );
          })
          .sort((a, b) => a.localeCompare(b))
      );
  },
  getRouteScheme(
    routeNumber: string,
    isForward: boolean
  ): Promise<RouteSchemeDTO> {
    return axios
      .get(
        `https://transfer.msplus.ge:2443/otp/routers/ttc/schemeStops?routeNumber=${routeNumber}&forward=${
          isForward ? 1 : 0
        }`
      )
      .then((response: AxiosResponse<RouteSchemeResponse>) => ({
        directionDescription: response.data.DirectionDescription,
        stops: response.data.Stops.map((stopResponse) => ({
          code: stopResponse.StopId,
          lat: stopResponse.Lat,
          lon: stopResponse.Lon,
          name: stopResponse.Name,
          type: stopResponse.Type,
          isVirtual: stopResponse.Virtual,
          routesIds: stopResponse.Routes,
          isForward: stopResponse.Forward,
          hasBoard: stopResponse.HasBoard,
        })),
      }));
  },
};

// Another found api calls
// TODO route stops
/*routeStops:
    "https://transfer.msplus.ge:2443/otp/routers/ttc/routeStops?routeNumber=101&forward=1",
        routeStopsIn: {
  Stops: [
    {
      Forward: false,
      HasBoard: false,
      Lat: 41.61093419581445,
      Lon: 44.90071856152469,
      Name: "Public School of Village Krtsanisi - [2949]",
      Routes: [],
      StopId: "2949",
      Type: "bus",
      Virtual: false,
    },
  ],
},*/
// TODO route stops with shape
/*route:
    "https://transfer.msplus.ge:2443/otp/routers/ttc/routeInfo?routeNumber=101&type=bus",
        routeDTO: {
  //TODO
},*/

export default {};
