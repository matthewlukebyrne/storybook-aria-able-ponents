import styled from 'styled-components';
import { defaultTheme, typeScale } from "../utils"; 

// Creating variables with HEX colors


export const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
`;

// Inheritance from the previous styled element
export const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: white;
`;

// Inheritance from the previous styled element
export const SecondaryButton = styled(Button)`
    background: none;
    border: 2px solid ${defaultTheme.primaryColor};
    color: ${defaultTheme.primaryColor};
`;

// Inheritance from the previous styled element
export const TeritaryButton = styled(Button)`
    background: none;
    border: none;
    color: ${defaultTheme.primaryColor};
`;
