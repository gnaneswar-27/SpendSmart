import React from "react";
import { fetchData } from "../helper";
import { Outlet, useLoaderData } from "react-router-dom";

import Nav from "../components/Nav";
import wave from "../assets/wave.svg";


export function maindLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
        <Nav userName={userName} />
        <main>
        <Outlet />
        </main>
        
        <img src={wave} alt="" />
    </div>
  );
};

export default Main;
