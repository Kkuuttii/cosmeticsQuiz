import { createContext, useMemo, useState } from "react";

interface QuizContextValues {
  questions?: Question[];
  goNext?: () => void;
  currentQuestion?: Question;
  goBack?: () => void;
  questionNumber?: number;
  isFirstQuestion?: boolean;
  isLastQuestion?: boolean;
  currentAnswer?: string;
  changeCurrentAnswer?: (answer: string) => void;
}
interface Question {
  question: string;
  id: string;
  answers: string[];
}
interface QuizProviderProps {
  children: JSX.Element;
  questions: Question[];
}

export const QuizContext = createContext<QuizContextValues>({});

export const QuizProvider = ({ children, questions }: QuizProviderProps) => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [questionNumber, setQuestionNumber] = useState<number>(1);

  const goNext = () => {
    setQuestionNumber((prev) => prev + 1);
  };

  const goBack = () => {
    setQuestionNumber((prev) => prev - 1);
    setAnswers((prev) => prev.slice(0, questionNumber - 1));
  };

  const currentQuestion = useMemo(() => {
    return questions[questionNumber - 1];
  }, [questionNumber, questions]);

  const currentAnswer = useMemo(() => {
    return answers[questionNumber - 1];
  }, [answers, questionNumber]);

  const changeCurrentAnswer = (answer: string) => {
    setAnswers((prev) => [...prev.slice(0, questionNumber - 1), answer]);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        goNext,
        currentQuestion,
        goBack,
        questionNumber: questionNumber,
        isLastQuestion: questionNumber === questions.length,
        isFirstQuestion: questionNumber === 1,
        currentAnswer,
        changeCurrentAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
