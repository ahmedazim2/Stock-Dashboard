import React, { useState } from 'react';
import StockContext from '../context/StockContext';

const StockProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [stockSymbol, setStockSymbol] = useState("FB");

    return (
        <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
            {children}
        </StockContext.Provider>
    );
};

export default StockProvider;