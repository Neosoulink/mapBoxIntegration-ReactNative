/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useRef } from "react";
import { StyleSheet, StatusBar, View, Image, Platform, useColorScheme } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken("pk.eyJ1IjoibmVvc291bGluayIsImEiOiJjanlqaWUwczMwM3N3M21veG9xa3YycjgyIn0.gTPnNKwKuuHPTGLI2QqsKA");

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
		<SafeAreaView style={{ flex: 1, height: "100%", width: "100%" }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<MapboxGL.MapView
				styleURL={MapboxGL.StyleURL.Street}
				zoomLevel={16}
				centerCoordinate={[3.3362400, 6.5790100]}
				showUserLocation={true}
				style={{ flex: 1 }}>
				<MapboxGL.Camera
					zoomLevel={16}
					centerCoordinate={[3.3362400, 6.5790100]}
				>
				</MapboxGL.Camera>
			</MapboxGL.MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default App;
