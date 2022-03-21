import axios from '../config'

export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(url, { params }).then(res => resolve(res.data)).catch(e => {
      // notify.error('Get API Failed!')
      reject(e)
    })
  })
}

export const post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(res => resolve(res.data)).catch(e => {
      // notify.error('Post API Failed!')
      reject(e)
    })
  })
}

export const del = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.delete(url, params).then(res => resolve(res.data)).catch(e => {
      // notify.error('Delete API Failed!')
      reject(e)
    })
  })
}

export const patch = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.patch(url, params).then(res => resolve(res.data)).catch(e => {
      // notify.error('Patch API Failed!')
      reject(e)
    })
  })
}

export const put = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.put(url, params).then(res => resolve(res.data)).catch(e => {
      // notify.error('Patch API Failed!')
      reject(e)
    })
  })
}
