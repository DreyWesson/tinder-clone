import { IconButton } from "@material-ui/core";
import {
  ArrowBackOutlined,
  ForumOutlined,
  PersonOutline,
} from "@material-ui/icons";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackOutlined fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonOutline fontSize="large" className="header__icon" />
        </IconButton>
      )}
      <Link to="/">
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="tinder logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumOutlined fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
