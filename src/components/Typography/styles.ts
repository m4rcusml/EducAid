import styled, { css } from 'styled-components/native';

export type StyleProps = {
  weight?: 'light' | 'regular'| 'medium' | 'semiBold' | 'bold' | 'extraBold';
  size?: 'xxSmall' | 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge';
  align?: 'left' | 'right' | 'center' | 'justify';
  color?: string;
}

export const Text = styled.Text<StyleProps>`
  ${({ 
    theme, 
    weight = 'regular', 
    color = 'black', 
    size = 'medium', 
    align = 'left'
    }) => css`
      font-family: ${theme.fontFamily[weight] };
      font-size: ${theme.fontSize[size]};
      text-align: ${align};
      color: ${color};
  `};
  /* border: 1px solid black; */
  padding-bottom: 3px;
  margin-top: -3px;
`;