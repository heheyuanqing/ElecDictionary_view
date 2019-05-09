/**
 * 用来注册改变数据状态
 */

const mutations = {
  changeIsHaveSelWords(state,val){
    state.is_have_selWords = val
  },
  changeStuId(state,val){
    this.state.stuId = val
  },
  changeTestId(){
    this.state.testId = val
  },
  changeIsStartStu(state,val){
    state.is_start_stu = val
  },
  changeStuWord(state,arr){
    state.stuWords = arr
  },
  changeTestWord(state,arr){
    state.testWords = arr
  },
  changeSelWords(state,arr){
    state.selWords = arr
  },
  getRecommend(state,arr){
    state.recommend = arr
  }
}
 module.exports = mutations