// import React from "react";
// import Counter from "./Counter/Feedback";


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       <Counter
//         initialValueGood={0}
//         initialValueNeutral={0}
//         initialValueBad={0}
//         initialValueTotal={0}
//         initialValuePercentage={0}/>
//     </div>
//   );
// };

import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedbackOptions from "./Counter/FeedbackOptions";
import Statistics from "./Counter/Statistics";
import Section from "./Counter/Section";
import './Counter/Feedback.css';

export class App extends Component {
    static defaultProps = {
        total: 0,
        percentage: 0,
    };

    static propTypes = {
      total: PropTypes.number.isRequired,
      percentage: PropTypes.number.isRequired,
    };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    };
    
    handleGood = () => {
        this.setState(prevState => ({
            good: prevState.good +1, 
        }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    };

    handleNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    };
    handleBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
        
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();   
    };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const percentage = Math.round(good / this.countTotalFeedback() * 100);
    return percentage;
  };

  render() {
      const { good, neutral, bad } = this.state;
      return (
          <div className="feedback">
                <Section title="Please leave feedback">
                  <FeedbackOptions
                    onGood={this.handleGood}
                    onNeutral={this.handleNeutral}
                    onBad={this.handleBad}
                  />
                
                  <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback()}
                    percentage={this.countPositiveFeedbackPercentage()}
                  />
                </Section>  

               
          </div>
        )
    }
}