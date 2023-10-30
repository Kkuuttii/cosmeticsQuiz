import { Radio } from "@mantine/core";
import { Button } from "@mantine/core";
import styles from "./QuizCard.module.scss";
import question1 from "../../images/question1.svg";
import question2 from "../../images/question2.svg";
import question3 from "../../images/question3.svg";
import { useContext, useMemo } from "react";
import { QuizContext } from "../../contexts/quizContext";
import { useNavigate } from "react-router-dom";

export function QuizCard() {
  const {
    currentQuestion,
    goNext,
    goBack,
    questionNumber,
    questions,
    isLastQuestion,
    isFirstQuestion,
    currentAnswer,
    changeCurrentAnswer,
  } = useContext(QuizContext);

  const selectableAnswers = useMemo(
    () =>
      currentQuestion?.answers.map((item) => (
        <Radio
          key={item}
          value={item}
          label={item}
          size="xs"
          className={styles.radio}
        />
      )),
    [currentQuestion?.answers]
  );

  let questionImage;
  switch (questionNumber) {
    case 2:
      questionImage = question2;
      break;
    case 3:
      questionImage = question3;
      break;
    default:
      questionImage = question1;
  }

  const handleNextClick = () => {
    if (currentAnswer) {
      goNext?.();
    }
  };
  const navigate = useNavigate();

  return (
    <div className={styles.quizCard}>
      <div className={styles.questionNumberWrapper}>
        <img
          src={questionImage}
          alt="questionImage"
          className={styles.questionImage}
        />
        <span
          className={styles.currentQuestionNumber}
        >{`Вопрос ${questionNumber} из ${questions?.length}`}</span>
      </div>

      <Radio.Group
        name={currentQuestion?.id}
        styles={{
          label: { fontWeight: "700", fontSize: "20px" },
        }}
        label={currentQuestion?.question}
        className={styles.questionWrapper}
        value={currentAnswer ?? ""}
        onChange={(answer) => changeCurrentAnswer?.(answer)}
      >
        {selectableAnswers}
      </Radio.Group>
      <div className={styles.buttonsWrapper}>
        {!isFirstQuestion && (
          <Button
            disabled={isFirstQuestion}
            variant="filled"
            onClick={() => goBack?.()}
            color="rgba(255, 255, 255, 1)"
          >
            <span className={styles.buttonTextBlack}>Назад</span>
          </Button>
        )}

        {!isLastQuestion && (
          <Button variant="filled" onClick={handleNextClick}>
            <span className={styles.buttonTextWhite}>Дальше</span>
          </Button>
        )}
        {isLastQuestion && (
          <Button
            variant="filled"
            onClick={() => currentAnswer && navigate("/results")}
          >
            <span className={styles.buttonTextWhite}>Узнать результат</span>
          </Button>
        )}
      </div>
    </div>
  );
}
