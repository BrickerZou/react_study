import { createStore } from "redux";
import reducer from "./countRedux"

const store = createStore(reducer)

export default store