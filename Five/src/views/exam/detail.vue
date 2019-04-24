<template>
  <div class="add-layout">
    <h2>试卷详情</h2>
    <div v-if='detailList.length>0' class="content">
      <div class="left-content">
        <div v-for="(item,index) in detailList" :key="index" class="add-layout-content">
          <div class="add-layout-question">
            <div class="content-list">
              <div class="list">
                <div class="style_questionitem__3ETlC">
                  <h4>{{ index+1 }}:  {{ item.title }} </h4>
                   
                    <markdown-editor v-model="item.questions_stem" />
               
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
      <div class="right-content">
        <div class="add-layout-answer"  v-for="(item,index) in detailList" :key="index" >
          <!-- <p class="message">答案信息</p>  -->
          <div class="content-list">
            <div class="list">
              
              <!-- <div class="style_questionitem__3ETlC">
                  <div class="markdown">
                  <pre>
                      {{ item.questions_answer }} 
                  </pre>
                </div> 
              </div> -->
            </div>
          </div>
        </div>  
      </div>    
    </div>
    <div class="cont" v-else>
      <div class="left-content"></div>
      <div class="right-content"></div>
    </div>
 </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor';
import { mapActions } from 'vuex';
export default {
  components:{
MarkdownEditor
  },
  data() {
    return {
      detailList: []
    }
  },
  async created() {
    const id = this.$route.query.id;
    const result = await this.detailExam(id).then(res=>{
       this.detailList=res.data.questions;
    })
   
  },
  methods: {
    ...mapActions({
      detailExam: 'examList/detailExam'
    })
  }
}
</script>

<style lang="scss" scoped>
.add-layout {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: #f0f2f5;
  min-height: 0;
  flex: 1;
  
}
h4{
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
}
h2 {
  width: 95%;
   margin: 0 2.5%;
  padding: 20px 0px;
  margin-top: 10px;
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 1.5em;
}
.cont{
  width: 95%;
  margin: 10px 2.5%;
  display: flex;
  flex: 1;
}
.content{
  width: 95%;
  margin: 10px 2.5%;
  display: flex;
}
.left-content{
  width: 65%;
  // height: 100%;
  background: #fff;
  border-radius: 15px;
  padding: 20px 0;
}
.right-content{
  width: 33%;
  margin-left: 2%;
   background: #fff;
   border-radius: 15px;
    padding: 20px 0;
}
.add-layout-content{
  width: 100%;
  border-radius: 15px;
}
.add-layout-question {
  width: 100%;
  border-radius: 10px;
  margin-right: 20px;
  padding: 24px;
  margin-bottom: 20px;
}
.add-layout-answer {
  width: 100%;
  border-radius: 10px;
  padding: 24px;
  margin-bottom: 20px;
}
.content-list {
  width: 100%;
  margin-bottom: 10px;
}
.top-title {
  text-align: center;
  p {
    font-size: 14px;
  }
}
.style_questionitem__3ETlC {
  text-align: left;
  border: 1px solid #ccc;
  padding: 10px;
  
}
.message {
  font-size: 18px;
  margin: 0;
  padding: 0;
  margin-bottom: 5px;
}
</style>
