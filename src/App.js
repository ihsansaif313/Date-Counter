import { useState } from "react";

export default function App() {
  return <DateCounter />;
}
function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("FEB 5 2025");
  date.setDate(date.getDate() + count);
  
 

  return (
    <>
      {/* Floating bubbles */}
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      
    <div className="counter-container">
      <div className="control">
        <button className="button" onClick={() => setStep((s) => s - 1)}>
          -
        </button>
        <span className="value-display">Step: {step}</span>
        <button className="button" onClick={() => setStep((s) => s + 1)}>
          +
        </button>
      </div>
      
      <div className="control">
        <button className="button" onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <span className="value-display">Count: {count}</span>
        <button className="button" onClick={() => setCount((c) => c + step)}>
          +
        </button>
      </div>
      
      <p className="date-message">
        <span>
          {count === 0 ? "Today is " : count > 0 ? `${count} days from today will be` : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <h3>IHSAN SAIF</h3>
    </div>
    </>
  );
}