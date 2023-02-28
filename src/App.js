import React, { useState } from 'react';
import './App.css';


const App = () => {

  const [result, setResult] = useState("");

  const handleOnClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const handleOnChange = () => {
    setResult(result);
  }

  const clear = () => {
    setResult("");
  }

  const calculate = () => {
    try {
      setResult(eval(result.toString()));
    } catch (error) {
      setResult("Error");
    }
  }


  return (
    <>
      <div className="container">
        <div className="display">
          <input value={result} onChange={handleOnChange} />
        </div>
        <div className="keypad">
          <div className='button-row-one'>
            <button onClick={clear} className='clear color_three'>AC</button>
            <button name='%' className='color_three' onClick={handleOnClick}>%</button>
            <button name='/' className='color_one' onClick={handleOnClick}>/</button>
          </div>
          <div className='button-row-two'>
            <button name='7' className='color_two' onClick={handleOnClick}>7</button>
            <button name='8' className='color_two' onClick={handleOnClick}>8</button>
            <button name='9' className='color_two' onClick={handleOnClick}>9</button>
            <button name='*' className='color_one' onClick={handleOnClick}>x</button>
          </div>
          <div className='button-row-three'>
            <button name='4' className='color_two' onClick={handleOnClick}>4</button>
            <button name='5' className='color_two' onClick={handleOnClick}>5</button>
            <button name='6' className='color_two' onClick={handleOnClick}>6</button>
            <button name='-' className='color_one' onClick={handleOnClick}>-</button>
          </div>
          <div className='button-row-four'>
            <button name='1' className='color_two' onClick={handleOnClick}>1</button>
            <button name='2' className='color_two' onClick={handleOnClick}>2</button>
            <button name='3' className='color_two' onClick={handleOnClick}>3</button>
            <button name='+' className='color_one' onClick={handleOnClick}>+</button>
          </div>
          <div className='button-row-five'>
            <button name='0' className='zero color_two' onClick={handleOnClick}>0</button>
            <button name='.' className='color_two' onClick={handleOnClick}>.</button>
            <button onClick={calculate} className='color_one equal-to'>=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
