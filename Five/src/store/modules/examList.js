import { subject, examType, create, examList, PutCreate, detailExam, Questions } from '@/api/examList'
import moment from 'moment';
const actions = {
    // 创建考试
    async createExam({ commit }, examList) {
        const { TypeExamId, courseExamId, date1, date2, name, num } = examList
        const res = await create({ subject_id: courseExamId, exam_id: TypeExamId, title: name, number: num, start_time: date1, end_time: date2 })
        if (res.code == 1) {
            localStorage.setItem('exam', JSON.stringify(res.data))
        }

        return res
    },

    // 考试列表
    examList({ commit }, payload) {
        return new Promise(async(resolve, reject) => {
            const examLists = await examList(payload)
            resolve(examLists)
        })
    },

    // 考试科目
    subject({ commit }, payload) {
        return new Promise(async(resolve, reject) => {
            const data = await subject(payload)
            resolve(data)
        })
    },
    // 考试类型
    examType({ commit }, payload) {
        return new Promise(async(resolve, reject) => {
            const typeData = await examType(payload)
            resolve(typeData)
        })
    },
    // 创建试题
    async PutCreate({ commit }, payload) {
        const { src, question_ids } = payload
        var res = await PutCreate({ src: src, question_ids: question_ids })
        return res
    },

    // 考试列表 跳详情
    detailExam({ commit }, payload) {
        return new Promise(async(resolve, reject) => {
            const typeData = await detailExam(payload)
            resolve(typeData)
        })
    },

    // 试题列表
    Questions({ commit }, payload) {
        return new Promise(async(resolve, reject) => {
            const res = await Questions(payload)
            resolve(res)
        })
    }
}
export default {
    namespaced: true,
    actions
}