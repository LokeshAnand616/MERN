import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (baseUrl) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPaginatedData = async (page, limit) => {
    setLoading(true);
    console.log(`Fetching Page: ${page}, Limit: ${limit}`);

    try {
      const response = await axios.get(baseUrl, {
        params: {
          _page: page,
          _limit: limit,
        },
      });

      console.log("API Response:", response.data);
      console.log("Headers:", response.headers);

      setData(response.data);

      const totalRecords = parseInt(response.headers["x-total-count"], 10) || 0;
      setTotalPages(Math.ceil(totalRecords / limit));
    } catch (err) {
      console.error("API Error:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchPaginatedData, totalPages };
};

export default useFetch;
