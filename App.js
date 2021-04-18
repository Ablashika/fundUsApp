import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Provider }from 'react-redux'
import AppContainer from './src/navigation/Navigation';
import { store, persistor } from "./src/redux/store";
import { PersistGate} from "redux-persist/integration/react";

export default function App() {
   
  return (
    <Provider store={store}>
      <PersistGate loading={null}  persistor={persistor}  >
      <AppContainer/>
      </PersistGate>
      <StatusBar style="auto" />
    </Provider>
    
  );
}


