import {useReducer} from "react"


const inputReducer = (state,action) => {
    if(action.type === "INPUT"){
        return {value:action.value, isBlur:state.isBlur}
    }else if(action.type === "BLUR"){
        return {isBlur:true, value: state.value}
    }else if(action.type === "RESET"){
        return {value:"", isBlur:false}
    }
    return {}
}

const useInput = (validate) =>{

    const [inputState, inputDispatch] = useReducer(inputReducer, {value:"", isBlur:false})

    const valueChangeHandler = e => {
        inputDispatch({type:"INPUT", value:e.target.value})
    }
    
    const blurChaneHandler = () => {
        inputDispatch({type:"BLUR"})
    }

    const reset = () => {
        inputDispatch({type:"RESET"})
    }

    const isValueValid = validate(inputState.value);
    const isInpInvalid = !isValueValid && inputState.isBlur


    return {
        value:inputState.value,
        isValueValid,
        isBlur : inputState.isBlur,
        isInpInvalid,
        valueChangeHandler,
        blurChaneHandler,
        reset
    }
};

export default useInput;