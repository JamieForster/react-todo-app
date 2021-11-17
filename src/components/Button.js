import React from "react"
import PropTypes from 'prop-types'

const Button = ( {colour, text, onClick} ) => {
    return <button onClick={onClick} style={{ backgroundColor: colour }} className='btn'>{text}</button>
}

Button.defaultProps = {
    colour: 'steelblue',
    text: 'Button',
    onClick: () => {console.log('Click')},
}

Button.propTypes = {
    colour: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
 