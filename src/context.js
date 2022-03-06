import React from "react"

const StylesContext = React.createContext()

const styles = {
    color: 'burlywood',
    container: '2rem 1rem'
}

const StylesProvider = ({ children }) => {
    return (
        <StylesContext.Provider value={styles}>
            {children}
        </StylesContext.Provider>
    )
}

export { StylesContext, StylesProvider }

