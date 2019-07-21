import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const round = (value)  => Math.round(value * 10) / 10;

const Statistic = ({text, value}) => (
  <tr><td>{text}</td><td>{value}</td></tr>
);

const Statistics = ({good, bad, neutral}) => {
  const all = good + bad + neutral;
  const average = (good + (-1 * bad) ) / all;
  const positive = (good / all) * 100;

  if (all === 0) {
    return (
      <p>No feedback given.</p>
    );
  }

  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={round(average)} />
        <Statistic text="positive" value={round(positive) + '%'} />
      </tbody>
    </table>
  );
}

const Button = (props) => {
  return (
    <button {...props} />
  );
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Give Feedback</h2>
      <p>
        <Button onClick={ () => setGood(good + 1) }>Good</Button>
        <Button onClick={ () => setNeutral(neutral + 1) }>Neutral</Button>
        <Button onClick={ () => setBad(bad + 1) }>Bad</Button>
      </p>
      <h2>Statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
