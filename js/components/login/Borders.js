import Users from "./Users.js";
import Boxes from "./Boxes.js";
import LoginErrors from "./LoginErrors.js";
import ManageInfo from "./UserLoginInfo/ManageInfo.js";
export default {
    components: { Users, Boxes, LoginErrors, ManageInfo },
    template: `
        <div class="loginBox">
            <div v-for="border in borders">
                <!--<div class="borders" :class="[border.hide ? hideBorder : border.className ]"></div>-->
                <div class="borders" id="border.className" :style="{ backgroundColor: border.color }" :class="border.className"></div>
            </div>
            <div class="loginSystems">
                <boxes @submitFormAgain="submitFormAgain" :userBox="userBox" :firstCount="firstCount"></boxes>
                <div class="submitBox">
                    <button @click.prevent="submitFormFinal" class="secondSubmitButton" type="submit">Submit</button>
                </div> 
            </div>
            <div :class="(showUserProfile) ? 'userProfile' : ''">
                <manage-info :finalInfo="finalInfo"></manage-info>
            </div>
        </div>
        <div :class="(isErrorsNotEmpty) ? 'errorsBox' : 'displayNoErrors'">
            <login-errors :newFindErrors="newFindErrors" @errorBoxStyling="errorBoxStyling"></login-errors>
        </div>
        <users @showBox="showBox"></users>
    `,

    data() {
        return {
            borders: [
                {
                    className: 'border1',
                    color: '#f2071b', //red
                    hide: false,
                    group: 1,
                    tilte: 'play'
                },
                {
                    className: 'border2',
                    color: '#f2780c', //orange
                    hide: false,
                    group: 2,
                    title: 'rules'
                },
                {
                    className: 'border3',
                    color: '#f2cb07', //yellow
                    hide: false,
                    group: 3,
                    title: 'isNewUser'
                },
                {
                    className: 'border4',
                    color: '#8c0b84', //purple
                    hide: false, 
                    group: 4,
                    title: 'isReturnedUser'
                }
            ],

            userBox: [],
            firstCount: false,
            newFindErrors: [],
            whichLoginBox: "",
            isErrorsNotEmpty: false,
            finalInfo: [],
            showUserProfile: false
             
            
        }
    },

    methods: {
        showBox(chosenBox, counter) {
            this.userBox = chosenBox;
            if(counter > 1 ? this.firstCount = true : this.firstCount = false );
        },

        submitFormAgain(findErrors) {
            this.newFindErrors = findErrors[0];
            this.whichLoginBox = findErrors[1];
        },

        errorBoxStyling(errorPresent) {
            this.isErrorsNotEmpty = errorPresent;
            if(errorPresent) {
                document.getElementsByClassName("submitButton")[0].style.display = "hidden";   //for some reason the submit button won't respond on a second click?
            }
            else {
                document.getElementsByClassName("submitButton")[0].style.display = "none";
                document.getElementsByClassName("secondSubmitButton")[0].style.display = "flex";
            }
        },

        submitFormFinal() {
            this.showUserProfile = true;
            this.finalInfo.push(this.newFindErrors);
            this.finalInfo.push(this.whichLoginBox);
            document.getElementsByClassName("loginSystems")[0].style.display = "none";
        }

    }
}


            // this.counter = counter;
            /* this really only controls the color styling of the blocks on the welcome page */

            // var chosenGroup;
            // var chosenColor = "";
            // var originalColor = [];

            // this.borders.forEach((key) => {
            //     if(!key.hide) {
            //         originalColor.push(key.color);
            //     }

            //     key.hide = true;

            //     if(key.title == chosenBox) {
            //         chosenGroup = key.group;
            //         chosenColor = key.color;
            //         console.log(key.color);
            //     }

            //     if(key.group > chosenGroup && key.hide == true ) {
            //       key.color = chosenColor;
            //     }

            //     key.hide = false;
            
            // }); 

            // this.borders.forEach((key) => {
            //     for(let colorsSet in originalColor) {

            //     }
            // });