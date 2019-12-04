import React, { PureComponent, Component } from 'react';
import { Platform, StyleSheet, Dimensions, ViewScroll, View, Text, Navigator, PropTypes } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import color from '../constants/Colors'
import markers from "./map.json"
window.navigator.userAgent = 'ReactNative';


export default class Maps extends Component {
    renderMarkers() {
        return markers.map((place, i) => (
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
                style={styles.mapStyle}
                initialRegion={{
                    latitude: 34.0522,
                    longitude: -118.2437,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {this.renderMarkers()}
            </MapView >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: "absolute",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
Maps.navigationOptions = {
    header: null,
};
