import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextComponent, TextInput, TouchableOpacity, View, Platform, Image, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >

      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <StatusBar backgroundColor='#fff' translucent={false} />

          <Image
            source={require('./src/assets/logo.png')}

            style={styles.logo}
          />


          <TextInput
            placeholder='Celular, username ou email'
            style={styles.input}
          />

          <TextInput
            placeholder='Sua senha'
            style={styles.input}
          />


          <View style={styles.esqueceuContainer}>
            <TouchableOpacity>
              <Text style={styles.esqueceuText}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

          </View>


          <TouchableOpacity style={styles.btnAcessar} >
            <Text style={styles.textAcessar}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnFacebook}>
            <FontAwesome5 name="facebook" size={25} color='#399fff' />
            <Text style={styles.facebookText}>Continue como André</Text>
          </TouchableOpacity>

          <View style={styles.divisor}>
            <View style={styles.linha}></View>
            <Text style={{ marginHorizontal: '3%' }}>OU</Text>
            <View style={styles.linha}></View>
          </View>

          <View style={styles.singUpContainer}>
            <Text style={styles.singUpText}>Não possui uma conta?</Text>
            <TouchableOpacity>
              <Text style={styles.btnSingUp}>Cadastre-se</Text>
            </TouchableOpacity>

          </View>

        </View>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'

  },

  logo: {
    marginTop: Platform.OS === 'android' ? '13%' : '20%',
    marginBottom: Platform.OS === 'android' ? '13%' : '15%',
  },
  input: {
    width: '90%',
    height: 42,
    backgroundColor: '#f4f3f3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  esqueceuContainer: {
    width: '90%',
    alignItems: 'flex-end'
  },
  esqueceuText: {
    color: '#399fff'
  },

  btnAcessar: {
    marginTop: '5%',
    backgroundColor: '#399fff',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },

  textAcessar: {
    color: 'white'

  },
  btnFacebook: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15%'

  },
  facebookText: {
    color: '#399fff',
    paddingLeft: 8,
    fontSize: 15
  },

  divisor: {
    marginTop: '10%',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  linha: {
    width: '45%',
    height: 2,
    backgroundColor: '#efeded',
    borderRadius: 5
  },

  singUpContainer: {
    flexDirection: 'Row',
    marginTop: '10%'
  },

  singUpText: {
    color: '#c4c4c4',
    marginTop: '10%'
  },

  btnSingUp: {
    color: '#399fff',
    fontWeight: 'bold'
  }

});

