<template>
  <div class="hero">
    LOGOUT SUCCESSFULLY
  </div>
</template>

<script>
export default {
  name: 'Logout',
  created () {
    this.deleteCookie()
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
