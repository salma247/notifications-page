import React from 'react'

import Post from './NotificationType/Post';
import Group from './NotificationType/Group';
import Message from './NotificationType/Message';
import Picture from './NotificationType/Picture';
import Default from './NotificationType/Default';


export default function NotificationType({ notification }) {
    switch (notification.content.type) {
        case 'post':
            return (
                <Post notification={notification} />
            )
        case 'group':
            return (
                <Group notification={notification} />
            )
        case 'message':
            return (
                <Message notification={notification} />
            )
        case 'picture':
            return (
                <Picture notification={notification} />
            )
        default:
            return (
                <Default notification={notification} />
            );
    }

}
