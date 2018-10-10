const user = {
    name: 'John',
    img: 'img/john.png'
}

const activities = [
    {
        from: 'Nina Jones',
        img: 'img/nina.png',
        title: 'added a new project',
        desc: 'Free UI Kit',
        time: 'just now'
    },
    {
        from: 'James Smith',
        img: 'img/james.png',
        title: 'commented project',
        desc: 'Free PSD Template',
        time: '40 minutes ago'
    },
    {
        from: 'Alex Clooney',
        img: 'img/alex.png',
        title: 'completed task',
        desc: 'Symu Website',
        time: '1 hour ago'
    },
    {
        from: 'Alexandra Spears',
        img: 'img/alexandra.png',
        title: 'added a new project',
        desc: 'Free PSD (...)',
        time: '3 hours ago'
    },
    {
        from: 'Nina Jones',
        img: 'img/nina.png',
        title: 'added a new project',
        desc: 'Free UI Kit',
        time: 'just now'
    },
    {
        from: 'Nina Jones',
        img: 'img/nina.png',
        title: 'added a new project',
        desc: 'Free UI Kit',
        time: 'just now'
    },
    {
        from: 'Nina Jones',
        img: 'img/nina.png',
        title: 'added a new project',
        desc: 'Free UI Kit',
        time: 'just now'
    },
    {
        from: 'Nina Jones',
        img: 'img/nina.png',
        title: 'added a new project',
        desc: 'Free UI Kit',
        time: 'just now'
    },
    {
        from: 'Nina Jones',
        img: 'img/nina.png',
        title: 'added a new project',
        desc: 'Free UI Kit',
        time: 'just now'
    },
    {
        from: 'Nina Jones',
        img: 'img/nina.png',
        title: 'added a new project',
        desc: 'Free UI Kit',
        time: 'just now'
    },
]

const messages = [
    {
        from: 'Nina Jones',
        img: 'img/nina.png',
        title: 'Hey You! It’s me again :-) I attached new (...)',
        time: '5 minutes ago',
        new: true
    },
    {
        from: 'Nina Jones',
        img: 'img/nina.png',
        title: 'Hey! I attached some new PSD files for (...)',
        time: 'About 20 hours ago',
        new: true
    },
    {
        from: 'James Smith',  
        img: 'img/james.png',
        title: 'Good morning, you are fired!',
        time: '2 days ago',
        new: false
    },
    {
        from: 'Nina Jones',
        img: 'img/nina.png',
        title: 'Hello! Could You bring me coffee please?',
        time: 'About 2 weeks ago',
        new: false
    }

]

const tasks = [
    {
        title: 'New website for Symu.co',
        time: '5 days delays',
        delay: true,
    },
    {
        title: 'Free business PSD Template ',
        time: '2 days delays',
        delay: true
    },
    {
        title: 'New logo for JCD.pl',
        time: '5 days left',
        delay: false
    },
    {
        title: 'Free Icons Set vol. 3',
        time: '10 days delays',
        delay: false
    },
    {
        title: 'Free Icons Set vol. 3',
        time: '10 days delays',
        delay: false
    }
]

function getTasks() {
    return tasks;
}

function getMessages() {
    return messages;
}

function getActivities() {
    return activities;
}

function getUser() {
    return user;
}

export default {
    getTasks,
    getMessages,
    getActivities,
    getUser,
}