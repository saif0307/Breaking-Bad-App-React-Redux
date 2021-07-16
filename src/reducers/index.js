import { combineReducers } from "redux";
import charactersReducer from "./charactersReducer";
import characterReducer from "./characterReducer";
import episodesReducer from './episodesReducer'
import searchReducer from "./searchReducer";
import episodeReducer from "./episodeReducer";
import quotesReducer from "./quotesReducer";
import quoteReducer from "./QuoteReducer";
import deathsReducer from "./deathsReducer";
export default combineReducers({
    characters: charactersReducer,
    character : characterReducer,
    episodes: episodesReducer,
    episode:episodeReducer,
    quotes: quotesReducer,
    quote: quoteReducer,
    death: deathsReducer,
    searchValue: searchReducer
})