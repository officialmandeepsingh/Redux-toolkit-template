import React from 'react';
import {
  Alert,
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {useAppSelector, useAppDispatch} from './app/hooks';
import {
  userLoggedIn,
  userLoggedOut,
  updateAuthToken,
  userToken,
  loggedStatus,
} from './app/slicers/userSlicer';
import {Provider} from 'react-redux';
import {store} from './app/store';

export default function App() {
  return (
    <View>
      <Provider store={store}>
        <AppViews />
      </Provider>
    </View>
  );
}

const AppViews = () => {
  const savedUserToken = useAppSelector(userToken);
  const userLoggedStatus = useAppSelector(loggedStatus);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    // Alert.alert('Button clicked!');
    console.log('user Click');
    dispatch(userLoggedIn());
  };

  return (
    <View style={styles.MainContainer}>
      <Text>Redux Toolkit</Text>

      <View style={{marginVertical: 25}}>
        <View style={{marginVertical: 15}}>
          <Button title="Login In" onPress={() => dispatch(userLoggedIn())} />
        </View>
        <View style={{marginVertical: 15}}>
          <Button title="Logout" onPress={() => dispatch(userLoggedOut())} />
        </View>
        <View style={{marginVertical: 15}}>
          <Button
            title="Update Token"
            onPress={() => dispatch(updateAuthToken('Exwerth'))}
          />
        </View>
      </View>
      <View>
        <Text>{savedUserToken}</Text>
        <Text>{userLoggedStatus ? 'true' : 'false'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {padding: 20, alignItems: 'center'},
});
