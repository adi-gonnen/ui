import UserService from '../services/UserService.js'


export default {
    state: {
        user: null,
        tasks: [],
        messages: [],
        activities: [],
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload.user
        },
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
        getUser(state) {
            return state.user;
        },
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
        loadUser(context) {
            const user = UserService.getUser();
            context.commit({type: 'setUser', user});
        },
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