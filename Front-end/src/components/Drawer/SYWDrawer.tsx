import { Drawer, styled } from "@mui/material";

export const drawerWidth = 240;

export default styled(Drawer)({
    '& .MuiDrawer-paper': {
        width: `${drawerWidth}px`,
        height: '100%',
        flexShrink: 0,
        backgroundColor: '#333',
        color: 'white',
        boxShadow: '3px 0px 5px 3px rgba(0,0,0,30%)',
    },
});
