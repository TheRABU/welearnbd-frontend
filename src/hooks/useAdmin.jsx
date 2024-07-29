import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate";
import useAuth from "./useAuth";

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
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosPrivate();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/api/v1/new-users/isUserAdmin/${user?.email}`
      );
      console.log("Response of useAdmin hoook", res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
