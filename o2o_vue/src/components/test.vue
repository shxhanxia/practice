<template>
  <div id="test">
    <select v-model="select1">
      <option v-for="(item, index) in diqu" :value="index">{{item.sheng}}</option>
    </select>
    <select v-model="select2">
      <option v-for="(item, index) in diqu[select1].shi" :value="index">{{item.shi}}</option>
    </select>
    <select v-model="select3">
      <option v-for="(item, index) in diqu[select1].shi[select2].qu" :value="index">{{item}}</option>
    </select>
    <p>{{diqu[select1].sheng}}-{{diqu[select1].shi[select2].shi}}-{{diqu[select1].shi[select2].qu[select3]}}</p>

    <el-button @click="show = !show">Click Me</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>
  </div>
</template>
<script>
  import {o2o_http} from './../commen/js/o2o_api'
  export default {
    data () {
      return {
        show: true,
        select1: 0,
        select2: 0,
        select3: 0,
        diqu: [
          {
            sheng: '北京',
            shi: [
              {
                shi: '北京市',
                qu: [
                  '海淀区',
                  '朝阳区'
                ]
              },
              {
                shi: '北京2市',
                qu: [
                  '天津区',
                  '雄安区'
                ]
              }
            ]
          },
          {
            sheng: '河南',
            shi: [
              {
                shi: '郑州市',
                qu: [
                  '北三环',
                  '南三环'
                ]
              },
              {
                shi: '许昌市',
                qu: [
                  '魏都区',
                  '长葛'
                ]
              }
            ]
          }
        ]
      }
    },
    created () {
//      this.getData()
//      console.log(this.$router.currentRoute.query.type)
      alert(this.$router.currentRoute.query.type)
    },
    methods: {
      getData () {
        o2o_http({method: 'com.user.get.test.test'}).then((res) => {
          console.log(res, 'success')
        }).catch((res) => {
          console.log(res, 'error')
        })
      }
    }
  }
</script>
<style scoped>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
