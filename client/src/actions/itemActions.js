import { ADD_ITEM, DELETE_ITEM, GET_ITEMS, ITEMS_LOADING } from "./types";
import axios from "axios";

export const getItems = () => async (dispatch) => {
  dispatch({ type: ITEMS_LOADING });
  const response = await axios.get("/api/items");
  dispatch({ type: GET_ITEMS, payload: { data: response.data } });
};

export const addItem = (name) => async (dispatch) => {
  const response = await axios.post("/api/items", { name });
  dispatch({ type: ADD_ITEM, payload: { data: response.data } });
};

export const deleteItem = (id) => async (dispatch) => {
  const response = await axios.delete(`/api/items/${id}`);
  dispatch({ type: DELETE_ITEM, payload: { data: response.data } });
};

export const setItemsLoading = () => (dispatch) => {
  dispatch({ type: ITEMS_LOADING });
};
