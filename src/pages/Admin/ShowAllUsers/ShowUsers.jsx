import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FcGraduationCap } from "react-icons/fc";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
// import { useEffect } from "react";

const ShowUsers = () => {
  const axiosSecure = useAxiosPrivate();

  const {
    data: users = [],
    refetch,
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

  const handleDeleteUser = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/api/v1/new-users/${id}`);
          if (res.data.payload) {
            refetch();
            toast.success("Course deleted successfully!");
          } else {
            toast.dismiss("Sorry could not delete user");
          }
        } catch (error) {
          console.log(error.message);
          toast.error("Failed to delete the course.");
        }
      }
    });
  };

  const handleMakeUserAdmin = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.patch(
            `/api/v1/new-users/makeAdmin/${id}`
          );
          if (res.data.payload) {
            toast.success("Made user an admin!");
            refetch();
          } else {
            toast.dismiss("Sorry could not make user admin");
          }
        } catch (error) {
          console.log(error.message);
          toast.error("Failed to delete the course.");
        }
      }
    });
  };

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
              <th>Serial No.</th>
              <th>Name</th>
              <th>Email</th>
              <td>Created At</td>
              <td>User Role</td>
              <td>Delete User</td>
              <td>Make Admin</td>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((eachUser, idx) => (
              <tr key={eachUser._id}>
                <td>{idx + 1}</td>
                <td>{eachUser.name}</td>
                <td>{eachUser.email}</td>
                <td>{new Date(eachUser.createdAt).toLocaleDateString()}</td>
                <td>{eachUser.role}</td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(eachUser._id)}
                    className="btn bg-red-600 text-white hover:bg-red-500"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleMakeUserAdmin(eachUser._id)}
                    className="btn bg-white hover:bg-gray-300"
                  >
                    <FcGraduationCap />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShowUsers;
