import {createGlobalStyle} from 'styled-components'

export const darkTheme = {
    body: "#000",
    textColor: "#fff",
    headingColor: "lightblue"
}
export const lightTheme = {
    body: "#fff",
    textColor: "#000",
    headingColor: "#d23669"
}

export type ThemeType = typeof lightTheme;

export const GlobalStyles = createGlobalStyle<{theme:ThemeType}>`
  body {
    background: ${props => props.theme.body};
    color: ${props => props.theme.textColor};
    transition: .3s ease;
  }

  // h5 {
  //   color: ${props => props.theme.headingColor};
  // }
`