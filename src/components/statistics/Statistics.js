import React from 'react';
import styles from './Statistics.module.css';

export default function Statistics({good, neutral, bad, total, positivePercentage}) {
    const percentGoodFit = positivePercentage ? positivePercentage.toFixed() : 0;

    return (
        <div className={styles.container}>
            <span className={styles.item}>Good: {good}</span>
            <span className={styles.item}>Neutral: {neutral}</span>
            <span className={styles.item}>Bad: {bad}</span>
            <span className={styles.item}>Total: {total}</span>
            <span className={styles.item}>Positive feedback: {percentGoodFit}%</span>
        </div>
    );
};