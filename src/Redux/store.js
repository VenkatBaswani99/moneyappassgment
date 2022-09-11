import { legacy_createStore } from "redux";
import { ProductsReducer } from "./Products/reducer.js";

const store = legacy_createStore(ProductsReducer);
export {store}