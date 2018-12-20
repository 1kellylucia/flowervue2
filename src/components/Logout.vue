<template>
  <div class="hero"><h2>ok logout~</h2>
  </div>
</template>

<script>
export default {
  name: 'Logout',
  created () {
    this.deleteCookie()
      .then(resp => {
        alert('Successfully')
      }).catch(error => {
        console.log(error)
        alert('oops!')
      })
  },

  methods: {
    deleteCookie: function () {
      this.$cookieStore.delCookie('username')
    }
  }
}

</script>

<style scoped>

</style>
