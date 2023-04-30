import React from "react";
import PropTypes from 'prop-types';
import Notification from "./Notification";
import './Feedback.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => (
    <div>
        <h2 className="statistics">Statistics</h2>
        {good || neutral || bad ?
        (<ul className="result">
        <li className="result__value">Good: {good}</li>
        <li className="result__value">Neutral: {neutral}</li>
        <li className="result__value">Bad: {bad}</li>
        <li className="result__value">Total: {total}</li>
        <li className="result__value">Percentage: {percentage}%</li>
        </ul>) :
        (<Notification massage="There is no feedback"/>)
        }    
    </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;