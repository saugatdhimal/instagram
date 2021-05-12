import React from "react";

function Photos({userPhotos}) {
  return (
    <div className="my-20 px-11">
      <div className="border-t border-gray-primary">
        <div className="flex justify-center space-x-20 font-medium py-5 text-sm">
          <p>POSTS</p>
          <p>IGTV</p>
          <p>TAGGED</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {userPhotos.map((photo) => (
            <img src={photo.imageSrc} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Photos;
