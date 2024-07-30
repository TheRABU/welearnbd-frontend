import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { axiosPublic } from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { FcApproval } from "react-icons/fc";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { Link } from "react-router-dom";

const MyTeacherReq = () => {
  const [myRequest, setMyRequest] = useState(null);
  const { user } = useAuth();
  const axiosSecure = useAxiosPrivate();
  // const categoryFirstItem = myRequest.category.split(",");
  useEffect(() => {
    if (!user?.email) return;

    const fetchUserRequests = async () => {
      try {
        const response = await axiosSecure.get(
          `/api/v1/teachers/my-request/${user?.email}`
        );

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
  }, [axiosSecure, user?.email]);

  return (
    <>
      <div className="pt-10">
        <h2 className="text-3xl text-neutral-700 text-center">
          Your request information of becoming a Teacher
        </h2>
      </div>

      <div className=" mx-8 lg:mx-28 py-10 h-full">
        {myRequest ? (
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Requested At</th>
                  <th>Category</th>
                  <th>Experience Level</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{myRequest.name}</td>
                  <td> {new Date(myRequest.createdAt).toLocaleDateString()}</td>
                  <td>{myRequest.category}</td>
                  <td>{myRequest.experience}</td>
                  {myRequest.status === "approved" ? (
                    <td>
                      Approved <FcApproval />
                    </td>
                  ) : (
                    <td>{myRequest.status}</td>
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <>
            <p>
              No request found from your Email try applying for becoming a
              teacher first!...{" "}
              <Link to="/joinTeacher">
                <span>Click Here</span>
              </Link>
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default MyTeacherReq;
