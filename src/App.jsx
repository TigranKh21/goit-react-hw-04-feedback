import { useState } from 'react';
import { Statistics } from 'components/Feedback/Statistics/Statistics';
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Feedback/Section/Section';
import { Notification } from 'components/Feedback/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  /*   state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }; */

  const onLeaveFeedback = id => {
    if (id === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (id === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
    if (id === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const positiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div>
      <Section title="Feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            total={countTotalFeedback}
            positivePercentage={positiveFeedbackPercentage}
            good={good}
            neutral={neutral}
            bad={bad}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
