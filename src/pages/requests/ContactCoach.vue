<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <input type="email" id="email" placeholder="Your email address..." v-model.trim="email.val" />
        </div>
        <div class="form-control">
            <textarea rows="5" id="message" placeholder="Your message..." v-model.trim="message.val"/>
        </div>
        <p class="errors" v-if="!formIsValid">
            Please add a valid 
            <a href="#email" v-if="!email.isValid">Email</a>
            <a href="#message" v-if="!message.isValid">Non-empty Message</a>!
        </p>
        <div class="actions">
            <base-button>Send Message</base-button>
        </div>
    </form>
</template>
<script>
export default {
    data(){
        return {
            email: {
                val: '',
                isValid: true
            },
            message:  {
                val: '',
                isValid: true
            },
            formIsValid: true,
        };
    },
    methods: {
        validateForm(){
            if(this.email.val == '' || !this.email.val.includes('@')){
                this.email.isValid = false;
            } else { this.email.isValid = true; }

            if(this.message.val == ''){
                this.message.isValid = false;
            } else { this.message.isValid = true; }

            if(!this.message.isValid || !this.email.isValid){
                this.formIsValid = false;
            } else { this.formIsValid = true; }

            console.log('Form Valid: '+this.formIsValid, 'Email Valid: '+ this.email.isValid, 'Message Valid: '+ this.message.isValid,)
        },
        submitForm(){
            this.validateForm();
        },
    },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
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
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors, p a {
  color: red;
  text-decoration: none;
}

p a {
  font-weight: bold;
}

.actions {
  text-align: center;
}

p a::after {
    content: ', ';
}

p a:only-child::after, p a:last-child::after {
    content: '';
}
</style>