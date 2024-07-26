import axios from "axios";
// import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const MyPaymentHistoryPage = () => {
  //   const [history, setHistory] = useState([]);
  const { user } = useAuth();
  //   useEffect(() => {
  //     const fetchMyHistories = async () => {
  //       try {
  //         const res = await axios.get(
  //           `${import.meta.env.VITE_API_URL}/api/v1/payment/my-history/${
  //             user?.email
  //           }`
  //         );
  //         setHistory(res.data.payload);
  //         console.log(res.data.payload);
  //       } catch (error) {
  //         console.log(error.message);
  //         throw new error();
  //       }
  //     };
  //     fetchMyHistories();
  //   }, [user?.email]);

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/payment/my-history/${
          user?.email
        }`
      );
      return res.data;
    },
  });

  return (
    <>
      <div className="pt-20">
        {payments.length > 0 ? (
          <h2 className="text-center text-3xl ">
            My Payment history
            <div className="badge badge-accent badge-outline badge-lg">
              {payments.length}
            </div>
          </h2>
        ) : (
          <h2 className="text-center text-3xl ">My Payment history</h2>
        )}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Course Name</th>
                <th>Transaction Id</th>
                <th>Purchased At</th>
                <th>Status</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {payments.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>{item.courseName}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      {/* <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div> */}

                      <div className="font-bold">{item.transactionId}</div>
                    </div>
                  </td>

                  <td>{item.date}</td>
                  <td>{item.status}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyPaymentHistoryPage;
