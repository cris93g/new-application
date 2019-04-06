import axios from "axios";

const GET_STREAMS = "GET_STREAMS";

export function getStreams() {
  return {
    type: GET_STREAMS,
    payload: axios.get("/api/topstreams")
  };
}

const initialState = {
  streams: {}
};

export default function twitchReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_STREAMS_FULFILLED":
      return {
        ...state,
        streams: action.payload.data
      };
    case "GET_STREAMS_REJECTED":
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}
