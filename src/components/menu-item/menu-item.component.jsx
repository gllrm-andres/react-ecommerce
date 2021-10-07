import React from "react";

const MenuItem = ({ title, imageUrl, size }) => (
  <div
    className={` h-56 ${size} flex flex-1 items-center justify-center min-w-3/10 group  overflow-hidden`}
  >
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="transform group-hover:scale-110  transition ease-expand duration-6s  text-gray-900 cursor-pointer  bg-cover bg-center w-full h-full"
    ></div>
    <div className="p-4 text-center bg-white bg-opacity-70 absolute">
      <div className="uppercase tracking-wide font-bold">{title}</div>
      <div className="uppercase font-normal tracking-wide"> Shop now</div>
    </div>
  </div>
);

export default MenuItem;
