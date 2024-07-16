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
        console.log(filterByStatus);
        setRequests(res.data.payload);
        console.log(res.data);
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
      //   setRequests((prevRequests) =>
      //     prevRequests.map((request) =>
      //       request._id === requestId
      //         ? { ...request, status: "approved" }
      //         : request
      //     )

      //   );
      //   const updatedRequests = requests.filter((bal) => bal._id !== requestId);
      //   setRequests(updatedRequests);
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
      <div>
        <h2>Teacher requests for admin</h2>
        <div>
          {requests.length > 0 ? (
            requests.map((item, idx) => (
              <div key={idx} className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                    alt="Teacher"
                  />
                </figure>
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
                      <button
                        className="btn btn-primary"
                        onClick={() => approveRequest(item._id)}
                      >
                        {item.status === "approved" ? (
                          <span>Approved</span>
                        ) : (
                          <span>Approve</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No requests available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ApproveReq;
