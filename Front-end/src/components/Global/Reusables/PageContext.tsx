import { useNavigate } from "react-router-dom";

import { Button, Grid, Typography } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import References, { ReferenceItem } from './References';

export default function PageContext({ children, preContent = <></>, references, sideBar, returnButtonUrl, title, titleAlignment }: { children: any, preContent?: JSX.Element, references?: { about?: boolean, ToS?: boolean, privacy?: boolean, documentation?: boolean, other?: ReferenceItem[] }, sideBar?: JSX.Element | JSX.Element[], returnButtonUrl?: string | boolean, title?: string, titleAlignment?: 'left' | 'center' | 'right' }) {
    const navigate = useNavigate();
    
    return (
        <Grid className='page'>
            <Grid className='page-content'>

                {returnButtonUrl &&
                <Grid className='return-button-container'>
                    <Button
                        className='syw-button return-button'
                        onClick={() => typeof returnButtonUrl == 'string' ? navigate(returnButtonUrl) : navigate(-1)}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className='text-icon' size='2x' />
                        <Typography variant='h6'><b>Back</b></Typography>
                    </Button>
                </Grid>}

                {preContent || <></>}

                <Grid className={'page-main' + (sideBar ? ' with-sidebar' : '')}>
                    {title &&
                    <Grid className='page-title'>
                        <Typography variant="h3" style={{ textAlign: titleAlignment }}><b>{title}</b></Typography>
                    </Grid>}
                    {children}
                </Grid>

                {sideBar &&
                <Grid className='page-sidebar hide-scrollbar'>
                    {sideBar && Array.isArray(sideBar) ?
                    sideBar.map((sideBarItem, index) =>
                        <Grid key={`sidebar-element-${index}`} className='page-sidebar-item-container'>
                            {sideBarItem}
                        </Grid>
                    ) : sideBar || <></>}
                </Grid>}

                {references ?
                <References
                    about={references.about}
                    ToS={references.ToS}
                    privacy={references.privacy}
                    documentation={references.documentation}
                    other={references.other}
                /> : <></>}
            </Grid>
        </Grid>
    );
}