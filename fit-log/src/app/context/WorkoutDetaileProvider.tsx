'use client'

import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { WorkoutDataType } from "../types/fitDataType";
import { createContext } from "react";

interface WorkourChildren {
    children: ReactNode
    
}
interface WorkoutContext {
    addPlan: WorkoutDataType[]
    setAddPlan: Dispatch<SetStateAction<WorkoutDataType[]>>
    saveFor: WorkoutDataType[]
    setSaveFor: Dispatch<SetStateAction<WorkoutDataType[]>>
}
export const workContext = createContext<WorkoutContext>({
    addPlan: [],
    setAddPlan:() => {},
    saveFor: [],
    setSaveFor: () => {}
})

const WorkoutDetaileProvider = ({children}:WorkourChildren) => {
    const [addPlan, setAddPlan] = useState<WorkoutDataType[]>([])
    const [saveFor, setSaveFor] = useState<WorkoutDataType[]>([])
    const shearedData = {
        addPlan,
        setAddPlan,
        saveFor,
        setSaveFor
    }
    return (
        <workContext.Provider value={shearedData}>
            {children}
        </workContext.Provider>
    );
};

export default WorkoutDetaileProvider;