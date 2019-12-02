import React, { PureComponent, Component } from 'react';
import { Platform, StyleSheet, Dimensions, ViewScroll, View, Text, Navigator, PropTypes } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import color from '../constants/Colors'
import makers from "./map.json"
window.navigator.userAgent = 'ReactNative';

export default class Maps extends Component {
renderMarkers() {
    return makers.map((place, i) => (
      <Marker 
        key={i}
        title={place.title}
        coordinate={place.coordinates}
      />
    ));
  }

  render() {
    const { region } = this.props

    return (
      <MapView
      style={styles.container}
      region={region}
      showsUserLocation
      showsMyLocationButton
      >
        {this.renderMarkers()}
      </MapView>
    );
  }

}


Maps.navigationOptions = {
    header: null,
};
