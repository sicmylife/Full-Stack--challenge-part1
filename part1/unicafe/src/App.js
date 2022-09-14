import React, { useState } from "react";
import Average from "./components/Average";
import PositiveAverage from "./components/PositiveAverage";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

 const StatisticsLine = ({text, value}) =>(
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>

 )

const Statistics = ({good,neutral,bad}) => {
  const all = good + neutral + bad
  const average = (good-bad) / all
  const positive = `${(good/all) * 100} %`

  return all > 0 ? (
   <>
<h2>Statistics</h2>
<table>
  <tbody>
<StatisticsLine text='good' value={good}/>
<StatisticsLine text='neutral' value={neutral}/>
<StatisticsLine text='bad' value={bad}/>
<StatisticsLine text='all' value={all}/>
<StatisticsLine text='average' value={average}/>
<StatisticsLine text='positive' value={positive}/>

  </tbody>
</table>

</>
  ) : (
    <p>No feedback</p>
    )
  }


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const increment = (state, setState) => () => setState(state+1)

  return (
    <>

      <h1>Give feedback</h1>
      <Button onClick={increment(good,setGood)} text="Good" />
      <Button onClick={increment(neutral,setNeutral)} text="Neutral" /> 
      <Button  onClick={increment(bad,setBad)}  text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />

    </>
  );
};

export default App;
