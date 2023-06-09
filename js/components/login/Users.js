import NewUser from "./NewUser.js";
import ReturnedUser from "./ReturnedUser.js";

export default {
    components: { NewUser, ReturnedUser },
    template: `
        <div class="userLogin">
            <button @click="show('returnUser')">Login</button>
            <button @click="show(newUser)">New User</button>
        </div>
    `,
    data() {
        return {
            isNewUser: false,
            isReturnedUser: false
        }
    },

    methods: {
        show(status) {
            const statusType = (status == "newUser") ? this.isNewUser = true : this.isNewUser = false; 
            alert(statusType);
        }
    }
}