import React, { useState } from 'react';
import { Stack, Typography, TextField, Button, Grid2 } from '@mui/material';
import ProbabillityBox from './ProbabillityBox';

interface Probabilities {
    negative: number;
    neutral: number;
    positive: number;
}

const HeaderText = () => {
    const [text, setText] = useState('');
    const [probabilities, setProbabilities] = useState<Probabilities | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: text })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setProbabilities(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Stack margin={10} spacing={2}>
            <Typography fontSize={50}>Sentiment Analysis</Typography>
            <Stack direction={'row'} spacing={2}>
                <TextField
                    label="Enter Text"
                    variant='outlined'
                    fullWidth
                    onChange={handleChange}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white',
                            },
                            '&:hover fieldset': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'white',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'white',
                        },
                        '& .MuiInputBase-input': {
                            color: 'white',
                        },
                    }}
                />
                <Button variant="contained" onClick={handleSubmit}>
                    Analyze
                </Button>
            </Stack>

            <Stack spacing={2}>
                <Typography fontSize={30}>Sentiment Probabilities</Typography>
                <Grid2 container spacing={2} sx={{ width: '100%' }}>

                    <Grid2 size={4}><ProbabillityBox name='Negative' number={probabilities ? probabilities.negative : 0} /></Grid2>
                    <Grid2 size={4}><ProbabillityBox name='Neutral' number={probabilities ? probabilities.neutral : 0} /> </Grid2>
                    <Grid2 size={4}><ProbabillityBox name='Positive' number={probabilities ? probabilities.positive : 0} /></Grid2>

                </Grid2>
            </Stack>

        </Stack>
    );
};

export default HeaderText;