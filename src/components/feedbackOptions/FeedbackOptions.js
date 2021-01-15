import React from 'react';

export default function FeedbackOptions({good, neutral, bad}) {
        return (
        <div>
            Buttons
            <button type='increment' onClick={good}>
                Good</button>
            <button type='increment' onClick={neutral}>
                Neutral</button>
            <button type='increment' onClick={bad}>
                Bad</button>
        </div>
    );
};
