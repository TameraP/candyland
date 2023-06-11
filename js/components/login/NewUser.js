export default {
    template: `
        <button @click="$emit('chooseBox', 'isNewUser', counter, $event)">New User</button>
    `
}