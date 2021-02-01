import React from 'react';
import { Card } from '@uifabric/react-cards';
import { Text, initializeIcons } from '@fluentui/react';
import 'office-ui-fabric-core/dist/css/fabric.css';

const container = {
    display: 'flex',
    justifyContent: 'center',
    margin: '10vh 0',
}

const icon = {
    fontSize: 24,
    padding: 15,
    verticalAllign: 'middle',
    paddingLeft: 0,
    color: '#0078d4',
}

const styles = {
    cardStyles: {
        root: {
            backgroundColor: 'white',
            padding: 20,
            borderTop: '5px solid #0078d4',
            width: '90%',
            maxWidth: '90%',
            margin: 'auto',
        }
    },
    header: {
        root: {
            fontSize: 20,
            fontWeight: 'bold,'
        }
    },
    amount: {
        root: {
            fontSize: 26,
            paddingBottom: 20,
            paddingTop: 30,
        }
    },
    percentage: {
        root: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#0078d4',
        }

    }
}


const cards = [
    {
        title: 'Example 1',
        amount: '£12,345',
        icon: 'Money',
        percentage: '2.3',
    },
    {
        title: 'Example 2',
        amount: '£12,345',
        icon: 'Money',
        percentage: '2.3',
    },
    {
        title: 'Example 3',
        amount: '£12,345',
        icon: 'Money',
        percentage: '2.3',
    },
    {
        title: 'Example 4',
        amount: '£12,345',
        icon: 'Money',
        percentage: '2.3',
    }
]

const CardsSection = () => {
    initializeIcons();
    return (
        <div style={container}>
            {cards.map((card) => {
                <div className="s-Grid-col ms-sm33 ms-xl3">
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                            <Card.Item>
                                <i style={icon} className={'ms-Icon ms-Icon--${card.icon}'} aria-hidden="true"></i>
                                <Text styles={styles.header}>{card.title}</Text>
                            </Card.Item>
                            <Card.Item>
                                <Text styles={styles.amount}>{card.amount}</Text>
                            </Card.Item>
                            <Card.Item>
                                <Text styles={styles.percentage}>{card.percentage}</Text>
                            </Card.Item>
                        </Card.Section>
                    </Card>
                </div>
            })}
        </div>
    )
}

export default CardsSection;