import { useState , useEffect} from "react"

export default function QuestionTimer({timeout,onTimeout, mode}){
    const[remainingTime, setRemainingTime] = useState(timeout);
    useEffect(()=>{
       const timer = setTimeout(onTimeout, timeout);
            return()=>{
    clearInterval(timer);
  };
    }, // function firse performme hoga after the delay only one time 
        [timeout,onTimeout]);
     
    useEffect(()=>{
   const interval = setInterval(()=>{setRemainingTime
    ((prevRemaingTime)=> prevRemaingTime-100);},100)// function firse performme hoga after the delay repeditly
      return()=>{
    clearInterval(interval);
  };
    },[]);

    

    return<progress id = "question-time" max ={timeout} value={remainingTime} className={mode}/>
}