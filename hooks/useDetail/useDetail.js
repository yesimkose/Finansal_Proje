import { useEffect, useState } from "react";
import axios from "axios";

function useDetail(str) {
  const [dataDetail, setDataDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data: responseData2 } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + str
      );

      setDataDetail(responseData2);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { dataDetail, loading, error };
}

export default useDetail;
