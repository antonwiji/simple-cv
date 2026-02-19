import {TCardGroup} from "@/components/CardGroup/CardGroup";

const CardGroup = ({title, onRemoveField, panelClosed = false, children}: TCardGroup) => {
    return (
        <div className="relative rounded-md border border-gray-300 p-3 shadow-sm sm:p-6 mb-3">
            { panelClosed &&
            <div className={"absolute flex justify-center items-center w-6 h-6 top-[-10px] right-3 border-red-700 bg-red-300 hover:bg-red-500 hover:cursor-pointer border-2 rounded-full"}>
                <span onClick={onRemoveField} className="text-lg font-bold text-red-700">X</span>
            </div>
            }
            <h2 className="text-lg leading-6 font-bold text-gray-900 mb-3">
                {title}
            </h2>
            {children}
        </div>
    )
}

export default CardGroup