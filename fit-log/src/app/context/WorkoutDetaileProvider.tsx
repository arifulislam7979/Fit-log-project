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
    addCount: number
    setAddCount: Dispatch<SetStateAction<number>>
    saveCount: number
    setSaveCount: Dispatch<SetStateAction<number>>
    
}
export const workContext = createContext<WorkoutContext>({
    addPlan: [],
    setAddPlan:() => {},
    saveFor: [],
    setSaveFor: () => {},
    addCount: 0,
    setAddCount: () => {},
    saveCount: 0,
    setSaveCount: () => {}
    
})

const WorkoutDetaileProvider = ({children}:WorkourChildren) => {
    const [addCount, setAddCount] = useState<number>(0)
    const [saveCount, setSaveCount] = useState<number>(0)
    const [addPlan, setAddPlan] = useState<WorkoutDataType[]>([])
    const [saveFor, setSaveFor] = useState<WorkoutDataType[]>([])
    const shearedData = {
        addPlan,
        setAddPlan,
        saveFor,
        setSaveFor,
        addCount,
        setAddCount,
        saveCount,
        setSaveCount,
        
    }
    return (
        <workContext.Provider value={shearedData}>
            {children}
        </workContext.Provider>
    );
};

export default WorkoutDetaileProvider;