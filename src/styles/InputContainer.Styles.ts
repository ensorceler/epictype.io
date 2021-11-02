import styled from "styled-components";
import { motion } from "framer-motion";
export const Container = styled.div`
  width: 50rem;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  input[disabled] {
    caret-color: red;
    cursor: not-allowed;
  }
`;

export const TypingInput = styled.input`
  height: 34px;
  width: 25rem;
  font-family: "monospace";
  font-size: 18px;
  color: white;
  background-color: #191919;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #282828;
  caret-color: #3a506b;
  &:focus {
    outline: none;
    border: 1px solid #3a506b;
  }
`;

export const Button = styled.div`
  height: 35px;
  width: 100px;
  font-size: 18px;
  border: 1px solid #282828;
  color: white;
  background-color: #191919;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${(props: { hover?: boolean }) => {
    if (props.hover)
      return `
      &:hover{
        background-color:#4287f5;
      } 
    `;
  }}
`;
