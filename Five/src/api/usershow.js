import request from '@/utils/request'

export function show(data) {
  return request({
    url: '/user/user',
    method: 'get',
    data
  })
}

export function adduser(data) {
  console.log(data)
  return request({
    url: '/user',
    method: 'post',
    data
  })
}

export function getIdentity(data) {
  return request({
    url: '/user/identity',
    method: 'get',
    data
  })
}
