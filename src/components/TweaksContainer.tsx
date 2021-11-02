import React, { useState } from "react";
import * as Styles from "../styles/TweaksContainer.Styles";

interface settingsType {
  timer: string;
  wordMode: string;
  punctuation: boolean;
  numbers: boolean;
}

const defaultSettings: settingsType = {
  timer: "60s",
  wordMode: "words",
  punctuation: false,
  numbers: false,
};

const TweaksContainer = () => {
  const [tweakState, setTweakState] = useState<settingsType>(defaultSettings);

  const changePunctuation = (setVal: boolean) => () => {
    let newSettings = { ...tweakState, punctuation: setVal };
    localStorage.setItem("settings", JSON.stringify(newSettings));

    window.location.reload();
  };
  const changeNumbers = (setVal: boolean) => () => {
    let newSettings = { ...tweakState, numbers: setVal };
    localStorage.setItem("settings", JSON.stringify(newSettings));

    window.location.reload();
  };
  const changeWordMode = (e: any) => {
    let option: string = e.target!.value;
    let newSettings = { ...tweakState, wordMode: option };

    localStorage.setItem("settings", JSON.stringify(newSettings));

    window.location.reload();
  };

  const changeTimer = (e: any) => {
    let option: string = e.target!.value;

    let newSettings = { ...tweakState, timer: option };
    localStorage.setItem("settings", JSON.stringify(newSettings));

    window.location.reload();
  };

  React.useEffect(() => {
    let fetchedSettings: string | null = localStorage.getItem("settings");

    if (fetchedSettings == null) {
      localStorage.setItem("settings", JSON.stringify(defaultSettings));
    } else {
      let parsedSettings: settingsType = JSON.parse(fetchedSettings);
      console.log(parsedSettings);
      setTweakState(parsedSettings);
    }
  }, []);

  return (
    <Styles.Container>
      <Styles.OptionsRow>
        <Styles.OptionHeader>timer</Styles.OptionHeader>

        <Styles.Options>
          <Styles.OptionItems
            active={tweakState.timer == "30s" ? true : false}
            value="30s"
            onClick={changeTimer}
          >
            30s
          </Styles.OptionItems>
          <Styles.OptionItems
            active={tweakState.timer == "60s" ? true : false}
            value="60s"
            onClick={changeTimer}
          >
            60s
          </Styles.OptionItems>
          <Styles.OptionItems
            active={tweakState.timer == "90s" ? true : false}
            value="90s"
            onClick={changeTimer}
          >
            90s
          </Styles.OptionItems>
          <Styles.OptionItems
            active={tweakState.timer == "120s" ? true : false}
            value="120s"
            onClick={changeTimer}
          >
            120s
          </Styles.OptionItems>
        </Styles.Options>
      </Styles.OptionsRow>

      <Styles.OptionsRow>
        <Styles.OptionHeader>word-mode</Styles.OptionHeader>

        <Styles.Options>
          <Styles.OptionItems
            active={tweakState.wordMode == "words" ? true : false}
            value="words"
            onClick={changeWordMode}
          >
            words
          </Styles.OptionItems>
          <Styles.OptionItems
            active={tweakState.wordMode == "sentences" ? true : false}
            value="sentences"
            onClick={changeWordMode}
          >
            sentences
          </Styles.OptionItems>
          <Styles.OptionItems
            active={tweakState.wordMode == "quotes" ? true : false}
            value="quotes"
            onClick={changeWordMode}
          >
            quotes
          </Styles.OptionItems>
          <Styles.OptionItems
            active={tweakState.wordMode == "songs" ? true : false}
            value="songs"
            onClick={changeWordMode}
          >
            songs
          </Styles.OptionItems>
        </Styles.Options>
      </Styles.OptionsRow>

      <Styles.OptionsRow>
        <Styles.OptionHeader>punctuation</Styles.OptionHeader>
        <Styles.Options>
          <Styles.OptionItems
            active={tweakState.punctuation}
            onClick={changePunctuation(true)}
          >
            enabled
          </Styles.OptionItems>
          <Styles.OptionItems
            active={!tweakState.punctuation}
            onClick={changePunctuation(false)}
          >
            disabled
          </Styles.OptionItems>
        </Styles.Options>
      </Styles.OptionsRow>

      <Styles.OptionsRow>
        <Styles.OptionHeader>numbers</Styles.OptionHeader>
        <Styles.Options>
          <Styles.OptionItems
            active={tweakState.numbers}
            onClick={changeNumbers(true)}
          >
            enabled
          </Styles.OptionItems>
          <Styles.OptionItems
            active={!tweakState.numbers}
            onClick={changeNumbers(false)}
          >
            disabled
          </Styles.OptionItems>
        </Styles.Options>
      </Styles.OptionsRow>
    </Styles.Container>
  );
};

export default TweaksContainer;
