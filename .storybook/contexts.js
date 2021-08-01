// Import Theme Provider from "styled-components"
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../src/utils";


export const contexts = [
    {
        icon: "box",
        title: "Themes",
        components: [ThemeProvider],
        params: [
            { name: "Light Theme", props: { theme: lightTheme, default: true } },
            { name: "Dark Theme", props: { theme: darkTheme } }
        ],
        options: {
            deep: true, // pass the `props` deeply into all wrapping components
            disable: false, // disable this contextual environment completely
            cancelable: false // allow this contextual environment to be opt-out optionally in toolbar
        }
    }
]