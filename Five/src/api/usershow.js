import request from '@/utils/request'

export function show(data) {
  return request({
    url: '/user/user',
    method: 'get',
    data
  })
}

export function adduser(data) {
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
export function getApi(data) {
  return request({
    url: '/user/api_authority',
    method: 'get',
    data
  })
}

export function getRelation(data) {
  return request({
    url: '/user/identity_api_authority_relation',
    method: 'get',
    data
  })
}
export function getView(data) {
  return request({
    url: '/user/view_authority',
    method: 'get',
    data
  })
}

export function getViewIdentity(data) {
  return request({
    url: '/user/identity_view_authority_relation',
    method: 'get',
    data
  })
}
export function getReneval(data) {
  return request({
    url: '/user/user',
    method: 'put',
    data
  })
}

export function setIdentity(data) {
  return request({
    url: '/user/identity/edit',
    method: 'get',
    params: data
  })
}
