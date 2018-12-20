import Api from '@/services/api'

export default {
  fetchUsers () {
    return Api().get('/user')
  },
  checkUsers (username, password) {
    return Api().post(`/CheckUser/${username}/${password}`)
  }
}
