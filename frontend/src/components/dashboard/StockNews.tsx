import React from 'react';

import { Box, Stack, Typography, Link } from '@mui/material';

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
interface NewsListProps {
    news: NewsItem[];
}
const limitSummary = (text: string): string => {
    const words = text.split(' ');
    if (words.length > 100) {
        return words.slice(0, 100).join(' ') + '...';
    }
    return text;
};

const NewsList: React.FC<NewsListProps> = ({ news }) => {
    return (
        <Stack spacing={2}>
            {news.map((newsItem: NewsItem) => (
                <Box key={newsItem.id} sx={{ marginBottom: 2 }}>
                    <Typography fontWeight="bold" variant="h5" component="div">
                        {newsItem.headline}
                    </Typography>
                    <Box
                        component="img"
                        sx={{
                            height: 140,
                            width: '100%',
                            objectFit: 'cover',
                            borderRadius: 1,
                            marginBottom: 1,
                        }}
                        src={newsItem.image}
                        alt={newsItem.headline}
                    />
                    <Typography variant="body2" >
                        {limitSummary(newsItem.summary)}
                    </Typography>
                    <Typography variant="body2" >
                        Source: {newsItem.source}
                    </Typography>
                    <Typography variant="body2">
                        Date: {new Date(newsItem.datetime * 1000).toLocaleDateString()}
                    </Typography>
                    <Link href={newsItem.url} target="_blank" rel="noopener noreferrer" >
                        Read more
                    </Link>
                </Box>
            ))}
        </Stack>
    );
};

export default NewsList;