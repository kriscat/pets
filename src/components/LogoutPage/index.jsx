import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();
  signOut(auth);
  navigate("/");
};

export default LogoutPage;
