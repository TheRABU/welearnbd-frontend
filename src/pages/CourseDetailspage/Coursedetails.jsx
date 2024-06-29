import useFetchSingleCourse from "../../hooks/useFetchSingleCourse";

const Coursedetails = () => {
  const [details] = useFetchSingleCourse();

  return (
    <>
      <div>
        <h2>Details of course </h2>
        {details.courseName}
      </div>
    </>
  );
};

export default Coursedetails;
