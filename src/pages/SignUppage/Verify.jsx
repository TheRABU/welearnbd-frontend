import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const VerifyAccount = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/users/verify/${token}`
        );

        if (response.data.success) {
          toast.success(response.data.message);
          navigate("/");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Error verifying account");
        console.error("Error verifying account:", error);
      }
    };

    verifyAccount();
  }, [token, navigate]);

  return (
    <div>
      <h2>Verifying your account...</h2>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default VerifyAccount;
