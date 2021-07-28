import styled from 'styled-components';

const Button = styled.button`
    padding: 12px 24px;
    font-size: 1rem;
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

// Inheritance
const PrimaryButton = styled(Button)`
    background-color: red;
    border: none;
    color: white;
`;

export default PrimaryButton;