export default {
    template: `
        <div class="userProfileContainer" v-show="loadProfile == true && falseProfile == false">
            <div class="userProfileFirst">
                <img :src="userData.userPhoto" class="profileImg">
            </div>
            <div class="userProfileSecond">
                <h2>{{ userData.userName }}</h2>
                <div>
                    User ID: {{ userData.userID }}
                </div>
                <div>
                    User Level: {{ userData.userLevel }}
                </div>
            </div>
        </div>
        <div class="userProfileContainer loginErrorUserProfile" v-show="loadProfile == false && falseProfile == true">
            <button class="tryAgainButton" @click="refreshPage">Try Again</button>
            <div>{{ userDataError }}</div>
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
            userDataError: '',
            loadProfile: false,
            falseProfile: false
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

                        if(data[1]) {
                            console.log(data);
                            this.userData.userID = data[0][0];
                            this.userData.userName = data[0][1];
                            this.userData.userLevel = data[0][2];
                            this.userData.userPhoto = data[0][3];
                            this.userData.splice(0,1);

                            this.loadProfile = true;
                            this.falseProfile = false;
                        }

                        else {
                            this.userDataError = data[0];
                            this.loadProfile = false;
                            this.falseProfile = true;
                        }
                    })
            }
        }
    },
    methods: {
        refreshPage() {
            window.location.reload();
        }
    }
}