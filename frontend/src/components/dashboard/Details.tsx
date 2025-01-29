import React from 'react'
import { Stack, Typography, Divider } from '@mui/material';

interface DetailsProps {
    details: {
        name: string;
        country: string;
        currency: string;
        exchange: string;
        ipo: string;
        marketCapitalization: number;
        finnhubIndustry: string;
    };
}

const Details: React.FC<DetailsProps> = ({ details }) => {
    const detailsList: { [key: string]: string } = {
        name: "Name",
        country: "Country",
        currency: "Currency",
        exchange: "Exchange",
        ipo: "IPO",
        marketCapitalization: "Market Capitilization",
        finnhubIndustry: "Industry",
    }

    const convMilToBil = (number: number): string => {
        return (number / 1000).toFixed(2);
    };
    return (
        <Stack direction={'column'} spacing={2.5}>
            {Object.keys(detailsList).map((item) => {
                const key = item as keyof DetailsProps['details'];
                return (
                    <>
                        <Stack key={item} direction={'row'} justifyContent={'space-between'}>
                            <Typography>{detailsList[key]}</Typography>
                            <Typography>{key === 'marketCapitalization' ? convMilToBil(Number(details[key])) : details[key]}</Typography>

                        </Stack>
                        <Divider sx={{
                            borderColor: '#FAEBD7',
                        }} />
                    </>
                );
            })}

        </Stack>
    )
}

export default Details