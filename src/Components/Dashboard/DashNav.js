import React from 'react';
import { Nav, initializeIcons } from '@fluentui/react';


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
                name: 'My Exercises',
                url: '/Dashboard',
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
                url: '/Dashboard',
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
                url: '/Dashboard',
                key: 'key4',
                iconProps: {
                    iconName: 'StackedLineChart',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe',
                            nameColor: '#00ccff'
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
        boxSizing: 'auto-align',
        border: '5px solid #eee',
        position: 'fixed',
        overflowY: 'auto',
        paddingTop: '10vh',
        borderColor: '#eee',
    }
}

const Dash = () => {
    initializeIcons();
    return (
        <Nav
            groups={links}
            selectedKey="Key1"
            styles={navigationStyles}
        />
    )
}

export default Dash;