import React from 'react';
import { Text, initializeIcons } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './styles/CardsSection.css';
import { useMediaPredicate } from "react-media-hook";


const container = {
    display: 'flex',
    justifyContent: 'center',
    margin: '5vh 0',
    paddingBottom: 20,
};


const icon = {
    fontSize: 24,
    padding: 15,
    verticalAlign: 'middle',
    paddingLeft: 0,
    color: '#0078d4'
}

const styles = {
    cardStyles: {
        root: {
            background: 'white',
            paddingBottom: 35,
            borderTop: '7px solid #0078d4',
            width: '100%',
            maxWidth: '90%',
            display: 'block',
        }
    },
    header: {
        root: {
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
        }
    },
    amount: {
        root: {
            fontSize: 26,
            paddingBottom: 20,
            paddingTop: 30,
            justifyContent: 'center',
        }
    },
    link: {
        root: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#0078d4',
            textDecoration: 'underline',
            margin: 'auto',
            paddingBottom: 10,
        }
    }
};

const cards = [
    {
        title: 'Placeholder 1',
        amount: '12345',
        icon: 'Money',
        link: 'Link 1',
    },
    {
        title: 'Placeholder 2',
        amount: '12345',
        icon: 'PaymentCard',
        link: 'Link 2'
    },
    {
        title: 'Placeholder 3',
        amount: '12345',
        icon: 'Savings',
        link: 'Link 3'
    },
     
]

const CardsSection = () => {
    initializeIcons();
    return (
        <div style={container}>
            {cards.map((card) => (
                <div className="s-Grid-col ms-sm3 ms-xl3">
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                            <Card.Item>
                                <i style={icon} className={'ms-Icon ms-Icon--${card.icon}'} aria-hidden="true"></i>
                                <Text styles={styles.header}>{card.title}

                                </Text>
                            </Card.Item>
                            <Card.Item>
                                <Text styles={styles.amount}>{card.amount}

                                </Text>
                            </Card.Item>
                            <Card.Item>
                                <Text styles={styles.link}>
                                    {card.link}
                                </Text>
                            </Card.Item>
                        </Card.Section>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default CardsSection;