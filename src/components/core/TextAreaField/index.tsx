"use client";
import {InputFieldProps} from "@/components/core/InputField/InputField";

const Index = (props: InputFieldProps) => {

    return (
        <div className="mb-3">
            <label htmlFor={props.id}>
                <span className="text-sm font-medium text-gray-700"> {props.alt} </span>
                <textarea
                    id={props.id}
                    className="mt-0.5 pl-2 pt-2 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                    rows="4"
                    {...props}
                >
                </textarea>
            </label>
        </div>
    )
}

export default Index