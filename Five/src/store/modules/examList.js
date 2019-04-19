import { subject, examType, create, examList, PutCreate } from '@/api/examList';
const state = {
    courseList: []
}
const mutations = {

}
const actions = {
    //创建考试
    async createExam({ commit }, examList) {
        const { TypeExamId, courseExamId, date1, date2, name, num } = examList;
        var res = await create({ subject_id: courseExamId, exam_id: TypeExamId, title: name, number: num, start_time: date1, end_time: date2 });
        console.log(res);
        if (res.code == 1) {
            localStorage.setItem('exam', JSON.stringify(res.data))
        }

        return res
    },

    //考试列表
    examList({ commit }, payload) {
        return new Promise(async(resolve, reject) => {
            const examLists = await examList(payload)
            resolve(examLists)
        })
    },
    //考试科目
    subject({ commit }, payload) {
        return new Promise(async(resolve, reject) => {
            const data = await subject(payload)
            resolve(data)
        })
    },
    //考试类型
    examType({ commit }, payload) {
        return new Promise(async(resolve, reject) => {
            const typeData = await examType(payload)
            resolve(typeData)
        })
    },
    //创建试题
    async PutCreate({ commit }, examList) {
        console.log(examList)
            // const { TypeExamId, courseExamId, date1, date2, name, num } = examList;
            // var res = await create({});
            // console.log(res);
            // if (res.code == 1) {
            //     localStorage.setItem('exam', JSON.stringify(res.data))
            // }

        // return res
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}