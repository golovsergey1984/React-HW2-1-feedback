import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./Feedback.module.css";


const FeedbackOptions = ({ onLeaveFeedback, btnValue }) => (

  < Fragment >

    <button
      type="button"
      name={btnValue}
      className={styles.button}
      onClick={onLeaveFeedback}
    >
      {btnValue}
    </button>

  </Fragment >
);
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired
};

/* <button
type="button"
name="good"
 data-name={Object.keys(stateParams)}
className={styles.buttonGood + " " + styles.button}
onClick={onLeaveFeedback}
>
Good
</button>
<button
type="button"
name="neutral"
className={styles.buttonNeutral + " " + styles.button}
onClick={onLeaveFeedback}
>
Neutral
</button>
<button
type="button"
name="bad"
className={styles.buttonBad + " " + styles.button}
onClick={onLeaveFeedback}
>
Bad
</button> */