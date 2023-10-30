import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Quiz } from "../Quiz/Quiz";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { QuizResults } from "../QuizResults/QuizResults";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate to={"/quiz"} />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<QuizResults />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
