import request from '@/utils/request'

export const getgrade = params => {
  return request.get('/manger/grade', params)
}
