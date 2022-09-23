import React from 'react'
import NotificationTime from '../NotificationTime';

export default function post({ notification }) {
    return (
        <div className="notification__content">
            <div className="notification__content__text">
                <span className="name">{notification.name} </span>
                <span className="title">{notification.content.title} </span>
                <span className="group">{notification.content.content}</span>
            </div>
            <div className="notification__content__date">
                <NotificationTime time={notification.date} />
            </div>
        </div>
    )
}
