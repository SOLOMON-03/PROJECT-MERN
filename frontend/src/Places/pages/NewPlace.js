import React from "react";
import Input from "../../UIComponent/Input";
import { VALIDATOR_REQUIRE } from "../../Utils/Validators";

export default function NewPlace() {
    return (
        <div className="flex justify-center mt-10 ">
            <form className="bg-teal-500 w-[32rem] p-3 rounded-xl shadow-lg shadow-black ">
                <Input
                    element="input"
                    type="text"
                    label="Title"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please Enter a valid title!"
                />
            </form>
        </div>
    );
}
