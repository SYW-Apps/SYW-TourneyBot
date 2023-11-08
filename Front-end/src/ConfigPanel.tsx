import { Link } from 'react-router-dom';

import moment from 'moment';
import clsx from 'clsx';

import { Button, Grid, Switch } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faDesktop, faFlag, faMoon, faSignOutAlt, faSun, faUser } from '@fortawesome/free-solid-svg-icons';

import { useAccount } from './authorization/account';
import { useSYWTheme } from './components/Global/Themes/SYW-Theme';

export default function ConfigPanel({ open, onClose }: { open: boolean, onClose: () => void }) {
    const account = useAccount();

    const { darkMode, setDarkMode, darkModeUseSystem, setDarkModeUseSystem, width, height } = useSYWTheme();

    return (
        <>
            <Grid className={clsx({
                'config-panel': true,
                'config-panel-open': open,
            })}>
                {account.authorized ?
                <>
                    <Grid className="config-panel-item">
                        <Button
                            className='config-panel-button'
                            component={Link} to='/settings'
                        >
                            <FontAwesomeIcon icon={faUser} className="text-icon" /> {account.username}
                        </Button>
                    </Grid>
                </>
                :
                <>
                    <Grid className="config-panel-item">
                        <Button
                            className='config-panel-button'
                            component={Link} to='/login'
                        >
                            <FontAwesomeIcon icon={faUser} className="text-icon" /> Login
                        </Button>
                    </Grid>
                </>}
                <Grid className="config-panel-item">
                    <Button
                        className='config-panel-button'
                    >
                        <FontAwesomeIcon icon={faFlag} className="text-icon" /> {account.language || 'English'}
                    </Button>
                </Grid>
                <Grid className="config-panel-item">
                    <Button
                        className='config-panel-button'
                    >
                        <FontAwesomeIcon icon={faClock} className="text-icon" /> {account.timeZone || moment.tz.guess()}
                    </Button>
                </Grid>
                <Grid className="config-panel-item syw-container" style={{ height: 'unset' }}>
                    <Grid className='syw-container center w-75'>
                        <Button
                            className='config-panel-button'
                            onClick={() => setDarkMode(!darkMode)}
                            disabled={darkModeUseSystem}
                        >
                            <FontAwesomeIcon icon={faSun} className="text-icon" style={{ color: darkMode ? '#555' : 'gold' }} />
                            <Switch style={{ color: darkMode ? 'white' : 'black' }} checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                            <FontAwesomeIcon icon={faMoon} className="text-icon" style={{ color: darkMode ? 'white' : '#555' }} />
                        </Button>
                    </Grid>
                    <Grid className='syw-container center w-25'>
                        <Button
                            className={`config-panel-button syw-button default${darkModeUseSystem ? '' : ' bordered'}`} title="Use System's Default"
                            style={{ padding: '10px' }}
                            onClick={() => setDarkModeUseSystem(!darkModeUseSystem)}
                        >
                            <FontAwesomeIcon icon={faDesktop} size='2x' className="text-icon" style={{ color: darkMode ? 'white' : '#555' }} />
                        </Button>
                    </Grid>
                </Grid>
                {account.authorized ?
                <>
                    <Grid className="config-panel-item">
                        <Button
                            className='syw-button config-panel-button warning bordered'
                            onClick={() => account.signOut()}
                        >
                            <FontAwesomeIcon icon={faSignOutAlt} className="text-icon" /> Logout
                        </Button>
                    </Grid>
                </> : <></>}
            </Grid>
            
            <Grid className={`config-panel-void${open ? ' open' : ''}`} style={{ width, height }}
                onClick={onClose}
            />
        </>
    );
}