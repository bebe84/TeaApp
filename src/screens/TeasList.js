import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchTeas } from '../redux/actions';
import TeasListItem from '../components/TeaListItem';

class TeasList extends Component {
  static navigationOptions() {
    return {
      header: null,
    };
  }

  componentWillMount() {
    this.props.fetchTeas();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <FlatList
        style={{ paddingTop: 25 }}
        data={this.props.teas}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          (<TeasListItem
            key={item.id}
            image={item.image}
            name={item.name}
            rating={this.props.ratings[item.id]}
            onTouch={() => navigate({ key: 'TeaDetails', routeName: 'TeaDetails', params: { tea: item } })}
          />)
        }
      />
    );
  }
}

TeasList.propTypes = {
  fetchTeas: PropTypes.func,
  teas: PropTypes.arrayOf(PropTypes.object),
  ratings: PropTypes.shape({
    id: PropTypes.string,
    rating: PropTypes.number,
  }),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

TeasList.defaultProps = {
  fetchTeas: () => { },
  teas: {},
  ratings: {},
};

const mapStateToProps = (state) => {
  const teas = state.teas.list;
  const { ratings } = state;
  return { teas, ratings };
};

export default connect(mapStateToProps, { fetchTeas })(TeasList);
