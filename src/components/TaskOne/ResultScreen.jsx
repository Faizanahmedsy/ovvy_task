import { Button } from "@mui/material";
import useGlobalState from "../../store";
import ResultFailure from "./ResultFalure";
import ResultSuccess from "./ResultSuccess";
export default function ResultScreen({ setStep, handleReset }) {
  const userName = useGlobalState((state) => state.userName); // import the userName from the zustand store
  const score = useGlobalState((state) => state.score); // import the score from the zustand store

  return (
    <div className="flex justify-center items-center flex-col gap-6">
      <div className="text-center">
        <ResultSuccess />
        <h2 className="text-3xl font-medium">ResultScreen</h2>
        {userName && score > 0 && (
          <div>
            <p>
              Nice try {userName}! Your score is {score}
            </p>
          </div>
        )}
        {/* {score == 0 && <ResultFailure handleReset={handleReset} />} */}
      </div>
    </div>
  );
}
