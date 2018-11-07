import {drawerIcon} from "../utils/DrawerIcon";
import { createStackNavigator } from "react-navigation";
import ChallengeDetailPage from "../../pages/challenge_detail";
import DiscoverIdeasPage from "../../pages/discover_ideas";
import IdeaDetailPage from "../../pages/idea_detail";
import CreateIdeaPage from "../../pages/create_idea";
import CreateIdeaPreviewPage from "../../pages/create_idea_preview";
import {backIcon} from "../utils/BackIcon";
import colors from "../../styles/colors";

export const DiscoverStackNavigator = createStackNavigator({
    discover_ideas: {
        screen: DiscoverIdeasPage,
        cardStyle:{
            backgroundColor:'rgba(0,0,0,0)'
        },
        navigationOptions: ({navigation}) => ({
            headerLeft: drawerIcon(navigation),
            headerStyle:{
                backgroundColor:'rgba(0,0,0,0)'
            },

        })
    },
    challenge_detail: {screen: ChallengeDetailPage,
        navigationOptions: ({navigation}) => ({
            headerLeft: backIcon(navigation, colors.ideaDetailNavigationButtonsColor),
            headerStyle: {
                backgroundColor: '#fff'
            }
        })},
    idea_detail: {
        screen: IdeaDetailPage,
        navigationOptions: ({navigation}) => ({
            headerLeft: backIcon(navigation, colors.ideaDetailNavigationButtonsColor),
            headerStyle:{
                backgroundColor:'#fff'
            }
        })},
    create_idea: {
        screen: CreateIdeaPage,
        navigationOptions: ({navigation}) => ({
            headerLeft: backIcon(navigation)
        })},
    create_idea_preview: {
        screen: CreateIdeaPreviewPage,
        navigationOptions: ({navigation}) => ({
            headerLeft: backIcon(navigation)
        })
    },
}, {
    headerMode: 'float',
    cardStyle:{
        backgroundColor:'rgba(0,0,0,0)'
    },
    navigationOptions:  ({navigation}) => {
        const params = navigation.state.params;
        return  {
            headerStyle: (params) ? params.headerOptionalParams.headerStyle : '',
            title: (params) ? params.headerOptionalParams.title : '',
        }}
});