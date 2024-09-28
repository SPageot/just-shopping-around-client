import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CartProvider from "@/hooks/UseCart";

export default function TabsLayout() {
  return (
    <CartProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name='Home'
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <FontAwesome name='home' size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='ShoppingItems'
          options={{
            tabBarLabel: "Shopping Items",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name='store' size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </CartProvider>
  );
}
