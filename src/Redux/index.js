import { colorReducer, logoReducer, showFooterReducer } from "./reducer";
import { presetReducer } from "./reducer";
import { continueReducer } from "./reducer";
import { combineReducers } from "redux";
import { showHeaderReducer } from "./reducer"
import { leftReducer } from "./reducer"
import { rightReducer } from "./reducer"
import { tabReducer } from "./reducer"
import { menuReducer } from "./reducer"

export const rootReducer = combineReducers({
    logoReducer,
    presetReducer,
    continueReducer,
    colorReducer,
    showHeaderReducer,
    showFooterReducer,
    leftReducer,
    rightReducer,
    tabReducer,
    menuReducer
})