import {Image, Modal, StyleSheet, Platform, ScrollView, View, Text, TextInput, Dimensions, AppRegistry, TouchableHighlight, ImageBackground, Button} from 'react-native';
import React, { Component, useEffect } from 'react';
import Constants from 'expo-constants';
import { Audio } from 'expo-av';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

// import { HelloWave } from '@/components/HelloWave';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// TRY IMPLEMENTING MUSIC LAST!!!! (kinda complicated)
export default class App extends Component {    
   
    state = {
        tasks: [
            {
                name: 'Example Task!',
                deadline: '5/3/25',
                completed: false
            }
        ],
        welcomePageDisplay: true,
        createTaskPageDisplay: false,
        viewAllTasksPageDisplay: false,
        viewTodaysTasksPageDisplay: false,
        viewCompletedTasksPageDisplay: false,
    };

    handleWelcomePagePress = () => this.setState(state => ({
        welcomePageDisplay: true,
        createTaskPageDisplay: false,
        viewAllTasksPageDisplay: false,
        viewTodaysTasksPageDisplay: false,
        viewCompletedTasksPageDisplay: false,
    }));

    handleCreateTaskPagePress = () => this.setState(state => ({
        welcomePageDisplay: false,
        createTaskPageDisplay: true,
        viewAllTasksPageDisplay: false,
        viewTodaysTasksPageDisplay: false,
        viewCompletedTasksPageDisplay: false,
    }));

    handleViewAllTasksPagePress = () => this.setState(state => ({
        welcomePageDisplay: false,
        createTaskPageDisplay: false,
        viewAllTasksPageDisplay: true,
        viewTodaysTasksPageDisplay: false,
        viewCompletedTasksPageDisplay: false,
    }));
  
    handleViewTodaysTasksPagePress = () => this.setState(state => ({
        welcomePageDisplay: false,
        createTaskPageDisplay: false,
        viewAllTasksPageDisplay: false,
        viewTodaysTasksPageDisplay: true,
        viewCompletedTasksPageDisplay: false,
    }));

    handleViewCompletedTasksPagePress = () => this.setState(state => ({
        welcomePageDisplay: false,
        createTaskPageDisplay: false,
        viewAllTasksPageDisplay: false,
        viewTodaysTasksPageDisplay: false,
        viewCompletedTasksPageDisplay: true,
    }));

    

    render() {
        return (
            <View style={styles.container}>
                <Modal transparent={true} visible={this.state.welcomePageDisplay}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalBox}>
                            <Text style={styles.tttTextStyle}>
                                Time To Thrive!
                            </Text>
                            <Text style={styles.modalQuote}>
                                "Action is the foundational key to all success." 
                            </Text>
                            <Text style={styles.modalName}>- Pablo Picasso </Text>
                            <View style={styles.space}>

                            </View>
                            <Button title="get started!" onPress={() => this.setState({ welcomePageDisplay: false })} />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        }, 
        modalBox: {
            width: deviceWidth * 0.8,
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 15,
            alignItems: 'center',
            shadowColor: '#FFD1DC',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 5, 
          },
          modalQuote: {
            fontSize: 16,
            //fontStyle: 'italic',
            marginTop: 13,
            textAlign: 'center',
            color: '#8A2BE2',
            fontFamily: 'Cochin',
          },
          modalName: {
            fontSize: 14,
            marginTop: 5,
            color: '#C71585',
            fontFamily: 'Georgia',
          }, 
          modalContainer: {
            height: deviceHeight,
            width: deviceWidth,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF0F5'
          },
          tttTextStyle: {
            fontSize: 24, 
            fontWeight: 'bold',
            color: '#FF69B4',
          },
          space: {
            height: deviceHeight/9,
          }

    });