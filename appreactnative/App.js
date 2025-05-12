import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

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
      
    
      <TouchableOpacity style={styles.button} onPress={() => console.log('Login')}>
        <Text style={styles.buttonText}>INGRESAR</Text>
      </TouchableOpacity>

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
    width: '80%',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 4,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: 'red',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
