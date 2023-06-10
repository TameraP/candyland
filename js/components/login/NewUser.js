export default {
    template: `
        <button @click="$emit('chooseBox', 'isNewUser', $event)">New User</button>
    `,
}