import React, { useState } from "react";
import { wordList } from "../utility/list-of-words";
const useWordState = () => {
  const [wordState, setWordState] = React.useState<Array<number>>(
    Array(wordList.length).fill(0)
  );
  return {
    wordState,
    setWordState,
  };
};

export default useWordState;
