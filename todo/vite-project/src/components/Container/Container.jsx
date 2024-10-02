import { Box } from "@mui/material";
import s from "./Container.module.css";

// eslint-disable-next-line react/prop-types
export function Container({children}){
    return (
        <Box className={s.container}>
            {children}
        </Box>
    )
}