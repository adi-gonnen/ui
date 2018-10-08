import UserService from '../services/UserService.js'


export default {
    state: {
        tasks: [],
        messages: [],
        activities: [],
    },
    mutations: {
        setTasks(state, payload) {
            state.tasks = payload.tasks;
        },
        setMessages(state, payload) {
            state.messages = payload.messages;
        },
        setActivities(state, payload) {
            state.activities = payload.activities;
        }
    },
    getters: {
        getTasks(state){
            // console.log('tasks@@:', state.tasks);
            return state.tasks;
        },
        getMessages(state){
            return state.messages;
        },
        getActivities(state){
            return state.activities;
        }
    },
    actions: {
        // loadTasks(context) {
        //     return UserService.getTasks()
        //     .then (tasks => {
        //         context.commit({type: 'setTasks', tasks});
        //         return tasks;
        //     })
        // }
        loadTasks(context) {
            const tasks = UserService.getTasks();
            context.commit({type: 'setTasks', tasks});
        },
        loadMessages(context) {
            const messages = UserService.getMessages();
            context.commit({type: 'setMessages', messages});
        },
        loadActivities(context) {
            const activities = UserService.getActivities();
            context.commit({type: 'setActivities', activities});
        }
    }
}