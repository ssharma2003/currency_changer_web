import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyinfo = useCurrencyInfo(from)
  const options = Object.keys(currencyinfo)

  const swap =()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert=()=>{
    setConvertedAmount(amount * currencyinfo[to])

  }
  return (
    <div
            className="w-full h-screen items-center bg-cover "
            style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)),url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                height: "60vh",
                width: "40vw",
                borderRadius: "10px",
            }}>
            <div >
                <div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();  
                            convert(); 
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                
                                label="From"  
                                amount={amount}
                                currencyOptions={options}
                                onAmountChange={(amount) => setAmount(amount)}
                                onCurrencyChange={(currency) => setAmount(amount)}
                                selectCurrency={from}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 "                             
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-20 mb-4">
                            <InputBox
                                label="To"       
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}       
                                amountDisable={true}                 
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App
