import { UserInfo } from "./userInfo";
import { sideBarData } from "./sidebarData";
import { SideBarListItem } from "./SideBarListItem";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IoIosLogOut } from "react-icons/io";
import './styles.css';


export const SideBar = () => {
   const { username, isLoggedIn } = useSelector((state) => state.user);
   const [active, setActive] = useState(null);



   return (
      <div className='sidebar-wrapper'>
         {isLoggedIn && <UserInfo username={username} />}
         <ul className="sidebar__links">
            {
               sideBarData.map(item => (
                  <SideBarListItem
                     item={item}
                     key={item.key}
                     to={item.to}
                     title={item.title}
                     className={item.className}
                     active={active}
                     setActive={setActive}
                     icon={item.icon}
                  />
               ))
            }
         </ul>
         <button className="sidebar__logout-btn"><IoIosLogOut className="sidebar__logout-icon" />Log Out</button>
      </div>
   )
}