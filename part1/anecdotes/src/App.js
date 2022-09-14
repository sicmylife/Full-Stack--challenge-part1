import React, { useState } from 'react'

const Anecdote = ({anecdote,votes})  => (
<>
{anecdote}
<br />
has {votes} votes



</>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))



  const handleRandomise = () =>
    setSelected(Math.floor(Math.random()* anecdotes.length))

    const handleVote = () =>{
      const copy = [...votes]
      copy[selected]++
      setVotes(copy)

    }

    const most = votes.indexOf(Math.max(...votes))
   

  return (
    <div>
      <h1>anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]}/>   
      <button onClick={handleVote}>vote</button> 
      <button onClick={handleRandomise}>Next anecdote</button> 
      <h2>anecdotes with the most votes</h2>
      <Anecdote anecdote={anecdotes[most]} votes={votes[most]}/>   
   
    </div>
  )
}





export default App