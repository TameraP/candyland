export default {
    template: `
        <div v-for="errors in emptyData">
            <p v-if="errors !== 'userAgreement'" class="errorsList">
                Please provide your {{ errors }}.
            </p>
            <p v-else>
                Please agree to our terms and conditions.
            </p>
        </div>
    `,

    props: ['newFindErrors'],

    data() {
        return {
            errorsList: [],
            emptyData: [],
            errorsPresent: false
        }
    },
    computed: {
        computedObjectToBeWatched() {
            return this.newFindErrors;
        }
    },
    watch: {
        computedObjectToBeWatched: {
            deep:true,
            handler(newVal, oldVal) {
                for(var index in newVal) {
                    if(newVal[index] == "" && !this.emptyData.includes(index)) { 
                        this.emptyData.push(index)
                        this.errorsPresent = true;
                    }
                    else if(index == "userAgreement" && !this.emptyData.includes(index) && newVal[index] == false) {
                        this.emptyData.push(index)
                        this.errorsPresent = true;
                    }
                    else if(newVal[index] !== "" && this.emptyData.includes(index) && index !== "userAgreement" ) {
                        var indexNum = this.emptyData.indexOf(index);
                        this.emptyData.splice(indexNum, 1);
                    }

                    else if(index == "userAgreement" && this.emptyData.includes(index) && newVal[index] == true ) {
                        var indexNum = this.emptyData.indexOf(index);
                        this.emptyData.splice(indexNum, 1);
                    }
                }

                if(this.emptyData.length === 0) {
                    this.errorsPresent = false;
                }

                else {
                    this.errorsPresent = true;
                }

                this.$emit("errorBoxStyling", this.errorsPresent);
            }
        }
    }
}
