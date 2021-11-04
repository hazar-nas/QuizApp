import React ,{useState, useEffect} from 'react'
import useSound from 'use-sound'
import  correct from '../assets/correct.wav'
import wrong from '../assets/false.wav'

 const Quiz = ({data, setStop, rightquestionNumber, setRightQuestionNumber}) => {

  const [question, setQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [className, setClassName] = useState('answer ')
  const [correctAnswer] = useSound(correct)
  const [wrongAnswer] = useSound(wrong)

  
    
  const delay = (duration, callback)=>{
    setTimeout(() =>{
        callback()
    },duration)      
}

  const handleClick =(answer)=>{
      setSelectedAnswer(answer)
      setClassName('answer active')
    
      delay(1000, ()=>
        setClassName( answer.correct ? 'answer correct': 'answer wrong')
      )

     delay(2500, ()=>{
         if(answer.correct){
              correctAnswer()
             delay(2000, ()=>{
                setRightQuestionNumber((prev)=> prev + 1)
                setSelectedAnswer(null)
             })
         }else{
              wrongAnswer()
             delay(2500, ()=>{
                 setStop(true)
             })  
         }
     })
   }


  useEffect(()=>{
   setQuestion(data[rightquestionNumber-1])
  },[data, rightquestionNumber])

  

    return (
        <div className='both'>
            <div className='question'> {question?.query}</div>
            <div className='answers'>
                {question?.answers.map((answer)=>(
                    <div 
                        className={selectedAnswer === answer ? className:'answer'}
                        onClick={()=>handleClick(answer)} >{answer.text} 
                    </div>
                ))}   
            </div>
        </div>
    )
}


export default Quiz