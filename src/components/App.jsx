import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    const name = event.target.name;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = total => {
    const positivePersantage = Math.round((this.state.good / total) * 100);
    return positivePersantage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    console.log(total);
    const positivePersantage = this.countPositiveFeedbackPercentage(total);
    console.log(positivePersantage);
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100px',
            marginBottom: '20px',
            backgroundColor: '#484890',
            color: '#b8ca9a',
          }}
        >
          React-hw-02-feedback
        </div>
        <div>
          <Section
            title="Please leave feedback"
            children={
              <FeedbackOptions
                options={Object.keys(this.state)}
                onLeaveFeedback={this.handleIncrement}
              />
            }
          />
          <Section
            title="Statistics"
            children={
              total === 0 ? (
                <Notification message="There is no feedback" />
              ) : (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positivePersantage={positivePersantage}
                />
              )
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
