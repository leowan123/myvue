import router from './router'
import { getStore } from '@/utils/store'
import store from './store'
import { Notify } from 'vant'

const whiteList = ['/login','/Register', '/health-activity','/Forget', '/writeCode', '/resetPsd'] // no redirect whitelist
// router.beforeEach(async(to, from, next) => {
//   // console.log(to);
//   const hasToken = getStore('token')
//   document.title = to.meta.title === undefined ? '健康活动' : to.meta.title

//   if (hasToken) {
//     const hasUserInfo = store.getters.uid
//     if (hasUserInfo) {
//       next()
//     } else {
//       try {
//         const userInfo = await store.dispatch('user/getUserInfo')
//         // console.log(userInfo)
//         if (userInfo.base) {
//           next()
//         } else {
//           next('/guide')
//         }
//         // next({ ...to, replace: true })
//       } catch (error) {
//         await store.dispatch('user/resetToken')
//         Notify({
//           message: error || 'error',
//           type: 'danger',
//           duration: 5 * 1000
//         })
//         next('/login')
//       }
//     }
//   } else {
//     /* has no token*/
//     if (whiteList.indexOf(to.path) !== -1) {
//       // in the free login whitelist, go directly
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })
