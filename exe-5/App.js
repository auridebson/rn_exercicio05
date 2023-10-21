import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';
import Home from './src/Pages/Home';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}