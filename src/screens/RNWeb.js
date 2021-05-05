import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { WebView } from "react-native-webview";

export default class RNWeb extends Component {
  webview = null;
  render() {
    return (
      <WebView
        source={{
          uri: this.props.uri,
        }}
        style={{
          marginTop: 50,
          marginHorizontal: 15,
          backgroundColor: "#39c45e",
          height: 300,
        }}
        originWhiteList={["*"]}
        ref={(ref) => (this.webview = ref)}
        onNavigationStateChange={this.handleWebViewNavigationStateChange}
      />
    );
  }

  handleWebViewNavigationStateChange = (newNavState) => {
    const { url } = newNavState;

    if (!url) return;

    if (url.includes("codetraingh.com")) {
      this.webview.stopLoading();
      this.props.closeWebView();
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
