import React from 'react'
import { Stack, Typography } from '@mui/material'

interface ProbabillityBoxProps {
    name: string;
    number: number;
}

const ProbabillityBox: React.FC<ProbabillityBoxProps> = ({ name, number }) => {
    return (
        <Stack border={1} padding={2} borderRadius={5} spacing={2}>
            <Typography fontSize={20} fontWeight={'bolder'}>{name}:</Typography>
            <Typography fontSize={15}>{number}</Typography>


        </Stack>
    )
}

export default ProbabillityBox