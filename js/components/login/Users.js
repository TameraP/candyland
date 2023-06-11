import NewUser from "./NewUser.js";
import ReturnedUser from "./ReturnedUser.js";

export default {
    components: { NewUser, ReturnedUser },
    template: `
        <div class="userLogin">
            <new-user @choose-box="show"></new-user>
            <returned-user @choose-box="show"></returned-user>
        </div>
    `,
    data() {
        return {
            boxStatus: {
                isNewUser: false,
                isReturnedUser: false
            }
        }
    },

    methods: {
        show(status, e) {
            for(let key in this.boxStatus) {
                if(key == status ? this.boxStatus[key] = true : this.boxStatus[key] = false );
            }  
            
            this.$emit('showBox', status);
        }
    }
}