import React, { useEffect } from "react";
import Header from "../components/header";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar/sidebar";

function Dashboard() {
  useEffect(() => {
    document.title = "Instagram";
  }, []);
  return (
    <div>
        <Header />
      <div className="grid grid-cols-3 gap-8 justify-between mx-auto max-w-screen-lg px-11">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
}

export default Dashboard;
