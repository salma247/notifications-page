import React from 'react'
import NotificationTime from '../NotificationTime';

export default function post({ notification }) {
    return (
        <div className="notification__content">
            <div className="container">
                <div className="container--text">
                    <div className="notification__content__text">
                        <span className="name">{notification.name} </span>
                        <span className="title">{notification.content.title} </span>
                    </div>
                    <div className="notification__content__date">
                        <NotificationTime time={notification.date} />
                    </div>
                </div>
                <div className="container--picture">
                    <img className="picture" src={require(`../../../assets/images/${notification.content.content}`)} alt="notification" />
                </div>
            </div>
        </div>
    )
}
