import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Image
      style={styles.tinyLogo}
      source={require('./assets/adaptive-icon.png')}
    />
    <StatusBar style="dark"/>
    <TextInput
          style={styles.input}
          placeholder="Ingrese su Usuario"
        />
    <TextInput
    style={styles.input}
      placeholder="Ingrese su Contraseña"
      secureTextEntry
    />
    <Button title="INGRESAR" onPress={() => console.log('Login')} />
    <Text style={styles.text}>Olvidé mi contraseña</Text>
    
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text:{
    color: 'red',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  
  }
});

