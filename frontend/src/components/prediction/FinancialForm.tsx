import React, { useState } from 'react';
import { FadeLoader } from 'react-spinners';
import { TextField, Button, Box, Typography, Stack } from '@mui/material';

interface FinancialFormProps {
    setResult: (result: string) => void;
}

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const FinancialForm: React.FC<FinancialFormProps> = ({ setResult }) => {
    const [values, setValues] = useState({
        stockCode: 'Apple',
        marketPrice: '50',
        eps: '5',
        bookValue: '25',
        sales: '10',
        annualDividends: '2',
        previousEps: '4',
        currentEps: '5',
        totalDebt: '100',
        totalEquity: '200',
        netIncome: '30',
    });
    const [isSent, setIsSent] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const trainingPrompt = [
            {
                "parts": [
                    {
                        "text": "From next prompt I am gonna send you some parameters for predicting stock market share , tell me is it overvalued or undervalued , buy or not"
                    }
                ],
                "role": "user"
            },
            {
                "role": "model",
                "parts": [{
                    "text": "okay"
                }]
            },
            {
                "role": "user",
                "parts": [{
                    "text": "and also calculate - P/E ratio , P/B ratio, P/S Ratio, Dividend Yield, Earnings Growth in %, Debt-to-Equity Ratio, ROE % and give as a response"
                }]
            },
            {
                "role": "model",
                "parts": [{
                    "text": "okay"
                }]
            },
            {
                "role": "model",
                "parts": [{
                    "text": "always give response in form of HTML div and table tag. No need to give any warnings or precaution."
                }]
            },
            {
                "role": "model",
                "parts": [{
                    "text": "okay"
                }]
            },
        ];

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

        const messagesToSend = [
            ...trainingPrompt,
            {
                "role": "user",
                "parts": [{
                    "text": JSON.stringify(values)
                }]
            }
        ];
        setIsSent(false);
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "contents": messagesToSend
            })
        });
        const resjson = await res.json();
        setIsSent(true);
        let responseMessage = resjson.candidates[0].content.parts[0].text;
        responseMessage = responseMessage.replace(/```html/g, "");
        responseMessage = responseMessage.replace(/```/g, "");


        console.log(responseMessage);
        setResult(responseMessage);
    };

    return (
        <Stack margin={'10px'}>
            <Typography variant="h5">Input Stock Data</Typography>
            <Box component="form" className="form-container" onSubmit={handleSubmit} padding={'5px'} margin={'10px 50px 10px 50px'} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    label="Stock Name"
                    type="string"
                    name="Name of the stock"
                    value={values.stockCode}
                    onChange={handleChange}
                    required
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                />
                <TextField
                    label="Market Price per Share"
                    type="number"
                    name="marketPrice"
                    value={values.marketPrice}
                    onChange={handleChange}
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                />
                <TextField
                    label="Earnings per Share (EPS)"
                    type="number"
                    name="eps"
                    value={values.eps}
                    onChange={handleChange}
                    required
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                />
                <TextField
                    label="Book Value per Share"
                    type="number"
                    name="bookValue"
                    value={values.bookValue}
                    onChange={handleChange}
                    required
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                />
                <TextField
                    label="Sales per Share"
                    type="number"
                    name="sales"
                    value={values.sales}
                    onChange={handleChange}
                    required
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                />
                <TextField
                    label="Annual Dividends per Share"
                    type="number"
                    name="annualDividends"
                    value={values.annualDividends}
                    onChange={handleChange}
                    required
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                />
                <TextField
                    label="Previous Year's EPS"
                    type="number"
                    name="previousEps"
                    value={values.previousEps}
                    onChange={handleChange}
                    required
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                />
                <TextField
                    label="Current Year's EPS"
                    type="number"
                    name="currentEps"
                    value={values.currentEps}
                    onChange={handleChange}
                    required
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                />
                <TextField
                    label="Total Debt"
                    type="number"
                    name="totalDebt"
                    value={values.totalDebt}
                    onChange={handleChange}
                    required
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                />
                <TextField
                    label="Total Equity"
                    type="number"
                    name="totalEquity"
                    value={values.totalEquity}
                    onChange={handleChange}
                    required
                    InputProps={{ style: { color: 'antiquewhite' } }}
                    InputLabelProps={{ style: { color: 'antiquewhite' } }}
                />
                <TextField
                    label="Net Income"
                    type="number"
                    name="netIncome"
                    value={values.netIncome}
                    onChange={handleChange}
                    required
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                />

                {isSent ? (
                    <Button type="submit" variant="contained" color="primary">Submit</Button>
                ) : (
                    <FadeLoader className='loader' />
                )}
            </Box>

        </Stack>
    );
};

export default FinancialForm;