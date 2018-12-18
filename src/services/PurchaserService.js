import Api from '@/services/api'

export default {
  fetchPurchasers () {
    return Api().get('/purchaser')
  }
}
