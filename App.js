import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Vibration, Button } from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      minutes: 25,
      start: false,
      working: true
    };
  }

  componentDidMount() {
    /*this.intervalId = setInterval(() => {
      if (this.state.seconds === 0 && this.state.minutes === 0) {
        clearInterval(this.interval);
      } else {
        this.inc();
      }
    }, 1000);*/
  }

  inc = () => {
    /*if (this.state.seconds === 1 && this.state.minutes === 0) {
      clearInterval(this.intervalId);
      alert("Time's up!");
    }*/
    if (this.state.seconds === 0) {
      this.setState(prevState => ({
        seconds: 59,
        minutes: prevState.minutes - 1
      }));
    } else {
      this.setState(prevState => ({
        seconds: prevState.seconds - 1
      }));
    }
  };

  handleStop = () => {
    this.setState({ start: !this.state.start });
    clearInterval(this.intervalId);
  };

  handleStart = () => {
    this.setState({ start: !this.state.start });
    this.intervalId = setInterval(() => {
      if (this.state.seconds === 0 && this.state.minutes === 0) {
        if (this.state.working === true) {
          alert("Session done, break time!");
          this.setState({
            start: !this.state.start,
            minutes: 5,
            seconds: 0,
            working: !this.state.working
          });
          clearInterval(this.intervalId);
        } else {
          alert("Break done, study time!");
          this.setState({
            start: !this.state.start,
            minutes: 25,
            seconds: 0,
            working: !this.state.working
          });
        }
      } else {
        this.inc();
      }
    }, 1000);
  };

  render() {
    return (
      <View style={container}>
        <Text style={count}>
          {this.state.minutes < 10 ? "0" + this.state.minutes : this.state.minutes} :{" "}
          {this.state.seconds < 10 ? "0" + this.state.seconds : this.state.seconds}
        </Text>
        {this.state.start ? (
          <View style={buttonsContainer}>
            <TouchableOpacity style={button} onPress={this.handleStop}>
              <Text style={buttonText}>Stop</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={buttonsContainer}>
            <TouchableOpacity style={button} onPress={this.handleStart}>
              <Text style={buttonText}>Start</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2FABF1",
    alignItems: "center",
    justifyContent: "center"
  },
  count: {
    fontSize: 40,
    color: "white"
  },
  buttonsContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    height: 35,
    marginTop: 20,
    borderRadius: 10,
    borderColor: "white",
    backgroundColor: "#79CEFE"
  },
  button: {
    height: 35,
    width: 90,
    justifyContent: "center"
  },
  buttonText: {
    textAlign: "center",
    color: "white"
  }
});

const { container, count, button, buttonsContainer, buttonText } = styles;
