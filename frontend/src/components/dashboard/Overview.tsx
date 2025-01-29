import React from 'react';
import { Stack, Typography } from '@mui/material';



interface OverviewProps {
    symbol: string;
    price: number;
    change: number;
    changePercent: number;
    currency?: string;
}

const Overview: React.FC<OverviewProps> = ({ symbol, price, change, changePercent, currency }) => {


    return (
        <Stack direction={'column'}>
            <Stack justifyContent={'start'}>
                <Typography fontSize={'15px'}>{symbol}</Typography>
            </Stack>
            <Stack direction={'row'} gap={0} padding={'50px 100px 50px 100px'} alignContent={'center'} justifyContent={'space-between'}>
                <Stack direction={'row'} alignContent={'center'} textAlign={'center'} >
                    <Typography fontSize={'25px'}>${price}</Typography>
                    <Typography fontSize={'15px'}>{currency}</Typography>
                </Stack>
                <Typography
                    sx={{
                        color: change < 0 ? 'red' : 'limegreen', // Conditionally set the color
                    }}
                    fontSize={'20px'}
                >
                    ${change}<span>({changePercent}%)</span>
                </Typography>
            </Stack>
        </Stack>
    );
};

export default Overview;