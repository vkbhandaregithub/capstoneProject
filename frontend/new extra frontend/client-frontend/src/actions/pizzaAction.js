import axios from "axios";
export const getAllpizzas = () => (dispatch) => {
  dispatch({ type: "GET_PIZZAS-REQUEST" });
  try {
    const res = axios.get("/api/pizzas/getPizzas");
    console.log(res);
    dispatch({ type: "GET_PIZZAS-SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: err });
  }
};
