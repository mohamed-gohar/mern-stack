import {
  ADD_ITEM,
  DELETE_ITEM,
  GET_ITEMS,
  LOADING_ITEMS,
} from "../actions/types";

const initState = {
  items: [],
  isLoading: false,
  success: "",
};

export default function item(state = initState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, items: action.payload, isLoading: false, success: "" };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
        success: "",
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.id),
        success: action.payload,
      };
    case LOADING_ITEMS:
      return {
        ...state,
        isLoading: true,
        success: "",
      };
    default:
      return state;
  }
}
