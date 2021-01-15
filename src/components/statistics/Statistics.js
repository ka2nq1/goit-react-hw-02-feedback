import React from 'react';

export default function Statistics({good, neutral, bad, total, positivePercentage}) {
    const percentGoodFit = positivePercentage ? positivePercentage.toFixed() : 0;

    return (
        <div>
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
            <span>Total: {total}</span>
            <span>Positive feedback: {percentGoodFit}%</span>
        </div>
    );
};