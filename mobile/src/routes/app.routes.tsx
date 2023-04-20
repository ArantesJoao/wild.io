import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Loading } from "../pages/Loading/Loading";
import { RegisterPark } from "../pages/RegisterPark";
import { RegisterFlora } from "../pages/RegisterFlora";
import { Sightings } from "../pages/Sightings/Sightings";
import { RegisterSighting } from "../pages/RegisterSighting";
import { NearestParks } from "../pages/NearestParks/NearestParks";
import SelectParkSpot from "../pages/SelectParkSpot/SelectParkSpot";
import SelectFloraSpot from "../pages/SelectFloraSpot/SelectFloraSpot";
import { FloraSightings } from "../pages/FloraSightings/FloraSightings";
import SelectSightingSpot from "../pages/SelectSightingSpot/SelectSightingSpot";

export function AppRoutes() {
  return (
    <Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="home" component={Home} />
      <Screen name="loading" component={Loading} />

      {/* Rotas de avistamentos */}
      <Screen name="sightings" component={Sightings} />
      <Screen name="register_sighting" component={RegisterSighting} />
      <Screen name="select_sighting_spot" component={SelectSightingSpot} />

      {/* Rotas de parques */}
      <Screen name="nearest_parks" component={NearestParks} />
      <Screen name="register_park" component={RegisterPark} />
      <Screen name="select_park_spot" component={SelectParkSpot} />

      {/* Rotas de flora */}
      <Screen name="flora_sightings" component={FloraSightings} />
      <Screen name="register_flora" component={RegisterFlora} />
      <Screen name="select_flora_spot" component={SelectFloraSpot} />
    </Navigator>
  );
}
