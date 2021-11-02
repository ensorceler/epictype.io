import React from "react";
interface Props {
  clockStart: boolean;
  setClockStart: Function;
  setTimerDuration: Function;
}

interface settingsType {
  timer: string;
  wordMode: string;
  punctuation: boolean;
  numbers: boolean;
}
const Timer: React.FC<Props> = ({
  clockStart,
  setClockStart,
  setTimerDuration,
}) => {
  const [countdown, setCountdown] = React.useState<number>(60);
  const changeRef = React.useRef(false);

  React.useEffect(() => {
    if (countdown == 0 && changeRef.current === false) {
      setClockStart(false);
      changeRef.current = true;
    }
    if (clockStart === true && changeRef.current == false) {
      setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
  }, [countdown, clockStart]);

  React.useEffect(() => {
    // fetched the settings object from the localStorage and set the timer value to countdown

    let fetchedSettings: string | null = localStorage.getItem("settings");
    if (fetchedSettings != null) {
      let parsedSettings: settingsType = JSON.parse(fetchedSettings);
      let newTime: any = parsedSettings.timer;
      newTime = (newTime as string).slice(0, parsedSettings.timer.length - 1);
      newTime = parseInt(newTime, 10);
      setCountdown(newTime as number);
      setTimerDuration(newTime as number);
    }
  }, []);
  return <React.Fragment>{countdown}s</React.Fragment>;
};

export default Timer;
