import { useEffect } from "react";
import { useState } from "react";
import { axiosInstance } from "../utils";
import { combineSlices, findNonSerializableValue } from "@reduxjs/toolkit";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const req = await axiosInstance(url);
        setData(req);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isPending, error };
}
