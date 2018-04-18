<template>
  <div id="index">
    <p>首页</p>
    <!--<HotelDatePicker ref="HotelDatePicker" :i18n="ptBr" v-model="value1" @checkOutChanged="ccc"/>-->
    <!--<mt-button type="default" class="aaa">提交</mt-button>-->
    <!--<yd-button type="danger" disabled size="large">yd提交</yd-button>-->
    <!--<yd-button-group>-->
    <!--<yd-button type="primary" size="large">哈哈</yd-button>-->
    <!--<yd-button type="primary" size="large" class="ydbtn">哈哈</yd-button>-->
    <!--</yd-button-group>-->
    <!--<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNiAxOCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMTcuMzExaDE1Ljc1NFYuMTE1SDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLjE0OCkiPgogICAgICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iIzAwQ0E5RCIgZD0iTTE0LjQ2NSAxNi4yMTVIMS4yOWEuMTk2LjE5NiAwIDAgMS0uMTk0LS4xOTN2LTguNjloMTMuNTYydjguNjlhLjE5Ni4xOTYgMCAwIDEtLjE5My4xOTN6TTEuMjkgMi45NThoMS4wMTN2LjU2M2MwIC44MTcuNjY0IDEuNDgyIDEuNDgxIDEuNDgyLjgxOCAwIDEuNDgyLS42NjUgMS40ODItMS40ODJ2LS41NjNoNS4wNDZ2LjU2M2MwIC44MTcuNjY1IDEuNDgyIDEuNDgyIDEuNDgyczEuNDgyLS42NjUgMS40ODItMS40ODJ2LS41NjNoMS4xODljLjEwNSAwIC4xOTMuMDg5LjE5My4xOTN2My4xNDJIMS4wOTZWMy4xNTFjMC0uMTA0LjA4OS0uMTkzLjE5NC0uMTkzek0zLjM0IDEuNTk2YS40NDQuNDQ0IDAgMCAxIC44ODcgMHYxLjkyNWEuNDQ0LjQ0NCAwIDAgMS0uODg3IDBWMS41OTZ6bTguMDEgMGEuNDQ0LjQ0NCAwIDAgMSAuODg2IDB2MS45MjVhLjQ0NC40NDQgMCAwIDEtLjg4NyAwVjEuNTk2em0zLjExNC4yNjZoLTEuMTl2LS4yNjZjMC0uODE3LS42NjQtMS40ODItMS40ODEtMS40ODItLjgxNyAwLTEuNDgyLjY2NS0xLjQ4MiAxLjQ4MnYuMjY2SDUuMjY2di0uMjY2QzUuMjY2Ljc4IDQuNjAyLjExNCAzLjc4NC4xMTRjLS44MTcgMC0xLjQ4MS42NjUtMS40ODEgMS40ODJ2LjI2NkgxLjI5Qy41NzkgMS44NjIgMCAyLjQ0IDAgMy4xNTJ2MTIuODdjMCAuNzExLjU3OSAxLjI5IDEuMjkgMS4yOWgxMy4xNzVhMS4yOSAxLjI5IDAgMCAwIDEuMjktMS4yOVYzLjE1MmExLjI5IDEuMjkgMCAwIDAtMS4yOS0xLjI5eiIgbWFzaz0idXJsKCNiKSIvPgogICAgICAgIDwvZz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDBDQTlEIiBkPSJNMy4xOTQgMTAuOTk4aDEuMzU3VjkuNjQySDMuMTk0ek01Ljg2NCAxMC45OThoMS4zNTdWOS42NDJINS44NjR6TTguNTM0IDEwLjk5OEg5Ljg5VjkuNjQySDguNTM0ek0xMS4yMDQgMTAuOTk4aDEuMzU2VjkuNjQyaC0xLjM1NnpNMy4xOTQgMTMuOTRoMS4zNTd2LTEuMzU3SDMuMTk0ek01Ljg2NCAxMy45NGgxLjM1N3YtMS4zNTdINS44NjR6TTguNTM0IDEzLjk0SDkuODl2LTEuMzU3SDguNTM0ek0xMS4yMDQgMTMuOTRoMS4zNTZ2LTEuMzU3aC0xLjM1NnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="">-->
    <!--<p>{{value1}}</p>-->
    {{checkall}} <br> {{checkeds}}
    <input type="checkbox" v-model="checkall">
    <ul>
      <li v-for="(item, index) in str" :key="index" v-if="item.parentid === 1">
        <input type="checkbox" v-model="checkeds" :value="item.id">{{item.id}}
        <ul>
          <li v-for="(itema, index) in str" :key="index" v-if="itema.parentid === item.id">
            <input type="checkbox" v-model="checkeds" :value="itema.id">{{itema.id}}
            <ul>
              <li v-for="(itemb, index) in str" :key="index" v-if="itemb.parentid === itema.id">
                <input type="checkbox" v-model="checkeds" :value="itemb.id">{{itemb.id}}
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
  import HotelDatePicker from 'vue-hotel-datepicker'

  export default {
    data() {
      return {
        start: '',
        end: '',
        value1: '111',
        ptBr: {
          night: '晚',
          nights: '晚',
          'day-names': ['日', '一', '二', '三', '四', '五', '六'],
          'check-in': '入住日期',
          'check-out': '离开日期',
          'month-names': ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        },
        str: [
          {name: '一级列表1', id: 2, parentid: 1},
          {name: '一级列表2', id: 3, parentid: 1},
          {name: '一级列表3', id: 4, parentid: 1},
          {name: '一级列表4', id: 5, parentid: 1},
          {name: '二级列表1', id: 6, parentid: 2},
          {name: '二级列表2', id: 7, parentid: 2},
          {name: '二级列表1', id: 8, parentid: 3},
          {name: '二级列表2', id: 9, parentid: 3},
          {name: '二级列表1', id: 10, parentid: 4},
          {name: '二级列表2', id: 11, parentid: 4},
          {name: '二级列表1', id: 12, parentid: 5},
          {name: '二级列表2', id: 13, parentid: 5},
          {name: '三级列表1', id: 14, parentid: 6},
          {name: '三级列表2', id: 15, parentid: 6},
          {name: '三级列表1', id: 16, parentid: 7},
          {name: '三级列表2', id: 17, parentid: 7},
          {name: '三级列表1', id: 18, parentid: 8},
          {name: '三级列表2', id: 19, parentid: 8},
          {name: '三级列表1', id: 20, parentid: 9},
          {name: '三级列表2', id: 21, parentid: 9},
          {name: '三级列表1', id: 22, parentid: 10},
          {name: '三级列表2', id: 23, parentid: 10},
          {name: '三级列表1', id: 24, parentid: 11},
          {name: '三级列表2', id: 25, parentid: 11},
          {name: '三级列表1', id: 26, parentid: 12},
          {name: '三级列表2', id: 27, parentid: 12},
          {name: '三级列表1', id: 28, parentid: 13},
          {name: '三级列表2', id: 29, parentid: 13},
        ],
        checkall: false,
        checkeds: [],
        checkeda: [],
        checkedb: [],
        checkedc: []
      }
    },
    created() {
      console.log('组件已被创建, 可以嘿嘿嘿了!')
    },
    mounted() {
      console.log('都加载好了, 可以进行事件绑定什么的了!')
      // let _this = this
      // _this.aaa().addEventListener('click ', function(){
      //   _this.bbb()
      // })
    },
    computed: {},
    methods: {
      aaa() {
//        console.log(this.hotel_start(), this.hotel_end())
//        console.log(this.$refs.HotelDatePicker._vnode.elm)
        return document.getElementsByClassName('aaa')[0]
      },
      bbb() {
        console.log(1)
      },
      ccc() {
        let _this = this
        setTimeout(function () {
          console.log(_this.hotel_start(), _this.hotel_end())
        }, 0)
      },
      hotel_start() {
        return this.$refs.HotelDatePicker._vnode.elm.getElementsByClassName('datepicker__dummy-input')[0].value
      },
      hotel_end() {
        return this.$refs.HotelDatePicker._vnode.elm.getElementsByClassName('datepicker__dummy-input')[1].value
      },
      hotel_inner() {
        return this.$refs.HotelDatePicker._vnode.elm.getElementsByClassName('datepicker')[0]
//        reruen document.getElementsByClassName('datepicker__inner')[0]
      }
    },
    components: {
      HotelDatePicker
    },
    watch: {
//      'start': function(newVal, oldVal) {
//        console.log(newVal, oldVal)
//      },
//      'end': function(newVal, oldVal) {
//        console.log(newVal, oldVal)
//      }


      checkall: function (newVal, oldVal) {
        let _this = this;
        if (newVal) {
          let aaa = [];
          for (let i = 0; i < _this.str.length; i++) {
            aaa.push(_this.str[i].id);
          }
          _this.checkeds = aaa;
        } else {
          if (_this.checkeds.length === _this.str.length) {
            _this.checkeds = [];
          }
        }
      },
      checkeds: function (newVal, oldVal) {
        let _this = this;
        if (newVal.length === _this.str.length) {
          _this.checkall = true;
        } else {
          _this.checkall = false;
          if (newVal.length > oldVal.length) {
            // 增加了选项
            let add = '';
            for (let i = 0; i < newVal.length; i++) {
              if (newVal[i] !== oldVal[i]) {
                add = newVal[i];
                break;
              }
            }
            let adds = [];
            for (let j = 0; j < _this.str.length; j++) {
              if (_this.str[j].parentid === add) {
                adds.push(_this.str[j].id);
              }
            }
            for (let m = 0; m < _this.str.length; m++) {
              if (adds.indexOf(_this.str[m].parentid) !== -1) {
                adds.push(_this.str[m].id);
              }
            }
            let tem = _this.checkeds;
            for (let k = 0; k < adds.length; k++) {
              if (tem.indexOf(adds[k]) === -1) {
                tem.push(adds[k]);
              }
            }
            _this.checkeds = tem;
          } else {
            // 减少了选项
            if (oldVal.length - newVal.length !== 1) {
              return;
            }
            let delate = '';
            for (let i = 0; i < oldVal.length; i++) {
              if (oldVal[i] !== newVal[i]) {
                delate = oldVal[i];
                break;
              }
            }
            let delates = [];
            for (let j = 0; j < _this.str.length; j++) {
              if (_this.str[j].parentid === delate) {
                delates.push(_this.str[j].id);
              }
            }
            for (let m = 0; m < _this.str.length; m++) {
              if (delates.indexOf(_this.str[m].parentid) !== -1) {
                delates.push(_this.str[m].id);
              }
            }
            let tem = _this.checkeds.concat([]);
            for (let k = 0; k < delates.length; k++) {
              if (tem.indexOf(delates[k]) !== -1) {
                tem.splice(tem.indexOf(delates[k]), 1);
              }
            }
            _this.checkeds = tem;
          }
        }
      }
    }
  }
</script>
<style lang="scss">
  #index .datepicker__dummy-input:first-child {
    background-image: none;
  }

  .ydbtn {
    background-color: #f00;
  }

  .ydbtn:active {
    background-color: #ec0000;
  }

  ul {
    padding-left: 40px;
  }
</style>
