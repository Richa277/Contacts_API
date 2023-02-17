import axios from "axios";
export const fetchData = (url, setData) => {
  axios.get(url).then((res) => setData(res.data));
};
