import React from 'react'
import NotificationTime from '../NotificationTime';

export default function post({ notification }) {
    return (
        <div className="notification__content">
            <div className="notification__content__text">
                <a href="#/" className="name">{notification.name} </a>
                <span className="title">{notification.content.title} </span>
            </div>
            <div className="notification__content__date">
                <NotificationTime time={notification.date} />
            </div>
            <div className="message--container">
                <span className="message">{notification.content.content}</span>
            </div>
        </div>
    )
}
