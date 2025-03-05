import { Text, View, StyleSheet, Pressable } from 'react-native';
import AdmobMetaAdapter from 'react-native-admob-meta-adapter';

export default function App() {
  const setConsentMeta = () => {
    AdmobMetaAdapter.setAdvertiserTrackingEnable();
  };
  const setNoConsentMeta = () => {
    AdmobMetaAdapter.setAdvertiserTrackingDisable();
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={setConsentMeta}>
        <Text>Press to enable consent.</Text>
      </Pressable>
      <Pressable onPress={setNoConsentMeta}>
        <Text>Press to disable consent.</Text>
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
