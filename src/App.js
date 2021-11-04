import { useState, useEffect } from 'react'
import Quiz from './components/Quiz'
import Timer from './components/Timer'
import {data, items} from './data'

function App() {
  const [rightquestionNumber, setRightQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarnedMoney] = useState('$0')

  

  useEffect(()=>{
    rightquestionNumber >1 &&
    setEarnedMoney(items.find((item)=> item.id === rightquestionNumber -1).amount)
  },[rightquestionNumber])




  return (
    <>
    <div className='App'>
      <div className='main'>
        {stop ? (
          <h1 className='endText'>You earned: {earned}</h1>
        ) : (
          <>
            
            <div className='top'>
              <div className='timer'>{
                <Timer 
                setStop={setStop} 
                rightquestionNumber={rightquestionNumber}/>
              }</div>
            </div>

            <div className='bottom'>
              <Quiz
                data={data}
                setStop={setStop}
                rightquestionNumber={rightquestionNumber}
                setRightQuestionNumber={setRightQuestionNumber}
              />
            </div>
            <p className='footer'>©Hazarcan Nas</p>
          </>
          
        )}
      </div>

      
      <div className='pyramid'>
        <ul className='moneyList'>
          {items.map((item) => (
            <li
              className={
                rightquestionNumber === item.id ? 'listItem active' : 'listItem'
              }
            >
              <span className='listItemNumber'>{item.id}</span>
              <span className='listItemAmount'>{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
     
    </div>
    
    </>
  )
}

export default App
