import {useState, useEffect} from 'react'


const Timer = ({setStop, rightquestionNumber}) => {

    const [timer, setTimer] = useState(25)

    

    useEffect(()=>{
        if(timer === 0  ) return setStop(true)

        const interval = setInterval(()=>{
            setTimer((prev)=> prev -1)
        }, 1000)

        return ()=> clearInterval(interval)

    },[setStop, timer])


    useEffect(()=>{
        setTimer(25)
    },[rightquestionNumber])



    return timer
}

export default Timer
