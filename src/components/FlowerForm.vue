<template>
  <form @submit.prevent="submit">
    <div class="form-group" :class="{ 'form-group--error': $v._id.$error }">
      <label class="mdc-floating-label" for="crane-name-input" name="_id">ID (Enter "10000"+ NUMBER)</label>
      <input class="mdc-text-field__input" data-test="id" id="crane-name-input" type="decimal" v-model.trim="_id" required autofocus/>
    </div>
    <div class="error" v-if="!$v._id.between">ID MUST BE 10000 + NUMBER</div>
    <div class="form-group">
      <label class="form-label">Select Payment Type</label>
      <select id="flower_" name="flower_" class="form-control"
              type="text" v-model="flower_">
        <option value="null" selected disabled hidden>Choose Flower Type</option>
        <option value="Sakura">Sakura</option>
        <option value="Rose">Rose</option>
        <option value="Star">Star</option>
      </select>
    </div>
    <div class="form-group" :class="{ 'form-group--error': $v.amount.$error }">
      <label class="mdc-floating-label" for="crane-amount-input" name="amount">Amount (Enter a number between 1 and 2000)</label>
      <input class="mdc-text-field__input" id="crane-amount-input" data-test="amount" type="decimal" v-model.trim="amount"/>
    </div>
    <div class="error" v-if="!$v.amount.between">Amount must be between 1 and 2000</div>
    <div class="form-group" :class="{ 'form-group--error': $v.prize.$error }">
      <label class="form-control-label" name="prize">Prize (Enter a number between 1 and 100)</label>
      <input class="form__input" data-test="prize" type="decimal" v-model.trim="prize"/>
    </div>
    <div class="error" v-if="!$v.prize.between">Prize must be between 1 and 100</div>
    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ flowerBtnTitle }}</button>
    </p>
    <p>
      <a href="#/flowers" class="btn btn-primary btn1" data-test="BACK" role="button">Manage flowers</a>
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your add flowers!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">adding...</p>
  </form>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import { required, between } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)

export default {
  name: 'FormData',
  props: ['flowerBtnTitle', 'flower'],
  data () {
    return {
      /* eslint-disable */
      messagetitle: ' ADD ',
      _id: this.flower._id,
      flower_: this.flower.flower_,
      amount: this.flower.amount,
      prize: this.flower.prize,
      uplikes: 0,
      submitStatus: null
    }
  },
  validations: {
    _id: {
      required,
      between: between(100001, 100300)
    },
    amount: {
      required,
      between: between(1, 2000)
    },
    prize: {
      required,
      between: between(1, 100)
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var flower1 = {
            _id: this._id,
            flower_: this.flower_,
            amount: this.amount,
            prize: this.prize,
            uplikes: this.uplikes
          }
          this.flower = flower1
          console.log('Submitting in FlowerForm : ' +
            JSON.stringify(this.flower, null, 5))
          this.$emit('flower-is-created-updated', this.flower)
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
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
    color: #ffffff;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: #fff9c4;
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
    background: #f1b0b7;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
