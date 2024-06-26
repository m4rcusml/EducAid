import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components/native';

import { GraduationCap, HouseSimple, MedalMilitary, PencilLine } from 'phosphor-react-native';

import { Home } from '@screens/Home';
import { Aulas } from '@screens/Aulas';
import { Ranking } from '@screens/Ranking';
import { Quizzes } from '@screens/Quizzes';

const Tab = createBottomTabNavigator();

export default function HomeRoutes() {
  const { colors, fontFamily, fontSize } = useTheme();
  
  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false, 
        tabBarHideOnKeyboard: true,
        tabBarStyle: { height: 70 }, 
        tabBarInactiveTintColor: '#777',
        tabBarActiveTintColor: colors.deepBlue,
        tabBarIconStyle: { marginBottom: -10 },
        tabBarItemStyle: { height: 60, alignSelf: 'flex-start' }, 
        tabBarLabelStyle: { fontFamily: fontFamily.regular, fontSize: Number(fontSize.small.replace('px', '')) },
      }}
    >
      <Tab.Screen
        name='inicio'
        component={Home}
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => <HouseSimple color={color} size={size} weight='bold' />
        }}
      />
      <Tab.Screen
        name='ranking'
        component={Ranking}
        options={{
          title: 'Ranking',
          tabBarIcon: ({ color, size }) => <MedalMilitary color={color} size={size} weight='bold' />
        }}
      />
      <Tab.Screen
        name='aulas'
        component={Aulas}
        options={{
          title: 'Aulas',
          tabBarIcon: ({ color, size }) => <GraduationCap color={color} size={size} weight='bold' />
        }}
      />
      <Tab.Screen
        name='quizzes'
        component={Quizzes}
        options={{
          title: 'Quizzes',
          tabBarIcon: ({ color, size }) => <PencilLine color={color} size={size} weight='bold' />
        }}
      />
    </Tab.Navigator>
  )
}