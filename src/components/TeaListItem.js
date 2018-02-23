import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import StarRating from 'react-native-star-rating';
import { Image } from 'react-native-expo-image-cache';

const styles = StyleSheet.create({
  gridViewItemStyle: {
    height: 150,
    width: null,
  },
  textContainerStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center',
  },
});

export default class TeaListItem extends Component {
  renderRating() {
    if (this.props.rating) {
      return (
        <View style={{ width: 100, alignSelf: 'center' }}>
          <StarRating
            disabled
            rating={this.props.rating}
            starSize={24}
            maxStars={5}
            fullStarColor="white"
            emptyStarColor="white"
          />
        </View>
      );
    }
    return null;
  }

  render() {
    const { image, name } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={this.props.onTouch}
        style={styles.gridViewItemContainerStyle}
      >
        <View style={{ justifyContent: 'center' }}>
          <Image style={styles.gridViewItemStyle} {...{ uri: image }} />
          <View style={styles.textContainerStyle}>
            <Text style={styles.textStyle}>{name}</Text>
            {this.renderRating()}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

TeaListItem.propTypes = {
  rating: PropTypes.number,
  onTouch: PropTypes.func,
  name: PropTypes.string,
  image: PropTypes.string,
};

TeaListItem.defaultProps = {
  rating: 0,
  onTouch: () => { },
  name: '',
  image: '',
};
