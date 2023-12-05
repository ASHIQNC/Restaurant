import { BASE_URL } from "./base_url";
import { commonStructure } from "./commonStructure";

// login
export const adminLogin = async (body) => {
  return await commonStructure("POST", `${BASE_URL}/admin/login`, body);
};

// login
export const adminSignUp = async (body) => {
  return await commonStructure("POST", `${BASE_URL}/admin/register`, body);
};

// create data

//
export const addFoodData = async (body, header) => {
  return await commonStructure(
    "POST",
    `${BASE_URL}/admin/uploadfood`,
    body,
    header
  );
};

//get food
export const getFoodData = async () => {
  console.log("GET", `${BASE_URL}/admin/getallfood`, {});
  return await commonStructure("GET", `${BASE_URL}/admin/getallfood`, {});
};

//get single food
export const getsingleFoodDetails = async (id) => {
  return await commonStructure("GET", `${BASE_URL}/admin/getonefood/${id}`, {});
};
