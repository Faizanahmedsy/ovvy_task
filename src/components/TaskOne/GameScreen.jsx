import { Button } from "@mui/material";

export default function GameScreen() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex min-h-screen">
        <div className="bg-violet-100 min-h-screen w-4/6">game</div>
        <div className="bg-blue-200 min-h-screen w-2/6 grid place-content-center">
          Score
          <Button variant="contained" color="error">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
