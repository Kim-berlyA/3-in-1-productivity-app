import { useState, useEffect } from "react";
import Button from "../components/buttons";
import Pause from "../assets/pause (3).png";
import Play from "../assets/play-button-arrowhead.png";
import Restart from "../assets/restart (1).png";
import Stop from "../assets/stop-button.png";

export default function TimerRing() {
  const [secondsLeft, setSecondsLeft] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSecondsLeft(prev => prev > 0 ? prev - 1 : 0);
      }, 1000);
    }

    return () => clearInterval(interval)
  }, [isActive]);

  function formatTime(totalSeconds) {
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);

    return (
      `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`
    );
  }

  function toggleIsActive() {
    setIsActive(prev => !prev);
  }

  function restart() {
    setIsActive(false);
    setSecondsLeft(0);
  }

  return (
    <div className="h-screen flex flex-col gap-20 items-center">
      <h1 className="text-left text-2xl mt-6 font-semibold px-2 w-full ">Timer</h1>

      <div className="size-56 border-4 border-neutral-800 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-4xl md:text-3xl text-neutral-800">
          {formatTime(secondsLeft)}
        </span>
      </div>

      <div className="flex gap-14">
        <Button
          onClick={restart}
        >
          <img src={Restart} alt="pause icon"
          className="size-3.5" />
        </Button>
        <Button
          onClick={toggleIsActive}
        >
          <img src={isActive && secondsLeft > 0 ? Pause : Play} alt="play and pause icon"
          className="size-4" />
        </Button>
        <Button>
          <img src={Stop} alt="pause icon"
          className="size-4.5" />
        </Button>
      </div>
    </div>
  );
}
