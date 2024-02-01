import React, { useEffect, useReducer } from 'react';

import { validate } from '../Utils/Validators';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH': {
            return {
                ...state,
                isTouched: true
            }
        }
        default:
            return state;
    }
};

const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: '',
        isTouched: false,
        isValid: false
    });
    const {id, onInput} = props;
    const {value, isValid} = inputState;
    useEffect(()=>{
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput]);
    const changeHandler = event => {
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            validators: props.validators
        });
    };

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        });
    };

    const element =
        props.element === 'input' ? (
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
                className={`outline-none p-2 rounded-md mb-3 ${!inputState.isValid ? "outline outline-red-500" : ""}`}
            />
        ) : (
            <textarea
                id={props.id}
                rows={props.rows || 3}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
                className={`outline-none p-2 rounded-md ${!inputState.isValid ? "outline outline-red-500" : ""}`}
            />
        );

    return (
        <div
        className={`flex flex-col gap-3 ${!inputState.isValid ? "text-red-500" : "" }`}
        >
            <label htmlFor={props.id}  className={`text-lg font-semibold text-[#ffd900] ${!inputState.isValid ? "text-red-500" : ""}`}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <p className='-mt-5'>{props.errorText}</p>}
        </div>
    );
};

export default Input;
