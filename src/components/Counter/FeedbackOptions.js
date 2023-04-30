import React from "react";
import './Feedback.css';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
<div className="controls">
    <button type="button" className="controls__btn" onClick={onGood} >Good</button>
    <button type="button" className="controls__btn" onClick={onNeutral}>Neutral</button>
    <button type="button" className="controls__btn" onClick={onBad}>Bad</button>
</div>
);

export default FeedbackOptions;