<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-sign-in" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
            <label class="form-control-label" name="username">username : <input class="form__input" type="text" v-model.trim="username"/></label>
            <label class="form-control-label" name="username">Password : &nbsp;<input class="form__input" type="password" v-model.trim="password"/></label>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
    <button href="#/" class="btn btn-primary btn1" type="submit" @click="examineFlowers">Confirm</button>
  </div>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import PurchaserService from '@/services/PurchaserService'
Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})
Vue.use(Vuelidate)
export default {/* eslint-disable */
  name: 'Login',
  props: ['flowerBtnTitle', 'purchaser'],
  data () {
    return {
      messagetitle: ' Login ',
      purchasers:[],
      loginForm: {
      username: this.purchaser.PurchaserName,
      password: this.purchaser.password},
      loading:false
    }
  },
  methods: {
    examineFlowers: function(){
      PurchaserService.fetchPurchasers()
        .then(response => {
          this.purchasers = response.data
          if(this.purchasers.PurchaserName === this.purchaser.PurchaserName && this.purchasers.password ===this.purchase.password ) {
            this.$router.push('/')
          }
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    submit () {
      console.log('confirm!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var purchaser = {
            PurchaserName: this.PurchaserName,
            password:this.password
          }
          this.purchaser = purchaser
          console.log('Submitting in FlowerForm : ' +
            JSON.stringify(this.purchaser, null, 5))
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  .flower-form .form-control-label.text-left{
    text-align: left;
  }
  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
    padding: 10px 10px;
    vertical-align: middle;

  }
</style>
