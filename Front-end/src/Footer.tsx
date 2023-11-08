import { Link } from "react-router-dom";

import { Grid } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faEnvelope, faFileAlt, faGavel, faGlobe, faHeadset, faInfo, faInfoCircle, faPhone, faUserSecret } from "@fortawesome/free-solid-svg-icons";

import moment from "moment";

export default function Footer() {
    return (
        <footer>
            <Grid className="footer-section">
                <Grid className="footer-item header">
                    <FontAwesomeIcon icon={faGlobe} className="text-icon" /><i>Website</i>
                </Grid>
                <Grid className="footer-item">
                    © {moment().year()}
                </Grid>
                <Grid className="footer-item">
                    <a href="https://sywapps.com">SYW Apps</a>
                </Grid>
            </Grid>
            <Grid className="footer-section">
                <Grid className="footer-item header">
                    <FontAwesomeIcon icon={faInfoCircle} className="text-icon" /><i>Info</i>
                </Grid>
                <Grid className="footer-item">
                    <Link to='/about'><FontAwesomeIcon icon={faInfo} className="text-icon" />About Us</Link>
                </Grid>
                <Grid className="footer-item">
                    <Link to={{ pathname: 'https://sywapps.com/about' }} target="_blank"><FontAwesomeIcon icon={faBuilding} className="text-icon" />About SYW Apps</Link>
                </Grid>
            </Grid>
            <Grid className="footer-section">
                <Grid className="footer-item header">
                    <FontAwesomeIcon icon={faGavel} className="text-icon" /><i>Legal</i>
                </Grid>
                <Grid className="footer-item">
                    <Link to="/privacy"><FontAwesomeIcon icon={faUserSecret} className="text-icon" />Privacy Policy</Link>
                </Grid>
                <Grid className="footer-item">
                    <Link to="/ToS"><FontAwesomeIcon icon={faFileAlt} className="text-icon" />Terms of Service</Link>
                </Grid>
            </Grid>
            <Grid className="footer-section last">
                <Grid className="footer-item header">
                    <FontAwesomeIcon icon={faHeadset} className="text-icon" /><i>Contact Us</i>
                </Grid>
                <Grid className="footer-item">
                    <Link to={{ pathname: 'mailto:info@sywapps.com' }} target="_top"><FontAwesomeIcon icon={faEnvelope} className="text-icon" />Email to: info@sywapps.com</Link>
                </Grid>
                <Grid className="footer-item">
                    <Link to={{ pathname: 'tel:-' }} target="_top"><FontAwesomeIcon icon={faPhone} className="text-icon" />Call us at: n.a.</Link>
                </Grid>
            </Grid>
        </footer>
    );
};