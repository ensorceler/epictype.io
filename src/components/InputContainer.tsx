import React, { ReactFragment } from "react";
import * as Styles from "../styles/InputContainer.Styles";
import { FiRefreshCcw } from "react-icons/fi";
import { motion } from "framer-motion";
import produce from "immer";
import Timer from "./Timer";
import { wordList } from "../utility/list-of-words";

interface Props {
  inputState: string;
  setInputState: Function;
  wordState: Array<number>;
  setWordState: Function;
  selectedWordIndex: number;
  setSelectedWordIndex: Function;
  resultState: resultInterface;
  setResultState: Function;
}
interface resultInterface {
  wpm: number;
  correctCharacters: number;
  incorrectCharacters: number;
  accuracy: number;
}
const InputContainer = ({
  inputState,
  setInputState,
  wordState,
  setWordState,
  selectedWordIndex,
  setSelectedWordIndex,
  resultState,
  setResultState,
}: Props) => {
  const [clockStart, setClockStart] = React.useState<boolean>(false);
  const [timerDuration, setTimerDuration] = React.useState<number>(60);

  const highestMatchLength = React.useRef<number>(0);
  const [typingStat, setTypingStat] = React.useState({
    totalWords: 0,
    totalChars: 0,
    correctChars: 0,
    correctWords: 0,
  });
  const [disableInput, setDisableInput] = React.useState<boolean>(false);
  const clockStartMount = React.useRef<boolean>(false);

  const calculatefinalStat = () => {
    console.log("timer duration was " + timerDuration + " this time;");
    let words_per_minute = Math.ceil(
      Math.ceil(typingStat.correctChars / 5) / (timerDuration / 60)
    );
    let incorrect_characters = typingStat.totalChars - typingStat.correctChars;

    let word_accuracy = (
      (typingStat.correctWords / typingStat.totalWords) *
      100
    ).toFixed(2);

    setResultState({
      wpm: words_per_minute,
      accuracy: parseFloat(word_accuracy),
      correctCharacters: typingStat.correctChars,
      incorrectCharacters: incorrect_characters,
    });
  };

  const inputChange = (e: any) => {
    if (e.target.value != " ") {
      checkTypingInput(e.target.value);
      setInputState(e.target.value);
    }
  };

  const checkTypingInput = (freshInputState: string) => {
    // this is where i check the typed input on every key press

    let regexPattern: RegExp = new RegExp(freshInputState);

    console.log("regexPattern is ", regexPattern);
    const checkOK = regexPattern.test(wordList[selectedWordIndex]);

    const matches = wordList[selectedWordIndex].match(regexPattern);
    if (matches) {
      highestMatchLength.current = matches["0"].length;
    }

    //console.log(checkOK);

    if (checkOK === false) {
      setWordState(
        produce(wordState, (draft) => {
          draft[selectedWordIndex] = 4;
        })
      );
    } else {
      setWordState(
        produce(wordState, (draft) => {
          draft[selectedWordIndex] = 1;
        })
      );
    }
  };
  const keypressChange = (e: any) => {
    // this is basically starting the timer
    if (clockStartMount.current === false) {
      setClockStart(true);
      clockStartMount.current = true;
    }

    if (e.keyCode == 32) {
      //check basically if currently selected word matches with the inputState

      /*setWordState(
        produce(wordState, (draft) => {
          draft[selectedWordIndex] = 0;
        })
      );
      */
      let checkWord = wordList[selectedWordIndex];

      if (inputState == checkWord) {
        //correctly typed word
        console.log("correct");

        setTypingStat(
          produce(typingStat, (draft) => {
            draft.correctChars += checkWord.length;
            draft.totalChars += checkWord.length;
            draft.totalWords += 1;
            draft.correctWords += 1;
          })
        );

        setWordState(
          produce(wordState, (draft) => {
            draft[selectedWordIndex] = 2;
          })
        );
      } else {
        //wrongly typed word
        console.log("wrong");

        setTypingStat(
          produce(typingStat, (draft) => {
            draft.correctChars += highestMatchLength.current;
            draft.totalChars += checkWord.length;
            draft.totalWords += 1;
            draft.correctWords += 0;
          })
        );

        setWordState(
          produce(wordState, (draft) => {
            draft[selectedWordIndex] = 3;
          })
        );
      }
      setSelectedWordIndex((p: number) => p + 1);
      setInputState("");
    }
  };

  React.useEffect(() => {
    if (clockStart == false && clockStartMount.current == true) {
      setInputState("");
      setDisableInput(true);
      calculatefinalStat();
    }
  }, [clockStart]);

  React.useEffect(() => {
    console.log(typingStat);
  }, [typingStat]);
  return (
    <Styles.Container>
      <Styles.TypingInput
        type="text"
        value={inputState}
        onChange={inputChange}
        onKeyDown={keypressChange}
        disabled={disableInput}
      />

      <Styles.Button> 0 wpm</Styles.Button>

      <Styles.Button>
        <Timer
          clockStart={clockStart}
          setClockStart={setClockStart}
          setTimerDuration={setTimerDuration}
        />
      </Styles.Button>

      <Styles.Button
        hover={true}
        onClick={() => {
          window.location.reload();
        }}
      >
        <motion.div animate={{ rotate: 360 * 3 }} transition={{ duration: 1 }}>
          <FiRefreshCcw />
        </motion.div>
      </Styles.Button>
    </Styles.Container>
  );
};

export default InputContainer;
