import React from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { StackNavigator } from 'react-navigation';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import reducers from './src/redux/reducers';
import TeasList from './src/screens/TeasList';
import TeaDetails from './src/screens/TeaDetails';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppScreenRouter = StackNavigator({
  TeasList,
  TeaDetails,
});

class App extends React.Component {
  render() {
    const persistConfig = {
      key: 'root',
      storage: AsyncStorage,
    };

    const persistedReducers = persistReducer(persistConfig, reducers);

    const store = createStore(
      persistedReducers,
      applyMiddleware(
        ReduxThunk,
        ReduxLogger,
      ),
    );

    const persistor = persistStore(store);

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppScreenRouter styles={styles.container} />
        </PersistGate>
      </Provider >
    );
  }
}

export default App;
