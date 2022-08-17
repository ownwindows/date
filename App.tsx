import React from 'react';
import './config/firebase';
import RootNavigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';



export default function App() {
  return (
      <SafeAreaProvider>
          <ThemeProvider>
              <RootNavigation />
          </ThemeProvider>
      </SafeAreaProvider>
  );
}