import { StyleSheet, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

export default function Map({ location, mapType }) {
  const [markers, setMarkers] = useState([]);

  const addMarker = (e) => {
    const newMarker = e.nativeEvent.coordinate;
    setMarkers([...markers, newMarker]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        region={location}
        mapType={mapType}
        onLongPress={addMarker}
      >
        {
          markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker}
            />
          ))
        }
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: '100%',
    width: '100%',
  },
});
