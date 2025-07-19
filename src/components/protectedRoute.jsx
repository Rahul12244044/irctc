import { useAuth } from "../context/auth.context.jsx";
import {useLocation,Navigate,useNavigate} from "react-router-dom";
import {Login} from "../components/login.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";

export const ProtectedRoute = ({ children }) => {
  const location=useLocation();
  const { currentUser } = useAuth();
  console.log("In ProtectedRouter: ");
  console.log(currentUser);
  const navigate=useNavigate();

  if (!currentUser) {
     return <Navigate to="/login"/>;
    
  }
    

  return children;
};
