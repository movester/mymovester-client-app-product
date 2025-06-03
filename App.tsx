import React from 'react';
import { SafeAreaView } from 'react-native';
import StretchingPage from './src/screens/StretchingPage';
import ErrorBoundary from './src/components/ErrorBoundary';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ErrorBoundary>
        <StretchingPage />
      </ErrorBoundary>
    </SafeAreaView>
  );
}
