import { defineStore } from "pinia";


export const useUserStore = defineStore({
    id: 'userStore',
    state: () => {
        return {
            //isConnected: false,
            user: JSON.parse(sessionStorage.getItem('USER'))
        };
    },
    getters: {
        isConnected: (state) => state.user != null
    },
    actions: {
        async login(login, password) {
            // await call auth server
            const data = { name: 'Bob', mail: login, token: 'DSQGE5Z765EY6ZT54EH' };
            this.user = data;
            sessionStorage.setItem('USER', JSON.stringify(this.user))
        },
        logout() {
            this.user = null;
            sessionStorage.removeItem('USER');
        }
    }
});