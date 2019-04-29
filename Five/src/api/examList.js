import request from '@/utils/request'
// 考试科目
export const subject = parmas => {
        return request.get('/exam/subject', parmas)
    }
    // 考试类型
export const examType = parmas => {
        return request.get('/exam/examType', parmas)
    }
    //  考试列表
export const examList = parmas => {

    return request.get('/exam/exam', parmas)
}

// 创建考试
export function create(data) {
    return request({
        url: '/exam/exam',
        method: 'post',
        data
    })
}
// 创建试题
export function PutCreate(data) {
    const { src, question_ids } = data;
    return request({
        url: `/exam/exam/${src}`,
        method: 'put',
        data: {
            question_ids
        }
    })
}

//  跳转详情

export function detailExam(data) {
    return request({
        url: `/exam/exam/${data}`,
        method: 'get'
    })
}

// 选择试题
export const Questions = parmas => {
    return request.get('/exam/questions/new', parmas)
}