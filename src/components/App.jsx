import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';

export default function App() {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'good':
        setGood(value + 1);
        break;

      case 'neutral':
        setNeutral(value + 1);
        break;

      case 'bad':
        setBad(value + 1);
        break;

      default:
        return;
    }

    // this.setState(prevState => {
    //   return { [name]: prevState[name] + 1 };
    // });
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    console.log(total);
    return total;
  };

  const countPositiveFeedbackPercentage = total => {
    const positivePersantage = Math.round((good / total) * 100);
    console.log(positivePersantage);
    return positivePersantage;
  };

  const total = countTotalFeedback();
  const positivePersantage = countPositiveFeedbackPercentage(total);
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
        React-hw-04-feedback
      </div>
      <div>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={Object.keys({ good, bad, neutral })}
              onLeaveFeedback={handleIncrement}
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
