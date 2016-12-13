// import libraries for making a component
import React from 'react';
import { Text,View } from 'react-native';

// make the component
const Header = (props) => {
  const { textStyle,viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
// shadow properties do not work in android 2016-12
// https://github.com/facebook/react-native/issues/2768
//    shadowColor: '#000',
//    shadowOffset: { width: 0, height:2},
//    shadowOpactiy: 0.2,
    elevation: 4,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
// make the component available to other parts of the app
export { Header };
