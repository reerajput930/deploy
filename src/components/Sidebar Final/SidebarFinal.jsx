import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import "./SidebarFinal.css"
import { useDispatch, useSelector } from "react-redux";
import { selectUser, logout } from "../../features/userSlice";
import { signOut } from "firebase/auth";
import { toast } from "react-hot-toast";
import { remove } from "../../features/newUserSlice";
import { auth } from "../../firebase";
import { selectChat, showChat } from "../../features/chatSlice";
import Chat from "../Chat/Chat";

const SidebarFinal = () => {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const chat = useSelector(selectChat);

  return (
    <>
    <section id='sidebar-final'>
      {/* <img className='sidebar-final-brand-logo' src="./images/Frame 6266720.png" alt="brand-logo" /> */}
      <NavLink style={{textDecoration:"none"}} to="/dashboard">
      <div className='sidebar-final-icon-name-cont'>
        <img className='sidebar-final-icon' src="./images/akar-icons_dashboard.png" alt="icon" />
        <p className='sidebar-final-icon-name'>Dashboard</p>
      </div>
      </NavLink>
<NavLink style={{textDecoration:"none"}} to="/knowledge">
      <div className='sidebar-final-icon-name-cont'>
        <img className='sidebar-final-icon' src="./images/Vector.png" alt="icon" />
        <p className='sidebar-final-icon-name'>Knowledge</p>
      </div>
</NavLink>
<a style={{textDecoration:"none"}} href="https://reverrapp.com/fundingform" target="_blank">
      <div className='sidebar-final-icon-name-cont'>
        <img className='sidebar-final-icon' src="./images/bx_money.png" alt="icon" />
        <p className='sidebar-final-icon-name'>Funding</p>
      </div>
</a>
<NavLink style={{textDecoration:"none"}} to="/mentors">
      <div className='sidebar-final-icon-name-cont'>
        <img className='sidebar-final-icon' src="./images/cil_education.png" alt="icon" />
        <p className='sidebar-final-icon-name'>Mentorship</p>
      </div>
</NavLink>
<NavLink style={{textDecoration:"none"}} to="/community">
      <div className='sidebar-final-icon-name-cont'>
        <img className='sidebar-final-icon' src="./images/Vector (1).png" alt="icon" />
        <p className='sidebar-final-icon-name'>Community</p>
      </div>
</NavLink>

      {/* <div className='sidebar-final-line'></div>
<NavLink style={{textDecoration:"none"}} to="/myprofile">
      <div className='sidebar-final-icon-name-cont'>
        <img className='sidebar-final-icon' src="./images/Vector4.png" alt="icon" />
        <p className='sidebar-final-icon-name'>Profile</p>
      </div>
</NavLink>

      <div onClick={() => {
              dispatch(showChat());
            }} className='sidebar-final-icon-name-cont'>
        <img className='sidebar-final-icon' src="./images/Vector (2).png" alt="icon" />
        <p className='sidebar-final-icon-name'>Messages</p>
      </div>

<NavLink style={{textDecoration:"none" }} to="#">
      <div className='sidebar-final-icon-name-cont'>
        <img className='sidebar-final-icon' src="./images/Vector (3).png" alt="icon" />
        <p className='sidebar-final-icon-name'>Settings</p>
      </div>
</NavLink> */}

      {/* <div onClick={user ? () => signOut(auth).then(() => {dispatch(logout());dispatch(remove());})
                    .then(() => {
                      toast.success("Sucessfully logged out");
                      navigate("/");
                    })
              : () => navigate("/login")
          } className='sidebar-final-icon-name-cont'>
        <img className='sidebar-final-icon' src="./images/bx_log-out.png" alt="icon" />
        <p className='sidebar-final-icon-name'>Log Out</p>
      </div> */}
      <button onClick={user ? () => signOut(auth).then(() => {dispatch(logout());dispatch(remove());})
                    .then(() => {
                      toast.success("Sucessfully logged out");
                      navigate("/");
                    })
              : () => navigate("/login")
          } className='sidebar-final-logout-btn'><img className='sidebar-final-icon-logout' src="./images/bx_log-out-white.png" alt="icon" />Log Out</button>


    </section>
    {chat && <Chat />}
    </>
  )
}

export default SidebarFinal