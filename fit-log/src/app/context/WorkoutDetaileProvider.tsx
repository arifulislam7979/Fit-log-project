"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  createContext,
  useEffect,
} from "react";
import { WorkoutDataType } from "../types/fitDataType";

interface WorkourChildren {
  children: ReactNode;
}

interface WorkoutContext {
  addPlan: WorkoutDataType[];
  setAddPlan: Dispatch<SetStateAction<WorkoutDataType[]>>;
  saveFor: WorkoutDataType[];
  setSaveFor: Dispatch<SetStateAction<WorkoutDataType[]>>;
  addCount: number;
  saveCount: number;
  addTotalMinutes: number;
  addTotalCalories: number;
  saveTotalMinutes: number;
  SaveTotalCalories: number;
}

export const workContext = createContext<WorkoutContext>({
  addPlan: [],
  setAddPlan: () => {},
  saveFor: [],
  setSaveFor: () => {},
  addCount: 0,
  saveCount: 0,
  addTotalMinutes: 0,
  addTotalCalories: 0,
  saveTotalMinutes: 0,
  SaveTotalCalories: 0,
});

const WorkoutDetaileProvider = ({ children }: WorkourChildren) => {
  const [addPlan, setAddPlan] = useState<WorkoutDataType[]>([]);
  const [saveFor, setSaveFor] = useState<WorkoutDataType[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const localAddPlan = localStorage.getItem("addPlan");
    const localSaveFor = localStorage.getItem("saveFor");

    setTimeout(() => {
      if (localAddPlan) {
        setAddPlan(JSON.parse(localAddPlan));
      }
      if (localSaveFor) {
        setSaveFor(JSON.parse(localSaveFor));
      }
      setIsMounted(true);
    }, 0);
  }, []);
  
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("addPlan", JSON.stringify(addPlan));
    }
  }, [addPlan, isMounted]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("saveFor", JSON.stringify(saveFor));
    }
  }, [saveFor, isMounted]);

  const addCount = addPlan.length;
  const saveCount = saveFor.length;

  const addTotalMinutes = addPlan.reduce(
    (total, workout) => total + (workout.duration || 0),
    0,
  );
  const addTotalCalories = addPlan.reduce(
    (total, workout) => total + (workout.caloriesBurned || 0),
    0,
  );
  const saveTotalMinutes = saveFor.reduce(
    (total, workout) => total + (workout.duration || 0),
    0,
  );
  const SaveTotalCalories = saveFor.reduce(
    (total, workout) => total + (workout.caloriesBurned || 0),
    0,
  );

  const shearedData = {
    addPlan,
    setAddPlan,
    saveFor,
    setSaveFor,
    addCount,
    saveCount,
    addTotalMinutes,
    addTotalCalories,
    saveTotalMinutes,
    SaveTotalCalories,
  };

  return (
    <workContext.Provider value={shearedData}>{children}</workContext.Provider>
  );
};

export default WorkoutDetaileProvider;
