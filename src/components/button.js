import React from 'react'
import { Link } from 'gatsby';
import '../styles/index.scss'


// When using this component the user needs to set buttonStyle to either 'btn-light' or 'btn-dark'

const STYLES = [
    "btn-light",
    "btn-dark"
]

const Button = ({
    children,
    buttonStyle
}) => {

    const checkBtnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const lowerCaseChildren = children.toLowerCase();
    
    const createPath = () => {
        let path = '';
            if (lowerCaseChildren.includes('speaker')) {
                path = '/speakers/'
            } else if (lowerCaseChildren.includes('ticket')) {
                path = 'https://www.eventbrite.com/e/undergroundjs-2020-tickets-93439517111?aff=website'
            } else if (lowerCaseChildren.includes('volunteer')) {
                path = '/volunteer/'
            } else if (lowerCaseChildren.includes('sponsor')) {
                path = '/sponsors/'
            }
            return path
        };

        return (
            <a className={`${checkBtnStyle}`} href={`${createPath()}`} component={Link} to={`${createPath()}`}>
            {children}
            </a>

        )
    }; 

    export default Button