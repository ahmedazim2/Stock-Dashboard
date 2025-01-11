import React from 'react';

interface StockContextType {
    stockSymbol: string;
    setStockSymbol: (symbol: string) => void;

}

const defaultValue: StockContextType = {
    stockSymbol: 'FB',
    setStockSymbol: () => { },

};

const StockContext = React.createContext<StockContextType>(defaultValue);

export default StockContext;