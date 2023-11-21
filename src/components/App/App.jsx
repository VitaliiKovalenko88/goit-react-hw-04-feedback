import React, { Component } from 'react';
import css from './App.module.css';
import Statistics from '../Statistics/Statistics.jsx';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions.jsx';
import Section from '../Section/Section.jsx';
import Notification from '../Notification/Notication.jsx';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = ({ target: { textContent } }) => {
    this.setState(prevState => {
      return { [textContent]: prevState[textContent] + 1 };
    });
  };

  countTotalFeedback = () => {
    const options = Object.values(this.state);
    return options.reduce((previousValue, option) => {
      return previousValue + option;
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return good === 0
      ? good
      : Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeefback = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <div className={css.container}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.countFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePersentage={positiveFeefback}
            />
          )}
        </Section>
      </div>
    );
  }
}
