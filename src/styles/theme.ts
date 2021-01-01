const globalTheme = {
    switchWidth: '40px',
    switchHeight: '20px',
    switchPadding: '3px',
    switchColorPrimary: '#302c40',
    switchAnimationDuration: '0.2s',
    colorContrastLow: '#d3d3d4',
    colorWhite: '#ffffff',
    gradient: 'linear-gradient(122deg, rgba(128,74,216,1) 0%,rgba(98,75,217,1) 100%)',
    colorGreen: '#5Dc399',
    colorGray: '#adadad',
}

export const lightTheme = {
    primary: '#ffffff',
    secondary: '#f8f8f8',
    textColor: '#585280',
    header: '#585280',
    headerNumber: '#ffffff',
    activeMenu: '#585280',
    ...globalTheme
}

export const darkTheme = {
    primary: '#302c40',
    secondary: '#2c2839',
    textColor: '#ffffff',
    header: '#ffffff',
    headerNumber: '#585280',
    activeMenu: '#ffffff',
    ...globalTheme
}