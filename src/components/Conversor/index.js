import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import api from '../../services/api'

class Conversor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            moedaB_valor: 0,
            valorConvertido: 0
        }
        this.converter = this.converter.bind(this)
    }

    async converter() {
        let de_para = this.state.moedaA+'_'+this.state.moedaB;
        const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=685a9e4c051400c3d6f8`);
        console.log(response.data);
        let cotacao = response.data[de_para];
        let resultado = (cotacao * parseFloat(this.state.moedaB_valor));
        this.setState({
            valorConvertido: resultado.toFixed(2)
        });
        Keyboard.dismiss();
    }

    render() {
        const { moedaA, moedaB } = this.props;

        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>
                <TextInput style={styles.areaInput}
                    placeholder='Valor a ser convertido'
                    keyboardType='numeric'
                    onChangeText={(moedaB_valor) => { this.setState({ moedaB_valor }) }}
                />
                <TouchableOpacity style={styles.botaoArea}
                    onPress={this.converter}>
                    <Text style={styles.botaoText}>Converter</Text>
                </TouchableOpacity>
                <Text style={styles.valorConvertido}>
                    {(this.state.valorConvertido === 0) ? '' : this.state.valorConvertido}</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    areaInput: {
        width: 280,
        height: 45,
        backgroundColor: '#CCC',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 20,
        color: '#000',
        borderRadius: 5
    },
    botaoArea: {
        width: 150,
        height: 45,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,

    },
    botaoText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFF'
    },
    valorConvertido: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15
    }
})

export default Conversor;