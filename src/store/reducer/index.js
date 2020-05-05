import {
    combineReducers
} from "redux";
import lagou from "./lagou"
import one from "./one"
import two from "./two"
import three from "./three"
import four from "./four"
export default combineReducers({
    lagou,
    two,
    one,
    three,
    four
})