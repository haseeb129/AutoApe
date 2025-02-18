import React, {FC} from 'react';
import {ScreensName} from '../../theme/strings';
import {BottomTabScreen} from '../tabNavigation';
import {createStackNavigator} from '@react-navigation/stack';
// import CallDetailScreen from '../../screens/callDetailScreen';
// import ContactPropertiesDetailScreen from '../../screens/ContactPropertiesDetailScreen';
// import ContactInfoUpdateScreen from '../../screens/ContactInfoUpdateScreen';
// import ContactDetailScreen from '../../screens/contactDetailScreen';
// import ChatHistoryScreen from '../../screens/chatHistoryScreen';
// import ImagesPreviewScreen from '../../screens/imagesPreviewScreen';
// import LiveCallScreen from '../../screens/liveCallScreen';
// import CallDispositionScreen from '../../screens/callDispositionScreen';
import DummyScreen from '../../screens/mainScreen';

const navOptionHandler = () => ({
  headerShown: false,
});

const AppStack = createStackNavigator();

export const AppStackScreen: FC = () => {
  return (
    <>
      <AppStack.Navigator initialRouteName={ScreensName.BottomTabScreen}>
        <AppStack.Screen
          name={ScreensName.BottomTabScreen}
          component={BottomTabScreen}
          options={navOptionHandler}
        />
        <AppStack.Screen
          name={ScreensName.CallDispositionScreen}
          component={DummyScreen}
          options={navOptionHandler}
        />
        {/* <AppStack.Screen
          name={ScreensName.LiveCallScreen}
          component={LiveCallScreen}
          options={navOptionHandler}
        />
        <AppStack.Screen
          name={ScreensName.CallDetailScreen}
          component={CallDetailScreen}
          options={navOptionHandler}
        />
        <AppStack.Screen
          name={ScreensName.ContactInfoUpdateScreen}
          component={ContactInfoUpdateScreen}
          options={navOptionHandler}
        />
        <AppStack.Screen
          name={ScreensName.ContactPropertiesDetailScreen}
          component={ContactPropertiesDetailScreen}
          options={navOptionHandler}
        />
        <AppStack.Screen
          name={ScreensName.ChatHistoryScreen}
          component={ChatHistoryScreen}
          options={navOptionHandler}
        />
        <AppStack.Screen
          name={ScreensName.ContactDetailScreen}
          component={ContactDetailScreen}
          options={navOptionHandler}
        />
        <AppStack.Screen
          name={ScreensName.ImagesPreviewScreen}
          component={ImagesPreviewScreen}
          options={navOptionHandler}
        /> */}
      </AppStack.Navigator>
    </>
  );
};
