import '../Styles/LiftPassage.css'
import LiftFloor from './LiftFloor';

const LiftPassage = ({noOfFoors, liftPos }) => {
    let renderFloors = ()=>{
        var rows = [];
        for(var i=0; i<noOfFoors; i++){
            rows.push(
                <LiftFloor 
                    key={i}  
                    arrived={false}
                    liftHere={noOfFoors-1-i == liftPos}
                    />)
        }
        return rows ;
    }

    return ( 
        <div className="lift-passage passage">
            {renderFloors()}
        </div>
     );
}
 
export default LiftPassage;