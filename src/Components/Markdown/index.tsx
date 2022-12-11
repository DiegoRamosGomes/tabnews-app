import MarkdownWebView from "react-native-github-markdown";
import { useState } from "react";
import { WebViewMessageEvent } from "react-native-webview";
import { Linking } from "react-native";

interface MarkdownProps {
  body: string
}

const injectedScript = `
  function waitForBridge() {
    if (!window.ReactNativeWebView.postMessage) {
      setTimeout(waitForBridge, 200);
    } else {
      window.document.querySelector("body").style.backgroundColor = "transparent"
      setTimeout(postMessage, 500);  
    }
  }
  
  function postMessage() {
    window.ReactNativeWebView.postMessage(
         Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight,
        )
      );
  }
  waitForBridge();
  true;
`;
export const Markdown = ({body}: MarkdownProps) => {
  const [height, setHeight] = useState(0);

  const onMessage = (e: WebViewMessageEvent) => {
    setHeight(parseInt(e.nativeEvent.data, 10));
  };

  return (
    <MarkdownWebView
      content={body}
      injectedJavaScript={injectedScript}
      onMessage={onMessage}
      javaScriptEnabled={true}
      decelerationRate="normal"
      highlight
      scrollEnabled={false}
      onShouldStartLoadWithRequest={request => {
        if (request.url !== 'about:blank') {
          const canOpen = Linking.canOpenURL(request.url)
          if (canOpen) {
            Linking.openURL(request.url)
          }

          return false
        }
        return true
      }}
      nestedScrollEnabled={false}
      style={{
        flex: 0,
        height: height,
        backgroundColor: 'transparent',
        padding: 0,
        marginTop: -30,
        marginHorizontal: -35,
        marginBottom: -30
      }}
    />
  )
}