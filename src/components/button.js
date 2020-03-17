import React from 'react'
import { Link } from 'gatsby';
import '../styles/index.scss'



const Button = ({
    children
}) => {

    const lowerCaseChildren = children.toLowerCase();
    
    const createPath = () => {
        let path = '';
            if (lowerCaseChildren.includes('speaker')) {
                path = '/speakers/'
            } else if (lowerCaseChildren.includes('ticket')) {
                // this does not work with Link and will need to be handled differently. 
                path = 'https://www.eventbrite.com/e/undergroundjs-2020-tickets-93439517111?aff=website'
            } else if (lowerCaseChildren.includes('volunteer')) {
                path = '/volunteer/'
            } else if (lowerCaseChildren.includes('sponser')) {
                path = '/sponsers/'
            }
            return path
        };

        return (
            <button className='btn btn-primary'>
            <Link to={`${createPath()}`}>
            {children}
            </Link>
            </button>

        )
    }; 

    export default Button