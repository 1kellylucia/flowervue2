<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>  ·
    <div id="app1">
      <v-client-table :columns="columns" :data="flowers" :options="options">
        <a slot="uplike" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="uplike(props.row._id)"></a>
        <a slot="edit" data-test="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editFlower(props.row._id)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click ="deleteFlower(props.row._id)"></a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import FlowerService from '@/services/FlowerService'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'Flowers',
  data () {
    return {
      messagetitle: ' Flowers List ',
      flowers: [],
      props: ['_id'],
      errors: [],
      columns: ['_id', 'flower_', 'amount', 'uplikes', 'prize', 'uplike', 'edit', 'remove'],
      options: {
        perPage: 10,
        filterable: ['flower_', 'amount', 'prize', 'uplikes'],
        sortable: ['uplikes'],
        headings: {
          _id: 'ID',
          flower_: 'Flower Type',
          amount: 'Amount',
          prize: 'prize',
          uplikes: 'uplikes'
        }
      }
    }
  },
  // Fetches Donations when the component is created.
  created () {
    this.loadFlowers()
  },
  methods: {
    loadFlowers: function () {
      FlowerService.fetchFlowers()
        .then(response => {
          // JSON responses are automatically parsed.
          this.flowers = response.data
          console.log(this.flowers)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    uplike: function (id) {
      FlowerService.uplikeFlower(id)
        .then(response => {
          // JSON responses are automatically parsed.
          this.loadFlowers()
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    editFlower: function (id) {
      this.$router.params = id
      this.$router.push('edit')
    },
    deleteFlower: function (id) {
      this.$swal({
        title: 'Are you totaly sure?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK Delete it',
        cancelButtonText: 'Cancel',
        showCloseButton: true
        // showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result.value)
        if (result.value === true) {
          FlowerService.deleteFlower(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadFlowers()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully deleted this Flowers ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          console.log('SWAL Else Result : ' + result.value)
          this.$swal('Cancelled', 'Your flowers still Counts!', 'info')
        }
      })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
