import React from "react"

const StylesContext = React.createContext()

const styles = {
    color: 'burlywood',
    container: '1rem',
    section: '50px'
}

const StylesProvider = ({ children }) => {
    return (
        <StylesContext.Provider value={styles}>
            {children}
        </StylesContext.Provider>
    )
}

export { StylesContext, StylesProvider }

