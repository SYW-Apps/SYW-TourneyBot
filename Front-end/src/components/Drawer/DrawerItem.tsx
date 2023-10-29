import { Link } from "react-router-dom";

import { ListItem, ListItemText } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DrawerItem(props: any) {
    return (
        <ListItem component={Link} to={props.link} className="syw-drawer-item">
            <FontAwesomeIcon icon={props.icon} className="text-icon" /><ListItemText primary={props.text} />
        </ListItem>
    );
};