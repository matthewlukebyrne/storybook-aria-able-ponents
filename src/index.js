import ReactDOM from 'react-dom';
import  { PrimaryButton, SecondaryButton, TeritaryButton } from './components/Buttons';
import { GlobalStyle } from './utils';


const App = () => (
    <div>
        <PrimaryButton aria-pressed="true">Hello World</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <TeritaryButton>Teritary</TeritaryButton>
        <GlobalStyle />
    </div>
);

ReactDOM.render(<App/>,  document.getElementById('root'));