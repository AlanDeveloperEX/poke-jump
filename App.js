import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { Routes } from './src/routes';
import theme from './src/global/styles/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={theme.colors.background_header}
          translucent
        />
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
}
