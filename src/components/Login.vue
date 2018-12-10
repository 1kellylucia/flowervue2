<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-sign-in" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
            <label class="form-control-label" name="username">Username : <input class="form__input" type="text" v-model.trim="username"/></label>
            <label class="form-control-label" name="username">Password : &nbsp;<input class="form__input" type="password" v-model.trim="password"/></label>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
    <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Confirm</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      messagetitle: ' Login '
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
