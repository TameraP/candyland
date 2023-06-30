export default {
    template: `
        <div class="userProfileContainer" v-show="loadProfile == true">
            <div class="userProfileFirst">
                <img :src="userData.userPhoto" class="profileImg">
                <h2>{{ userData.userName }}</h2>
            </div>
            <div class="userProfileSecond">
                <div>
                    User ID: {{ userData.userID }}
                </div>
                <div>
                    User Level: {{ userData.userLevel }}
                </div>
            </div>
        </div>
    `,
    props: ['finalInfo'],
    data() {
        return {
            userData: [
                {
                    userID:'',
                    userPhoto: '',
                    userName: '',
                    userLevel:'',
                    photoWidth:"300"
                }
            ],

            loadProfile: false
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

                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({newVal})
                };

                fetch('../../../classes/input.php', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        // this.userData = data;
                        this.userData.userID = data[0];
                        this.userData.userName = data[1];
                        this.userData.userLevel = data[2];
                        this.userData.userPhoto = data[3];
                        this.userData.splice(0,1);

                        console.log(this.userData);
                    })

                this.loadProfile = true;
            }
        }
    }
}