import './App.css';
import {useState,useEffect} from 'react';
import LiftPassage from './components/LiftPassage';
import Buttons from './components/Buttons';

function App() {
  const numberOfElevators = 3;
  const noOfFloors = 15;
  var v = JSON.parse(localStorage.getItem("arr"));
  const [toBeServed, setToBeServed] = useState(v?v:[]);
  let toBeServedD = v?v:[];

  const [curPos, setCurPos] = useState(0);
  var curPosD = curPos;

  const [arrived, setArrived] = useState(noOfFloors);
  const [state, setState] = useState("stopped");
  const [dir, setDir] = useState(null);
  var time = 3000;

  function setCurPosD(val) {
    setCurPos(val);
    curPosD = val;    
  }

  function setToBeServedD(itm){
    setToBeServed(itm);
    toBeServedD = itm;
    localStorage.setItem("arr", JSON.stringify(itm));
  }


  // direction == True =>up else down
  const getRequest = (floorNumber, direction, destination)=>{
    // if(state == "stopped"){ 
      // console.log("request from", floorNumber, "to", destination, state);
      var totalWaitingTime = Math.abs(curPosD-floorNumber);
      setToBeServedD([...toBeServedD, floorNumber, destination])
      setState("moving");
    // }else{
    //   if(toBeServedD[0]>curPos){ // lift moving UP
    //     if(direction && toBeServedD[0] > floorNumber){ //floor no is on my way  

    //     }
    //   }else{ //lift moving down

    //   }
    // }
  }

  var timeLoop = () =>{
    setToBeServedD(JSON.parse(localStorage.getItem("arr")));
    console.log("toBeServedDinTL", toBeServedD, toBeServed);
    if(toBeServedD.length > 0 && curPosD === toBeServedD[0]){
      console.log("ARRIVED!!!", toBeServedD);
      setArrived(curPosD);
      setToBeServedD(toBeServedD.slice(1));
      console.log("ARRIVED2!!!", toBeServedD);
      time = 5000;
      setTimeout(timeLoop, time);
      return;
    }
    else if(toBeServedD.length > 0){
      setArrived(noOfFloors);
      setCurPosD(curPosD + parseInt((toBeServedD[0] - curPosD) / Math.abs((toBeServedD[0] - curPosD))));
      setDir(parseInt((toBeServedD[0] - curPosD) / Math.abs((toBeServedD[0] - curPosD))) == 1)
      // console.log(curPosD, toBeServed[0]);
      time = 3000;
      setTimeout(timeLoop, time);
      return;
    }else{
      setState("stopped");
    }
  }

  useEffect(()=>{
    console.log(state);
    if(state == "moving"){
      if(toBeServedD.length > 0 && curPosD != toBeServedD[0]){
      // console.log("called");
      setTimeout(timeLoop, 3000);
      }else{
        timeLoop();
      }
    }else{
      setArrived(noOfFloors);
      setDir(null);
    }
  }, [state])

  useState(()=>{
    console.log("cld");
    localStorage.setItem("arr", JSON.stringify([]));
  },[])
  
  return (
    <div className="App">
      <div className="building">
        <Buttons 
          noOfFloors={noOfFloors} 
          nextFloor = {toBeServedD[0]}
          arrived = {arrived}
          getRequest={getRequest}
          refs="buttons"
          />

        <LiftPassage 
          noOfFoors={noOfFloors} 
          arrived = {arrived}
          key={1}
          liftPos={curPos}/>
      </div>
    </div>
  );
}

export default App;
