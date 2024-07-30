import { useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";

function App() {
  const [feedback, setFdb] = useState(() => {
    const storedData = window.localStorage.getItem("feedback");

    if (storedData !== null) {
      return JSON.parse(storedData);
    } else
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFdb = (type) => {
    setFdb((prevFdb) => ({
      ...prevFdb,
      [type]: prevFdb[type] + 1,
    }));
  };

  const resetFdb = () => {
    setFdb({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positive = Math.round((feedback.good / total) * 100);

  return (
    <div className="container">
      <Description></Description>
      <Options
        options={feedback}
        onFdb={updateFdb}
        total={total}
        onReset={resetFdb}
      />
      {total != 0 && (
        <Feedback feedback={feedback} total={total} positive={positive}/>
      )}
      {total == 0 && <Notification />}
    </div>
  );
}

export default App;