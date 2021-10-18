import axios from "axios";

export const get = async (url, params) => {
  const result = await axios.get(url, params);
  return result.data;
};
