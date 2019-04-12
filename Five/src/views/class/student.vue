<template>
  <div class="student-container">
    <h2>学生管理</h2>
    <div class="student-content">
      <from class="student-btn-box">
        <div class="form-item-children">
          <input type="text" placeholder="输入学生姓名" value="">
        </div>
        <div class="form-item-room">
          <span>请选择教室号</span>
        </div>
        <div class="form-item-class">
          <span>班级名</span>
        </div>
        <div class="form-item-search">
          <button class="student-btn">搜索</button>
        </div>
        <div class="form-item-reset">
          <button class="student-btn">重置</button>
        </div>
      </from>
      <div class="student-body">
        <table>
          <colgroup>
            <col>
            <col>
            <col>
            <col>
            <col>
            <col>
          </colgroup>
          <thead>
            <tr>
              <th>
                <div>姓名</div>
              </th>
              <th>
                <div>学号</div>
              </th>
              <th>
                <div>班级</div>
              </th>
              <th>
                <div>教室</div>
              </th>
              <th>
                <div>密码</div>
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
                <span>34311</span>
              </td>
              <td>
                <span>Pm626521@</span>
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
                <span>34311</span>
              </td>
              <td>
                <span>Pm626521@</span>
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
                <span>34311</span>
              </td>
              <td>
                <span>Pm626521@</span>
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
                <span>34311</span>
              </td>
              <td>
                <span>Pm626521@</span>
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
                <span>34311</span>
              </td>
              <td>
                <span>Pm626521@</span>
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
                <span>34311</span>
              </td>
              <td>
                <span>Pm626521@</span>
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
                <span>34311</span>
              </td>
              <td>
                <span>Pm626521@</span>
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
                <span>34311</span>
              </td>
              <td>
                <span>Pm626521@</span>
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
                <span>34311</span>
              </td>
              <td>
                <span>Pm626521@</span>
              </td>
              <td>
                <span>修改/删除</span>
              </td>
            </tr>
          </tbody>
          <div class="student-pagination">
            <li><i class="el-icon-arrow-left" /></li>
            <li>2</li>
            <li>3</li>
            <li class="none-border"><i class="el-icon-more" /></li>
            <li>20</li>
            <li><i class="el-icon-arrow-right" /></li>
            <li class="pad-item">20条/页<i class="el-icon-arrow-down" /></li>
            <li class="none-border">跳至</li>
            <li />
            <li class="none-border">页</li>
          </div>
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
.student-container{
  width: 100%;
  height: 100%;
  padding: 0px 24px 24px;
  box-sizing: border-box;
  h2{
    padding: 20px 0px;
    margin-top: 10px;
    font-weight: normal;
  }
  .student-content{
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    background: #fff;
    padding: 24px;
    .student-btn-box{
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      .form-item-children{
        input{
          margin-right: 16px;
          width: 180px;
          height: 32px;
          padding: 4px 11px;
          box-sizing: border-box;
          border: 1px solid #d9d9d9;
        }
      }
      .student-btn{
        width: 110px;
        height: 32px;
        display: block;
        background: #0139fd;
        border: none;
        color: #fff;
        border-radius: 5px;
        margin-right: 16px;
      }
    }
    .student-body{
      width: 100%;
      height: 100%;
      display: flex;
      font-size: 14px;
      table{
        width: 100%;
        .student-pagination{
          width: 60%;
          padding-left: 20%;
          height: 32px;
          margin: 16px 10px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          list-style: none;
          li{
            cursor: pointer;
            border-radius: 2px;
            user-select: none;
            min-width: 32px;
            height: 32px;
            line-height: 30px;
            text-align: center;
            list-style: none;
            display: inline-block;
            vertical-align: middle;
            border: 1px solid #d9d9d9;
            background-color: #fff;
            margin-right: 8px;
            font-family: Arial;
            outline: 0;
          }
          .none-border{
            border: none!important;
          }
          .pad-item{
            padding: 0 8px;
          }
        }
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

