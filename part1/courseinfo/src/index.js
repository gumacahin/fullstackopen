import React from 'react'
import ReactDOM from 'react-dom'

const Part = ({name, exercises}) => (
  <p>{name} {exercises}</p>
);

const Content = ({parts}) => (
  <div>{parts.map((part) => <Part {...part} />)}</div>
);

const Header = ({course}) => (
  <h1>{course}</h1>
);

const Total = ({parts}) => (
  <p>Number of exercises {parts.reduce((acc, {exercises}) => acc + exercises, 0)}</p>
);

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header {...course} />
      <Content {...course} />
      <Total {...course} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))
