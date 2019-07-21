import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const max = (votes) => (
  Object.keys(votes).reduce((max, curr ) => votes[curr] > votes[max] ? curr : max, 0)
);
const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});

  const getNext = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length))
  };

  const addVote = () => {
    if (!votes.hasOwnProperty(selected)) {
      votes[selected] = 0
    }
    setVotes({...votes, [selected]: votes[selected] + 1});
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <p>has {votes[selected] || 0} votes</p>
      <p><button onClick={ (e) => addVote() }>vote</button> <button onClick={ (e) => getNext() }>next anecdote</button></p>
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[max(votes)]}</p>
      <p>has {votes[max(votes)] || 0} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
