import { useState } from 'react';
import css from './App.module.css';
import Statistics from '../Statistics/Statistics.jsx';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions.jsx';
import Section from '../Section/Section.jsx';
import Notification from '../Notification/Notication.jsx';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  // console.log(options);

  const countFeedback = ({ target: { value } }) => {
    switch (value) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return good === 0 ? good : Math.round((good / countTotalFeedback()) * 100);
  };

  const total = countTotalFeedback();
  const positivePersentage = countPositiveFeedbackPercentage();

  return (
    <div className={css.container}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={countFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePersentage={positivePersentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
