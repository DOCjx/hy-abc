import dva from 'dva';

export default {
  namespace: 'members',
  state: {
    gradeNow: 12,
    peoples: [
    {
        grade:12,
        title: "12级成员",
        gradeMembers:[
          { key: 1, name: '王宏凯',url:''},
          { key: 2, name: '刘亮',url:''},
          { key: 3, name: '陈浩宇',url:''},
          { key: 4, name: '刘少宇',url:''},
          { key: 5, name: '高玉花',url:''},
          { key: 6, name: '罗凤丹',url:''},
          { key: 7, name: '吕金秀',url:''},
        ]
      },
      {
        grade: 13,
        title: "13级成员",
        gradeMembers: [
          { key: 1, name: '张敏',url:''},
          { key: 2, name: '周舒雅',url:''},
          { key: 3, name: '施佳航',url:''},
          { key: 4, name: '林嘉桦',url:''},
          { key: 5, name: '谢志强',url:''},
        ]
      },
      {
        grade: 14,
        title: "14级成员",
        gradeMembers: [
          { key: 1, name: '向恢进',url:''},
          { key: 2, name: '林金章',url:''},
          { key: 3, name: '于龙栋',url:''},
          { key: 4, name: '彭双喜',url:''},
          { key: 5, name: '熊梦颖',url:''},
          { key: 6, name: '秦文芳',url:''},
        ]
      },
      {
        grade: 15,
        title: "15级成员",
        gradeMembers: [
          { key: 1, name: '温隆强',url:''},
          { key: 2, name: '彭宸',url:''},
          { key: 3, name: '黄健凯',url:''},
          { key: 4, name: '张昊',url:''},
          { key: 5, name: '李亮',url:''},
          { key: 6, name: '沈剑伟',url:''},
          { key: 7, name: '程佳俊',url:''},
          { key: 8, name: '张晨烨',url:''},
          { key: 9, name: '姜敏',url:''},
          { key: 10, name: '胡悦',url:''},
          
        ]
      },
      {
        grade: 16,
        title: "16级成员",
        gradeMembers: [
          { key: 1, name: '龚方伟',url:''},
          { key: 2, name: '邢文鹏',url:''},
          { key: 3, name: '朱国根',url:''},
          { key: 4, name: '徐凯',url:''},
          { key: 5, name: '罗明钏',url:''},
          { key: 6, name: '李如歌',url:''},
        ]
      },
    ]
  },
  reducers: {
    changeMembers(state, {payload: gradeNow}){
      // console.log(gradeNow)

      return {
        ...state,
        gradeNow
      }
    }
  }
};