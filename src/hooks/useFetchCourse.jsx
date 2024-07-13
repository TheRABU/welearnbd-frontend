import { useEffect, useState } from "react";
import axios from "axios";
const useFetchCourse = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("popularCourse.json")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setCategory(data);
    //     setLoading(false);
    //   });
    const initialRun = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/courses`
        );

        setCategory(response.data);
      } catch (error) {
        console.log(error.message);
        throw new error();
      } finally {
        setLoading(false);
      }
    };
    initialRun();
  }, []);

  return [category, loading];
};

export default useFetchCourse;
