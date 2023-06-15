export default {
    template: `
        <div>{{ userData }}</div>
    `,
    props: ['finalInfo'],
    data() {
        return {
            userData: ""
        }
    },
    computed: {
        computedUserInfo() {
            return this.finalInfo;
        }
    },
    watch: {
        computedUserInfo: {
            deep:true,
            handler(newVal, oldVal) {
                console.log(newVal);

                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({newVal})
                };

                fetch('../../../classes/input.php', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        this.userData = data;
                    })
            }
        }
    }
}