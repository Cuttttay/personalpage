<template>

  <!--导航区-->
  <div class="nav-container">
    <!--进度条-->
    <div class="demo-progress">
      <el-progress
          :percentage="scrollPercentage"
          :format="format"
          :indeterminate="false"
          style="width: 100%"
          class="pink-progress"
      />
    </div>

    <!-- 头像部分 -->
    <div class="nav-content">
      <!-- 头像部分 -->
      <div class="nav-left">
        <el-avatar
            :size="50"
            :src="avatarImg"
            class="nav-avatar"
        />
        <span class="nav-name">Sakura</span>
      </div>



      <!-- 导航标签部分 -->
      <div class="nav-right">
        <el-input
            placeholder="Search..."
            v-model="searchText"
        >
          <template #prefix>
            <el-icon><search /></el-icon>
          </template>
        </el-input>

        <el-tabs
            class="nav-tabs"
            v-model="activeTab"
            @tab-click="handleTabClick">
          <el-tab-pane name="person" label="个人主页"></el-tab-pane>
          <el-tab-pane name="program" label="编程心得"></el-tab-pane>
          <el-tab-pane name="share" label="影音书分享"></el-tab-pane>
          <el-tab-pane name="diary" label="探店日记"></el-tab-pane>
        </el-tabs>

      </div>
    </div>
  </div>


  <!--主要内容区-->
  <router-view></router-view>
  <el-main class="el-main">

    <div class="profile-content">
      <header class="profile-header"><br></header>
      <header class="profile-header"><br></header>
      <header class="profile-header"><br></header>
      <h2 class="name">Sakura</h2>
      <p class="position">乘风好去，长空万里，直下看山河</p>
      <div class="github-container">
        <el-link
            href="https://github.com/"
            target="_blank"
            :underline="false"
            class="github-link">
          <el-icon class="github-icon"><svg viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512c0 184.4 125.7 340.3 300.1 395.4-4.1 1.9-8.5 2.7-13.1 2.7-12.4 0-23.9-7.6-28.6-19.3-5.3-13.6-7.1-28.9-5.1-43.5 24.8-155.2 30.4-181.9 30.4-181.9-50.9 12.2-62.1 24.4-62.1 24.4-30.8 26-76.4 32.4-76.4 32.4-50.1 5.4-72.5-30.7-72.5-30.7-11.4-29.3-27.8-37.2-27.8-37.2-22.7-15.5 1.7-15.2 1.7-15.2 25.1 1.8 38.3 25.8 38.3 25.8 22.3 38.2 58.5 27.2 72.8 20.8 2.2-16.2 8.7-27.2 15.9-33.5-55.6-6.3-114-27.8-114-123.8 0-27.4 9.8-49.7 25.8-67.3-2.6-6.3-11.2-31.6 2.4-65.8 0 0 21-6.7 68.8 25.7 20-5.5 41.4-8.3 62.7-8.4 21.3.1 42.7 2.9 62.7 8.4 47.8-32.4 68.8-25.7 68.8-25.7 13.6 34.2 5 59.5 2.4 65.8 16 17.6 25.8 40 25.8 67.3 0 96.2-58.5 117.5-114.2 123.7 9 7.7 17 23 17 46.3 0 33.5-.3 60.4-.3 68.6 0 6.7 4.6 14.8 17.3 12.3C874.3 852.3 1000 696.4 1000 512 1000 264.6 799.4 64 512 64z"/></svg></el-icon>
          GitHub
        </el-link>
      </div>
    </div>

  </el-main>



  <div class="long-background">
    <div class="el-background">
      <div class="project-section" >

        <div class="header">

          <h1>个人项目</h1>

        </div>

        <div class="project">一些完成了或者正在构思的项目</div>
      </div>

      <div class="cards-container">
        <a class="cards-container a" href="http://sakura.sakuraharuka.top/">
        <el-card class="project-card">
          <template #header>个人主页</template>
          <img
              src="@/assets/photo/page.png"
              style="width: 100%"
          />
          <p>完成时间：2025-4-9</p>
        </el-card>
        </a>
      </div>



      <div class="project-section">
        <div class="header">
          <h1>博客文章</h1>
        </div>
          <div class="project">日常的所思所想...天马行空</div>
        </div>


      <div class="cards-container">
        <a href="http://sakura.sakuraharuka.top/archives/zhai-men-yue-du-yo">
        <el-card class="project-card">

          <template #header>《情迷翡冷翠》“亲爱的，这就是人生啊——人生就是一场冒险”</template>
          <img src="@/assets/photo/img_2.png" style="width: 100%"/>
          <p>完成时间：2025-4-10</p>

         </el-card>
        </a>
      </div>
    </div>
  </div>
</template>



<style>
/*导航标签栏*/

.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  padding: 10px 20px;
}
.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 40px;
  margin-top:5px;
}
/* 移除冲突样式 */
.el-container, .el-tabs__header {
  position: static !important;
  background: transparent !important;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 10px;
}
.nav-avatar {
  border: 2px solid #ffcce6;
  box-shadow: 0 2px 8px rgba(255, 182, 193, 0.3);
}
.nav-name {
  font-size: 18px;
  color: #ff6b9d;
  font-weight: 500;
}
/* 右侧搜索+标签 */
.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-tabs {
  margin-bottom: 0;
}
.nav-tabs .el-tabs__header {
  margin-bottom: 0;
  background: transparent;
}
.el-tabs__header {
  display: flex;
  justify-content: center; /* 标签项居中 */
  width: 100%; /* 让标签头部填充宽度 */

  margin: 0 auto; /* 水平居中 */
  position:fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  /*导航栏背景透明设计*/
  background-color: rgba(255, 255, 255, 0.5) !important;
  padding: 12px 24px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}




/* 标签项样式 */

.el-tabs__nav {
  /* 导航标签容器 - 消除Element默认样式 */
  display: flex;
  justify-content: center;
  border: none !important;
  background: transparent !important;
}

.el-tabs__item {
  color: #ff6bcd !important; /* 粉色文字 */
  text-shadow: 0 1px 2px rgba(0,0,0,0.1); /* 增加文字可读性 */
  font-weight: 500;
  padding: 8px 16px;
}

.el-tabs__item.is-active {
  color: #f368e0 !important;
  font-weight: 600;
}

.el-tabs__item.is-active {
  /* 激活状态标签（原蓝色下划线） */
  color: #e84393 !important; /* 更深的粉色 */
}


.el-tabs__active-bar {
  /* 修改下划线样式 */
  background-color: #ff6b9d !important;
  height: 3px !important;
}


.el-tabs__item:hover {
  /* 悬停效果 */
  color: #ff6bcd !important;
  transform: translateY(-2px);
  text-shadow: 0 2px 4px rgba(255, 182, 193, 0.5);
  padding: 0 25px !important;
}

.el-tabs__nav-wrap::after {
  /* 去掉底部灰色边框线 */
  display: none !important; /* 移除Element UI默认的灰色下划线 */
}





/*图片样式*/
.demo-type > div {
  flex: 1;
  text-align: center;
}

.demo-type > div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}



/*进度条设置*/
.pink-progress {
  --el-color-primary: #ff9ff3; /* 基础粉色 */
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.pink-progress {
  margin-bottom: 0;
  width: 100%;
}

.pink-progress {
  background-color: rgba(255, 182, 245, 0.2) !important;
}




/*主要内容区CSS*/
/*main区简单文字设计*/
.name {
  font-size: 4rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.profile-content {
  position: relative;
  z-index: 2;
  padding-top: 3rem !important;
  text-align: center;
}

.position {
  color: black;
  text-align: center;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  justify-content: center;
}



/*main区链接设计*/
.link-container {
  margin-top: 20px; /* 在链接和标题/段落之间添加一些空间 */
  text-align: center; /* 确保链接在卡片中居中 */
}

.el-link {
  font-size: 1rem;
  text-align: center;
}
.github-container {
  margin-top: 15px; /* 与诗句间距 */
  display: flex;
  justify-content: center;
}
.github-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  color: #ff6b9d !important;
  transition: all 0.3s ease;
}


.github-icon {
  width: 20px;
  height: 20px;
  fill: #ff6b9d; /* 图标颜色与文字一致 */
}

.github-text:hover {
  color: #e84393 !important; /* 深粉色悬停效果 */
  transform: translateY(-1px);
  text-shadow: 0 1px 2px rgba(255, 182, 193, 0.3);
}







/*main区背景设置*/
.el-main {
  background-image: url('@/assets/photo/img.png'); /* 替换为你的图片链接 */
  background-repeat: no-repeat; /* 防止背景图片重复 */
  background-attachment: scroll;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  position: relative;

  /* 基础：内容驱动高度 */
  min-height: 70vh;
  max-height: 120vh;
  padding-bottom: 30vh;
  /* 背景图定位优化 */
  background-position: center 25%;

  /* 内容保护机制 */
  padding-bottom: 30vh;
  box-sizing: border-box;

  overflow: hidden;
}

.el-background::before {
  /* 樱花飘落效果（伪元素实现）文章背景 */
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="%23ff9ac8" d="M50 0c8 0 15 5 18 12 3-7 10-12 18-12 11 0 20 9 20 20 0 8-5 15-12 18 7 3 12 10 12 18 0 11-9 20-20 20-8 0-15-5-18-12-3 7-10 12-18 12-11 0-20-9-20-20 0-8 5-15 12-18-7-3-12-10-12-18 0-11 9-20 20-20z"/></svg>');
  opacity: 0.15;
  pointer-events: none;
  animation: sakura-fall 20s linear infinite;
}
.long-background {
  /*文章背景主要配色实现*/
  background: linear-gradient(
      135deg,
      rgba(255, 240, 245, 0.8) 0%,  /* 浅粉白 */
      rgba(255, 230, 240, 0.9) 50%, /* 中等粉 */
      rgba(255, 218, 236, 1) 100%   /* 樱花粉 */
  );
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
}
@keyframes sakura-fall {
  0% { transform: translateY(-100px) rotate(0deg); }
  100% { transform: translateY(100vh) rotate(360deg); }
}




/*卡片设计*/


.cards-container {
  display: flex;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.project-card {
  flex: 1 1 300px; /* 让卡片能够自适应空间并有最小宽度 */
  max-width: 300px; /* 最大宽度 */
  min-width: 250px; /* 最小宽度，防止过小 */
  padding: 0;
  box-sizing: border-box;
}

h1 {
  justify-content: left;
  font-size: 1.1rem;
  padding-top: 20px;
  padding-left: 20px;
}

.project {
  display: flex;
  justify-content: left;
  font-size: 0.9rem;
  color: #808080;
  padding-left: 20px;
}

.header {
  display: flex;
  justify-content: space-between; /* 让标题和按钮分散 */
  align-items: center; /* 垂直居中对齐 */
}




/*按钮设计*/
.button-container {
  padding-top: 35px;
  padding-right: 35px;
  display: flex;
  gap: 10px; /* 按钮之间的间距 */
}
.el-button:first-child {
  background-color: white !important;
  border-color: #ffcce6 !important; /* 浅粉色边框 */
  color: #666 !important; /* 文字深灰色保持可读性 */
}
/* 已完成按钮 - 浅粉色 */
.el-button:nth-child(2) {
  background-color: #ffd6e7 !important; /* 浅粉色 */
  border-color: #ffd6e7 !important;
  color: white !important;
}
.el-button:last-child {
  background-color: #ff9ac8 !important; /* 标准粉色 */
  border-color: #ff9ac8 !important;
  color: white !important;
}
/* 悬停效果增强 */
.el-button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(255, 155, 200, 0.3);
}
</style>

<script setup lang="js">
//图片部分
import { Search } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import {RouterView,RouterLink} from "vue-router";
import { watch } from 'vue';



const avatarImg = new URL('@/assets/photo/img_1.png', import.meta.url).href

const searchText = ref('')
//进度条部分
import { ref, onMounted, onUnmounted } from 'vue'
import Person from "@/view/person.vue";


const scrollPercentage = ref(0)
const format = (percentage) => (percentage === 100 ? '' : '')

const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollPercentage.value = Math.round((scrollTop / scrollHeight) * 100)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})


//路由部分
const route = useRoute()
const router = useRouter()

const activeTab = ref(route.name)


watch(() => route.name, (newVal) => {
  activeTab.value = newVal
}, { immediate: true })

// 处理标签点击
const handleTabClick = (tab) => {
  router.push({ name: tab.props.name})
}

</script>