import './App.css';

import React, {useState} from 'react'

function App() {
  const[input, setInput]= useState('')
  const onClickHandler= (value)=>{
    
    if(value ===  'C'){
      setInput('')
    }
    else if(value ===  '<'){
      setInput(input.slice(0, -1))
    }

    else if(value === '=')
    {
      setInput(eval(input))
    }
    else{setInput((preValue)=> preValue+ value)}

  }
  return (
    <div className="container">
      <div className="content">
        {/* <h1 >{input}</h1> */}
        <input type="submit" value={input}  />
        <div>
          <button onClick= {() => onClickHandler('C')}>C</button>
          <button onClick= {() => onClickHandler('<')}>&lt;</button>
          <button onClick= {() => onClickHandler('%')}>%</button>
          <button onClick= {() => onClickHandler('/')}>/</button>
        </div>
        <div>
          <button onClick= {() => onClickHandler('1')}>1</button>
          <button onClick= {() => onClickHandler('2')}>2</button>
          <button onClick= {() => onClickHandler('3')}>3</button>
          <button onClick= {() => onClickHandler('*')}>*</button>
        </div>
        <div>
          <button onClick= {() => onClickHandler('4')}>4</button>
          <button onClick= {() => onClickHandler('5')}>5</button>
          <button onClick= {() => onClickHandler('6')}>6</button>
          <button onClick= {() => onClickHandler('+')}>+</button>
        </div>
        <div>
          <button onClick= {() => onClickHandler('7')}>7</button>
          <button onClick= {() => onClickHandler('8')}>8</button>
          <button onClick= {() => onClickHandler('9')}>9</button>
          <button onClick= {() => onClickHandler('-')}>-</button>
          </div>
          <div>
          <button onClick= {() => onClickHandler('0')}>0</button>
          <button onClick= {() => onClickHandler('00')}>00</button>
          <button onClick= {() => onClickHandler('.')}>.</button>
          <button onClick= {() => onClickHandler('=')}>=</button>
          </div>
      </div>
    </div>
  );
}

export default App;
