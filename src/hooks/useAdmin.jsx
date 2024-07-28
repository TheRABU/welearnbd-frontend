import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosPrivate();
  const { data: isAdmin } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/api/v1/new-users/isUserAdmin/${user?.email}`
      );
      console.log("useAdmin response ", res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin];
};

export default useAdmin;
