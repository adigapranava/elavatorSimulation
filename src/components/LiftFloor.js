function LiftFloor({arrived, liftHere}) {
    return (
        <div className={arrived ? "lift-floor arrived": (liftHere ? "lift-floor lift-here": "lift-floor")}>
        </div>
    );
}

export default LiftFloor;