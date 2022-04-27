import { defineStore } from "pinia";


export const useUserStore = defineStore({
    id: 'userStore',
    state: () => {
        return {
            //isConnected: false,
            user: null
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
        },
        logout() {
            this.user = null;
        }
    }
});