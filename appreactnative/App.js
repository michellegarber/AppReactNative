import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <TextInput
      placeholder="Ingrese su Email"
    />
    <TextInput
      placeholder="Ingrese su Contraseña"
      secureTextEntry
    />
    <Button title="INGRESAR" onPress={() => console.log('Login')} />
    <StatusBar style="light" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
