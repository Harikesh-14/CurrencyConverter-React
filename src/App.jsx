import { useState } from 'react'
import './App.css'
import InputBox from './components/inputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const conversion = () => {
        setConvertedAmount(amount * currencyInfo[to])
    }

    return (
        <>
            <InputBox></InputBox>
        </>
    )
}

export default App
