import axios from "axios";

export const fetchEmployees = () => async (dispatch) => {
  try {
    const response = await axios.get("https://restful-api.dev/employee");
    dispatch({ type: "SET_EMPLOYEES", payload: response.data });
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
};
