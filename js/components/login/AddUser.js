export default {
    template: `
        <form @submit.prevent="submitForm">
            <h2>Sign up!</h2>
            <div class="userFormStyling">
                <span>
                    <label class='label'>First Name</label><br/>
                    <input v-model="userData.firstName" class="formName" type="text">
                </span>
                <span>
                    <label class='label'>Last Name</label><br/>
                    <input v-model="userData.lastName" class="formName" type="text">
                </span>
            </div>

            <label class='label'>Email</label><br/>
            <input v-model="userData.email" style="width:98%" class="formName" type="text">

            <div class="userFormStyling">
                <span>
                    <label class='label'>User Name</label><br/>
                    <input v-model="userData.userName" class="formName" type="text">
                </span>
                <span>
                    <label class='label'>Password</label><br/>
                    <input v-model="userData.password" class="formName" type="text">
                </span>
            </div>

            
            <div class="submitBox">
                <button class="submitButton" type="submit">Submit</button>
            </div>
        </form>
    `,
    data() {
        return {
            userData: {
                firstName: '',
                lastName: '',
                email: '',
                userName: '',
                password: '',
                userAgreement: false
            }
        }
    },
    methods: {
        submitForm () {
            alert(2);
            this.$emit('submitForm', this.userData, 'newUser');
        }
    }
}