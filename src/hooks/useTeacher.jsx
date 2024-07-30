import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate";
import useAuth from "./useAuth";

const useTeacher = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosPrivate();
  const { data: isTeacher, isPending: isTeacherPending } = useQuery({
    queryKey: [user?.email, "isTeacher"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/api/v1/teachers/checkTeacher/${user?.email}`
      );
      return res.data?.teacher;
    },
  });
  return [isTeacher, isTeacherPending];
};

export default useTeacher;
