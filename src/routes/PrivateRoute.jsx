import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";
import LoadingSpinner from "../components/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();

  if (user) return children;
  if (loading) {
    return <LoadingSpinner />;
  }
  return <Navigate to="/login" state={location.pathname} replace="true" />;
};
PrivateRoute.propTypes = {
  children: PropTypes.element,
};
export default PrivateRoute;
