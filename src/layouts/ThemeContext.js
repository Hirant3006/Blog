import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        lightTheme: true
    }

    toggleTheme = () => {
        this.setState({ islightTheme: !this.state.lightTheme });
    }

    render() {
        const { children } = this.props;
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme }}>
            {children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;