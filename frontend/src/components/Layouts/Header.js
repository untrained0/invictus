import React, { useState } from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

import { navlinks } from "../../Constants";

const Header = () => {

  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [toggle, setToggle] = useState(false);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: '',
    });
    localStorage.removeItem("auth");
    toast.success("log-out Successful")
  }

  return (
    <>
      <header className="bg-white">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">

                {
                  navlinks.map((links) => (
                    <li id={links.id}
                      onClick={() => {
                        navigate(links.url)
                      }}
                      className="text-gray-500 transition hover:text-gray-500/75"
                    >{links.title}</li>
                  ))
                }

              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <div
                  className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                  onClick={()=>{
                    navigate("/login")
                  }}
                >
                  Login
                </div>

                <div
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                  onClick={()=>{
                    navigate("/login")
                  }}
                >
                  Register
                </div>
                <div>
                <NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} className="dropdown-item">
                          Dashboard
                 </NavLink>
                </div>
              </div>

              <div className="md:hidden flex flex-1 justify-end items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  onClick={() => { setToggle(!toggle) }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <div
                  className={`${toggle ? 'flex' : 'hidden'} bg-slate-500 p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                  <ul className="list-none flex flex-col justify-end items-center flex-1">
                    {
                      navlinks.map((links, index) => (
                        <li id={links.id}
                          onClick={() => {
                            navigate(links.url)
                          }}
                          className={`font-normal cursor-pointer text-[16px] ${index === (navlinks.length - 1) ? "mb-0" : "mb-1"}`
                          }
                          key={links.id}
                        >{links.title}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>

    </>
  );
};

export default Header;