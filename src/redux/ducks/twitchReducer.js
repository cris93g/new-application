import axios from "axios";

const GET_STREAMS = "GET_STREAMS";
const SEARCH_CHANNELS = "SEARCH_CHANNELS";

export function getStreams() {
	return {
		type: GET_STREAMS,
		payload: axios.get("/api/topstreams")
	};
}

export function searchChannel() {
	return {
		type: SEARCH_CHANNELS,
		payload: axios.get("/api/search")
	};
}

const initialState = {
	streams: []
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

		case "SEARCH_CHANNELS_FULFILLED":
			return {
				...state,
				streams: action.payload.data
			};
		case "SEARCH_CHANNELS_REJECTED":
			return {
				...state,
				error: action.payload
			};

		default:
			return state;
	}
}
