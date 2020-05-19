import React from "react";
import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

const Section = props => (
  <section>
    <p className={styles.title}>{props.title}</p>
    {props.children}
  </section>
);
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired
};
