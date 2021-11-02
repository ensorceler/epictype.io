import React from "react";
import produce from "immer";
import { clear } from "console";
import styled from "styled-components";
import { start } from "repl";

const Button = styled.button`
  font-size: 20px;
  background-color: #282828;
  color: white;
  padding: 10px;
  font-family: "monospace";
  border: none;
  &:active {
    transform: translateY(5px);
  }
`;

const Test = () => {
  const [clockStart, setClockStart] = React.useState<boolean>(false);
  const [countdown, setCountdown] = React.useState<number>(60);
  const changeRef = React.useRef(false);

  React.useEffect(() => {
    if (countdown == 0 && changeRef.current === false) {
      setClockStart(false);
      changeRef.current = true;
    }
    if (clockStart === true) {
      setTimeout(() => {
        setCountdown((p) => p - 1);
      }, 1000);
    }
  }, [countdown, clockStart]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1> test page for testing purposes </h1>
      <h1> countdown : {countdown}</h1>
      <Button
        onClick={() => {
          setClockStart(!clockStart);
        }}
      >
        {clockStart ? <>stop </> : <>start </>} countdown
      </Button>
    </div>
  );
};

export default Test;
