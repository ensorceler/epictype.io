import React from "react";
import * as Styles from "../styles/Nav.Styles";
import sitelogo from "../sitelogo3.png";
import styled from "styled-components";

const Nav = () => {
  return (
    <Styles.NavContainer>
      <img src={sitelogo} height="120px" width="430px" />
      <Styles.NavbuttonsContainer>
        <Styles.KeyboardIcon />
        <Styles.CrownIcon />
        <Styles.InfoIcon />
        <Styles.SettingsIcon />
        <Styles.UserIcon />
      </Styles.NavbuttonsContainer>
    </Styles.NavContainer>
  );
};

export default Nav;
