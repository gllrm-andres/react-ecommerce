import React from "react";

const CollectionItem = ({ name, price, imageUrl }) => (
  <div>
    <div className="h-80 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="flex justify-between">
      <span>{name}</span>
      <span>${price}</span>
    </div>
  </div>
);

export default CollectionItem;
