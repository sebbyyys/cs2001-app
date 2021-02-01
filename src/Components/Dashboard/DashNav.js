import React from 'react';
import { Nav, initializeIcons } from '@fluentui/react';
import Dashboard from './Dashboard';
import { Router } from 'react-router-dom';

const links = [
    {
        links: [
            {
                name: 'Dashboard',
                url: '/Dashboard',
                key: 'key1',
                iconProps: {
                    iconName: 'News',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe'
                        }
                    }
                }
            },
            {
                name: 'Settings',
                url: '/Dashboard/Tasks',
                key: 'key2',
                iconProps: {
                    iconName: 'PlayerSettings',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe'
                        }
                    }
                }
            },
            {
                name: 'Transfer',
                url: '/Dashboard/Goals',
                key: 'key3',
                iconProps: {
                    iconName: 'SwitcherStartEnd',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe'
                        }
                    }
                }
            },
            {
                name: 'Stats',
                url: '/Dashboard/Profile',
                key: 'key4',
                iconProps: {
                    iconName: 'StackedLineChart',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe'
                        }
                    }
                }
            }
        ]
    }
]

const navigationStyles = {
    root: {
        height: '100vh',
        boxSizing: 'border-box',
        border: '1px solid #eee',
        overflowY: 'auto',
        paddingTop: '10vh',
    }
}

const Dash = () => {
    initializeIcons();
    return(
        <Nav 
            groups={links}
            selectedKey="Key1"
            styles={navigationStyles}
        />
    )
}

export default Dash;