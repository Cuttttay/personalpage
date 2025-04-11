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

      <h1>标签：影音书分享</h1>
      <!-- 可以复用你的卡片组件等 -->
      <div class="white-background">
        <h3>目前已有一篇！</h3>
        <div class="cards-container">
          <a href="http://sakura.sakuraharuka.top/archives/zhai-men-yue-du-yo">
            <el-card class="project-card">
              <template #header>《情迷翡冷翠》“亲爱的，这就是人生啊——人生就是一场冒险”</template>
              <img
                  src="@/assets/photo/img_2.png"
                  alt="Image"
                  class="project-image"
              />
              <p class="project-description">25 热度 | 0 条评论</p>
            </el-card>
          </a>
        </div>
      </div>

  <div class="long-background">
    <div class="el-background">
    </div>
  </div>
</template>

<script setup>

import {Search} from "@element-plus/icons-vue";
import { useRoute, useRouter } from 'vue-router'
import { watch } from 'vue';


const avatarImg = new URL('@/assets/photo/img_1.png', import.meta.url).href

const searchText = ref('')
//进度条部分
import { ref, onMounted, onUnmounted } from 'vue'


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

<style scoped>
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
  z-index: 1001;
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
  background: linear-gradient(
      135deg,
      rgba(255, 240, 245, 0.8) 0%,  /* 浅粉白 */
      rgba(255, 230, 240, 0.9) 50%, /* 中等粉 */
      rgba(255, 218, 236, 1) 100%   /* 樱花粉 */
  );
  background-attachment: fixed;
  position: fixed;  /* 使用固定定位 */
  top: 0;  /* 从页面顶部开始 */
  left: 0;
  right: 0;
  bottom: 0;  /* 占满整个屏幕 */
  z-index: -1; /* 确保它在其他内容下 */
}

@keyframes sakura-fall {
  0% { transform: translateY(-100px) rotate(0deg); }
  100% { transform: translateY(100vh) rotate(360deg); }
}

/*主要内容CSS*/
h1{
  text-align: center;
  padding-top: 120px;
  margin: 0;
  color: dimgrey;
  font-size: 1.5rem;
}
.white-background {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  width: 80%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  height: calc(100vh - 80px);
}

h3{
  text-align: center;
  padding-top: 30px;
  margin: 0;
  color: dimgrey;
  font-size: 1rem;
}



/*卡片样式*/
.cards-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

/* 卡片样式 */
.project-card {
  flex: 1 1 300px;
  max-width: 300px;
  min-width: 250px;
  margin: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  overflow: hidden; /* 确保图片不会溢出 */
  position: relative;
}

.project-card img {
  width: 100%;
  height: auto; /* 保持图片比例 */
  object-fit: cover; /* 确保图片填充容器 */
}

.project-card .el-card__header {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.project-description {
  text-align: center;
  font-size: 0.9rem;
  color: #777;
  margin-top: 10px;
}

.project-card a {
  text-decoration: none;
  color: inherit;
}
</style>