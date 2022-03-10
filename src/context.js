import React from "react"

const StylesContext = React.createContext()

const styles = {
    color: 'burlywood',
    section: '50px',
    h2Size: '2.5rem'
}

const StylesProvider = ({ children }) => {
    return (
        <StylesContext.Provider value={styles}>
            {children}
        </StylesContext.Provider>
    )
}

export { StylesContext, StylesProvider }

