import React from "react";
import { Drawer } from "antd";
import { NavLink } from "react-router-dom";

const NavDrawer = ({ visible, setVisible, user, logOut }) => {
  const closeDrawer = () => setVisible(false);

  return (
    <>
      <Drawer
        placement="right"
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <div className="flex flex-col text-green-400 text-center mt-5">
          {user?.email && (
            <span className="block pb-2 text-center">
              <img
                className="w-16 h-16 rounded-full border-2 mx-auto border-gray-700"
                src={user?.photoURL}
                alt="profile"
              />
            </span>
          )}
          {user?.email && (
            <span className="pb-2 font-semibold user-details text-gray-600">
              {user?.displayName}
            </span>
          )}
          <NavLink to="/home" className="py-2" onClick={closeDrawer}>
            Home
          </NavLink>
          <NavLink to="/doctors" className="py-2" onClick={closeDrawer}>
            Doctors
          </NavLink>
          <NavLink to="/about" className="py-2" onClick={closeDrawer}>
            About
          </NavLink>
          <NavLink to="/contact" className="py-2" onClick={closeDrawer}>
            Contact
          </NavLink>

          {user?.email ? (
            <button
              className="text-sm w-full block mt-2 bg-red-400 text-white rounded-md shadow p-2 "
              onClick={() => {
                closeDrawer();
                logOut();
              }}
            >
              log out
            </button>
          ) : (
            <NavLink to="/login" onClick={closeDrawer}>
              <span className="text-sm w-full block mt-2 bg-red-500 text-white rounded-md shadow p-2 px-4">
                Login
              </span>
            </NavLink>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default NavDrawer;