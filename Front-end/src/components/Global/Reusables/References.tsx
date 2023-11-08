import { Button, Grid, Typography } from '@mui/material';

import { IconDefinition, faBook, faFile, faFileAlt, faInfo, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export type ReferenceItem = { name?: string, title?: string, link: string, icon: IconDefinition };

export default function References({ about = false, ToS = false, privacy = false, documentation = false, other = [] }: { about?: boolean, ToS?: boolean, privacy?: boolean, documentation?: boolean, other?: ReferenceItem[] }) {
    return (
        <Grid className='references'>
            {about ? <Grid className='reference-item'>
                <Typography variant="subtitle1">About Us</Typography>
                <Grid>
                    <Link to='/about'>
                        <Button variant="outlined" className='syw-button default'>
                            <FontAwesomeIcon icon={faInfo} className='text-icon' />About us
                        </Button>
                    </Link>
                </Grid>
            </Grid> : <></>}
            {ToS ? <Grid className='reference-item'>
                <Typography variant="subtitle1">ToS</Typography>
                <Grid>
                    <Link to="/tos">
                        <Button variant="outlined" className='syw-button default'>
                            <FontAwesomeIcon icon={faFileAlt} className='text-icon' />ToS
                        </Button>
                    </Link>
                </Grid>
            </Grid> : <></>}
            {privacy ? <Grid className='reference-item'>
                <Typography variant="subtitle1">Privacy</Typography>
                <Grid>
                    <Link to="/privacy">
                        <Button variant="outlined" className='syw-button default'>
                            <FontAwesomeIcon icon={faUserSecret} className='text-icon' />Privacy Policy
                        </Button>
                    </Link>
                </Grid>
            </Grid> : <></>}
            {documentation ? <Grid className='reference-item'>
                <Typography variant="subtitle1">Documentation</Typography>
                <Grid>
                    <Link to="/documentation">
                        <Button variant="outlined" className='syw-button default'>
                            <FontAwesomeIcon icon={faBook} className='text-icon' />Documentation
                        </Button>
                    </Link>
                </Grid>
            </Grid> : <></>}
            {other.map(reference => {
                return (
                    <Grid key={reference.name} className='reference-item'>
                        <Typography variant="subtitle1">{reference.title || reference.name}</Typography>
                        <Grid>
                            <Link to={reference.link}>
                                <Button variant="outlined" className='syw-button default'>
                                    <FontAwesomeIcon icon={reference.icon} className='text-icon' />{reference.name || reference.title}
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                );
            })}
        </Grid>
    );
}