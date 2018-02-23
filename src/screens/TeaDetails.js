import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import StarRating from 'react-native-star-rating';
import { Image } from 'react-native-expo-image-cache';
import PropTypes from 'prop-types';

import { setTeaRating } from '../redux/actions';
import TeaDetailsItem from '../components/TeaDetailsItem';

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: null,
  },
});

class TeaDetails extends Component {
  static navigationOptions({ navigation }) {
    const { tea } = navigation.state.params;

    return {
      title: tea.name,
    };
  }

  render() {
    const {
      id,
      image,
      type,
      description,
      brewTemperature,
      brewTimeInMinutes,
    } = this.props.tea;

    const { rating } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Image style={styles.imageStyle} {...{ uri: image }} />
        <Swiper
          horizontal
          showButtons
          activeDotColor="black"
        >
          <View>
            <TeaDetailsItem leftValue="Rating" >
              <StarRating
                rating={rating}
                starSize={18}
                maxStars={5}
                selectedStar={newRating => this.props.setTeaRating({ id, rating: newRating })}
              />
            </TeaDetailsItem>

            <TeaDetailsItem
              leftValue="Type"
              rightValue={`${type}`}
            />

            <TeaDetailsItem
              leftValue="Brew temperature"
              rightValue={`${brewTemperature} °C`}
            />

            <TeaDetailsItem
              leftValue="Brew time"
              rightValue={`${brewTimeInMinutes} (min.)`}
            />
          </View>
          <View>
            <TeaDetailsItem
              style={{ flexDirection: 'column' }}
              leftValue="Description"
            >
              <Text numberOfLines={11} style={{ fontSize: 18 }}>
                {description}
              </Text>
            </TeaDetailsItem>
          </View>
        </Swiper>
      </View>
    );
  }
}

TeaDetails.propTypes = {
  tea: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    brewTemperature: PropTypes.number,
    brewTimeInMinutes: PropTypes.number,
  }).isRequired,
  rating: PropTypes.number,
  setTeaRating: PropTypes.func.isRequired,
};

TeaDetails.defaultProps = {
  rating: 0,
};

const mapStateToProps = (state, ownProps) => {
  const { tea } = ownProps.navigation.state.params;
  const rating = state.ratings[tea.id];
  return { tea, rating };
};

const mapDispatchToProps = {
  setTeaRating,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeaDetails);
