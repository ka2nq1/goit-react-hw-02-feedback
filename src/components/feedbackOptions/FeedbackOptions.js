import React from 'react';
import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({good, neutral, bad}) {
        return (
        <div>
            <button className={styles.btn} type='increment' onClick={good}>
                Good</button>
            <button className={styles.btn} type='increment' onClick={neutral}>
                Neutral</button>
            <button className={styles.btn} type='increment' onClick={bad}>
                Bad</button>
        </div>
    );
};