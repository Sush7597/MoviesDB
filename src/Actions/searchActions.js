import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING} from './types'
import axios from 'axios'
import {apiKey} from '../keys.js'

export const searchMovie = text => dispatch => {

        dispatch({
            type : SEARCH_MOVIE,
            payload : text
        })

}

export const fetchMovies = text => dispatch => {
    axios.get(`http://www.omdbapi.com/?s=${text}&apikey=${apiKey}`)
        .then(Response => dispatch({
            type : FETCH_MOVIES,
            payload : Response.data.Search
        }))
        .catch(err =>console.log(err))
}

export const fetchMovie = id => dispatch => {
    axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)
    .then(Response => dispatch({
        type : FETCH_MOVIE,
        payload : Response.data
    }))
    .catch(err =>console.log(err))
}

export const setLoading = () => dispatch => {
   
    dispatch({
        type : LOADING
    })
}