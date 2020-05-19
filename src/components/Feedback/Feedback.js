import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Statistics from "./Statistics.js";
import FeedbackOptions from "./FeedbackOptions.js";
import Section from "./Section.js";
import Notification from "./Notification.js";
import shortid from 'shortid';

/* const countTotalFeedback = (good, neutral, bad) => {
  return good + neutral + bad;
}; */

/* function countTotalFeedback (good, neutral, bad) {
  return good + neutral + bad;
}; */
/* const countPositiveFeedbackPercentage = (good, total) => {
  return Math.round((good / total) * 100) + "%";
}; */

/* const isOpendDetermine = total => total > 0; */


export default class Feedback extends Component {
  static defaultProps = {
    step: 1

  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };



  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  isOpendDetermine = total => total > 0;

  countPositiveFeedbackPercentage = (good, total) => {
    return Math.round((good / total) * 100) + "%";
  };

  onLeaveFeedback = e => {
    const name = e.target.name;

    this.setState((prevState, props) => ({
      [name]: prevState[name] + props.step
    }));
  };


  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback.bind(this)(good, neutral, bad);
    const positivePercentage = this.countPositiveFeedbackPercentage.bind(this)(good, total);
    const validatorIsOpen = this.isOpendDetermine.bind(this)(total);

    return (

      <Fragment>
        <Section title="Please Leave your feedback">
          {Object.keys(this.state).map(item => (
            <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} btnValue={item} key={shortid.generate()} />
          ))}
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
            isOpen={validatorIsOpen}
          />
        </Section>
        <Notification message="No feedback given" isOpen={validatorIsOpen} />
      </Fragment>
    );
  }
}

Feedback.propTypes = {
  step: PropTypes.number.isRequired
};
