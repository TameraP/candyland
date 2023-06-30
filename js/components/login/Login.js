export default {
    template: `
    <form>
        <h2>Login!</h2>
        <div class="userFormStyling boxstylingLogin">
            <span>
                <label class='label'>User Name</label><br/>
                <input v-model="userData.userName" class="formName" type="text">
            </span>
            <span>
                <label class='label'>Password</label><br/>
                <input v-model="userData.password" class="formName" type="password">
            </span>
        </div>

        <div class="submitBox">
            <button @click.prevent="submitForm" class="submitButton" type="submit">Submit</button>
        </div>
    </form>
    `,
    data() {
        return {
            userData: {
                userName: "",
                password: ""
            }
        }
    },
    methods: {
        submitForm () {
            this.$emit('submitForm', this.userData, 'returnUser');
        }
    }
}