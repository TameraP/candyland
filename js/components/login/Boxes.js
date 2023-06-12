import AddUser from "./AddUser.js";
import Login from "./Login.js";

export default {
    components: { AddUser, Login },
    template: `
        <div class="boxStyles" :class="(firstCount) ? 'closeChosenBox' : 'chosenBox'" v-if="userBox == 'isNewUser'">
            <add-user></add-user>
        </div>
        <div class="boxStyles boxStylingLogin" :class="(firstCount) ? 'closeChosenBox' : 'chosenBox'" v-if="userBox == 'isReturnedUser'">
            <login></login>
        </div>
    `,
    data () {
        return {
            
        }
    },
    props: ['userBox', 'firstCount']

}