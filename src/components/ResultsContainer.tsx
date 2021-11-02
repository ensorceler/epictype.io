import React from "react";
import * as Styles from "../styles/ResultsContainer.Styles";

interface resultInterface {
  wpm: number;
  correctCharacters: number;
  incorrectCharacters: number;
  accuracy: number;
}
interface Props {
  resultState: resultInterface;
  setResultState: Function;
}

const ResultsContainer = ({ resultState, setResultState }: Props) => {
  return (
    <Styles.Container>
      <Styles.Wpm>{resultState.wpm} wpm</Styles.Wpm>

      <Styles.ResultsTable>
        <Styles.ResultsRow>
          <td>Raw Wpm</td>
          <td>{resultState.wpm} wpm</td>
        </Styles.ResultsRow>

        <Styles.ResultsRow>
          <td>Accuracy</td>
          <td> {resultState.accuracy}%</td>
        </Styles.ResultsRow>

        <Styles.ResultsRow>
          <td>Correct Characters</td>
          <td>{resultState.correctCharacters} </td>
        </Styles.ResultsRow>

        <Styles.ResultsRow>
          <td>Incorrect Characters</td>
          <td>{resultState.incorrectCharacters} </td>
        </Styles.ResultsRow>
      </Styles.ResultsTable>
    </Styles.Container>
  );
};

export default ResultsContainer;
