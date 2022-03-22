import Button from "./Button";

const Buttons = ({noOfFloors, getRequest}) => {
    let renderButtons = ()=>{
        var rows = [];
        for(var i=0; i<noOfFloors; i++){
            rows.push(
                <Button 
                    key={i}  
                    floorNumber={noOfFloors-1- i} 
                    totalFloors={noOfFloors - 1}
                    getRequest={getRequest}
                    />)
        }
        return rows ;
    }

    return (  
        <div className="lift-passage buttons">
            {renderButtons()}
        </div>
    );
}
 
export default Buttons;