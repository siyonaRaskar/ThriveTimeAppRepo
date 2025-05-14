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
        name: "TASK ONE",
        deadline: "2025-05-07",
        completed: false,
      },
      {
        name: "TASK TWO",
        deadline: "2025-05-10",
        completed: true,
      },
      {
        name: "TASK THREE",
        deadline: "2025-05-13",
        completed: false,
      },
      {
        name: "TASK FOUR",
        deadline: "2025-05-13",
        completed: true,
      },
      {
        name: "TASK FIVE",
        deadline: "2025-05-16",
        completed: false,
      },
      {
        name: "TASK SIX",
        deadline: "2025-05-19",
        completed: true,
      },
    ],
    welcomePageDisplay: true,
    createTaskPageDisplay: false,
    viewAllTasksPageDisplay: false,
    viewTodaysTasksPageDisplay: false,
    viewCompletedTasksPageDisplay: false,
    newTaskName: "",
    newTaskDeadline: "",
    // editingIndex: null,
    // editingName: "",
    // editingDeadline: "",
    editMode: false,
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

  addTask = () => {
    const newTaskName = this.state.newTaskName;
    const newTaskDeadline = this.state.newTaskDeadline;
    if(newTaskName && newTaskDeadline) // forces user to enter both task name and task deadline
    {
      const newTask = {
        // creating a new object with the inputted task name and task deadline to add to tasks array
        name: newTaskName,
        deadline: newTaskDeadline,
        completed: false,
      };
      
      // this declaration of a constant holding a function is new concept #1
      // used VS code's feature of "quick fix" to fix the type given to parameter prevState
      const changeState = (prevState: { tasks: any; }) => ({
        tasks: [...prevState.tasks, newTask], // spread operator is new concept #2
        newTaskName: "",
        newTaskDeadline: "",
        createTaskPageDisplay: false,
        viewAllTasksPageDisplay: true,
      });

      this.setState(changeState); // passing the function to a function!
    }

  }

   renderAllTasks = () => {
    const todayDate = new Date().toLocaleDateString("en-CA");
    
    const viewsToReturn = this.state.tasks.map((task, index) => { // an array of views new concept #4
      const isLate = !task.completed && task.deadline < todayDate;

      let backgroundColor = "#f0f0f0";
      if (task.completed) backgroundColor = "#d0f5d3"; // light green
      else if (isLate) backgroundColor = "#f8d7da"; // light red

      return (
        <View
          style={{
            marginBottom: 15,
            padding: 15,
            backgroundColor,
            borderRadius: 10,
          }}
        >
          
            <Text style={{ fontSize: 18 }}>{task.name}</Text>
            <Text style={{ color: "#888" }}>Deadline: {task.deadline}</Text>
            <Text style={{ color: task.completed ? "green" : "red" }}>
              Status:{" "}
              {task.completed ? "Completed" : isLate ? "Late" : "Incomplete"}
            </Text>

            {/* Checkbox */}
            <TouchableOpacity
              onPress={() => {
                const updatedTasks = [...this.state.tasks];
                updatedTasks[index].completed = !updatedTasks[index].completed;
                this.setState({ tasks: updatedTasks });
              }}
              style={{
                marginVertical: 5,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16 }}>
                {task.completed ? "✅" : "⬜"} Mark as{" "}
                {task.completed ? "Incomplete" : "Completed"}
              </Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
            </View>
          
        </View>
      );
    });
    return viewsToReturn; // this function will actually return the array of views 
  };

   renderTodaysTasks = () => {
    const todayDate = new Date().toLocaleDateString("en-CA");

    const viewsToReturn = this.state.tasks.map((task, index) => { // an array of views new concept #4
      const isLate = !task.completed && task.deadline < todayDate;
      
      if(task.deadline == todayDate)
      {
        let backgroundColor = "#f0f0f0";
        if (task.completed) backgroundColor = "#d0f5d3"; // light green
        else if (isLate) backgroundColor = "#f8d7da"; // light red

        return (
          <View
            style={{
              marginBottom: 15,
              padding: 15,
              backgroundColor,
              borderRadius: 10,
            }}
          >
            
              <Text style={{ fontSize: 18 }}>{task.name}</Text>
              <Text style={{ color: "#888" }}>Deadline: {task.deadline}</Text>
              <Text style={{ color: task.completed ? "green" : "red" }}>
                Status:{" "}
                {task.completed ? "Completed" : isLate ? "Late" : "Incomplete"}
              </Text>

              {/* Checkbox */}
              <TouchableOpacity
                onPress={() => {
                  const updatedTasks = [...this.state.tasks];
                  updatedTasks[index].completed = !updatedTasks[index].completed;
                  this.setState({ tasks: updatedTasks });
                }}
                style={{
                  marginVertical: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>
                  {task.completed ? "✅" : "⬜"} Mark as{" "}
                  {task.completed ? "Incomplete" : "Completed"}
                </Text>
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
              </View>
            
          </View>
        );
      }
      else
      {
        return(
          <View>
          </View>
        )
      }

    });
    // still goes at the end of function 
    return viewsToReturn; // this function will actually return the array of views 
  };

   renderCompletedTasks = () => {
    const todayDate = new Date().toLocaleDateString("en-CA");

    const viewsToReturn = this.state.tasks.map((task, index) => { // an array of views new concept #4
      const isLate = !task.completed && task.deadline < todayDate;
      
      if(task.completed)
      {
        let backgroundColor = "#f0f0f0";
        if (task.completed) backgroundColor = "#d0f5d3"; // light green
        else if (isLate) backgroundColor = "#f8d7da"; // light red

        return (
          <View
            style={{
              marginBottom: 15,
              padding: 15,
              backgroundColor,
              borderRadius: 10,
            }}
          >
            
              <Text style={{ fontSize: 18 }}>{task.name}</Text>
              <Text style={{ color: "#888" }}>Deadline: {task.deadline}</Text>
              <Text style={{ color: task.completed ? "green" : "red" }}>
                Status:{" "}
                {task.completed ? "Completed" : isLate ? "Late" : "Incomplete"}
              </Text>

              {/* Checkbox */}
              <TouchableOpacity
                onPress={() => {
                  const updatedTasks = [...this.state.tasks];
                  updatedTasks[index].completed = !updatedTasks[index].completed;
                  this.setState({ tasks: updatedTasks });
                }}
                style={{
                  marginVertical: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>
                  {task.completed ? "✅" : "⬜"} Mark as{" "}
                  {task.completed ? "Incomplete" : "Completed"}
                </Text>
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
              </View>
            
          </View>
        );
      }
      else
      {
        return(
          <View>
          </View>
        )
      }

    });
    // still goes at the end of function 
    return viewsToReturn; // this function will actually return the array of views 
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
              <Button title="get started!" onPress={() => this.setPage("all")} />
            </View>
          </View>
        </Modal>

        {/* Top Nav Buttons */}
        <View style={styles.navBar}>
          <Button title="All" onPress={() => this.setPage("all")} />
          <Button title="Add" onPress={() => this.setPage("create")} />
          <Button title="Today's" onPress={() => this.setPage("today")} />
          <Button title="Completed" onPress={() => this.setPage("completed")} />
        </View>

        {/* Content */}
        {this.state.createTaskPageDisplay && (
          <View>
            <Text style = {styles.pageTitle}>
              Create New Task
            </Text>

            {/* inlining handler function as opposed to declaring a new function separately is new concept #3 */}
            <TextInput 
              style = {styles.input}
              placeholder="Task Name"
              value={this.state.newTaskName}
              onChangeText={(text) => this.setState({ newTaskName: text })}
            />

            <TextInput 
              style = {styles.input}
              placeholder="Deadline (YYYY-MM-DD)"
              value={this.state.newTaskDeadline}
              onChangeText={(text) => this.setState({ newTaskDeadline: text })}
            />

            <Button title="Add Task" onPress={() => this.addTask()} />
            
          </View>
          
        )}

        <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
          {this.state.viewAllTasksPageDisplay && !this.state.editMode && (
            <View>
              <Text style={styles.pageTitle}>All Tasks</Text>
              {this.renderAllTasks()}
            </View>
          )}

          {this.state.viewTodaysTasksPageDisplay && !this.state.editMode && (
            <View>
              <Text style={styles.pageTitle}>Today's Tasks</Text>
              {this.renderTodaysTasks()}
            </View>
          )}

          {this.state.viewCompletedTasksPageDisplay && !this.state.editMode && (
            <View>
              <Text style={styles.pageTitle}>Completed Tasks</Text>
              {this.renderCompletedTasks()}
            </View>
          )}
        </ScrollView>

      

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
    padding: 5,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  }
});
