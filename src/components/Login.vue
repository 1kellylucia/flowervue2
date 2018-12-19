<template>
  <div class="hero">
    <div class="form-group" :class="{ 'form-group--error': $v.username.$error }">
      <label class="form-control-label" name="username">username (Enter your email)</label>
      <input class="form__input"  type="decimal" v-model.trim="username"/>
    </div>
    <div class="error" v-if="!$v.username.email">the format must be xxx@xx.xx</div>
    <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
      <label class="form-control-label" name="password">password </label>
      <input class="form__input"  type="password" v-model.trim="password"/>
    </div>
    <div class="error" v-if="!$v.password.minLength">more than six amounts</div>
    <p>
      <button class="btn btn-primary btn1" type="submit" @:click="examine"> confirm </button>
    </p>
  <g-signin-button
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Google
  </g-signin-button>
  </div>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import {required, email, minLength} from 'vuelidate/lib/validators'
import GSignInButton from 'vue-google-signin-button'
Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})
Vue.use(Vuelidate)
Vue.use(GSignInButton)
/* eslint-disable */
  export default {
    data () {
      this.$cookieStore.setCookie( 'username' ,this.username,120);
      return {
        username: this.user.username,
        password: this.user.password,
        googleSignInParams: {
          client_id: '284175350879-trj32t4befd2jt0ntmg9sluao9hvnk5i.apps.googleusercontent.com'
        }
      }
    },
    validations: {
      username: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    },
    methods: {
      examine: function(){

      },
      onSignInSuccess (googleUser) {
        const profile = googleUser.getBasicProfile() // etc etc
      },
      onSignInError (error) {
        // `error` contains any error occurred.
        console.log('OH NOES', error)
      }
    }
  }

</script>

<style>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .flower-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
  .g-signin-button {
    /* This is where you control how the button looks. Be creative! */
    display: inline-block;
    padding: 4px 8px;
    border-radius: 3px;
    background-color: #3c82f7;
    color: #fff;
    box-shadow: 0 3px 0 #0f69ff;
  }
</style>
