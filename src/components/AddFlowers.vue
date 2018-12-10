<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-star" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <flower-form :flower="flower" flowerBtnTitle="Make Flower"
                         @flower-is-created-updated="submitFlower"></flower-form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import FlowerService from '@/services/FlowerService'
import FlowerForm from '@/components/FlowerForm'

export default {
  data () {
    return {
      flower: {flower_: 'Rose', amount: 10, prize: 10, message: ''},
      messagetitle: ' Make Flower '
    }
  },
  components: {
    'flower-form': FlowerForm
  },
  methods: {
    submitFlower: function (flower) {
      FlowerService.postFlower(flower)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
