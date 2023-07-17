import { useState, useEffect } from "react";


export function FetchData(url) {
  const [data, setData] = useState();

  useEffect(() => {

    const getData = () => {
        fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json.data))
        .catch((error) => console.log('erreur de fetch :', error));
}
    getData();
  }, [url]);

  return { data };
}