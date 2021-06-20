import * as React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Alert,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { firebase } from "@firebase/app";
import "firebase/auth";
import db from "../config";
import { Input } from "react-native-elements";

export default class Authentication extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isModal: false,
      name: "",
      address: "",
      contact: "",
      confirmPassword: "",
    };
  }

  logIn = () => {
    const email = this.state.email;
    const password = this.state.password;

    if (email && password) {
      try {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            Alert.alert("Login Successful");
            this.props.navigation.navigate("Home");
          });
      } catch (error) {
        var errorCode = error.code;
        Alert.alert(errorCode);
      }
    } else {
      return Alert.alert("Please enter email and password");
    }
  };

  userSignUp = () => {
    if (this.state.password === this.state.confirmPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          db.collection("users").add({
            name: this.state.name,
            address: this.state.address,
            contact: this.state.contact,
            email: this.state.email,
          });
          return Alert.alert(
            "User added successfully",
            "Please Login to continue",
            [
              {
                text: "OK",
                onPress: () => {
                  this.setState({ isModal: false });
                },
              },
            ]
          );
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    } else {
      return Alert.alert("Passwords do not match");
    }
  };

  showModal = () => {
    return (
      <Modal
        visible={this.state.isModal}
        transparent={true}
        animationType={"fade"}
      >
        <View style={styles.view}>
          <KeyboardAvoidingView>
            <ScrollView>
              <Text
                style={{
                  color: "#ffd700",
                  alignSelf: "center",
                  margin: 25,
                  fontWeight: "bold",
                }}
              >
                Register
              </Text>
              <Input
                placeholder="Enter your name"
                style={styles.textInput}
                onChangeText={(text) => {
                  this.setState({ name: text });
                }}
                leftIcon={{ type: "font-awesome", name: "user" }}
              />
              <Input
                placeholder="Enter your address"
                style={styles.textInput}
                onChangeText={(text) => {
                  this.setState({ address: text });
                }}
                leftIcon={{ type: "font-awesome", name: "map-marker" }}
              />
              <Input
                placeholder="Enter your phone number"
                style={styles.textInput}
                onChangeText={(text) => {
                  this.setState({ contact: text });
                }}
                leftIcon={{ type: "font-awesome", name: "phone" }}
                f
              />
              <Input
                placeholder="Enter your e-mail id"
                style={styles.textInput}
                onChangeText={(text) => {
                  this.setState({ email: text });
                }}
                keyboardType="email"
                leftIcon={{ type: "font-awesome", name: "envelope" }}
              />
              <Input
                placeholder="Enter your password"
                style={styles.textInput}
                onChangeText={(text) => {
                  this.setState({ password: text });
                }}
                secureTextEntry={true}
                leftIcon={{ type: "font-awesome", name: "lock" }}
              />
              <Input
                placeholder="Confirm your password"
                style={styles.textInput}
                onChangeText={(text) => {
                  this.setState({ confirmPassword: text });
                }}
                leftIcon={{ type: "font-awesome", name: "lock" }}
              />
              <TouchableHighlight
                style={styles.touchableOpacity}
                onPress={() => {
                  this.userSignUp();
                }}
              >
                <Text style={styles.touchableOpacityText}>Sign Up</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.touchableOpacity}
                onPress={() => {
                  this.setState({ isModal: false });
                }}
              >
                <Text style={styles.touchableOpacityText}>Cancel</Text>
              </TouchableHighlight>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    );
  };

  render() {
    return (
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          backgroundColor: "#BDC581",
        }}
      >
        <View>{this.showModal()}</View>
        <Text
          style={{
            color: "red",
            fontWeight: "bold",
            margin: 25,
            fontSize: 30,
          }}
        >
          HRecorder
        </Text>
        <Input
          style={{
            padding: 10,
            color: "white",
          }}
          placeholder="E-mail"
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
          leftIcon={{ type: "font-awesome", name: "envelope" }}
        />
        <Input
          style={{
            padding: 10,
            color: "white",
          }}
          placeholder="Password"
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
          secureTextEntry={true}
          leftIcon={{ type: "font-awesome", name: "unlock" }}
        />

        <TouchableHighlight
          style={styles.touchableOpacity}
          onPress={() => {
            this.logIn();
          }}
        >
          <Text style={styles.touchableOpacityText}>Log In</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchableOpacity}
          onPress={() => {
            this.setState({ isModal: true });
          }}
        >
          <Text style={styles.touchableOpacityText}>Sign Up</Text>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    color: "white",
  },
  view: {
    flex: 1,
    backgroundColor: "#BDC581",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  touchableOpacity: {
    backgroundColor: "#F8EFBA",
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: "#BDC581",
    borderRadius: 20,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  touchableOpacityText: {
    color: "lightgreen",
  },
});
