<template>
    <div class="box">
        <p>阅卷</p>
        <div class="content">
            <div class="leftbox">
                暂无数据
            </div>
            <div class="rightbox">
                <h4>得分：<span class="score">{{score}}</span></h4>
                <div class="block">
                    <el-slider v-model="value1"></el-slider>
                </div>
                <button @click="sure()">确定</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
             value1:0,
             score:0
        }
    },
    watch: {
        value1(newName, oldName){
            this.score=newName
        }
    },
    methods: {
        sure(){
            alert('您的成绩是'+this.score+'分')
        }
    },
}
</script>
<style lang="scss">
.box{
    width: 100%;
    padding: 0 30px;
    >p{
        font-size: 20px;
        padding: 10px 0;
    }
}
.content{
    width: 100%;
    display: flex;
    .leftbox{
        text-align: center;
        height: 200px;
        line-height: 200px;
        flex: 6;
        background: #fff;
        border-radius: 15px;
        font-size: 20px;
    }
    .rightbox{ 
        flex: 3;
        text-align: center;
        border-radius: 15px;
        background: #fff;
        margin-left: 20px;
        .score{
            font-size: 20px;
            color: blue;
        }
        .block{
            width: 100%;
            padding: 0 20px;
        }
        button{
            padding: 10px 30px;
            background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
            border: none;
            color: #fff;
            border-radius: 5px;
            margin-top: 25px;
        }
    }
}
</style>
