import Users from "./Users.js";
export default {
    components: { Users },
    template: `
        <div v-for="border in borders">
            <div class="borders" :class="[border.hide ? hideBorder : border.className ]"></div>
        </div>

        <users></users>
    `,

    data() {
        return {
            borders: [
                {
                    className: 'border1',
                    color: 'red',
                    hide: false
                },
                {
                    className: 'border2',
                    color: 'orange',
                    hide: false
                },
                {
                    className: 'border3',
                    color: 'yellow',
                    hide: false
                },
                {
                    className: 'border4',
                    color: 'purple',
                    hide: false
                }
            ]
        }
    }
}