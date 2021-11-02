import React, { useEffect } from "react";
import InputContainer from "./InputContainer";
import ResultsContainer from "./ResultsContainer";
import TextContainer from "./TextContainer";
import TweaksContainer from "./TweaksContainer";
import { wordList } from "../utility/list-of-words";
import produce from "immer";
import useWordState from "./useWordState";

interface resultInterface {
  wpm: number;
  correctCharacters: number;
  incorrectCharacters: number;
  accuracy: number;
}
const resultInitialValue: resultInterface = {
  wpm: 0,
  correctCharacters: 0,
  incorrectCharacters: 0,
  accuracy: 0,
};

const resultReducer = (state: resultInterface, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const stylesObj: Object = {
  width: "50rem",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "30px",
};
const MainArea = () => {
  const [resultState, setResultState] = React.useState<resultInterface>({
    wpm: 0,
    correctCharacters: 0,
    incorrectCharacters: 0,
    accuracy: 0,
  });

  const [scroll, setScroll] = React.useState<boolean>(false);

  const [selectedWordIndex, setSelectedWordIndex] = React.useState<number>(0);

  const { wordState, setWordState } = useWordState();
  const [inputState, setInputState] = React.useState<string>("");

  const changeWordState = (idx: number) => {
    setWordState(
      produce(wordState, (draft) => {
        draft[idx] = 1;
      })
    );
  };

  useEffect(() => {
    changeWordState(selectedWordIndex);
  }, [selectedWordIndex]);

  return (
    <>
      <TextContainer
        selectedWordIndex={selectedWordIndex}
        wordState={wordState}
        setWordState={setWordState}
      />
      <InputContainer
        inputState={inputState}
        setInputState={setInputState}
        wordState={wordState}
        setWordState={setWordState}
        selectedWordIndex={selectedWordIndex}
        setSelectedWordIndex={setSelectedWordIndex}
        resultState={resultState}
        setResultState={setResultState}
      />
      <div style={stylesObj}>
        <ResultsContainer
          resultState={resultState}
          setResultState={setResultState}
        />
        <TweaksContainer />
      </div>
    </>
  );
};

export default MainArea;
