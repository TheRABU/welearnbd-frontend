import useCart from "../../../hooks/useCartHook";
import { FaTrashAlt } from "react-icons/fa";
import { TfiMoney } from "react-icons/tfi";
import Swal from "sweetalert2";

import axios from "axios";
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
        <div className="parent-wrapper pt-20">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  {/* <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th> */}
                  <th>Item No.</th>
                  <th>Course Name</th>
                  <th>Price</th>
                  <th>Course Level</th>
                  <th className="font-semibold">Total Price {totalPrice}</th>
                  <th>
                    {totalPrice === 0 ? (
                      <button
                        className="btn bg-teal-500 text-black gap-y-6 "
                        disabled
                      >
                        <TfiMoney />
                        Pay Now
                      </button>
                    ) : (
                      <button className="btn bg-teal-500 text-black gap-y-6">
                        <TfiMoney />
                        Pay Now
                      </button>
                    )}
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {cart.map((eachItem, idx) => (
                  <tr key={eachItem._id}>
                    {/* <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th> */}
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
                          <div className="font-bold">{eachItem.courseName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-sm font-semibold">{eachItem.price}</td>
                    <td>{eachItem.level}</td>
                    <td className="font-semibold">{totalPrice}</td>
                    <td>
                      <button
                        onClick={() => handleDeleteItem(eachItem._id)}
                        className="btn bg-red-600 text-white gap-y-8"
                      >
                        <FaTrashAlt />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {/* row 2 */}
                {/* <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Brice Swyre</div>
                      <div className="text-sm opacity-50">China</div>
                    </div>
                  </div>
                </td>
                <td>
                  Carroll Group
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Tax Accountant
                  </span>
                </td>
                <td>Red</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr> */}
                {/* row 3 */}
                {/* <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Marjy Ferencz</div>
                      <div className="text-sm opacity-50">Russia</div>
                    </div>
                  </div>
                </td>
                <td>
                  Rowe-Schoen
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Office Assistant I
                  </span>
                </td>
                <td>Crimson</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr> */}
                {/* row 4 */}
                {/* <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Yancy Tear</div>
                      <div className="text-sm opacity-50">Brazil</div>
                    </div>
                  </div>
                </td>
                <td>
                  Wyman-Ledner
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Community Outreach Specialist
                  </span>
                </td>
                <td>Indigo</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default MyCart;
