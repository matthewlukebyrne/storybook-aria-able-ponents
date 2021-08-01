// import { hideVisually } from 'polished';

// Importing Styled Components
import styled from 'styled-components';

// Import light theme setup from themes.js
// Added typescale for font control
import { typeScale } from '../utils';


// Allow to modify different types of button combinations
// By using props I can pass down the modifier information to my styled components area with destructing
// With the modifers you have opening and closing parentheses which take a parameter that is going to return the below CSS

export const TAB_MODIFIERS = {
    small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
    large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
    warning: ({ props }) => `
    background: none;
    color: ${props.theme.status.warningColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.warningColorHover};
      outline: 3px solid ${props.theme.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${props.theme.status.warningColorActive};
    }
    `,

    primaryButtonWarning: ({ props }) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};
    `,

    secondaryButtonWarning: ({ props }) => `
    border: 2px solid ${props.theme.status.warningColor};
    `,

    error: ({ props }) => `
    background: none;
    color: ${props.theme.status.errorColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.errorColorHover};
      outline: 3px solid ${props.theme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${props.theme.status.errorColorActive};
    }
    `,

    primaryButtonError: ({ props }) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};
    `,

    secondaryButtonError: ({ props }) => `
    border: 2px solid ${props.theme.status.warningColor};
    `,

    success: ({ props }) => `
    background: none;
    color: ${props.theme.status.successColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.successColorHover};
      outline: 3px solid ${props.theme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${props.theme.status.successColorActive};
    }
    `,

    primaryButtonSuccess: ({ props }) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};
    `,

    secondaryButtonSuccess: ({ props }) => `
    border: 2px solid ${props.theme.status.warningColor};
    `
};


// Creating a default structure of my compoents
export const Tab = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: 'Quicksand', sans-serif;
    transition: background-color 0.2s linear, color 0.2s linear;
`;



// // Test Accessible Button
// export const AccessibleButton = styled.div`
//     ${hideVisually()};
// `;