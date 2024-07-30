import useTeacher from "../../../hooks/useTeacher";

const MyNewTeachReq = () => {
  const [isTeacher] = useTeacher();
  return (
    <>
      <div className="pt-10">
        <h2 className="text-3xl text-neutral-700 text-center">
          Your request information of becoming a Teacher
        </h2>
      </div>
    </>
  );
};

export default MyNewTeachReq;
