import Vue from 'vue'
import Router from 'vue-router'
const index = (resolve) => {
  import('@/components/index').then((module) => {
    resolve(module)
  })
}
const HelloWorld = (resolve) => {
  import('@/components/HelloWorld').then((module) => {
    resolve(module)
  })
}
const test = (resolve) => {
  import('@/components/test').then((module) => {
    resolve(module)
  })
}
const yd = (resolve) => {
  import('@/components/yd').then((module) => {
    resolve(module)
  })
}
const calendarApp = (resolve) => {
  import('@/components/calendarApp').then((module) => {
    resolve(module)
  })
}
const wx = (resolve) => {
  import('@/components/wx').then((module) => {
    resolve(module)
  })
}
const velocity = (resolve) => {
  import('@/components/velocity').then((module) => {
    resolve(module)
  })
}
const Number = (resolve) => {
  import('@/components/Number').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/HelloWorld',
      component: HelloWorld,
      meta: {
        title: 'HelloWorld'
      }
    },
    {
      path: '/test',
      component: test,
      meta: {
        title: '测试'
      }
    },
    {
      path: '/yd',
      component: yd,
      meta: {
        title: 'YDUI'
      }
    },
    {
      path: '/calendarApp',
      component: calendarApp,
      meta: {
        title: 'calendarApp'
      }
    },
    {
      path: '/wx',
      component: wx,
      meta: {
        title: '微信接口调用'
      }
    },
    {
      path: '/velocity',
      component: velocity,
      meta: {
        title: 'velocity动画'
      }
    },
    {
      path: '/Number',
      component: Number,
      meta: {
        title: 'Number精确度'
      }
    }
  ]
})
