import { useEffect, useState } from "react";
import axios from "axios";

function useMeal(str) {
  const [dataMeal, setDataMeal] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data: responseData2 } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + str
      );

      setDataMeal(responseData2);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { dataMeal, loading, error };
}

export default useMeal;
