// docs https://github.com/azouaoui-med/react-pro-sidebar
import "./sidebar.css";
import { Menu, SubMenu, Sidebar, MenuItem } from "react-pro-sidebar";
import { FiHome, FiLogOut } from "react-icons/fi";
import { FaList, FaRegHeart } from "react-icons/fa";

import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { useSidebarContext } from "./contexts/sidebarContext";

const MyProSidebar = () => {
  const {
    sidebarRTL,
    sidebarBackgroundColor,
    sidebarImage
  } = useSidebarContext();
  return (
    <div
      id="header"
      style={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0
      }}
    >
      <Sidebar
        breakPoint="md"
        rtl={sidebarRTL}
        backgroundColor={sidebarBackgroundColor}
        image={sidebarImage}
      >
        <Menu iconshape="square" closeOnClick={true}>
          <MenuItem active={true} icon={<FiHome />}>
            Home
          </MenuItem>
          <MenuItem icon={<FaList />}>Category</MenuItem>
          <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
          <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
          <MenuItem icon={<BiCog />}>Settings</MenuItem>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
            <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
              <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <MenuItem icon={<FaList />}>Category</MenuItem>
          <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
          <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
          <MenuItem icon={<BiCog />}>Settings</MenuItem>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
            <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
              <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <MenuItem icon={<FaList />}>Category</MenuItem>
          <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
          <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
          <MenuItem icon={<BiCog />}>Settings</MenuItem>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
            <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
              <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>

        <Menu iconshape="square">
          <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default MyProSidebar;
