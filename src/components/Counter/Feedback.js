// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import FeedbackOptions from "./FeedbackOptions";
// import Statistics from "./Statistics";
// import './Feedback.css';

// class Counter extends Component {
//     static defaultProps = {
//         initialValueGood: 0,
//         initialValueNeutral: 0,
//         initialValueBad: 0,
//         initialValueTotal: 0,
//         initialValuePercentage: 0,
//     };

//     static propTypes = {
//         initialValueGood: PropTypes.number.isRequired,
//         initialValueNeutral: PropTypes.number.isRequired,
//         initialValueBad: PropTypes.number.isRequired,
//         initialValueTotal: PropTypes.number.isRequired,
//         initialValuePercentage: PropTypes.number.isRequired,
//     };

//     state = {
//         valueGood: this.props.initialValueGood,
//         valueNeutral: this.props.initialValueNeutral,
//         valueBad: this.props.initialValueBad,
//         valueTotal: this.props.initialValueTotal,
//         valuePercentage: this.props.initialValuePercentage,
//     };
    
//     handleGood = () => {
//         this.setState(prevState => ({
//             valueGood: prevState.valueGood +1, 
//         }));
//         this.countTotalFeedback();
//         this.countPositiveFeedbackPercentage();
//     };

//     handleNeutral = () => {
//         this.setState(prevState => ({
//             valueNeutral: prevState.valueNeutral + 1,
//         }));
//         this.countTotalFeedback();
//         this.countPositiveFeedbackPercentage();
//     };
//     handleBad = () => {
//         this.setState(prevState => ({
//             valueBad: prevState.valueBad + 1,
//         }));
        
//         this.countTotalFeedback();
//         this.countPositiveFeedbackPercentage();   
//     };

//     countTotalFeedback = () => {
//        this.setState(prevState => ({
//             valueTotal: prevState.valueTotal + 1,
//         }));
//    } 
    
//     countPositiveFeedbackPercentage = () => {
//          this.setState(prevState => ({
//             valuePercentage: Math.round(prevState.valueGood / prevState.valueTotal * 100),
//         }));
//     }
//     render() {
//         return (
//             <div className="Feedback">
               
//                 <FeedbackOptions
//                     onGood={this.handleGood}
//                     onNeutral={this.handleNeutral}
//                     onBad={this.handleBad}
//                     />
                
//                 <Statistics
//                     Good={this.state.valueGood}
//                     Neutral={this.state.valueNeutral}
//                     Bad={this.state.valueBad}
//                     Total={this.state.valueTotal}
//                     Percentage={this.state.valuePercentage}
//                     />
        
//                 </div>
//         )
//     }
// }

// export default Counter;