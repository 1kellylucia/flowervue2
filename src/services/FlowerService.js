import Api from '@/services/api'

export default {
  fetchFlowers () {
    return Api().get('/flowers')
  },
  postFlower (flower) {
    return Api().post('/flowers', flower,
      { headers: {'Content-type': 'application/json'} })
  },
  uplikeFlower (id) {
    return Api().put(`/flowers/${id}/amount`)
  },
  deleteFlower (id) {
    return Api().delete(`/flowers/${id}`)
  },
  fetchFlower (id) {
    return Api().get(`/flowers/${id}`)
  },
  putFlower (id, flower) {
    console.log('REQUESTING ' + flower._id + ' ' +
      JSON.stringify(flower, null, 5))
    return Api().put(`/flowers/${id}`, flower,
      { headers: {'Content-type': 'application/json'} })
  }
}
