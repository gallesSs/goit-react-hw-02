import css from "./App.module.css";
import { useState, useEffect } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const createInitialFeedback = () => {
  const localFeedback = localStorage.getItem("data");
  return localFeedback
    ? JSON.parse(localFeedback)
    : {
        good: 0,
        neutral: 0,
        bad: 0,
      };
};

function App() {
  const [feedbackTypes, setFeedbackTypes] = useState(createInitialFeedback);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const updateFeedback = (type) => {
    setFeedbackTypes((prevFeedbackTypes) => ({
      ...prevFeedbackTypes,
      [type]: prevFeedbackTypes[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  const positiveFeedback = totalFeedback
    ? Math.round((feedbackTypes.good / totalFeedback) * 100)
    : 0;

  return (
    <div className={css.container}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedbackTypes.good}
          neutral={feedbackTypes.neutral}
          bad={feedbackTypes.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;