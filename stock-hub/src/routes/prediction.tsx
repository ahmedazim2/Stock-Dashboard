import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import { Stack, Button } from '@mui/material';
import Result from '../components/prediction/Result';
import FinancialForm from '../components/prediction/FinancialForm';


export const Route = createFileRoute('/prediction')({
  component: Prediction,
})



// import './App.css';



function Prediction() {

  const [result, setResult] = useState("")

  return (
    <Stack margin={2}>
      <header className="App-header">
        <h1>Stock Prediction</h1>
      </header>
      {
        result.length > 0 &&
        <>
          <Result result={result} />
          <Button
            type="submit" variant="contained" color="primary"
            onClick={() => {
              setResult("")
            }}
          >Clear Result</Button>
        </>
      }
      {
        result.length == 0 && <FinancialForm setResult={setResult} />
      }

    </Stack>
  );
}

