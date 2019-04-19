<template>
    <div class="box">
        <p class="testtitle">试题详情</p>
        <div class="content">
            <div>
                <p class="testusername">出题人：<span>{{username}}</span></p>
                <h6 class="title">题目信息</h6>
                <p class="minlist">
                    <span>代码补全</span>
                    <span>javascript上</span>
                    <span>周考1</span>
                </p>
                <p>机器人归位</p>
                <markdown-editor v-model="content" />
            </div>
            <div>
                <p>答案信息</p>
                <markdown-editor v-model="aswer" />
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions} from "vuex";
import MarkdownEditor from './Markdown'
export default {
    components: { MarkdownEditor },
    data(){
        return{
            datas:[],
            content: '',
            aswer:'',
            username:''
        }
    },
    mounted() {
        this.getdatas()
    },
    methods: {
        ...mapActions({
            conditions:"questionManagement/condition",//所有的数据
        }),
        getdatas(){
        this.conditions().then(res=>{
            if(res.code===1){
                this.datas=res.data
                let obj=(this.datas.filter(item=>item.questions_id===this.$route.query.id))[0];
                this.content=obj.questions_stem
                this.username=obj.user_name
                this.aswer=obj.questions_answer
            }
        })
    }
    }
}
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    background: #eee;
    padding: 0 20px;
    .testtitle{
        height: 50px;
        font-size: 18px;
        line-height: 50px;
    }
}
.content{
    width: 100%;
    height: 100%; 
    display: flex;
    >div{
        flex: 1; 
        margin: 0 5px;
        background: #fff;
        border-radius: 20px;
        padding: 15px;
    }
}
.testusername{
    font-size: 14px;
    font-weight: normal;
    margin: 0;
    padding: 10px 0; 
}
.title{
    font-size: 16px;
    font-weight: normal;
    margin: 0;
    padding: 10px 0;
}
.minlist{
    width: 100%;
    margin: 0;
    padding: 10px 0;

    >span{
        background: yellow;
        padding: 2px 4px;
        font-size: 14px;
    }
}
.tui-editor-contents pre{
    white-space: initial!important
} 
    
</style>
