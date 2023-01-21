import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <View style={styles.component}>
      <SafeAreaView forceInset={{ top: "always" }}>
        <Text style={{ fontSize: 48 }}>AccountScreen</Text>
        <Spacer>
          <Button 
            title="Sign Out" 
            onPress={signout}
          />
        </Spacer>
      </SafeAreaView>
    </View>
  );
}

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={20} />
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    marginTop: 20,
  }
});

export default AccountScreen;