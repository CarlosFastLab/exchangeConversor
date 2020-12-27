import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import Conversor from './src/components/Conversor'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  //https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=685a9e4c051400c3d6f8
  render() {
    return(
      <SafeAreaView style={styles.container}>
        <Conversor moedaA='USD' moedaB='BRL'/>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;