import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../asssets/crown.svg";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>

    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);

// currentUser is a subjective property of an object
// we invoke state.user which points to our rootReducer
// and .currentUser which will reference our userReducer
// it than has an action.payload this will point to user.action.js
// the action has a payload that takes in a user that is passed into the function setCurrentUser
// mapStateToProps -> root-reducer --> user.reducer ---> user.action
