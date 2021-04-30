import React from "react";

function FallbackLoading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <img src="/images/cameraLogo.png" alt="loading" />
    </div>
  );
}

export default FallbackLoading;
