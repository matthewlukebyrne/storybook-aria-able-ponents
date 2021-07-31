// Importing the Document Object Model
import ReactDOM from 'react-dom';

// Importing more Components
import { PrimaryButton, SecondaryButton, TeritaryButton } from './components/Buttons';

// Import ThemeProvider to toggle and initialize themes
import { ThemeProvider } from 'styled-components';

// Import Global Styles, plus light Theme and Dark theme
import { GlobalStyle, darkTheme, lightTheme } from './utils';

// Import UseState from React
import { useState } from 'react';


const App = () => {

    // Here I am using useState Hook
    const [useDarkTheme, setUseDarkTheme] = useState(false);


    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>

            {/* Toggle the State to turn on and off the background of the theme */}
            <button style={{
                margin: "16px 24px", padding: "24px", background: "none", cursor: 'pointer'
            }}
                onClick={() => setUseDarkTheme(true)}>Dark Theme
            </button>

            <button style={{
                margin: "0 16px 24px", padding: "24px", background: "none", cursor: 'pointer'
            }}
                onClick={() => setUseDarkTheme(false)}>Light Theme
            </button>

            {/* Add customisable styling in the testing area */}
            <div style={{ background: useDarkTheme ? lightTheme.primaryColor : darkTheme.primaryColor, 
                width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "space-around" }}>

                <PrimaryButton>Primary Button</PrimaryButton>
                <SecondaryButton>Secondary Button</SecondaryButton>
                <TeritaryButton>Teritary Button</TeritaryButton>
            </div>

            {/* Declare the Global Stylings */}
            <GlobalStyle />
        </ThemeProvider>
    );
};

// Render the Components
ReactDOM.render(<App />, document.getElementById('root'));



