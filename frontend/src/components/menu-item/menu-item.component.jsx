import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { useHistory } from "react-router-dom";

import "./menu-items.styles.scss";

// passed down via props the title, imageUrl, etc
// history .push we use the match.url to grab the current url and push to the specific linkUrl
// will match up with the linkUrl
//

const MenuItem = ({ title, imageUrl, size, linkUrl, match }) => {
  let history = useHistory();
  console.log(linkUrl);

  const handleClick = () => {
    history.push(`${match.url}${linkUrl}`);
  };

  return (
    <div className={`${size} menu-item`} onClick={handleClick}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);

// const MenuItem = (props) => {
//   const [itemState, setItemState] = useState(props);
//   console.log(itemState);
//   let history = useHistory();

//   const handleClick = () => {
//     history.push(`${itemState.match.url}${itemState.linkUrl}`);
//   };

//   return (
//     <div className={`${itemState.size} menu-item`} onClick={handleClick}>
//       <div
//         className="background-image"
//         style={{
//           backgroundImage: `url(${itemState.imageUrl})`,
//         }}
//       />

//       <div className="content">
//         <h1 className="title">{itemState.title.toUpperCase()}</h1>
//         <span className="subtitle">SHOP NOW</span>
//       </div>
//     </div>
//   );
// };
