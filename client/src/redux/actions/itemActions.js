import axios from "axios";
import { ADD_ITEM, DELETE_ITEM, GET_ITEMS, LOADING_ITEMS } from "./types";

export const getItems = () => (dispatch) => {
  dispatch(loadingItems());
  axios
    .get("/api/items")
    .then((res) => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      });
    })
    .catch((err) => console.error(err));
};

export const addItem = (item) => (dispatch) => {
  axios
    .post("/api/items", item)
    .then((res) => {
      dispatch({
        type: ADD_ITEM,
        payload: res.data,
      });
    })
    .catch((err) => console.error(err));
};

export const deleteItem = (id) => (dispatch) => {
  axios
    .delete("/api/items/" + id)
    .then((res) => {
      dispatch({
        type: DELETE_ITEM,
        id,
        payload: res.data.success,
      });
    })
    .catch((err) => console.error(err));
};

export const loadingItems = () => {
  return {
    type: LOADING_ITEMS,
  };
};
