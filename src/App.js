import logo from './logo.svg';
import './App.css';
import Display from './Display';
import { useState } from 'react'
import Form from './Form';

function App() {
  const [date, setDate] = useState('')
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState('')
  const [options, setOption] = useState(["debit", "credit"])
  const [choice, setChoice] =  useState('credit')

  const onSubmit = (e) => {
    e.preventDefault();
    setAmount(Number(e.target.elements.amount.value))  
    setDate(e.target.elements.date.value)
    setDesc(e.target.elements.description.value)
  }

  const selected = (e) => {
    e.preventDefault()
    setChoice(e.target.elements.options.value)
  }

  return (
    <div className="App">
      <form onSubmit={selected}>
        <select id="options" name="options">
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
        <input type="submit"/>
      </form>
      {choice === 'debit' ?
            (<h1>Payment</h1>) : (<h1>Deposit</h1>)}
      <Form onSubmit={onSubmit}/>
      <hr></hr>
      <Display choice={choice} date={date} description={desc} amount={amount} /> 
    </div>
  );
}

export default App;
