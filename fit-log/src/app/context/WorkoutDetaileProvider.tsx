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
    count: number
    setCount: Dispatch<SetStateAction<number>>
}
export const workContext = createContext<WorkoutContext>({
    addPlan: [],
    setAddPlan:() => {},
    saveFor: [],
    setSaveFor: () => {},
    count: 0,
    setCount: () => {}
})

const WorkoutDetaileProvider = ({children}:WorkourChildren) => {
    const [count, setCount] = useState<number>(0)
    const [addPlan, setAddPlan] = useState<WorkoutDataType[]>([])
    const [saveFor, setSaveFor] = useState<WorkoutDataType[]>([])
    const shearedData = {
        addPlan,
        setAddPlan,
        saveFor,
        setSaveFor,
        count,
        setCount
    }
    return (
        <workContext.Provider value={shearedData}>
            {children}
        </workContext.Provider>
    );
};

export default WorkoutDetaileProvider;