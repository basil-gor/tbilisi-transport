import type { AxiosResponse } from "axios";
import axios from "axios";

interface ArrivingInfo {
  RouteNumber: string;
  DestinationStopName: string;
  ArrivalTime: number;
}

export interface RouteInfo {
  Color: string;
  Id: string;
  LongName: string;
  RouteNumber: string;
  RouteStops: [];
  StopA: string;
  StopB: string;
  Type: "bus" | "metro";
}

type ArrivalTimeResponse = {
  ArrivalTime: ArrivingInfo[];
};

type RouteInfoResponse = {
  Route: RouteInfo[];
};

export interface StopResponse {
  code: string;
  id: string;
  lat: number;
  lon: number;
  name: string;
}

export const ArrivingApi = {
  getArrivalTime(): Promise<ArrivingInfo[]> {
    return axios
      .get(
        // TODO use parameters
        "https://transfer.msplus.ge:2443/otp/routers/ttc/stopArrivalTimes?stopId=3990"
      )
      .then(
        (response: AxiosResponse<ArrivalTimeResponse>) =>
          response.data.ArrivalTime
      );
  },
  getAllRoutes(): Promise<RouteInfo[]> {
    return axios
      .get(
        // TODO use parameters
        "https://transfer.msplus.ge:2443/otp/routers/ttc/routes"
      )
      .then(
        (response: AxiosResponse<RouteInfoResponse>) => response.data.Route
      );
  },
  getAllStops(): Promise<StopResponse[]> {
    return axios
      .get("https://transfer.msplus.ge:2443/otp/routers/ttc/index/stops")
      .then((response: AxiosResponse<StopResponse[]>) => response.data);
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
