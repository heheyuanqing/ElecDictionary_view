/** 
 * 基于用户的协同过滤算法（适用于用户比项目少的情况）
 * 例如：A收藏1，2，3；B收藏1；则A与B有相似的收藏单词，所以向B推荐2，3
 * 1.计算用户之间的相似度 --AB相同的收藏单词数/根号A的单词数*B的单词数
 * 2.计算用户对单词的兴趣度  --AB的相似度*B对目标单词的兴趣度（0/1）
 * 
*/
const recommend = (usr_a,usr_b) => {
  
}

module.exports = recommend