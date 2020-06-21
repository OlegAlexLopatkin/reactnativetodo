import React, { useState } from "react";
import { AppLoading } from "expo";
import {Main} from './src/Main'
import {bootstrap} from './src/bootstrap'


export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    );
  }
  return (
      <Main />
  );
}
