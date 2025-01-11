import React, { useState, useRef } from "react";
import { Stack, TextField } from "@mui/material";
import { searchSymbols } from "../../api/stock-api";
import SearchResults from "./SearchResults";

interface SearchBarProps {
    setStockSymbol: (symbol: string) => void;
}


const SearchBar: React.FC<SearchBarProps> = ({ setStockSymbol }) => {
    const [input, setInput] = useState("");
    const [bestMatches, setBestMatches] = useState([]);
    const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

    const clear = () => {
        setInput("");
        setBestMatches([]);
    };

    const updateBestMatches = async (query: string) => {
        try {
            if (query) {
                const searchResults = await searchSymbols(query);
                const result = searchResults.result;
                setBestMatches(result);
            }
        } catch (error) {
            setBestMatches([]);
            console.log(error);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInput(value);

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {
            updateBestMatches(value);
        }, 300); // Adjust the debounce delay as needed
    };

    return (
        <Stack position={'relative'}>
            <TextField
                label="Search"
                variant="outlined"
                value={input}
                placeholder="Search Stock"
                onChange={handleInputChange}
                sx={{
                    input: { color: '#FAEBD7' }, // Set the input text color to white
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '15px',
                        '& fieldset': {
                            borderColor: '#FAEBD7', // Set the border color to white
                        },
                        '&:hover fieldset': {
                            borderColor: '#0FFCBE', // Set the border color to white on hover
                        }
                    },
                    '& .MuiInputLabel-root': {
                        color: 'white', // Set the label color to white
                    }
                }}
            />
            {input && bestMatches.length > 0 && <SearchResults results={bestMatches} setStockSymbol={setStockSymbol} clear={clear} />}
        </Stack>
    );
};

export default SearchBar;