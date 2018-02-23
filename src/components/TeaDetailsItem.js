import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 5,
  },
  leftTextStyle: {
    fontSize: 18,
    color: 'black',
  },
  rightTextStyle: {
    fontSize: 18,
  },
  childrenStyle: {
    alignSelf: 'center',
  },
});

class TeaDetailsItem extends Component {
  renderRighValue() {
    const { rightValue, children } = this.props;

    if (!this.props.rightValue) {
      return children;
    }

    return <Text style={styles.rightTextStyle}>{rightValue}</Text>;
  }

  render() {
    const { leftValue, style } = this.props;
    const containerStyle = [styles.containerStyle];
    if (style) {
      containerStyle.push(style);
    }
    return (
      <View style={containerStyle}>
        <Text style={styles.leftTextStyle}>{leftValue}</Text>
        <View style={styles.childrenStyle}>
          {this.renderRighValue()}
        </View>
      </View>
    );
  }
}

TeaDetailsItem.propTypes = {
  leftValue: PropTypes.string.isRequired,
  rightValue: PropTypes.string,
  children: PropTypes.element,
  style: stylePropType,
};

TeaDetailsItem.defaultProps = {
  rightValue: '',
  children: null,
  style: {},
};

export default TeaDetailsItem;
