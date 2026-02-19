"use client";
import {InputFieldProps} from "@/components/core/InputField/InputField";

const Index = (props: InputFieldProps) => {

    return (
        <div className="mb-3">
            <label htmlFor={props.id}>
                <span className="text-sm font-medium text-gray-700"> {props.placeholder} </span>
                <input {...props} type={props.type} id={props.id} className="mt-0.5 pl-2 h-8 w-full rounded border-gray-300 shadow-sm sm:text-sm"/>
            </label>
        </div>
    )
}

export default Index