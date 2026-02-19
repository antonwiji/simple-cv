import MultiInputField from "@/components/MultiInputField";
import { useFieldArray } from "react-hook-form";

const DescItem = ({ control, register, index }) => {

    const {
        fields: discFields,
        append: appendDisc,
        remove: removeDisc
    } = useFieldArray({
        control,
        name: `workExp.${index}.workDisc`
    });

    return (
        <div>
            {
                    discFields?.map((d, indexWork) => (
                    <MultiInputField
                        key={`workDisc-${indexWork}`}
                        {...register(`workExp.${index}.workDisc.${indexWork}`)}
                        onRemoveField={() => {
                            removeDisc(indexWork)
                        }}
                    />
                ))
            }
            <div onClick={() => appendDisc(" ")} className="flex justify-center bg-gray-200 hover:bg-gray-300 rounded cursor-pointer w-full">
                +
            </div>
        </div>
    )
}

export default DescItem