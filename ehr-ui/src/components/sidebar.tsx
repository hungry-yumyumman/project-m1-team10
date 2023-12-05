"use client";

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaFolder, FaRegComments } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { HiUserGroup } from "react-icons/hi2";
import Link from "next/link";
import { SidebarProps } from "@/interfaces/types";

export default function SideNavbar({ SideBarItems }:SidebarProps ) {

  // const NavItems= [
  //     {
  //       label: "Dashboard",
  //       href: "/",
  //       icon: <CiHome className="w-6 h-6" />,
  //     },
  //     {
  //       label: "Patient Lookup",
  //       href: "/patient-lookup",
  //       icon: <HiUserGroup className="w-6 h-6" />,
  //     },
  //     {
  //       label: "Projects",
  //       href: "/projects",
  //       icon: <FaFolder className="w-6 h-6" />,
  //     },
  // ]


  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-white z-20 flex top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            
            <div className=" my-4 border-b border-gray-100 pb-4">
              <ul>
              {SideBarItems.map((item, index) => {
              return (
                <li key={index}
                  className="flex mb-2 justify-start items-center gap-4 p1-5 hover:bg-gray-gee p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
                >
                  <Link href={item.href} className="flex gap-2 text-gray-800">
                    {item.icon} <span>{ item.name}</span>
                  </Link>
                </li>
              );
            })}

              </ul>
              
            </div>
            
            {/* logout */}
            <div className=" my-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Logout
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

