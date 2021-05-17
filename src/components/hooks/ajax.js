import axios from "axios";
import { useState } from "react";

const useAjax = (url) => {
  const [list, setList] = useState([]);

  const handleItems = async (method, url, item) => {
    const result = await axios({
      method: method,
      url: url,
      mode: "cors",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      data: item,
    });
    return result.data;
  };
  const postItem = (item) => {
    handleItems("post", url, item);
  };
  const putItem = (item) => {
    item.complete = !item.complete;
    let extendedUrl = `${url}/${item._id}`;
    handleItems("put", extendedUrl, item);
  };
  const getItems = () => {
    const getData = async () => {
      let data = await handleItems("get", url);
      setList(data.results);
    };
    getData();
  };
  const deleteItem = (item) => {
    let extendedUrl = `${url}/${item._id}`;
    handleItems("delete", extendedUrl, item);
  };

  return [list, postItem, putItem, getItems, deleteItem];
};
export default useAjax;
