import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Linking
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Visite o{' '}
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('https://reactnative.dev');
            }}>
            Site Oficial do React Native
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
  },
  hyperlinkStyle: {
    color: 'orange',
  },
});

export default App;