import {useState, useEffect} from "react";
import {getTime, saveTime} from "../utils/localStorage"
import Button from "../components/buttons";
import Pause from "../assets/pause.png";
import Play from "../assets/play-button-arrowhead.png";
import Restart from "../assets/restart (1).png";
import Stop from "../assets/stop-button.png";

export default function Timer() {
  const [secondsLeft, setSecondsLeft] = useState(getTime ? getTime : 1800);
  const [initialTime, setInitialTime] = useState(1800);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSecondsLeft(prev => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    saveTime(secondsLeft)
  }, [secondsLeft])

  const seconds = Math.floor(secondsLeft % 60);
  const minutes = Math.floor((secondsLeft / 60) % 60);
  const hours = Math.floor(secondsLeft / 3600);
  
  const timeLeft = `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;

  function toggleIsActive() {
    if (!isActive && secondsLeft > 0) {
      setInitialTime(secondsLeft);
    }
    setIsActive(prev => !prev);
  }

  function handleRestart() {
    setIsActive(false);
    setSecondsLeft(initialTime);
  }

  function handleStop() {
    setIsActive(false);
    setSecondsLeft(0);
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    let num = parseInt(value) || 0;

    if (name === "hours" && num > 23) num = 0;
    if ((name === "minutes" || name === "seconds") && num > 59) num = 0;

    const newTime = {
      ...time,
      [name]: num,
    };

    setTime(newTime);

    const totalSeconds = (newTime.hours * 3600) + (newTime.minutes * 60) + newTime.seconds;
    setSecondsLeft(totalSeconds);
  }

  return (
    <div className="h-dvh flex flex-col items-center">
      <h1 className="hidden text-left text-2xl mt-6 font-semibold px-2 w-full md:block">Timer</h1>

      <div className="h-[90%] w-full flex flex-col items-center justify-center">
        <div className="size-56 border-4 border-neutral-800 rounded-full flex items-center justify-center shadow-lg mt-10">
          <span className="text-4xl md:text-3xl text-neutral-800">
            {timeLeft}
          </span>
        </div>

        {!isActive && <div className="w-full flex flex-col justify-center px-10">
          <div className="flex justify-around border-b border-neutral-800/20 mt-10 pb-2 font-semibold">
            <h3>H</h3>
            <h3>M</h3>
            <h3>S</h3>
          </div>
          <div className="flex gap-2 w-full justify-around h-12 border-b border-neutral-800/20">
            <input
              type="number"
              name="hours"
              min={0}
              max={23}
              value={time.hours === 0 ? "" : time.hours}
              placeholder="00"
              onChange={handleChange}
              className="h-full text-center no-spin"
            />
            <input
              type="number"
              name="minutes"
              min={0}
              max={59}
              value={time.minutes === 0 ? "" : time.minutes}
              placeholder="00"
              onChange={handleChange}
              className="h-full text-center no-spin"
            />
            <input
              type="number"
              name="seconds"
              min={0}
              max={59}
              value={time.seconds === 0 ? "00" : time.seconds}
              placeholder="00"
              onChange={handleChange}
              className="h-full text-center no-spin"
            />
          </div>
        </div>}

        <div className="flex gap-12 mt-20">
          <Button onClick={handleRestart}>
            <img src={Restart} alt="restart icon" className="size-3.5" />
          </Button>
          <Button onClick={() => {if (secondsLeft > 0) toggleIsActive();}}>
            <img
              src={isActive && secondsLeft > 0 ? Pause : Play}
              alt="play/pause icon"
              className="size-4"
            />
          </Button>
          <Button onClick={handleStop}>
            <img src={Stop} alt="stop icon" className="size-4.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
