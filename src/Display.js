import { useState, useEffect } from "react"

const Display = (props) => {

    const [total, setTotal] = useState(0)
    const [trans, setTrans] = useState([])

    

    useEffect(() => {
        setTrans(trans.concat({props}))
        if(props.choice === 'credit'){
            setTotal(Number(total) + props.amount)
        }else if(props.choice === 'debit'){
            setTotal(Number(total) - props.amount)
        }
    }, [props.amount])
    
    return(
        <div>
            {"$ " + total}
            <table>
                <caption>
                    Transactions
                </caption>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                {(trans.map(x => 
                    (x.props.amount !== '' && x.props.choice === 'credit') ? 
                (
                <tr className="transaction-credit">
                    <td>{x.props.date}</td>
                    <td>{x.props.description}</td>
                    <td>{"$" + x.props.amount}</td>
                </tr>
                ) : (x.props.amount !== '' && x.props.choice === 'debit') ? (
                    <tr className="transaction-debit">
                    <td>{x.props.date}</td>
                    <td>{x.props.description}</td>
                    <td>{"$" + x.props.amount}</td>
                </tr> 
                 ) : null))}
                </tbody>
            </table>
        </div>
    )
}

export default Display