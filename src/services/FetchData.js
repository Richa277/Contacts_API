import axios from "axios";
export const fetchData = (url) => {
  let result = axios.get(url).then((res) => {
    return res?.data;
  });
  return result;
};
