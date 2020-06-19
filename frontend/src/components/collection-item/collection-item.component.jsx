import React from "react";

import "./collection-item.styles.scss";

// Component renders Images, Name, and Price from our data collection
// Is Passed in as a component in collection-preview

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
