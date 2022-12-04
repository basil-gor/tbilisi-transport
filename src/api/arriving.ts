import type { AxiosResponse } from "axios";
import axios from "axios";

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
        }))
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
      );
  },
  routeStops:
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
  },
  stopRoutes:
    "https://transfer.msplus.ge:2443/otp/routers/ttc/index/stops/1:3260/routes",
  routesOnStop: [
    {
      agencyName: "თბილისის სატრანსპორტო კომპანია",
      color: "11518A",
      id: "1:R13420",
      longName: "მ/ს დიდუბე - მ/ს სახელმწიფო უნივერსიტეტი",
      mode: "BUS",
      shortName: "89",
    },
  ],
  route:
    "https://transfer.msplus.ge:2443/otp/routers/ttc/routeInfo?routeNumber=101&type=bus",
  routeDTO: {
    //TODO
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
  routeScheme:
    "https://transfer.msplus.ge:2443/otp/routers/ttc/schemeStops?routeNumber=101&forward=1",
  routeSchemeDTO: {
    DirectionDescription:
      "Agrarian Univ. Dorm.>Ponichala Settlement>Rustavi Highway>Gulia Square>Baghdadi Str.>Isani M/S>Samgori M/S>Moscow Ave.>Javakheti Str.>Sukhishvili Str.>Takaishvili St r(Varketili IV M/D)",
    Stops: [
      {
        Forward: false,
        HasBoard: true,
        Lat: 41.61093419581445,
        Lon: 44.90071856152469,
        Name: "Public School of Village Krtsanisi - [2949]",
        Routes: ["101:1"],
        StopId: "2949",
        Type: "bus",
        Virtual: false,
      },
    ],
  },
};

export default {};
