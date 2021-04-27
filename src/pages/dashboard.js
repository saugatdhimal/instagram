import React, { useEffect } from "react";
import Header from "../components/header";
import Timeline from "../components/timeline";

function Dashboard() {
  useEffect(() => {
    document.title = "Instagram";
  }, []);
  return (
    <div>
        <Header />
      <div className="grid"></div>
      <Timeline />
    </div>
  );
}

export default Dashboard;
