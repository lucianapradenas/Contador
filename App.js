/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
  }

  handleUp() {
    const {counter: ct} = this.state;
    this.setState({counter: ct + 2});
  }

  handleDown() {
    const {counter: ct} = this.state;
    this.setState({counter: ct - 4});
  }

  render() {
    const {counter} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.subcontenedor} />
        <TouchableOpacity style={styles.btn} onPress={this.handleDown}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
        <View style={styles.counterContainer}>
          <Text style={styles.btnText}>{counter}</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.handleUp}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cf6a87',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontenedor: {
    height: 50,
    width: 100,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  btn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8a5c2',
  },
  btnText: {
    color: '#ffff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    color: '#ffff',
    fontSize: 48,
    fontWeight: 'bold',
  },
});

export default App;
