import { Stack, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
// import { mockCompanyDetails } from "../../constants/mock";
// import Typography from "@mui/material";

interface HeaderTagProps {
    setStockSymbol: (symbol: string) => void;
    setName: string;
}

const HeaderTag: React.FC<HeaderTagProps> = ({ setStockSymbol, setName }) => {
    return (
        <Stack direction="row"
            spacing={2}
            sx={{
                justifyContent: "space-between",
                alignItems: "center",
            }}>
            <Stack>
                <Typography fontSize={30}>{setName}</Typography>
                <Typography><SearchBar setStockSymbol={setStockSymbol} /></Typography>
            </Stack>

        </Stack>
    )
}

export default HeaderTag