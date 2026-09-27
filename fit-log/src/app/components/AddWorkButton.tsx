'use client'
import { FaCalendarPlus } from "react-icons/fa";
import { WorkoutDataType } from "../types/fitDataType";
import { useContext } from "react";
import { workContext } from "../context/WorkoutDetaileProvider";
import { toast } from "react-toastify";

interface AddButtonProps {
    data: WorkoutDataType
}

const AddWorkButton = ({data}: AddButtonProps) => {
    const {addPlan, setAddPlan,} = useContext(workContext)
    const handleWorkButton = (id:number) => {
        if(addPlan.some(plan => plan.id === id)){
          toast.error('Already in your plan');
          return
        }
        if(addPlan.length >= 5){
          toast.error("Today's plan can contain only 5 lifts")
          return
        }

        setAddPlan([...addPlan,data])
        toast.success("Added to today's plan")
        
    }
  return (
    <div>
      <button disabled={addPlan.length >= 5} onClick={()=> handleWorkButton(data.id)} className="bg-[#a3e635] hover:bg-[#86efac] text-black font-bold py-3 px-5 rounded-lg text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95">
        <FaCalendarPlus className="w-4 h-4" />
        <span>{addPlan.length >= 5 ? "Plan Full Today" : "Add to today's plan"}</span>
      </button>
    </div>
  );
};

export default AddWorkButton;
