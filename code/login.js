import {createDrawerNavigator, createStackNavigator} from "react-navigation";
import SideMenu from "../../components/side_menu";
import {DiscoverStackNavigator} from "./DiscoverStackNavigator";
import {PendingValidationsStackNavigator} from "./PendingValidationsStackNavigator";
import { ProfileStackNavigator } from './ProfileStackNavigator'
import { NotificationsStackNavigator } from './NotificationsStackNavigator'

const DrawerStack = createDrawerNavigator({
    discoverStack: {screen: DiscoverStackNavigator},
    pendingValidationStack: {screen: PendingValidationsStackNavigator},
    profileStack: {screen: ProfileStackNavigator},
    notificationsStack: {screen: NotificationsStackNavigator}
},{
    contentComponent: SideMenu,
    drawerWidth: 300,
});

export const LoggedInNavigator = createStackNavigator({
    DrawerStack: {screen: DrawerStack}
}, {
    headerMode: 'none',
    cardStyle:{
        backgroundColor:'rgba(0,0,0,0)'
    },
    navigationOptions:  ({navigation}) => {
        const params = navigation.state.params
        return  {
            headerStyle: (params) ? params.headerOptionalParams.headerStyle : '',
            title: (params) ? params.headerOptionalParams.title : '',
        }}
});