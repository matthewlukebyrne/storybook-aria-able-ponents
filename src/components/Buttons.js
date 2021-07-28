import styled from 'styled-components';

// Creating variables with HEX colors
const primaryOrange = "#e74e16";
const primaryGrey = "#bbb8c2";
const primaryBlue = "#161a49";


export const Button = styled.button`
    padding: 12px 24px;
    font-size: 1rem;
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
`;

// Inheritance from the previous styled element
export const PrimaryButton = styled(Button)`
    background-color: ${primaryOrange};
    border: none;
    color: white;
`;

// Inheritance from the previous styled element
export const SecondaryButton = styled(Button)`
    background: none;
    border: 2px solid ${primaryGrey};
    color: ${primaryGrey};
`;

// Inheritance from the previous styled element
export const TeritaryButton = styled(Button)`
    background: none;
    border: none;
    color: ${primaryBlue};
`;
