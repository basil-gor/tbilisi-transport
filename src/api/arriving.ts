import type { AxiosResponse } from "axios";
import axios from "axios";

interface ArrivingInfo {
  RouteNumber: string;
  DestinationStopName: string;
  ArrivalTime: number;
}

type ArrivalTimeResponse = {
  ArrivalTime: ArrivingInfo[];
};

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
};

export default {};
