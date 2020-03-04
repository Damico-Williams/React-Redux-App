import { FETCHING_ANIME_START, FETCHING_ANIME_SUCCESS} from "../actions";

const initialState = {
    anime: [],
    nowLoading: false,
    error: ""
};

export const theReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_ANIME_START:
            return {
                ...state,
                nowLoading: true,
                error: ""
            };
        case FETCHING_ANIME_SUCCESS:
            return {
                ...state,
                nowLoading: false,
                anime: action.payload
            };
            default:
                return state;
    }
}