<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
          <flower-form :flower="flower" flowerBtnTitle="Update Flower"
                         @flower-is-created-updated="updateFlower"></flower-form>
          </template>
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
      flower: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: ' Update Flower '
    }
  },
  components: {
    'flower-form': FlowerForm
  },
  created () {
    this.getFlower()
  },
  methods: {
    getFlower: function () {
      FlowerService.fetchFlower(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.flower = this.temp[0]
          this.childDataLoaded = true
          console.log('Getting Flower in Edit: ' + JSON.stringify(this.flower, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updateFlower: function (flower) {
      console.log('Before PUT ' + JSON.stringify(flower, null, 5))
      FlowerService.putFlower(this.$router.params, flower)
        .then(response => {
          console.log(response)
          console.log('AFTER PUT ' + JSON.stringify(flower, null, 5))
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
