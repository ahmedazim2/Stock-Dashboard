const basePath = "https://finnhub.io/api/v1";
const apiKey = import.meta.env.VITE_API_KEY;

export const searchSymbols = async (query: string) => {
    const url = `${basePath}/search?q=${query}&token=${import.meta.env.VITE_API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('searchSymbols data:', data); // Log the response data
        return data;
    } catch (error) {
        console.error('Error fetching search symbols:', error);
        throw error;
    }
};

export const fetchStockDetails = async (stockSymbol: string) => {
    const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${import.meta.env.VITE_API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Data fetch was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('fetchStockDetails data:', data); // Log the response data
        return data;
    } catch (error) {
        console.error('Error fetching stock details:', error);
        throw error;
    }
};

export const fetchQoute = async (stockSymbol: string) => {
    const url = `${basePath}/quote?symbol=${stockSymbol}&token=${import.meta.env.VITE_API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Data fetch was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('fetchQoute data:', data); // Log the response data
        return data;
    } catch (error) {
        console.error('Error fetching quote:', error);
        throw error;
    }
};

export const fetchNews = async (stockSymbol: string) => {



    // Get the current date
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0]; // Format to YYYY-MM-DD
    const lastThreeDate = new Date();
    lastThreeDate.setDate(currentDate.getDate() - 2);
    const formattedStartDate = lastThreeDate.toISOString().split('T')[0];


    const url = `${basePath}/company-news?symbol=${stockSymbol}&from=${formattedStartDate}&to=${formattedDate}&token=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Data fetch was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('fetchNews data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
};