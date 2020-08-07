import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
import flightsReducer from "./board/flights.reducer";
import searchReducer from './search/search.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    flights: flightsReducer,
    filterText: searchReducer,
})

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
