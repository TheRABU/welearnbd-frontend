import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useFetchSingleCourse = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/courses/${id}`
        );
        setDetails(response.data);
      } catch (error) {
        console.log(error.message);
        throw new error();
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
  return [details, loading];
};

export default useFetchSingleCourse;
