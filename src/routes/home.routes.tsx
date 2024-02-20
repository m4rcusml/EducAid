import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '@screens/Home';

const Tab = createBottomTabNavigator();

export default function HomeRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { height: 70 }, tabBarItemStyle: { height: 60, alignSelf: 'flex-start' } }}>
      <Tab.Screen
        name='inicio'
        component={Home}
      />
    </Tab.Navigator>
  )
}