import InputField from "@/components/core/InputField";
import {MultiInputFieldProps} from "@/components/MultiInputField/MultiInputField";

const MultiInputField = ({onRemoveField, panelClosed = true, ...props}: MultiInputFieldProps) => {

    return (
        <div className="relative">
            {panelClosed &&
                <div className={"absolute flex justify-center items-center w-6 h-6 bottom-5 right-2 border-red-700 bg-red-300 hover:bg-red-500 hover:cursor-pointer border-2 rounded-full"}>
                    <span onClick={onRemoveField} className="text-lg font-bold text-red-700">X</span>
                </div>
            }
            <InputField
                {...props}
            />
        </div>
    )
}

export default MultiInputField