import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'pink',
  secondary: 'orange',
  danger: 'yellow',
  success: 'gray'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;
  gap: 2rem;
  
  background-color: ${props => props.theme["greenClarim-100"]};
  color: ${propiedades => propiedades.theme["gray-400"]};
 
  /* ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]}
    `
  }} */
`;