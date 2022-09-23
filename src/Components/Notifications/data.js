const notifications = [
    {
        id: 1,
        name:'Mark Webber',
        avatar: 'avatar-mark-webber.webp',
        date: '2022-09-20T09:00:00Z',
        seen: false,
        content:{
            title: 'reacted to your recent post',
            type: 'post',
            content: 'My first tournament today!'
        }
    },
    {
        id: 2,
        name:'Angela Gray',
        avatar: 'avatar-angela-gray.webp',
        date: '2022-09-19T22:00:00Z',
        seen: false,
        content:{
            title: 'followed you',
            type: 'default',
            content: ''
        }
    },
    {
        id: 3,
        name:'Jacob Thompson',
        avatar: 'avatar-jacob-thompson.webp',
        date: '2022-09-17T12:00:00Z',
        seen: false,
        content:{
            title: 'has joined your group',
            type: 'group',
            content: 'Chess Club'
        }
    },
    {
        id: 4,
        name:'Rizky Hasanuddin',
        avatar: 'avatar-rizky-hasanuddin.webp',
        date: '2022-09-16T12:00:00Z',
        seen: true,
        content:{
            title: 'sent you a private message',
            type: 'message',
            content: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m alseeny having lots of fun and improving my game.'
        }
    },{
        id: 5,
        name:'Kimberly Smith',
        avatar: 'avatar-kimberly-smith.webp',
        date: '2022-09-14T12:00:00Z',
        seen: true,
        content:{
            title: 'commented on your picture',
            type:'picture',
            content: 'image-chess.webp'
        }
    },
    {
        id: 6,
        name:'Nathan Peterson',
        avatar: 'avatar-nathan-peterson.webp',
        date: '2022-09-14T12:00:00Z',
        seen: true,
        content:{
            title: 'reacted to your recent post',
            type: 'post',
            content: '5 end-game strategies to increase your win rate'
        }
    },{
        id: 7,
        name:'Anna Kim',
        avatar: 'avatar-anna-kim.webp',
        date: '2022-09-11T12:00:00Z',
        seen: true,
        content:{
            title: 'left the group',
            type: 'group',
            content: 'Chess Club'
        }
    }
]

export default notifications