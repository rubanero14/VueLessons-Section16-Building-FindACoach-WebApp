<template>
    <base-card>
        <form @submit.prevent="submitForm">
            <div class="form-control">
                <label for="email">Email</label>
                <input type="email" id="email" v-model.trim="email"/>
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" v-model.trim="password"/>
            </div>
            <p v-if="!formIsValid">Please enter a valid email or password (must be atleast 6 characters long).</p>
            <base-button>{{ submitButtonCaption }}</base-button>
            <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
        </form>
    </base-card>
</template>
<script>
export default {
    data(){
        return {
            email: '',
            password: '',
            formIsValid: true,
            mode: 'login',
        };
    },
    computed: {
        submitButtonCaption(){
            if(this.mode === 'login'){
                return 'Login';
            } else {
                return 'Signup';
            }
        },
        switchModeButtonCaption(){
            if(this.mode === 'login'){
                return 'Signup instead';
            } else {
                return 'Login instead';
            }
        },
    },
    methods: {
        submitForm(){
            // to clear all validation message before submit form
            this.formIsValid = true;

            // to validate if all input is filled with valid values before submit form
            if(this.email === '' || !this.email.includes('@') || this.password.length < 6){
                this.formIsValid = false;
                return;
            }

            if(this.mode === 'login'){
                // ...
            } else {
                this.$store.dispatch('signUp', {
                    email: this.email,
                    password: this.password,    
                });
            }
        },
        switchAuthMode(){
            if(this.mode === 'login'){
                this.mode = 'signup';
            } else {
                this.mode = 'login';
            }
        },
    },
}
</script>

<style scoped>
form {
  margin: 5px;
  padding: 5px;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #333;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #ededed;
  outline: none;
}

p a {
  color: red;
  text-decoration: none;
  font-weight: bold;
}

p a::after {
    content: ', ';
}

p a:only-child::after, p a:last-child::after {
    content: '';
}
</style>