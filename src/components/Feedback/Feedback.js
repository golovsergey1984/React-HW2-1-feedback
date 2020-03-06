import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Statistics from "./Statistics.js";
import FeedbackOptions from "./FeedbackOptions.js";
import Section from "./Section.js";
import Notification from "./Notification.js";

const countTotalFeedback = (good, neutral, bad) => {
  return good + neutral + bad;
};

const countPositiveFeedbackPercentage = (good, total) => {
  return Math.round((good / total) * 100) + "%";
};

const isOpendDetermine = total => {
  return total > 0 ? true : false;
};

export default class Feedback extends Component {
  static defaultProps = {
    step: 1
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = e => {
    const name = e.target.name;

    this.setState((prevState, props) => ({
      [name]: prevState[name] + props.step
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = countTotalFeedback(good, neutral, bad);
    const positivePercentage = countPositiveFeedbackPercentage(good, total);
    const validatorIsOpen = isOpendDetermine(total);

    return (
      <Fragment>
        <Section title="Please Leave your feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
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
