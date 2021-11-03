import { useState } from "react"
import Display from "./Display"
import Form from "./Form"

const Savings = () => {
    const [date, setDate] = useState('')
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState('')
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
    <div >
      <form onSubmit={selected}>
        <select id="options" name="options">
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
        <input type="submit"/>
      </form>
      {choice === 'debit' ?
            (<h1>Withdrawal</h1>) : (<h1>Deposit</h1>)}
      <Form onSubmit={onSubmit}/>
      <hr></hr>
      <Display choice={choice} date={date} description={desc} amount={amount} /> 
    </div>
  );
}


export default Savings