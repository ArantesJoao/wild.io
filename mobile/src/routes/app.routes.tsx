import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from "../pages/Home/Home";
import { Loading } from "../pages/Loading/Loading";
import { Sightings } from "../pages/Sightings/Sightings";
import { NearestParks } from "../pages/NearestParks/NearestParks";

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="loading" component={Loading} />
      <Screen name="sightings" component={Sightings} />
      <Screen name="nearest_parks" component={NearestParks} />
    </Navigator>
  );
}
