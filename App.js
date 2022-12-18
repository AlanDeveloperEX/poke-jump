import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { Routes } from './src/routes';
import theme from './src/global/styles/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <SafeAreaView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
}
