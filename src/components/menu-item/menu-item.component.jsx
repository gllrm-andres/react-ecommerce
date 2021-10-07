import React from "react";

const MenuItem = ({ title, imageUrl, size }) => (
  <div
    style={{ backgroundImage: `url(${imageUrl})` }}
    className={` h-56 ${size} flex flex-1 items-center justify-center min-w-3/10 bg-cover bg-center text-gray-900`}
  >
    <div className="p-4 text-center bg-white bg-opacity-50">
      <div className="uppercase tracking-wide font-bold">{title}</div>
      <div className="uppercase font-normal tracking-wide"> Shop now</div>
    </div>
  </div>
);

export default MenuItem;
