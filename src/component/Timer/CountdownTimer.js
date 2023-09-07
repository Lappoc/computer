import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import {useCountdown} from '../hook/useCountdown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a
        className="countdown-link"
      >
        <div className='timer'>
        <DateTimeDisplay value={days} type={'Дней'} isDanger={days <= 2} />
        </div>
        <div className='timer'>
        <DateTimeDisplay value={hours} type={'Часов'} isDanger={false} />
        </div>
        <div className='timer'>
        <DateTimeDisplay value={minutes} type={'Минут'} isDanger={false} />
        </div>
        <div className='timer'>
        <DateTimeDisplay value={seconds} type={'Секунд'} isDanger={false} />
        </div>
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
        <div className='deadline'>
            <h1>Первый курс <br/>по компьютерной сборке</h1>
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        </div>
    );
  }
};

export default CountdownTimer;
