<template>
  <div class="usershow">
    <div class="show-header">
      <h2>用户展示</h2>
    </div>
    <div class="show-list">
      <span v-for="(item, i) in lists" :key='item.id' :class="listsInd==i?'active':''"  @click='handleChange(i)'>{{item.names}}</span>
    </div>
    <h1>用户数据</h1>
     <el-table
    :data="newList"
    style="width: 100%">
    <el-table-column  
      v-for='(item,i) in lists[listsInd].title' :key='i' :label='item.tit' :prop="item.render" >
    </el-table-column>
  </el-table>
 <div class="pagetion">
    <el-pagination
  background
  layout="prev, pager, next"
  :total="dataList.length" 
  :page-size='8' 
  @current-change="handleCurrentChange" 
  :current-page.sync="dftPage"
>
</el-pagination>
 </div>
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
          id:'1',
          title:[{
            'tit':'用户名',
            'render':'user_name'
            },
            {
              'tit':'密码',
              'render':'user_pwd'
            },
            {
              'tit':'身份',
              'render':'identity_text'
            }]
        },
         {
          names:'身份数据',
          id:'2',
          title:[ {
              'tit':'身份名称',
              'render':'identity_text'
            }]
        }, {
          names:'api接口权限',
          id:'3',
          title:[{
          'tit':'api权限名称',
          'render':'api_authority_text'
          }, {
          'tit':'api权限url',
          'render':'api_authority_url'
          },{
          'tit':'api权限方法',
          'render':'api_authority_method'
          }]

        }, {
          names:'身份和api接口关系',
          id:'4',
          title:[{
          'tit':'身份名称',
          'render':'identity_text'
            },{
          'tit':'api权限名称',
          'render':'api_authority_text'
          },{
          'tit':'api权限url',
          'render':'api_authority_url'
            },{
          'tit':'api权限方法',
          'render':'api_authority_method'
            }]
        },
        {
          names:'身份视图接口权限',
          id:'5',
          title:[{
          'tit':'视图权限名称',
          'render':'view_authority_text'
          },{
          'tit':'视图id',
          'render':'view_id'
          }]
        },{
          names:'身份和视图权限关系',
          id:'6',
          title:[{
          'tit':'身份',
          'render':'identity_text'
          },{
          'tit':'视图名称',
          'render':'view_authority_text'
          },{
          'tit':'视图id',
          'render':'view_id'
          }]
        }
      ],
      limit:8,
      newList:[],
      dftPage:1
    }
  },
 methods:{
    ...mapActions({
      getList: "usershow/show",
      getid:'usershow/getIdentity',
      getapi:'usershow/getApi',
      getrelation:'usershow/getRelation',
      getview:'usershow/getView',
      getviewidentity:'usershow/getViewIdentity'
    }),
    handleChange(i){
      this.listsInd=i;
      this.dftPage=1
      if(this.listsInd==0){
         this.getList().then(res=>{
          if(res.code==1){
            this.dataList=res.data;
            this.newList= this.dataList.slice(0,this.limit)
          }
      })
      }else if(this.listsInd==1){
         this.getid().then(res=>{
        if(res.code==1){
          this.dataList=res.data;
          this.newList= this.dataList.slice(0,this.limit)
        }
      })
      }else if(this.listsInd==2){
        this.getapi().then(res=>{
          if(res.code==1){
            this.dataList=res.data;
            this.newList= this.dataList.slice(0,this.limit)
          }
        })
      }else if(this.listsInd==3){
         this.getrelation().then(res=>{
          if(res.code==1){
            this.dataList=res.data;
            this.newList= this.dataList.slice(0,this.limit)
          }
        })
      }else if(this.listsInd==4){
         this.getview().then(res=>{
          if(res.code==1){
            this.dataList=res.data;
            this.newList= this.dataList.slice(0,this.limit)
          }
        })
      }else if(this.listsInd==5){
         this.getviewidentity().then(res=>{
          if(res.code==1){
            this.dataList=res.data;
            this.newList= this.dataList.slice(0,this.limit)
          }
        })
      }
    },
    handleCurrentChange(val){
      console.log((this.limit-1)*(val-1))
      this.newList = this.dataList.slice((this.limit)*(val-1),this.limit*(val))
    }
 },
  components: { Tab },
  created(){
     this.getList().then(res=>{
        if(res.code==1){
          this.dataList=res.data;
          this.newList= this.dataList.slice(0,this.limit)
        }
      })
     
  }

}
</script>

<style scoped lang='scss'>
.pagetion{
   margin: 20px auto;
    width:95%;
    height:60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

}
.usershow{
  padding-left: 24px;
}
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
    font-weight: 500;
    color: rgba(0, 0, 0, 0.9);

}
span.active{
  border:1px solid #0139FD;
  color: #0139FD;
}


</style>
