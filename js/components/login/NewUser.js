import AddUser from "./AddUser.js";
export default {
    component: { AddUser },
    template: `
        <button @click="show('newUser')">New User</button>
    `,
}