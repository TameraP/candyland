import NewUser from "./NewUser.js";
import ReturnedUser from "./ReturnedUser.js";

export default {
    components: { NewUser, ReturnedUser },
    template: `
        <div class="userLogin">
            <new-user></new-user>
            <returned-user></returned-user>
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
        }
    }
}