import Users from "./Users.js";

export default {
    components: { Users },
    template: `
        <div class="loginBox">
            <users></users>
            <new-user></new-user>
            <returned-user></returned-user>
        </div>
    `,

}