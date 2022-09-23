import React from 'react'
import notifications from './data';
import Notification from './Notification';

export default function Notifications() {
    const [notificationLabel, setNotificationLabel] = React.useState(
        notifications.filter(notification => notification.seen === false).length
    );

    const [notificationList, setNotificationList] = React.useState(notifications);

    const changeOneStatus = (id) => {
        const newNotificationList = notificationList.map(notification => {
            if (notification.id === id) {
                notification.seen = true;
            }
            return notification;
        });

        setNotificationList(newNotificationList);
        setNotificationLabel(newNotificationList.filter(notification => notification.seen === false).length);
    }

    const changeAllStatus = () => {
        const newNotifications = notificationList.map(notification => {
            notification.seen = true;
            return notification;
        });
        setNotificationList(newNotifications);
        setNotificationLabel(0);
    }

    return (
        <div className="notifications">
            <div className="notifications__header">
                <h2>Notifications
                    <span className="notifications__header__new">{
                        notificationLabel
                    }</span>
                </h2>
                <button className="notifications__header__button" onClick={changeAllStatus}>Mark all as read</button>
            </div>
            <div className="notifications__body">
                {notifications.map((notification) => (
                    <Notification notification={notification} key={notification.id} onSeen={changeOneStatus} />
                ))}
            </div>
        </div>
    )
}
