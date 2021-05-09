import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class WriteStoryScreen extends Component{
    constructor(){
        super();
        this.state ={
            storyName : "",
            authorName : "",
            story : ""
        }
    }

    render(){
        return(
            <View>
                <Text style={styles.header}>Write Your Story</Text>
                <TextInput 
                placeholder={"Name of Story"} 
                style={styles.textbox} 
                onChangeText={(value)=>{this.setState({storyName : value})}}
                />
                <TextInput 
                placeholder={"Author"} 
                style={styles.textbox} 
                onChangeText={(value)=>{this.setState({storyName : value})}}
                />
                <TextInput 
                placeholder={"Story"} 
                style={styles.storybox} 
                onChangeText={(value)=>{this.setState({storyName : value})}}
                multiline = {true}
                />
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header : {
        alignSelf : 'center',
        fontSize : 40,
        fontWeight : 'bold',
        textDecorationLine : 'underline',
        color : 'purple'
    },
    textbox : {
         marginTop : 10,
         alignSelf : 'center',
         justifyContent : 'center',
         width : 600,
         height : 40,
         backgroundColor : 'aqua'
    },
    storybox : {
        marginTop : 10,
        alignSelf : 'center',
        justifyContent : 'left',
        width : 600,
        height : 300,
        backgroundColor : 'aqua'
   },
   submitButton : {
       alignSelf : 'center',
       alignContent : 'center',
       alignItems : 'center',
       justifyContent : 'center',
       backgroundColor : 'red',
       borderWidth : 3,
       borderRadius : 10,
       width : 100,
       height : 40,
       marginTop : 20
   },
   submitButtonText : {
       fontSize : 25,
       fontWeight : 'bold'
   }
})