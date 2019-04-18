<template>
  <div class="usershow">
    <div class="show-header">
      <h2>用户展示</h2>
    </div>
    <div class="show-list">
      <span v-for="(item, i) in lists" :key='item.id' :class="listsInd==i?'active':''"  @click='handleChange(i)'>{{item.names}}</span>
    </div>
    <h1>用户数据</h1>
    <tab :dataList='dataList'/>
  </div>
</template>

<script>
import Tab from '../tab'
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      dataList: [],
      listsInd:0,
      lists:[
        {
          names:'用户数据',
          id:'1'
        },
         {
          names:'身份数据',
          id:'2'
        }, {
          names:'api接口权限',
          id:'3'
        }, {
          names:'身份和api接口关系',
          id:'4'
        },
        {
          names:'身视图接口权限',
          id:'5'
        },{
          names:'身份和视图权限关系',
          id:'6'
        }
      ]
    }
  },
 methods:{
    ...mapActions({
      getList: "usershow/show",
      getid:'usershow/getIdentity',

    }),
    handleChange(i){
      this.listsInd=i;
      if(this.listsInd==0){
         this.getList().then(res=>{
        if(res.code==1){
          this.dataList=res.data;
        }
      })
      }else if(this.listsInd==1){
         this.getid().then(res=>{
        if(res.code==1){
          this.dataList=res.data;
        }
      })
      }
    }
 },
  components: { Tab },
  created(){
     this.getList().then(res=>{
        if(res.code==1){
          this.dataList=res.data;
        }
      })
     
  }

}
</script>

<style scoped lang='scss'>
.show-header{
      display: flex;
      flex-direction: column;
      flex: auto;
      min-height: 0;
      padding: 24px;
  h2{
        margin-bottom: 0.5em;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
  }
}
.show-list{
      display: flex;
      flex: auto;
      min-height: 0;
      padding-left: 24px;
      >span{
        padding:7px 15px;
        border:1px solid #ccc;
        background: #fff;
        border-right: 0;
        color: rgba(0, 0, 0, 0.85);

      }
      >span:last-child{
          border-right:1px solid #ccc;
      }
}
h1{
    margin-left: 24px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.9);

}
table{
    display: flex;
    flex-direction: column;
    flex: auto;
    margin-left: 24px;
    >thead{
        width: 90%;
        height: 50px;
        background: #fff;
    }
}
span.active{
  border:1px solid #0139FD;
  color: #0139FD;
}

</style>
