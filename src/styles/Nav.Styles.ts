import styled from "styled-components";
import { BsKeyboard } from "react-icons/bs";
import { FaCrown, FaRegUser } from "react-icons/fa";
import { IoInformationOutline, IoSettingsSharp } from "react-icons/io5";

export const NavContainer = styled.div`
  width: 50rem;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
`;
export const NavbuttonsContainer = styled.div`
  width: 50%;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const KeyboardIcon = styled(BsKeyboard)`
  font-size: 33px;
  color: grey;
  &:hover {
    color: white;
    cursor: pointer;
  }
  &:active {
    font-size: 31px;
  }
`;

export const CrownIcon = styled(FaCrown)`
  font-size: 28px;
  color: grey;
  &:hover {
    color: white;
    cursor: pointer;
  }
  &:active {
    font-size: 26px;
  }
`;

export const InfoIcon = styled(IoInformationOutline)`
  font-size: 33px;
  color: grey;
  &:hover {
    color: white;
    cursor: pointer;
  }
  &:active {
    font-size: 31px;
  }
`;

export const SettingsIcon = styled(IoSettingsSharp)`
  font-size: 24px;
  color: grey;
  &:hover {
    color: white;
    cursor: pointer;
  }
  &:active {
    font-size: 22px;
  }
`;

export const UserIcon = styled(FaRegUser)`
  font-size: 22px;
  color: grey;
  &:hover {
    color: white;
    cursor: pointer;
  }
  &:active {
    font-size: 20px;
  }
`;
