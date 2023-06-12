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
                <input v-model="userData.password" class="formName" type="text">
            </span>
        </div>

        <div class="submitBox">
            <button class="submitButton" type="submit">Submit</submit>
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
    }
}