<template>
  <div class="detail">
    <div class="head">试卷详情</div>
    <div class="bigBox">
      <div class="left">
      
        <div class="style_exam__2fYLs">
          <div class="style_questionitem">
            <div class="style_questionitem__1TQyr" v-for="item in question">
              <h4>{{item.questions_type_text}}</h4>
              <div class="react-markdown">
                <h2>使用js实现以下效果</h2>
                <p>
                   {{item.questions_stem}}
                </p>
                <pre>
                    <code class="language-js">
                        
                    </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data(){
    return {
        question:[]
    }
  },
  created(){

  },
   mounted(){
        //调用获取课程和类型列表函数
        this.getquestion()
    },
  methods:{
    ...mapActions({
      detailExam:'examList/detailExam'
    }),
    getquestion(){
      this.detailExam(this.$route.query.id).then(res=>{
        if(res.code==1){
          console.log(res.data)
          this.question=res.data.questions
        }
      })
    }
   }
};
</script>

<style lang="scss" scoped>
  .detail {
    width: 95%;
    background: #eee;
    margin:0 2.5%;
  }

  .head {
    height: 80px;
    padding: 25px;
    box-sizing: border-box;
    font-size: 26px;
  }

  .bigBox {
    flex: auto;
    min-height: 0;
    display: flex;
    .left {
      background: rgb(255, 255, 255);
      width: 70%;
      padding: 24px;
      margin: 0px 20px 20px 0px;
      border-radius: 10px;

      .style_exam__2fYLs {
        min-height: 980px;
        margin: auto;
        padding: 40px;
        text-align: center;
        position: relative;
        .style_questionitem {
          .style_questionitem__1TQyr {
            text-align: left;
            border: 1px solid #ccc;
            padding: 20px;
            margin-bottom: 20px;
            h4 {
              margin-top: 0;
              margin-bottom: 10px;
              color: rgba(0, 0, 0, 0.85);
              font-weight: 500;
            }
            .react-markdown {
              line-height: 1.6;
              word-wrap: break-word;
              h2 {
                padding-bottom: 10px;
                border-bottom: 1px solid #eee;
              }
              pre {
                display: block;
                padding: 1em;
                overflow: auto;
                line-height: 1.3;
                max-height: 35em;
                color: #657b83;
                code {
                  font-family: "SFMono-Regular", Consolas, "Liberation Mono",
                    Menlo, Courier, monospace;
                  font-size: 1em;
                }
              }
            }
          }
        }
      }
    }
    .right {
      background: rgb(255, 255, 255);
      padding: 24px;
      margin: 0px 0px 20px;
      border-radius: 10px;
      width: 30%;
      flex-shrink: 0;
    }
  }
</style>