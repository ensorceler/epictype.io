import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import * as Styles from "../styles/TextContainer.Styles";
import { wordList } from "../utility/list-of-words";

interface Props {
  wordState: Array<number>;
  setWordState: Function;
  selectedWordIndex: number;
}

interface StatusWord {
  wordState: Array<number>;
  word: string;
  idx: number;
}
const StatusOfWord = ({ wordState, word, idx }: StatusWord) => {
  //wordState[idx]==1 for selected
  if (wordState[idx] === 1)
    return <Styles.Word active={true}>{word}</Styles.Word>;
  else if (wordState[idx] === 2)
    return <Styles.Word correct={true}>{word}</Styles.Word>;
  else if (wordState[idx] === 3)
    return <Styles.Word wrong={true}>{word}</Styles.Word>;
  else if (wordState[idx] === 4)
    return <Styles.Word activewrong={true}>{word}</Styles.Word>;
  else return <Styles.Word>{word}</Styles.Word>;
};

const TextContainer = ({
  wordState,
  setWordState,
  selectedWordIndex,
}: Props) => {
  const textRef = useRef<any>(null);
  const scrollRef = useRef<any>(null);
  const [scrollValue, setScrollValue] = React.useState<number>(0);

  useEffect(() => {
    let refvalue = textRef.current!;
    let newScrollValue = refvalue.children[selectedWordIndex].offsetTop;
    // console.log("new scroll value -->", newScrollValue);

    if (newScrollValue != scrollValue) {
      scrollRef.current.scrollTop += 50;
      setScrollValue(newScrollValue);
    }
  }, [selectedWordIndex]);
  return (
    <Styles.Container ref={scrollRef}>
      <Styles.Text ref={textRef}>
        {wordList.map((word: string, idx: number) => (
          <StatusOfWord wordState={wordState} word={word} idx={idx} />
        ))}
      </Styles.Text>
    </Styles.Container>
  );
};

export default TextContainer;
