import NewUser from "./NewUser.js";
import ReturnedUser from "./ReturnedUser.js";

export default {
    components: { NewUser, ReturnedUser },
    template: `
        <div>
            <button @click="show()
            <new-user></new-user>
            <returned-user></returned-user>
        </div>
    `,

}