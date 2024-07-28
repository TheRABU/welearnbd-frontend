import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate";
import useAuth from "./useAuth";
import { useEffect, useState } from "react";
import axios from "axios";

// const useAdmin = () => {
//   const { user, loading } = useAuth();
//   const axiosSecure = useAxiosPrivate();
//   const {
//     data: isAdmin,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: [user?.email, "isAdmin"],

//     queryFn: async () => {
//       if (!user?.email) {
//         throw new Error("User email is undefined");
//       }
//       console.log("Requesting admin status for:", user.email);
//       console.log("asking or checking is admin", user);
//       const res = await axiosSecure.get(
//         `/api/v1/new-users/isUserAdmin/${user.email}`
//       );
//       console.log("useAdmin response:", res.data);
//       return res.data.admin;
//     },
//     enabled: !!user?.email && !loading,
//     staleTime: 5 * 60 * 1000,
//   });
//   if (error) {
//     console.error("Error fetching admin status:", error);
//   }
//   return [isAdmin, isLoading, error];
// };

const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const axiosSecure = useAxiosPrivate();

  useEffect(() => {
    const fetchIsAdmin = async () => {
      if (!user?.email) return;

      try {
        const res = await axios.get(
          `/api/v1/new-users/isUserAdmin/${user.email}`
        );
        console.log("Fetched if user is admin:", res.data);
        setIsAdmin(res.data.admin);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchIsAdmin();
  }, [user, loading, axiosSecure]);

  return { isAdmin, loading, error };
};

export default useAdmin;
