<template>
  <div class="class-container">
    <h2>班级管理</h2>
    <div class="class-content">
      <div class="class-btn-box">
        <button class="class-btn"><i class="el-icon-plus" /> 添加班级</button>
      </div>
      <div class="class-body">
        <table>
          <colgroup>
            <col>
            <col>
            <col>
            <col>
          </colgroup>
          <thead>
            <tr>
              <th>
                <div>班级名</div>
              </th>
              <th>
                <div>课程名</div>
              </th>
              <th>
                <div>教室号</div>
              </th>
              <th>
                <div>操作</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>1701B</span>
              </td>
              <td>
                <span>node基础</span>
              </td>
              <td>
                <span>34303</span>
              </td>
              <td>
                <span>修改/删除</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1701B</span>
              </td>
              <td>
                <span>node基础</span>
              </td>
              <td>
                <span>34303</span>
              </td>
              <td>
                <span>修改/删除</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1701B</span>
              </td>
              <td>
                <span>node基础</span>
              </td>
              <td>
                <span>34303</span>
              </td>
              <td>
                <span>修改/删除</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1701B</span>
              </td>
              <td>
                <span>node基础</span>
              </td>
              <td>
                <span>34303</span>
              </td>
              <td>
                <span>修改/删除</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1701B</span>
              </td>
              <td>
                <span>node基础</span>
              </td>
              <td>
                <span>34303</span>
              </td>
              <td>
                <span>修改/删除</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1701B</span>
              </td>
              <td>
                <span>node基础</span>
              </td>
              <td>
                <span>34303</span>
              </td>
              <td>
                <span>修改/删除</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1701B</span>
              </td>
              <td>
                <span>node基础</span>
              </td>
              <td>
                <span>34303</span>
              </td>
              <td>
                <span>修改/删除</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1701B</span>
              </td>
              <td>
                <span>node基础</span>
              </td>
              <td>
                <span>34303</span>
              </td>
              <td>
                <span>修改/删除</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>1701B</span>
              </td>
              <td>
                <span>node基础</span>
              </td>
              <td>
                <span>34303</span>
              </td>
              <td>
                <span>修改/删除</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang='scss'>
.app-main{
  background: #f0f2f5;
}
.class-container{
  width: 100%;
  height: 100%;
  padding: 0px 24px 24px;
  box-sizing: border-box;
  h2{
    padding: 20px 0px;
    margin-top: 10px;
    font-weight: normal;
    font-size: 1.5em;
  }
  .class-content{
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    background: #fff;
    padding: 24px;
    .class-btn-box{
      width: 100%;
      display: flex;
      margin-bottom: 25px;
      .class-btn{
        width: 158px;
        height: 40px;
        display: block;
        border: none;
        color: #fff;
        border-radius: 5px;
        background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
      }
    }
    .class-body{
      width: 100%;
      height: 100%;
      display: flex;
      font-size: 14px;
      table{
        width: 100%;
      }
      thead{
        width: 100%;
        background: #f4f7f9;
      }
      thead tr{
        transition: all 0.3s, height 0s;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        th{
          height: 52px;
          line-height: 26px;
          padding: 16px 16px;
          flex: 1;
          border-bottom: 1px solid #e8e8e8;
          div{
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            font-weight: 500;
          }
        }
      }
      tbody tr{
        transition: all 0.3s, height 0s;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        td{
          height: 52px;
          line-height: 26px;
          padding: 16px 16px;
          flex: 1;
          border-bottom: 1px solid #e8e8e8;
          span{
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>

