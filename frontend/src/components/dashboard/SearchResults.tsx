import React from 'react';
import { Paper, List, ListItem, ListItemText } from '@mui/material';
// import StockContext from '../../context/StockContext';

interface SearchResultItem {
    symbol: string;
    description: string;
}

interface SearchResultsProps {
    results: SearchResultItem[];
    setStockSymbol: (symbol: string) => void;
    clear: () => void;
}


const SearchResults: React.FC<SearchResultsProps> = ({ results, setStockSymbol, clear }) => {
    const handleClick = (symbol: string) => {
        setStockSymbol(symbol);
        clear();

    }
    return (
        <Paper
            elevation={3}
            sx={{
                position: 'absolute',
                top: 50,
                width: '100%',
                maxHeight: 256,
                overflow: 'auto',
                borderRadius: '0 0 10px 10px',
                zIndex: 1,
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                },
                bgcolor: '#0FFCBE',
            }}


        >
            <List>
                {results.map((item: SearchResultItem) => (
                    <ListItem
                        key={item.symbol}
                        // component="button"
                        onClick={() => handleClick(item.symbol)}
                        sx={{



                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                            },
                            transition: 'background-color 0.3s',
                        }}

                    >
                        <ListItemText primary={item.symbol} secondary={item.description} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default SearchResults;