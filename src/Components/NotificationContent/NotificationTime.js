import React from 'react'
import moment from 'moment';


export default function NotificationTime({time}) {

  return (
    <div>{moment(time).fromNow()}</div>
  )
}
