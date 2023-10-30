import { QuizCard } from "../../components/QuizCard/QuizCard";
import styles from "./Quiz.module.scss";
import { QuizProvider } from "../../contexts/quizContext";
import { Header } from "../../components/Header/Header";

const questions = [
  {
    question: "Сколько вам лет?",
    id: "age",
    answers: [
      "Нужны средства для ребёнка младше 10 лет",
      "Мне меньше 25 лет",
      "От 25 до 35 лет",
      "От 35 до 45 лет",
      "Мне больше 45 лет",
    ],
  },
  {
    question: "Какой у вас тип кожи?",
    id: "skinType",
    answers: ["Сухая", "Нормальная", "Комбинированная", "Жирная"],
  },
  {
    question: "Беспокоят ли воспаления на лице?",
    id: "skinFeatures",
    answers: ["да", "нет", "иногда"],
  },
];

export function Quiz() {
  return (
    <div className={styles.quiz}>
      <Header
        title={"Онлайн-подбор средств для лица"}
        subTitle={
          "Пройдите короткий тест и получите список наиболее подходящих для вас косметических продуктов"
        }
      />
      <QuizProvider questions={questions}>
        <QuizCard />
      </QuizProvider>
    </div>
  );
}
