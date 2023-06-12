export default {
    template: `
        {{ findErrors }}
    `,

    data() {
        return {
            outputErros: [],
            emptyData: []
        }
    },

    props: ['findErrors'],

    methods: {
        // submitForm(userData, typeOfForm) {
        //     for(var index in userData) {
        //         if(userData[index] == "" && !this.emptyData.includes(index)) { 
        //             this.emptyData.push(index);
        //         }
        //         else if(userData[index] !== "" && this.emptyData.includes(index)) {
        //             var indexNum = this.emptyData.indexOf(index);
        //             this.emptyData.splice(indexNum, 1);
        //         }
        //     }

        //     if(this.emptyData.length >= 0) {
        //         alert("yep");
        //         // this.emptyData.forEach((key) => {
        //         //     this.outputErros.push("Please enter your" + key);
        //         // });
        //     };
        // }
    }
}

{/* <div class="loginErrorsContainer">
<add-user @submitForm="submitForm"></add-user>
</div> */}