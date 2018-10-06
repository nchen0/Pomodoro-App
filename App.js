import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      minutes: 0
    };
  }

  componentDidMount() {
    setInterval(this.inc, 1000);
  }

  inc = () => {
    if (this.state.seconds === 59) {
      this.setState(prevState => ({
        seconds: 0,
        minutes: prevState.minutes + 1
      }));
    } else {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
    }
  };

  render() {
    return (
      <View style={container}>
        <Text style={count}>
          {this.state.minutes < 10 ? "0" + this.state.minutes : this.state.minutes} :{" "}
          {this.state.seconds < 10 ? "0" + this.state.seconds : this.state.seconds}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  count: {
    fontSize: 40
  }
});

const { container, count } = styles;
