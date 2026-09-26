'use client'
import { FaRegBookmark } from "react-icons/fa";
import { WorkoutDataType } from "../types/fitDataType";
import { useContext } from "react";
import { workContext } from "../context/WorkoutDetaileProvider";
import { toast } from "react-toastify";
interface SaveButtonProps {
    data: WorkoutDataType
}

const SaveForButton = ({data}:SaveButtonProps) => {
    const {saveFor, setSaveFor} = useContext(workContext)
    const handleSaveButton = (id:number) =>{
        if(saveFor.some(save => save.id === id)) {
            toast.error('Already plan saved')
            return
        }
        setSaveFor([...saveFor, data])
        toast.success("Save For Plan")
    }
    return (
        <div>
            <button onClick={()=>handleSaveButton(data.id)} className="border border-zinc-800 hover:border-zinc-600 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-300 font-semibold py-3 px-5 rounded-lg text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95">
                <FaRegBookmark className="w-4 h-4 text-zinc-400" />
                <span>Save for later</span>
              </button>
        </div>
    );
};

export default SaveForButton;