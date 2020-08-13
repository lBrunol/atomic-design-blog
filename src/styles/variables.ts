export const colors: ITheme = {
  bg: {
    light: `rgba(255,255,255,0.9);`,
    dark: `#1d1d1d;`
  },
  bgSolid: {
    light: `#ffffff;`,
    dark: `#000000;`
  },
  bgSecondary: {
    light: `#f1f1f1;`,
    dark: `#2d2d2d;`
  },
  borderColor: {
    light: `#f1f1f1;`,
    dark: `#2d2d2d;`
  },
  highlightColor: {
    light: `#187888;`,
    dark: `#a1ecf7;`
  },
  primaryColor: {
    light: `rgba(15,15,15,0.95);`,
    dark: `rgba(255,255,255,0.9);`
  },
  secondaryColor: {
    light: `#757575;`,
    dark: `#aaaaaa;`
  },
  boxShadow: {
    light: `rgba(18,18,18,0.12);`,
    dark: `rgba(250,250,250,0.12);`
  }
}

interface ITheme {
  bg: ITypeTheme
  bgSolid: ITypeTheme
  bgSecondary: ITypeTheme
  borderColor: ITypeTheme
  highlightColor: ITypeTheme
  primaryColor: ITypeTheme
  secondaryColor: ITypeTheme
  boxShadow: ITypeTheme
  [type: string]: ITypeTheme
}

interface ITypeTheme {
  light: string
  dark: string
  [type: string]: string
}
