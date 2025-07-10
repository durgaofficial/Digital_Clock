import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // const date = new Date();   //date obejct to pick current date & time
  const days = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];
  const [currentDate, setCurrentDate] = useState(new Date());

  // useEffect(() => {
  //   setCurrentDate({h:date.getHours(), m:date.getMinutes(), s:date.getSeconds()});
  // })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function Time(t) {
    let period = 'Am';
    let hour = t;

    if (t === 0) {
      hour = 12;
    }
    else if (t === 12) {
      period = 'PM';
    }
    else if (t > 12) {
      hour = t - 12;
      period = 'PM';
    }
    return { hour, period };
  }


  const { hour, period } = Time(currentDate.getHours());
  // function period(t){
  //   if(t>-12){
  //     return "PM"
  //   }
  //   else{
  //     return "AM";
  //   }
  // }

  function addZero(t) {
    var len = t.toString().length;
    if (len <= 1) {
      return '0' + t;
    }
    return t;
  }

  return (
    <>
      <div>
        <h1> Digital Clock</h1>
        <div className='body'>    {/* Hour and AM/PM is destructured above */}
          <div className="child">{addZero(hour)}</div>
          <div className="child">{addZero(currentDate.getMinutes())}</div>
          <div className="child">{addZero(currentDate.getSeconds())}</div>
          <div className="child">{period}</div>

        </div>
        <div className="date-day-container">
          <div className='display'>
            {addZero(currentDate.getMonth() + 1)}-{addZero(currentDate.getDate())}-{currentDate.getFullYear()}
          </div>
          <div className="display">
            {days[currentDate.getUTCDay()]}
          </div>
        </div>

      </div>
    </>
  )
}

export default App
