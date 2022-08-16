import React from 'react';
import {SafeAreaView} from 'react-native';
import {Routes} from './src/Routes';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </SafeAreaView>
  );
};

export default App;
