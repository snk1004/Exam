import request from '@/utils/request';
//考试科目
export const subject = parmas => {
        return request.get('/exam/subject', parmas)
    }
    //考试类型 
export const examType = parmas => {
        return request.get('/exam/examType', parmas)
    }
    //考试列表
export const examList = parmas => {
        return request.get('/exam/exam', parmas)
    }
    //创建考试
export function create(data) {
    return request({
        url: '/exam/exam',
        method: 'post',
        data
    })
}
//创建试题
export function PutCreate(data) {
    console.log(data)
    return request({
        url: `/exam/exam/`,
        method: 'put',
        data
    })
}