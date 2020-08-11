const colors = {
  primary: `#000`,
  secondary: `#fff`
}

export const siteBackground: ITheme = {
  light: `#fff`,
  dark: `#2d2d2d`,
  pink: `#f0f`,
  papayawhip: 'papayawhip'
}

export const titleColor: ITheme = {
  light: colors.primary,
  dark: colors.secondary,
  pink: colors.secondary,
  papayawhip: colors.primary
}

interface ITheme {
  light: string
  dark: string
  pink: string
  papayawhip: string
  [type: string]: string
}
