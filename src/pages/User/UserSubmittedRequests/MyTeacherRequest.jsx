import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { axiosPublic } from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const MyTeacherReq = () => {
  const [myRequest, setMyRequest] = useState(null);
  const { user } = useAuth();
  // const categoryFirstItem = myRequest.category.split(",");
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
          console.log(response.data.payload);
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

      <div className=" mx-8 lg:mx-28 py-10 h-full">
        {myRequest ? (
          // <div className="card bg-primary text-primary-content w-96">
          //   <div className="card-body">
          //     <h2 className="card-title">Name: {myRequest.name}</h2>
          //     <p>Experience Level {myRequest.experience}</p>
          //     <p>Category: {myRequest.category}</p>
          //     <p>Status: {myRequest.status}</p>
          //     <h2>Created account at {myRequest.createdAt}</h2>
          //   </div>

          <div className="w-full h-60 max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-gray-800 dark:text-gray-400">
                Details of your teaching request
              </span>
              <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
                Requested at{" "}
                {new Date(myRequest.createdAt).toLocaleDateString()}
              </span>
            </div>

            <div>
              <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                Name: {myRequest.name}
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Experience level: {myRequest.experience}
              </p>
              <p>Category: {myRequest.category}</p>
            </div>

            <div>
              <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                <span className="font-semibold">
                  Status: {myRequest.status}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading or no request found...</p>
        )}
      </div>
    </>
  );
};

export default MyTeacherReq;
