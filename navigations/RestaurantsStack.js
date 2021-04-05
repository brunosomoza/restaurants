import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Restauransts from '../screens/Restaurants'

const Stack = createStackNavigator()


export default function RestaurantsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="restauransts"
                component= {Restauransts}
                options = {{ title : "Restaurants" }}
            />
        </Stack.Navigator>
    )
}


