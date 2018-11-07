import { createStackNavigator } from "react-navigation";
import { LoggedOutNavigator } from "./LoggedOutNavigator";
import { LoggedInNavigator } from "./LoggedInNavigator";

export const RootNav = createStackNavigator({
    LoggedOut: {screen: LoggedOutNavigator},
    LoggedIn: {screen: LoggedInNavigator}
}, {
    headerMode: 'none',
    title: 'Main',
    cardStyle:{
        backgroundColor:'rgba(0,0,0,0)'
    }
});