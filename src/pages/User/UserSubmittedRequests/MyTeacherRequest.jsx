import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { axiosPublic } from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const MyTeacherReq = () => {
  const [myRequest, setMyRequest] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.email) return;

    const fetchUserRequests = async () => {
      try {
        const response = await axiosPublic.get(
          `/api/v1/teachers/my-request/${user?.email}`
        );
        console.log(response.data);
        if (response.data.payload.length > 0) {
          setMyRequest(response.data.payload[0]);
        } else {
          setMyRequest(null);
        }
      } catch (error) {
        toast.error(error.response?.data?.message || error.message);
      }
    };
    fetchUserRequests();
  }, [user?.email]);

  return (
    <>
      <div>MyTeacherRequest</div>

      {myRequest ? (
        <div className="card bg-primary text-primary-content w-96">
          <div className="card-body">
            <h2 className="card-title">Name: {myRequest.name}</h2>
            <p>Experience Level {myRequest.experience}</p>
            <p>Category: {myRequest.category}</p>
            <p>Status: {myRequest.status}</p>
            <h2>Created account at {myRequest.createdAt}</h2>
          </div>
        </div>
      ) : (
        <p>Loading or no request found...</p>
      )}
    </>
  );
};

export default MyTeacherReq;
