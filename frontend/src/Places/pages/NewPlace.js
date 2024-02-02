import React, { useCallback, useReducer } from "react";
import Input from "../../UIComponent/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../Utils/Validators";
import Button from "../../UIComponent/Button";

const formReducer = (state, action)=>{
    switch(action.type){
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for(const inputId in state.inputs){
                if(inputId === action.inputId){
                    formIsValid = formIsValid && action.isValid;
                }
                else{
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs:{
                    ...state.inputs,
                    [action.inputId] : { value: action.value, isValid : action.isValid}
                },
                isValid: formIsValid
            }
        default:
            return state
    }
}
export default function NewPlace() {
    const [formstate, dispatch] = useReducer(formReducer,{
        inputs:{
        title:{
            value: '',
            isValid: false
        },
        description:{
            value: '',
            isValid: false
        },
    },
    })
    const inputHandler  = useCallback((id, value, isValid) =>{
        dispatch({type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id});
    },[])
    return (
        <div className="flex justify-center mt-10 ">
            <form className="bg-teal-800 w-[32rem] p-3 rounded-xl shadow-lg shadow-black ">
                <Input
                    id="title"
                    element="input"
                    type="text"
                    label="Title"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please Enter a valid title!"
                    onInput={inputHandler}
                />
                <Input
                    id="description"
                    element="textarea"
                    label="Description"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Please Enter a valid Description atleast 5 Characters!"
                    onInput={inputHandler}
                />
                <Button type="submit" disabled={!formstate.isValid} >Add Place</Button>
            </form>
        </div>
    );
}
