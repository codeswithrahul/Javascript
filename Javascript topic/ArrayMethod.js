
import axios from "axios";
import { toast } from "react-toastify";

const apiUrl = `https://api.cadabamsdiagnostics.com`;
// const apiUrl = `http://localhost:9009`;
// const apiUrl = `https://03b3-2406-7400-81-cbf6-49e3-c303-b916-1bf3.ngrok-free.app`;
const accessToken = sessionStorage.getItem("access");
const authToken = accessToken;

const apiCall = async (method, endpoint, data, config = {}) => {
  const url = `${apiUrl}/${endpoint}`;

  const defaultConfig = {
    headers: {
      Authorization: `Bearer ${authToken}`,
      "ngrok-skip-browser-warning": "69420",
    },
  };

  // Check if data contains files
  const isFormData = data instanceof FormData;

  // Set the content type based on whether data is FormData or not
  const contentType = isFormData ? "multipart/form-data" : "application/json";

  const headers = {
    "Content-Type": contentType,
    ...defaultConfig.headers,
    ...(config.headers || {}),
  };

  try {
    const response = await axios({
      method,
      url,
      data: data || {}, // Ensure data is not undefined
      headers,
    });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      const errorDetails = {
        status: response.status,
        message: response.data.message || "Something went wrong",
      };
      throw new Error(JSON.stringify(errorDetails));
    }
  } catch (error) {
    if (
      error?.response?.data?.errorMessage === "Unauthorized access" ||
      error?.response?.data?.errorMessage === "Internal Server Error"
    ) {
      toast.error(error?.response?.data?.errorMessage);
    }

    throw error;
  }
};

export default apiCall;

//  splice method modify the existing array
// slice return a new array

// Reduce method
//  if we dont give dependency or acc it will neglect [0] index but if we put any value it will iterate all the elm.
//  if we dont give any dependency then it will print in acc -- first index [0]
// const data = [1, 2, 3];

// const accData = data.reduce((acc, data) => {
///   console.log(acc); 8 ,12 ,12
//   return 12;
// }, 8);

// if we dont give any dependency then it will print in acc -- first index [0]
// const data = [1852, 2, 3];
// const accData = data.reduce((acc, data) => {
//  console.log(acc); 188
// });

const data = [1, 2, 3];
const accData = data.reduce((acc, currElm) => {
  return acc + currElm;
}, 0);

// console.log(accData, "accData"); output is 5

// acc + currELm
// 0 + 1 = 1  now acc values is 1 and it will be keep updating
// 1 + 2 = 2
// 2 + 3 = 5 so now it will return 5
