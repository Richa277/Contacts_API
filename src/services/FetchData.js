import axios from "axios";
export const fetchData = (url) => {

   axios.get(url).then((res) => {
    console.log(res.data,"sd,sdvls,l")
    return res?.data;
  })
};
