import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const CountPage = () => {

    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    const counter = (countType) => {
        dispatch({
            type: countType
        })
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => counter("INCREMENT")}>+1</button>
            <button onClick={() =>  count > 0 ? counter("DECREMENT") : ""}>-1</button>
            <button onClick={() => counter("PLUS_TEN")}>+10</button>
            <button onClick={() => count > 0 ? counter("MINUS_TEN") : ""}>-10</button>
            <button onClick={() => counter("RESET")}>Reset</button>
        </div>
    );
};

export default CountPage;