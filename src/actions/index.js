import axios from "axios";

export const FETCHING_ANIME_START = 'FETCHING_ANIME_START';
export const FETCHING_ANIME_SUCCESS = 'FETCHING_ANIME_SUCCESS';
export const FETCHING_ANIME_FAILED = 'FETCHING_ANIME_FAILED';

export const getAnime = () => dispatch => {
    dispatch({type: FETCHING_ANIME_START});

    axios
      .get("https://api.jikan.moe/v3/search/anime?q=my hero academia&limit=10")
      .then(result => {
          console.log(result);
          dispatch({ type: FETCHING_ANIME_SUCCESS, payload: result.data.results})
      })
      .catch(err => {
          console.log(err);
          dispatch({ type: FETCHING_ANIME_FAILED, payload: `${err.response.message} ${err.response.code}`})
      })
      
};