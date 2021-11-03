import { useState } from "react"

const Form = (props) => {

    const [amount, setAmount] = useState('')
    const [date, setDate] = useState(Date.now())
    const [description, setDescription] = useState('')

    

    return(
        <div>
            <form onSubmit={props.onSubmit}>
                <label htmlFor="amount">
                    Amount:
                </label>
                <input type="text" name="amount" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                <label>
                    Date:
                </label>
                <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                <label>
                    Description:
                </label>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form