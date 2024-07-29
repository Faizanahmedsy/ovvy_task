import { Button } from "@mui/material";
import useGlobalState from "../../store";
export default function ResultScreen({ setStep, handleReset }) {
  const userName = useGlobalState((state) => state.userName); // import the userName from the zustand store
  const score = useGlobalState((state) => state.score); // import the score from the zustand store

  return (
    <div className="flex justify-center items-center flex-col gap-6">
      <div className="text-center">
        <h2 className="text-3xl font-medium">ResultScreen</h2>
        {userName && score && (
          <div>
            <p>
              Nice try {userName}! Your score is {score}
            </p>
          </div>
        )}
      </div>
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          setStep(2);
          handleReset;
        }}
      >
        Reset
      </Button>
    </div>
  );
}
