import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import * as Permissions from "expo-permissions";
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class BookTransaction extends React.Component{
    
    constructor(){
        super();
        this.state = {
            hasCameraPerm: '',
            scanData: '',
            isScanned: false,
            buttonState: 'notpressed',
        }
    }


    handleScan = async ({type,data}) => {
        alert(type)
        this.setState({scanData: data, isScanned: true, buttonState: 'pressed'})
        alert(this.state.scanData)
    }

    getCameraPerm = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPerm: status === 'granted', buttonState: 'pressed', isScanned: false})
    }

    render(){
        var hasCameraPerm = this.state.hasCameraPerm;
        var isScanned = this.state.isScanned;
        var buttonState = this.state.buttonState;

        if(buttonState === 'pressed' && hasCameraPerm){
            alert(isScanned + "isScanned")
            //return(<BarCodeScanner onBarCodeScanned = {isScanned ? undefined : this.handleScan}/>)
            return(<BarCodeScanner onBarCodeScanned = {isScanned === true ? this.handleScan : this.handleScan}/>)
        }else if(buttonState === 'notpressed'){


            return(
                <View style = {Styles.overall}>
                    <Text>This is the BookTransaction Screen</Text>
                    <TextInput placeholder = "Book ID" placeholderTextColor = "white" style = {Styles.input} value = {this.state.scanData}></TextInput>
                    <TouchableOpacity style = {Styles.button} onPress = {this.getCameraPerm}><Text>Scan book</Text></TouchableOpacity>
                </View>
            )
        }
    }
}

const Styles = StyleSheet.create({
    overall:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#90ee90',

    },
    input:{
        marginTop: 20,
        height: 40,
        width: 200,
        
        borderRadius: 15,
        backgroundColor: '#3cb371',
        alignItems: "center",
        textAlign: "center",
        padding: 15,
    },
    button:{
        backgroundColor: '#3cb371',
        margin: 20,
        padding: 7,
    }
})