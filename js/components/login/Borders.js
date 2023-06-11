import Users from "./Users.js";
import Boxes from "./Boxes.js";
export default {
    components: { Users, Boxes },
    template: `
        <div v-for="border in borders">
            <!--<div class="borders" :class="[border.hide ? hideBorder : border.className ]"></div>-->
            <div class="borders" id="border.className" :style="{ backgroundColor: border.color }" :class="border.className"></div>
        </div>
        <boxes :userBox="userBox"></boxes>
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

            userBox: []
            
        }
    },

    methods: {
        showBox(chosenBox) {

            this.userBox = chosenBox;
            /* this really only controls the color styling of the blocks on the welcome page */

            var chosenGroup;
            var chosenColor = "";
            var originalColor = [];

            this.borders.forEach((key) => {
                if(!key.hide) {
                    originalColor.push(key.color);
                }

                key.hide = true;

                if(key.title == chosenBox) {
                    chosenGroup = key.group;
                    chosenColor = key.color;
                    console.log(key.color);
                }

                if(key.group > chosenGroup && key.hide == true ) {
                  key.color = chosenColor;
                }

                key.hide = false;
            
            }); 

            this.borders.forEach((key) => {
                for(let colorsSet in originalColor) {

                }
            });
        }
    }
}