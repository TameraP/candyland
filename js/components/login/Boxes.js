import AddUser from "./AddUser.js";
import Login from "./Login.js";

export default {
    components: { AddUser, Login },
    template: `
        <div class="chosenBox" v-if="userBox == 'isNewUser'">
            <add-user></add-user>
        </div>
        <div class="chosenBox" v-if="userBox == 'isReturnedUser'">
            <login></login>
        </div
    `,
    props: ['userBox']
}