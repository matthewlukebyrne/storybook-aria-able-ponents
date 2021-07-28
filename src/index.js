import ReactDOM from 'react-dom';
import  { PrimaryButton, SecondaryButton, TeritaryButton } from './components/Buttons';

const App = () => (
    <div>
        <PrimaryButton>Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <TeritaryButton>Teritary</TeritaryButton>
    </div>
);

ReactDOM.render(<App/>,  document.getElementById('root'));