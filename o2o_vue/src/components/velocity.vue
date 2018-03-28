<template>
    <div class="vilocity">
      <h3>动画效果</h3>
      <p>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
    </div>
</template>

<script>
    export default {
      name: "vilocity",
      data() {
          return {

          }
      },
      created() {

      },
      mounted() {
        let _this = this;
        Velocity(document.getElementsByTagName('p'), {
          width: '+=200px',
          tween: [ 0, 1000 ]
        }, {
          duration: 2000,
          loop: 1,
          begin: () => {
            console.log('动画开始执行啦');
          },
          progress: (elements, c, r, s, t) => {
            console.log('动画正在执行啊');
            console.log(elements);
            console.log(c);
            console.log(r);
            console.log(s);
            console.log(t);
          },
          complete: () => {
            console.log('动画结束啦');
          }
        });
      }
    }
</script>

<style scoped>
p {
  background-color: red;
}
</style>
