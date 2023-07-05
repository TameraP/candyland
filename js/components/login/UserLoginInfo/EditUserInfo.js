export default {
    template: `
        <div class="submitBox editBox">
            <button @click="editForm" class="submitButton editButton">Edit</button>
            <div :class="(showEditList) ? 'show' : ''"  id="editDropDown" class="editDropDownContent">
                <div v-for="editOptions in editOptionsArry">
                    <button class="editChoices" @click="chooseEdit(editOptions)">{{ editOptions }}</button>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            editOptionsArry: {
                userName: "User Name",
                password: "Password",
                email: "Email",
                userPhoto: "Profile Picture",
                Close: "Close"
            },
            showEditList: false
        }
    },
    methods: {
        editForm() {
            if(this.showEditList ? this.showEditList = false : this.showEditList = true);
        },
        chooseEdit(chosenEdit) {
            if(this.showEditList ? this.showEditList = false : this.showEditList = true);
        }
    }
}