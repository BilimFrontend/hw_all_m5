const initialState = {
    count: 0
}


export default function (state = initialState, action) {
    switch (action.type) {
        case "INCREMENT" : return {count: state.count +1}
        case "DECREMENT" : return {count: state.count -1}
        case "PLUS_TEN" : return {count: state.count +10}
        case "MINUS_TEN" : return {count: state.count -10}
        case "RESET" : return {count: state.count = 0}
    }
    return state
}