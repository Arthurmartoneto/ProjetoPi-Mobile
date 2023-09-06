import { View, Text, TextInput, Button, StyleSheet, Image} from 'react-native';

const Login = () => {
  return (
    <View style={estilo.container}>
      
      <Image style={estilo.logo}
      source={
        require('../assets/snack-icon.png')
      } 
      />
      
      <Text style={estilo.titulo}>Login</Text>

      <TextInput style={estilo.input} placeholder={'E-mail'} 
      keyboardType={'email-adress'}/>

      <TextInput style={estilo.input} placeholder={'Senha'} 
      secureTextEntry={true}/>

      <Button title="Entrar"/>
        
    </View>
  );
};

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    paddingHorizontal: 16,
    textAlign: 'center',
  },
  logo:{
    width:50,
    height:50,
    alignSelf: 'center',
  },
  titulo:{
    fontSize: 28,
    fontWeight: 400,
    textAlign:'center',
    paddingBottom: 28,
  },
  input:{
    lineHeight:24,
    borderBottomWidth:1,
    borderBottomColor:'lightgray',
    marginBottom:16,
  },
});

export default Login;
