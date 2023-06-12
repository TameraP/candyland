import AddUser from "./AddUser.js";
import Login from "./Login.js";

export default {
    components: { AddUser, Login },
    template: `
        <div class="boxStyles" :class="(firstCount) ? 'closeChosenBox' : 'chosenBox'" v-if="userBox == 'isNewUser'">
            <add-user @submitForm="submitForm"></add-user>
        </div>
        <div class="boxStyles boxStylingLogin" :class="(firstCount) ? 'closeChosenBox' : 'chosenBox'" v-if="userBox == 'isReturnedUser'">
            <login></login>
        </div>
    `,
    data () {
        return {
            findErrors: []
        }
    },
    props: ['userBox', 'firstCount, '],

    methods: {
        submitForm(userData, typeOfForm) {
            alert("3");
            this.findErrors.push(userData);
            this.findErrors.push(typeOfForm);
    
            this.$emit('submitFormAgain', this.findErrors);
        }
    }
}