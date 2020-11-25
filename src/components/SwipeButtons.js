import { IconButton } from "@material-ui/core";
import {
  CloseOutlined,
  FavoriteOutlined,
  FlashOnOutlined,
  ReplayOutlined,
  StarRateOutlined,
} from "@material-ui/icons";
import React from "react";
import "./SwipeButtons.css";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayOutlined fontSize="medium" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseOutlined fontSize="medium" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRateOutlined fontSize="medium" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteOutlined fontSize="medium" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnOutlined fontSize="medium" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
