import axios from "axios";
import { useEffect, useState } from "react";
import { axiosPublic } from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const ApproveReq = () => {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    const getRequests = async () => {
      try {
        const res = await axiosPublic.get("/api/v1/teachers/requests");
        const filterByStatus = res.data.payload.filter(
          (item) => item.status === "pending"
        );

        setRequests(filterByStatus);
      } catch (error) {
        console.log(error.message);
        throw new error();
      }
    };
    getRequests();
  }, []);

  const approveRequest = async (requestId) => {
    try {
      console.log(requestId);
      const response = await axios.put(
        `${
          import.meta.env.VITE_API_URL
        }/api/v1/teachers/requests/${requestId}/approve`
      );
      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === requestId
            ? { ...request, status: "approved" }
            : request
        )
      );
      Swal.fire({
        title: "Good job!",
        text: "Request Approved",
        icon: "success",
      });

      console.log(response.data.message);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="h-auto py-10 border-2 rounded-xl border-gray-600 md:my-8 lg:my-20 mx-2 md:mx-14 lg:mx-36">
        <h2 className="text-4xl text-center text-neutral-700">
          Teacher requests
        </h2>
        <div className="px-3 md:px-10 lg:px-28 2xl:px-64 h-full py-0 lg:py-16 flex-row items-center ">
          {requests.length > 0 ? (
            requests.map((item, idx) => (
              <div
                key={idx}
                className="card card-side bg-[#FFFBF5] shadow-2xl my-10 border-b-gray-700 border-b-8"
              >
                {/* <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                    alt="Teacher"
                  />
                </figure> */}
                <div className="card-body">
                  <h2 className="card-title">Name: {item.name}</h2>
                  <p>Email: {item.email}</p>
                  <p>
                    Status:{" "}
                    {item.status === "approved" ? (
                      <span className="text-teal-600 font-semibold">
                        {item.status}
                      </span>
                    ) : (
                      <span className="text-red-600 font-semibold">
                        {item.status}
                      </span>
                    )}
                  </p>
                  <p>Category: {item.category}</p>
                  <p>Experience: {item.experience}</p>
                  <div className="card-actions justify-end">
                    <div className="card-actions justify-end">
                      {item.status === "approved" ? (
                        <button
                          className="btn bg-teal-300"
                          disabled
                          onClick={() => approveRequest(item._id)}
                        >
                          {" "}
                          <span className="text-black">Approved</span>{" "}
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary"
                          onClick={() => approveRequest(item._id)}
                        >
                          <span className="text-white">Approve</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No New requests available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ApproveReq;
