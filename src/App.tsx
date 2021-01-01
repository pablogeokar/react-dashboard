import Dashboard from './containers/Dashboard'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { lightTheme, darkTheme } from './styles/theme'



export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
}