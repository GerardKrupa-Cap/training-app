import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Notifications,
  NotificationAction,
  NotificationCategory,
  NotificationBackgroundFetchResult,
  Notification,
} from  'react-native-notifications';



function NotificationNavigator(): JSX.Element {

    let navigation = useNavigation();

    useEffect(() => {
           Notifications.events().registerNotificationReceivedForeground((notification: Notification, completion) => {
             console.log(`Notification received in foreground: ${notification.payload.property1} : ${notification.payload["gcm.notification.title"]}`);
             completion({alert: true, sound: false, badge: false});


            // alert(`${notification.payload.property1} + ${notification.payload.property2}` );
             navigation.navigate('NotificationHandle', {property1: notification.payload.property1, property2: notification.payload.property2});
           });

           Notifications.events().registerNotificationOpened((notification: Notification, completion) => {
            console.log(`Navigation is: $navigation}`);
             console.log(`Notification opened: ${notification.payload}`);
             // alert(`${notification.payload.property1} + ${notification.payload.property2}` );

             navigation.navigate('NotificationHandle', {property1: notification.payload.property1, property2: notification.payload.property2});
             completion();
           });
    }, [navigation]);

  return (
    <></>
  );
}

export default NotificationNavigator;
