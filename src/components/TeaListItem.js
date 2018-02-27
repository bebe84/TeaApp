import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import StarRating from 'react-native-star-rating';
import { Image } from 'react-native-expo-image-cache';

const styles = {
  gridViewItemStyle: {
    height: 150,
    width: null,
  },
  gridViewItemContainerStyle: {
    justifyContent: 'center',
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
};

export default class TeaListItem extends Component {
  renderRating() {
    if (this.props.rating) {
      return (
        <StarRating
          disabled
          rating={this.props.rating}
          starSize={24}
          maxStars={5}
          fullStarColor="white"
          emptyStarColor="white"
          containerStyle={{ width: 100, alignSelf: 'center' }}
        />
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
        <View>
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
