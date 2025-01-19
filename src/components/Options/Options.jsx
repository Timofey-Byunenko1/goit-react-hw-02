import React from 'react';
import './Options.module.css';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => (
  <div className="Options">
    <button onClick={() => updateFeedback('good')}>Good</button>
    <button onClick={() => updateFeedback('neutral')}>Neutral</button>
    <button onClick={() => updateFeedback('bad')}>Bad</button>
    {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
  </div>
);

export default Options;