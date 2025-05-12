import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default class App extends Component {
  state = {
    tasks: [
      {
        name: "Example Task",
        deadline: "2025-05-03",
        completed: false,
      },
    ],
    welcomePageDisplay: true,
    createTaskPageDisplay: false,
    viewAllTasksPageDisplay: false,
    viewTodaysTasksPageDisplay: false,
    viewCompletedTasksPageDisplay: false,
    newTaskName: "",
    newTaskDeadline: "",
    editingIndex: null,
    editingName: "",
    editingDeadline: "",
  };

  // Navigation button click handler
  setPage = (page) => {
    this.setState({
      welcomePageDisplay: false,
      createTaskPageDisplay: page == "create",
      viewAllTasksPageDisplay: page == "all",
      viewTodaysTasksPageDisplay: page == "today",
      viewCompletedTasksPageDisplay: page == "completed",
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* Welcome Modal */}
        <Modal transparent={true} visible={this.state.welcomePageDisplay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalBox}>
              <Text style={styles.tttTextStyle}>Time to Thrive!</Text>
              <Text style={styles.modalQuote}>
                "Action is the foundational key to all success."
              </Text>
              <Text style={styles.modalName}>Pablo Picasso</Text>
              <View style={styles.space}></View>
              <Button
                title="get started!"
                onPress={() => this.setPage("all")}
              />
            </View>
          </View>
        </Modal>

        {/* Top Nav Buttons */}
        <View style={styles.navBar}>
          <Button title="All Tasks" onPress={() => this.setPage("all")} />
          <Button title="Add Task" onPress={() => this.setPage("create")} />
          <Button title="Today's Tasks" onPress={() => this.setPage("today")} />
          <Button
            title="Completed Tasks"
            onPress={() => this.setPage("completed")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalBox: {
    width: deviceWidth * 0.8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#FFD1DC",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  modalQuote: {
    fontSize: 16,
    marginTop: 13,
    textAlign: "center",
    color: "#8A2BE2",
    fontFamily: "Cochin",
  },
  modalName: {
    fontSize: 14,
    marginTop: 5,
    color: "#C71585",
    fontFamily: "Georgia",
  },
  modalContainer: {
    height: deviceHeight,
    width: deviceWidth,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF0F5",
  },
  tttTextStyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF69B4",
  },
  space: {
    height: deviceHeight / 6,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
});
