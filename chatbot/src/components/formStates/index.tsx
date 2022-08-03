import React, {
    createContext,
    useContext,
    useState
  } from "react";
import { ResponseId } from "../../data/types";
  
  type FormStateContextType = {
    answers: {};
    setSingleAnswer: (id: ResponseId, newAnswer: string | number) => void;
  }; 
  
  const FormStateContext = createContext<FormStateContextType | undefined>(undefined) ;
  
  export const FormStateProvider = ({children}: {children: React.ReactNode}) => {
    const [answers, setAnswers] = useState({});
    const setSingleAnswer = (id: ResponseId, newAnswer: string | number  | undefined): void => {
      // might need to use the types of the form question data as template.
      setAnswers(previousAnswers => ({...previousAnswers, [id]: newAnswer}));
    };
    const value = {answers, setSingleAnswer}
    return (
      <FormStateContext.Provider value={value}>
        {children}
      </FormStateContext.Provider>
    );
  };
  
  export const useFormState = () => {
      const context = useContext(FormStateContext);
      if (context === undefined) {
        throw new Error("useFormState must be used within a FormStateProvider");
      }
      return context;
  };