"use client";
import { link } from "fs";
import AppIcon from "../svgIcon/appIcon";
import React from "react";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
export default function Navbar() {
  const { userId } = useAuth();
  const defaultColor = "#d90424";
  const backgroundColorObject = { backgroundColor: defaultColor };
  return (
    <header className="p-8 px-20">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="text-center sm:text-left mb-7 sm:mb-0">
          {/* icon and name of the web app*/}
          <div className="flex gap-2  items-center sm:justify-start justify-center">
            <span className="text-2xl font-light flex items-center gap-2">
              <div style={backgroundColorObject} className="p-2 rounded-md">
                <AppIcon color="#ffffff" height="34" width="34" />
              </div>
              {/*namen of the app*/}
              <span
                style={{ color: "#d90424" }}
                className="font-bold text-mainColor"
              >
                habit
              </span>
              <span className="font-light ">tracker</span>
            </span>
          </div>
        </div>
        {/*The buttons */}
        {userId ? (
          <Link href={"/DashBoard"}>
            <button
              style={backgroundColorObject}
              className={`block sm:w-32 w-full border rounded-lg px-9 py-3 text-sm font-medium text-white transition focus:outline-none `}
            >
              DashBoard
            </button>
          </Link>
        ) : (
          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <Link href={"/SignIn"}>
              <button
                style={backgroundColorObject}
                className={`block sm:w-32 w-full border rounded-lg px-9 py-3 text-sm font-medium text-white transition focus:outline-none `}
              >
                Login
              </button>
            </Link>
            <Link href={"/Sign-up"}>
            <button
              className={`block sm:w-32 w-full border rounded-lg px-9 py-3 text-sm font-medium transition focus:outline-none hover:bg-customRed hover:text-white border-customRed text-customRed `}
            >
              Signup
            </button>
            </Link>

           
          </div>
        )}
      </div>
    </header>
  );
}
