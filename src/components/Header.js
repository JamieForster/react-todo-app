import React from "react"
import Button from "./Button"

const Header = ( {title, onClick, addTaskOpen} ) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button colour={addTaskOpen ? 'red' : 'green'} text={addTaskOpen ? 'Close' : 'Add'} onClick={onClick} />
        </header>
    )
}

export default Header
