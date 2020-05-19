import React from "react";
import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

const Statistic = ({ good, neutral, bad, total, positivePercentage, isOpen }) =>
  isOpen ? (

    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li> Bad: {bad}</li>
      <li className={styles.boild}>Total: {total}</li>
      <li className={styles.boild}>
        Positive feedback: {positivePercentage}
      </li>
    </ul>
  ) : null;
export default Statistic;

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired
};
