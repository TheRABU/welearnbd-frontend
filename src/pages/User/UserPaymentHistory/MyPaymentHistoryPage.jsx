import axios from "axios";
import { useEffect, useState } from "react";
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
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <>
      <div className="pt-20">
        <h2 className="text-center text-3xl ">
          My Payment history {payments.length}
        </h2>
      </div>
    </>
  );
};

export default MyPaymentHistoryPage;
