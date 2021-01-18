import React, { Component } from 'react';
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Statistics from '../statistics/Statistics';
import styles from './App.module.css';

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleGood = () => {
        this.setState({
            good: this.state.good + 1
        });
    };

    handleNeutral = () => {
        this.setState({
            neutral: this.state.neutral + 1
        })
    };

    handleBad = () => {
        this.setState({
            bad: this.state.bad + 1 
        })
    };

    countTotalFeedback() {
        return (this.state.good + this.state.neutral + this.state.bad)
    };

    countPositiveFeedbackPercentage() {
        return (this.state.good * 100) / (this.state.good + this.state.neutral + this.state.bad)
    };

    render() {
        return (
            <div className={styles.container}>
                <h2 className={styles.tytle}>Please leave feedback</h2>
                <FeedbackOptions good={this.handleGood} neutral={this.handleNeutral} bad={this.handleBad} />
                <h2 className={styles.tytle}>Statistics</h2>
                {this.countTotalFeedback() ? (
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />) : (<span className={styles.noFeedback}>No feedback given</span>)}
            </div>
        );
    };
};