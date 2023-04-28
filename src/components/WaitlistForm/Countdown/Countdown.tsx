import React from 'react';
import { launchDate } from './Countdown.configs';
import { useCountdownTimer } from './Countdown.hooks';

function Countdown() {
  const timeLeft = useCountdownTimer(new Date(launchDate));
  const timeLeftKeys = Object.keys(timeLeft);

  return (
    <ul className="flex justify-center gap-3 pt-10">
      {timeLeftKeys.map((timeUnit) => (
        <li
          key={timeUnit}
          className="flex h-[4.5rem] w-[4.5rem] flex-col items-center justify-center rounded-[55%] bg-[#adbfff]"
        >
          <p className="text font-bold text-brandBlue">
            {timeLeft[timeUnit as keyof typeof timeLeft]}
          </p>
          <p className="text-xs font-bold text-brandBlue">
            {timeUnit.toUpperCase()}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default Countdown;
