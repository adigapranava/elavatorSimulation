function LiftFloor({arrived, liftHere}) {
    return (
        <div className={liftHere ? "lift-floor lift-here": "lift-floor"}>
            {arrived ? <div><input type="text"></input><button>submit</button></div>: <></>}
        </div>
    );
}

export default LiftFloor;