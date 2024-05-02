import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  amountDisable = false,
  currencyDisable = false,
  className = " ",
}) {
  const amountId = useId();
  return (
    <div className={`flex bg-slate-400 p-3 rounded-lg text-sm mb-20 mt-5 ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountId} className="text-black/40 mb-2 ">
          {label}
        </label>
        <input
          id={amountId}
          className="border-2 rounded-lg px-3 py-1 w-full outline-none"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className=" flex ">
        <p className="text-black mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-3 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
