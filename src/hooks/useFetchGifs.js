import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGIfs";

export const useFetchGifs = (categories) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(categories).then((imgs) => {
      setTimeout(() => {
        setstate({
          data: imgs,
          loading: false,
        });
      }, 3000);
    });
  }, [categories]);

  return state;
};
