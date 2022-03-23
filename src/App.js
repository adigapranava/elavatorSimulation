import './App.css';
import {useState,useEffect} from 'react';
import LiftPassage from './components/LiftPassage';
import Buttons from './components/Buttons';

function App() {
  const numberOfElevators = 3;
  const noOfFloors = 15;
  const [lift1, setLift1] = useState(0);

  // direction == True =>up else down
  const getRequest = (floorNumber, direction, destination)=>{
    console.log("request from", floorNumber, "to", destination);
  }

  // useEffect(()=>{
  //   if(lift1)
  // }, [lift1])

  // useEffect(()=>{
  //     const interval = setInterval(()=>{
  //       setLift1((lift1) => (lift1+1)%noOfFloors);
  //       console.log("sdcsd alsckad", lift1);
  //     }, 3000); 

  //     return ()=> clearInterval(interval);
  // },[])
  // let renderElevators = ()=>{

  //   var rows = [];
  //   for(var i=0; i<numberOfElevators; i++){
  //     rows.push(<LiftPassage numberOfFoors={noOfFloors} key={i}/>)
  //   }
  //   return rows;
  // }

  return (
    <div className="App">
      <div className="building">
        <Buttons 
          noOfFloors={noOfFloors} 
          getRequest={getRequest}
          refs="buttons"
          />

        <LiftPassage 
          noOfFoors={noOfFloors} 
          key={1}
          liftPos={lift1}/>
      </div>
    </div>
  );
}

export default App;
