import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { useEffect } from "react";

const ShowUsers = () => {
  const axiosSecure = useAxiosPrivate();

  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/v1/new-users/getAll");
      return res.data.payload;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  //   useEffect(() => {
  //     fetch(`${import.meta.env.VITE_API_URL}/api/v1/new-users/getAll`)
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, []);

  return (
    <>
      <div className="pt-20">
        <h2 className="text-4xl text-center">
          All users from Database {users.length}
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Id</th>
              <td>Created At</td>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((eachUser) => (
              <tr key={eachUser._id}>
                <td>{eachUser.name}</td>
                <td>{eachUser.email}</td>
                <td>{eachUser._id}</td>
                <td>{new Date(eachUser.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShowUsers;
