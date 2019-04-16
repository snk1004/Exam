import request from '@/utils/request'

export const getgrade = params => {
  return request.get('http://169.254.19.28:7001/manger/grade', params)
}
