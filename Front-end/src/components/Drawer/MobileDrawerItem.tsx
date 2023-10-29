import { Link } from "react-router-dom";

import { Button, Grid } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DrawerItem(props: any) {
    return (
        <Grid className="syw-drawer-item-container">
            <Grid className="syw-drawer-item">
                <Button className="syw-button default w-100"
                    component={Link} to={props.link}
                >
                    <FontAwesomeIcon icon={props.icon} className="text-icon" />
                    {props.text}
                </Button>
            </Grid>
        </Grid>
    );
};