import { useEffect, useState } from "react";

const useFetchCourse = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("popularCourse.json")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
        setLoading(false);
      });
  }, []);

  return [category, loading];
};

export default useFetchCourse;
