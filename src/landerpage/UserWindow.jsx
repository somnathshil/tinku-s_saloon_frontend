import { useContext, useNavigate } from "react";
import GeneralContext from "./GeneralContext";
import { Link } from "react-router-dom";
import "./UserWindow.css";

function UserWindow() {
  const { closeUserWindow, handleLogout, user, isLoggedIn, handleLogin } =
    useContext(GeneralContext);

  const handleCloseButton = () => {
    closeUserWindow();
  };
  const handleLogoutButton = () => {
    handleLogout();
    alert("You are Logged Out Successfully!!");
  };

  return (
    <>
      <div className="main-cont-user-window">
      <button onClick={handleCloseButton} className="close-btn"><i class="fa-solid fa-xmark"></i></button>
      <h3 className="user-window-heading">My Profile</h3>
        <ul>
          <li className="li-hover"><i class="fa-solid fa-user"></i> {user ? user.username : "Guest"}</li>

          {isLoggedIn ? (
            <li onClick={handleLogoutButton} style={{color:"red"}} className="li-hover"><i className="fa-solid fa-right-from-bracket"></i>
             Log Out </li>
          ) : (
            <>
              <li className="li-hover">
                <Link to="/signup" style={{ textDecoration: "none", }}>
                <i className="fa-solid fa-user-plus"></i> Sign Up
                </Link>
              </li>
              <li className="li-hover">
                <Link to="/login" style={{ textDecoration: "none", }}>
                <i className="fa-solid fa-arrow-right-to-bracket"></i> Log In
                </Link>
              </li>
            </>
          )}

          <li className="li-hover"><i className="fa-solid fa-gear"></i> Settings</li>
          <li className="li-hover"><i className="fa-regular fa-circle-question"></i> Help</li>
        </ul>
        
      </div>
    </>
  );
}

export default UserWindow;
