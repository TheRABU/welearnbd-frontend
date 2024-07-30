import useCart from "../../../hooks/useCartHook";
import { FaTrashAlt } from "react-icons/fa";
import { TfiMoney } from "react-icons/tfi";
import Swal from "sweetalert2";

import axios from "axios";
import { Link } from "react-router-dom";
const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDeleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/api/v1/cart/${id}`)
          .then((res) => {
            if (res.data) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }

            refetch();
          });
      }
    });
  };

  return (
    <>
      {totalPrice === 0 ? (
        <div className="pt-20 flex flex-col items-center justify-center min-h-screen">
          <div>
            <h2 className="text-center text-4xl font-semibold text-neutral-700">
              Your Cart is empty.
            </h2>
            <p className="text-xl text-center">Add some items first</p>
          </div>
          <div className="w-full flex justify-center">
            <img
              className="object-cover max-w-full h-auto"
              src="https://img.freepik.com/free-vector/supermarket-shopping-cart-concept-illustration_114360-22408.jpg?t=st=1722005041~exp=1722008641~hmac=f0271b054fad3b727b9e45ff6d4b425e633f93e38ea88907dd93d011b1062afe&w=740"
              alt="Shopping cart illustration"
            />
          </div>
        </div>
      ) : (
        <div className="bg-[#FFFFFF] p-5 lg:p-12">
          <div className="parent-wrapper pt-20 border-2 rounded-xl p-5 border-neutral-700">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Item No.</th>
                    <th>Course Name</th>
                    <th>Price</th>
                    <th>Course Level</th>
                    <th className="font-semibold text-neutral-900">
                      Total Price {totalPrice}
                    </th>
                    <th>
                      {totalPrice === 0 ? (
                        <button
                          className="btn bg-teal-500 text-black gap-y-3"
                          disabled
                        >
                          <TfiMoney className="text-xl" />
                          Pay Now
                        </button>
                      ) : (
                        <Link to="/makePayment">
                          <button className="btn bg-teal-500 text-black gap-y-2">
                            <TfiMoney className="text-xl" />
                            Pay Now
                          </button>
                        </Link>
                      )}
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((eachItem, idx) => (
                    <tr key={eachItem._id}>
                      <td>{idx}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={eachItem.courseImage}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">
                              {eachItem.courseName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm font-semibold">
                        $ {eachItem.price}
                      </td>
                      <td>{eachItem.level}</td>
                      <td className="font-semibold">$ {totalPrice}</td>
                      <td>
                        <button
                          onClick={() => handleDeleteItem(eachItem._id)}
                          className="btn bg-red-600 text-white gap-y-2"
                        >
                          <FaTrashAlt />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyCart;
