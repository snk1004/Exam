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

export function addApi(data) {
  return request({
    url: '/user/authorityApi/edit',
    method: 'get',
    params: data
  })
}

export function setApiEnter() {
  return request({
    url: '/user/view_authority',
    method: 'get'
  })
}
export function addViewApi(data) {
  return request({
    url: '/user/authorityView/edit',
    method: 'get',
    params: data
  })
}

export function setIdentityApi(data) {
  return request({
    url: '/user/setIdentityApi',
    method: 'post',
    data
  })
}
export function setIdentityView(data) {
  return request({
    url: '/user/setIdentityView',
    method: 'post',
    data
  })
}