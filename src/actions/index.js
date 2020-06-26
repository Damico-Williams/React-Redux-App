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



export const FETCHING_POKEMON_START = 'FETCHING_POKEMON_START';
export const FETCHING_POKEMON_SUCCESS = 'FETCHING_POKEMON_SUCCESS';
export const FETCHING_POKEMON_FAILED = 'FETCHING_POKEMON_FAILED';

export const getPokemon = () => dispatch => {
    dispatch({type: FETCHING_POKEMON_START});

    axios
      .get("https://api.pokemontcg.io/v1/cards?name=arcanine")
      .then(res => {
          console.log(res);
          dispatch({ type: FETCHING_POKEMON_SUCCESS, payload: res.data.cards})
      })
      .catch(err => {
          console.log(err);
          dispatch({ type: FETCHING_POKEMON_FAILED, payload: `${err.response.message} ${err.response.code}`})
      })
      
};