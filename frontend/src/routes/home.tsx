import React, { useState, useEffect } from 'react';
import { Grid2 } from '@mui/material';
import HeaderTag from '../components/dashboard/Header';
import Details from '../components/dashboard/Details';
import Overview from '../components/dashboard/Overview';
import { fetchQoute, fetchStockDetails, fetchNews } from '../api/stock-api';
import { createFileRoute } from '@tanstack/react-router';
import NewsList from '../components/dashboard/StockNews';

interface Quote {
    pc: number;
    d: number;
    dp: number;
}

interface NewsItem {
    id: number;
    category: string;
    datetime: number;
    headline: string;
    image: string;
    related: string;
    source: string;
    summary: string;
    url: string;
}

interface StockDetails {
    name: string;
    country: string;
    currency: string;
    exchange: string;
    ipo: string;
    marketCapitalization: number;
    finnhubIndustry: string;
}

const HomePage: React.FC = () => {
    const [stockSymbol, setStockSymbol] = useState('AAPL'); // Default stock symbol
    const [stockDetails, setStockDetails] = useState<StockDetails>({
        name: '',
        country: '',
        currency: '',
        exchange: '',
        ipo: '',
        marketCapitalization: 0,
        finnhubIndustry: ''
    });
    const [quote, setQuote] = useState<Quote>({ pc: 0, d: 0, dp: 0 });
    const [news, setNews] = useState<NewsItem[]>([]);

    useEffect(() => {
        const updateStockDetails = async () => {
            try {
                const result = await fetchStockDetails(stockSymbol);
                setStockDetails(result);
            } catch (error) {
                setStockDetails({
                    name: '',
                    country: '',
                    currency: '',
                    exchange: '',
                    ipo: '',
                    marketCapitalization: 0,
                    finnhubIndustry: ''
                });
                console.log(error);
            }
        };
        const updateStockOverview = async () => {
            try {
                const result = await fetchQoute(stockSymbol);
                setQuote(result);
            } catch (error) {
                setQuote({ pc: 0, d: 0, dp: 0 });
                console.log(error);
            }
        };
        const updateStockNews = async () => {
            try {
                const result = await fetchNews(stockSymbol);
                setNews(result);
            } catch (error) {
                setNews([]);
                console.log(error);

            }
        }
        updateStockDetails();
        updateStockOverview();
        updateStockNews();
    }, [stockSymbol]);

    return (
        <Grid2 container spacing={3} sx={{ margin: '30px 20px 10px 20px' }}>
            <Grid2 size={12}><HeaderTag setStockSymbol={setStockSymbol} setName={stockDetails.name} /></Grid2>
            <Grid2 size={7}><NewsList news={news} /></Grid2>
            <Grid2 size={5}>
                <Grid2 size={12}>
                    <Overview
                        symbol={stockSymbol}
                        price={quote.pc}
                        change={quote.d}
                        changePercent={quote.dp}
                        currency={stockDetails.currency}
                    />
                </Grid2>
                <Grid2 size={12} height={"100%"}>
                    <Details details={stockDetails} />
                </Grid2>
            </Grid2>
        </Grid2>
    );
}

export const Route = createFileRoute('/home')({
    component: HomePage,
});

export default HomePage;