import axios from "axios";

const GET_TRENDING = "GET_TRENDING";

export function getTrending() {
  return {
    type: GET_TRENDING,
    payload: axios.get("/api/trending")
  };
}

const initialState = {
  trending: {}
};

export default function youtubeReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_TRENDING_FULFILLED":
      return {
        ...state,
        trending: action.payload.data
      };
    case "GET_TRENDING_REJECTED":
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}
