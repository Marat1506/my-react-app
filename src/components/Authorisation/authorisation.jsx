import { Box, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { useState } from "react";
import Vhod from "./Vhod";


const Authorisation = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Dialog open={open} onClose={handleClose} fullWidth fullScreen>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '-5px', textAlign: 'center', alignItems: 'center', marginTop: '60px'}}>
          <img width="80" height="80" src="https://img.icons8.com/ios/50/swiftui.png" alt="swiftui" />
          <Typography sx={{fontSize: 'xx-large'}}>Вместе просто</Typography>
        </Box>

        <DialogTitle sx={{fontSize: 'xx-large'}}>Вход</DialogTitle>
        <DialogContent>
          <Vhod onClick={handleClose} />
        </DialogContent>

      </Dialog>
    </Box>
  );
};

export default Authorisation;