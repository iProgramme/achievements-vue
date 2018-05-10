import Vue from 'vue'
import Router from 'vue-router'
import page1 from '../pages/page1/page1.vue'
import page4 from '../pages/page4/page4.vue'
import filialeTask from '../pages/filialeTask/filialeTask.vue'
import filialeTaskDetail from '../pages/filialeTaskDetail/filialeTaskDetail.vue'
import personTask from '../pages/personTask/personTask.vue'
import personTaskDetail from '../pages/personTaskDetail/personTaskDetail.vue'
import judgeManageFiliale from '../pages/judgeManageFiliale/judgeManageFiliale.vue'
import launchJudgeFiliale from '../pages/launchJudgeFiliale/launchJudgeFiliale.vue'
import judgeDetailFiliale from '../pages/judgeDetailFiliale/judgeDetailFiliale.vue'
import judgeFiliale from '../pages/judgeFiliale/judgeFiliale.vue'
import judgeManagePerson from '../pages/judgeManagePerson/judgeManagePerson.vue'
import launchJudgePerson from '../pages/launchJudgePerson/launchJudgePerson.vue'
import judgePersonDetail from '../pages/judgePersonDetail/judgePersonDetail.vue'
import selfJudgePerson from '../pages/selfJudgePerson/selfJudgePerson.vue'
import judgePerson from '../pages/judgePerson/judgePerson.vue'
import indexDefinition from '../pages/indexDefinition/indexDefinition.vue'
import indexExpression from '../pages/indexExpression/indexExpression.vue'
import judgeMethod from '../pages/judgeMethod/judgeMethod.vue'
import judgeDimension from '../pages/judgeDimension/judgeDimension.vue'
import judgeDetail from '../pages/judgeDetail/judgeDetail.vue'
import filialeJudgeManage from '../pages/filialeJudgeManage/filialeJudgeManage.vue'
import filialeJudgeAdd from '../pages/filialeJudgeAdd/filialeJudgeAdd.vue'
import filialeJudgeDetail from '../pages/filialeJudgeDetail/filialeJudgeDetail.vue'
import personJudgeManage from '../pages/personJudgeManage/personJudgeManage.vue'
import personJudgeAdd from '../pages/personJudgeAdd/personJudgeAdd.vue'
import personJudgeDetail from '../pages/personJudgeDetail/personJudgeDetail.vue'
import filialeVerifyManage from '../pages/filialeVerifyManage/filialeVerifyManage.vue'
import filialeToVerifyDetail from '../pages/filialeToVerifyDetail/filialeToVerifyDetail.vue'
import filialeVerified from '../pages/filialeVerified/filialeVerified.vue'
import filialeVerifiedDetail from '../pages/filialeVerifiedDetail/filialeVerifiedDetail.vue'
import personVerifyManage from '../pages/personVerifyManage/personVerifyManage.vue'
import personToVerifyDetail from '../pages/personToVerifyDetail/personToVerifyDetail.vue'
import personVerified from '../pages/personVerified/personVerified.vue'
import personVerifiedDetail from '../pages/personVerifiedDetail/personVerifiedDetail.vue'

import notfind from '../pages/notfind/notfind'
import dashboard from '../pages/dashboard/dashboard'
import login from '../pages/login/login'
import pages from '../pages/pages'

Vue.use(Router)

// 路由完全配置，在pages.vue里面获取后台给的地址
export default new Router({
  routes: [
    
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/',
        component: pages,
        children:[
        {
            path: '/dashboard',
            name: 'dashboard',
            component: dashboard
        },
        {
            // 分公司任务分发管理
            path: '/filialeTask',
            name: ' filialeTask',
            component: filialeTask
        },
        {
            // 分公司任务分发管理-详情
            path: '/filialeTaskDetail',
            name: 'filialeTaskDetail',
            component:  filialeTaskDetail
        },
        {
            // 个人任务分发管理
            path: '/personTask',
            name: 'personTask',
            component: personTask
        },
        {
            // 个人任务分发管理-详情
            path: '/personTaskDetail',
            name: 'personTaskDetail',
            component: personTaskDetail
        },
        {
            // 考核管理-分公司
            path: '/judgeManageFiliale',
            name: 'judgeManageFiliale',
            component: judgeManageFiliale
        },
        {
            // 发起考核-分公司
            path: '/launchJudgeFiliale',
            name: 'launchJudgeFiliale',
            component: launchJudgeFiliale
        },
        {
            // 考核详情-分公司
            path: '/judgeDetailFiliale',
            name: 'judgeDetailFiliale',
            component: judgeDetailFiliale
        },
        {
            // 考核-分公司
            path: '/judgeFiliale',
            name: 'judgeFiliale',
            component: judgeFiliale
        },
        {
            // 考核管理-个人
            path: '/judgeManagePerson',
            name: 'judgeManagePerson',
            component: judgeManagePerson
        },
        {
            // 发起考核-个人
            path: '/launchJudgePerson',
            name: 'launchJudgePerson',
            component: launchJudgePerson
        },
        {
            // 考核详情-个人
            path: '/judgePersonDetail',
            name: 'judgePersonDetail',
            component: judgePersonDetail
        },
        {
            // 自评-个人            
            path: '/selfJudgePerson',
            name: 'selfJudgePerson',
            component: selfJudgePerson
        },
        {
            // 考核-个人
            path: '/judgePerson',
            name: 'judgePerson',
            component: judgePerson
        },
        {
            // 指标定义维护
            path: '/indexDefinition',
            name: 'indexDefinition',
            component: indexDefinition
        },
        {
            // 指标公式维护
            path: '/indexExpression',
            name: 'indexExpression',
            component: indexExpression
        },
        {
            // 考核办法维护
            path: '/judgeMethod',
            name: 'judgeMethod',
            component: judgeMethod
        },
        {
            // 指标维度维护
            path: '/judgeDimension',
            name: 'judgeDimension',
            component: judgeDimension
        },
        {
            // 指标细项维护
            path: '/judgeDetail',
            name: 'judgeDetail',
            component: judgeDetail
        },
        {
            // 分公司考核方案管理
            path: '/filialeJudgeManage',
            name: 'filialeJudgeManage',
            component: filialeJudgeManage
        },
        {
            // 分公司考核方案 新增
            path: '/filialeJudgeAdd',
            name: 'filialeJudgeAdd',
            component: filialeJudgeAdd
        },
        {
            // 分公司考核方案 详情
            path: '/filialeJudgeDetail',
            name: 'filialeJudgeDetail',
            component: filialeJudgeDetail
        },
        {
            // 个人考核方案 管理
            path: '/personJudgeManage',
            name: 'personJudgeManage',
            component: personJudgeManage
        },
        {
            // 个人考核方案 新增
            path: '/personJudgeAdd',
            name: 'personJudgeAdd',
            component: personJudgeAdd
        },
        {
            // 个人考核方案 详情
            path: '/personJudgeDetail',
            name: 'personJudgeDetail',
            component: personJudgeDetail
        },
        {
            // 分公司考核方案审核管理
            path: '/filialeVerifyManage',
            name: 'filialeVerifyManage',
            component: filialeVerifyManage
        },
        {
            // 分公司考核方案待审核详情
            path: '/filialeToVerifyDetail',
            name: 'filialeToVerifyDetail',
            component: filialeToVerifyDetail
        },
        {
            // 分公司考核方案已审核
            path: '/filialeVerified',
            name: 'filialeVerified',
            component: filialeVerified
        },
        {
            // 分公司考核方案已审核详情
            path: '/filialeVerifiedDetail',
            name: 'filialeVerifiedDetail',
            component: filialeVerifiedDetail
        },
        {
            // 个人考核方案审核管理
            path: '/personVerifyManage',
            name: 'personVerifyManage',
            component: personVerifyManage
        },
        {
            // 个人考核方案待审核详情
            path: '/personToVerifyDetail',
            name: 'personToVerifyDetail',
            component: personToVerifyDetail
        },
        {
            // 个人考核方案已审核
            path: '/personVerified',
            name: 'personVerified',
            component: personVerified
        },
        {
            // 个人考核方案已审核详情
            path: '/personVerifiedDetail',
            name: 'personVerifiedDetail',
            component: personVerifiedDetail
        },
        {
            path: 'page1',
            name: 'page1',
            component: page1
        },
        {
            path: 'page4',
            name: 'page4',
            component:page4
        }
        
        ]
    },
    {
        path: '*',
        name: 'notfind',
        component: notfind
    }
    
  ]
})
