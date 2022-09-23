import React from 'react'
import NotificationContent from '../NotificationContent/NotificationContent';

export default function Notification({ notification, onSeen }) {
    return (
        <div className={notification.seen ? 'notification' : 'notification notification--unseen'} onClick={() => onSeen(notification.id)}>
            <div className="notification__avatar">
                <img src={require(`../../assets/images/${notification.avatar}`)} alt={notification.name} />
            </div>
            <NotificationContent notification={notification} />
        </div>
    )
}
