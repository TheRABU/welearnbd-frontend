import { useQuery } from "@tanstack/react-query";

import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useCart = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosPrivate();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/v1/cart?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
