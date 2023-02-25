import React, {Component} from 'react';
import { View, Text, Image} from 'react-native';

class App extends Component{
  render(){


    let nome = 'Dados Pessoais';    
    let img = 'https://media.licdn.com/dms/image/C4E03AQEok3cHBrdbIw/profile-displayphoto-shrink_800_800/0/1627518341869?e=1682553600&v=beta&t=mcvrQLb2BORcXpX2pYRpZjNGN7lihvmOJ9ePET6zMCw';


    return(
      <View>
        <Text>Programação mobile</Text>
        <Text>Aula 01</Text>
        <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>
          Perfil
        </Text>


        <Image
          source={{ uri: img }}
          style={{ width: 300, height: 300}}
        />

      
        <Text style={{ fontSize: 18 }}>{nome}</Text>
        <Text>Nome: Rafael Santana</Text>
        <Text>Idade: 29</Text>

        <Text style={{fontSize: 18}}>FORMAÇÂO</Text>
        <Text>Cursando Análise e Desenvolvimento de Sistemas</Text>


        <Text style={{fontSize: 18}}>EXPERIÊNCIA</Text>
        <Text>Analista de Suporte na AnnA Comunicações atuando com Low-Code e BI</Text>


        <Text style={{fontSize: 18}}>PROJETOS</Text>
        <Text>App mobile com react-native no snack.expo.dev</Text>
        


      </View>
    )
  }
}


export default App;
