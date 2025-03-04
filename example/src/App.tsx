import { Text, View, StyleSheet, Pressable } from 'react-native';
import AdmobMetaAdapter from 'react-native-admob-meta-adapter';

export default function App() {
  const setConsentIronSource = () => {
    AdmobMetaAdapter.setAdvertiserTracking(true);
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={setConsentIronSource}>
        <Text>Press to send consent.</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
