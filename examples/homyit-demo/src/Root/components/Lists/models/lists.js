import dva from 'dva';

export default {
	namespace: 'lists',
	state: {
		cont: {id:1, pid:1},
		findContent: 18,
		contId: { },
		nav: [
		    { key: 1, name: '首页', id: 1 ,pid: 0, isOpen: "none"},
		    { key: 2, name: '宏奕简介', id: 2 ,pid: 0, isOpen: "none"},
		    { key: 3, name: '宏奕生活', id: 3 ,pid: 0, isOpen: "none"},
			{ key: 4, name: '项目案例', id: 4 ,pid: 0, isOpen: "none"},
		    { key: 5, name: '宏奕成员', id: 5 ,pid: 0, isOpen: "none"},
		    { key: 6, name: '开发培训', id: 6 ,pid: 3, isOpen: "none"},
		    { key: 7, name: '商业项目', id: 7 ,pid: 3, isOpen: "none"},
		    { key: 8, name: '技术沙龙', id: 8 ,pid: 3, isOpen: "none"},
		    { key: 9, name: '业余生活', id: 9 ,pid: 3, isOpen: "none"},
		    { key: 10, name: '门户网站', id: 10 ,pid: 4, isOpen: "none"},
		    { key: 11, name: '办公管理系统', id: 11 ,pid: 4, isOpen: "none"},
		    { key: 12, name: '电子商务', id: 12 ,pid: 4, isOpen: "none"},
		    { key: 13, name: '2012届', id: 13 ,pid: 5, isOpen: "none"},
		    { key: 14, name: '2013届', id: 14 ,pid: 5, isOpen: "none"},
		    { key: 15, name: '2014届', id: 15 ,pid: 5, isOpen: "none"},
		    { key: 16, name: '2015届', id: 16 ,pid: 5, isOpen: "none"},
		    { key: 17, name: '2016届', id: 17 ,pid: 5, isOpen: "none"},    
		    { key: 18, name: '宏奕简介', id: 18 ,pid: 2, isOpen: "none"},    
		],
		list:[
			{ id:18, list:[{id:'1', name:'宏奕简介'}]},
			{ id:6, list:[{id:'1', name:'第一期培训'},{id:'2', name:'第二期培训'},{id:'3', name:'第三期培训'},]},
			{ id:7, list:[{id:'1', name:'江西易吃网'},{id:'2', name:'昊讯快递'},{id:'3', name:'江西水利工程'},]},
			{ id:8, list:[{id:'1', name:'沙龙分享'},{id:'2', name:'沙龙分享2'},{id:'3', name:'沙龙分享3'},]},
			{ id:9, list:[{id:'1', name:'业余'},{id:'2', name:'生活'},{id:'3', name:'业余生活'},]},
			{ id:10, list:[{id:'1', name:'国教学院'},{id:'2', name:'江西师范大学招生就业网'},{id:'3', name:'江西省物流与供应链信息平台'},]},
			{ id:11, list:[{id:'1', name:'江西师范大学学生工作综合办公平台'},{id:'2', name:'江西省五河治理项目建设管理系统'},]},
			{ id:12, list:[{id:'1', name:'九江易吃网上订餐平台'},]},
			{ id:13, list:[{id:'1', name:'12-王宏凯'},{id:'2', name:'12-高玉花'},{id:'3', name:'12-罗凤丹'},{id:'4', name:'12-刘亮'},{id:'5', name:'12-吕金秀'},{id:'6', name:'12-陈浩宇'},{id:'7', name:'12-刘少宇'}]},
			{ id:14, list:[{id:'1', name:'13-张敏'},{id:'2', name:'13-周舒雅'},{id:'3', name:'13-谢志强'},{id:'4', name:'13-施佳航'}]},
			{ id:15, list:[{id:'1', name:'14-秦文芳'},{id:'2', name:'14-向恢进'},{id:'3', name:'14-熊梦颖'},{id:'4', name:'14-林金章'},{id:'5', name:'14-于龙栋'},{id:'6', name:'14-彭双喜'}]},
			{ id:16, list:[{id:'1', name:'15-'},{id:'2', name:'15-'},{id:'3', name:'15-'},{id:'4', name:'15-'},{id:'5', name:'15-'},{id:'6', name:'15-'}]},
			{ id:17, list:[{id:'1', name:'16-'},{id:'2', name:'16-'},{id:'3', name:'16-'},{id:'4', name:'16-'},{id:'5', name:'16-'},{id:'6', name:'16-'}]},
			
		],
		content:[
			{key:1, id: 18, pid: 1, cont: [
								{cid:'1', title: '组织架构', cont:'组织架构组织架构组织架构组织架构'},
								{cid:'2', title: '组织架构', cont:'组织架构组织架构组织架构组织架构'},
								{cid:'3', title: '组织架构', cont:'组织架构组织架构组织架构组织架构'},
								]
			},
			{key:2, id: 6, pid: 1, cont: [
								{cid:'1', title: '培训', cont:'第一期培训'},
								]
			},
			{key:3, id: 6, pid: 2, cont: [
								{cid:'1', title: '培训', cont:'第二期培训'},
								]
			},
			{key:4, id: 7, pid: 1, cont: [
								{cid:'1', title: '快递', cont:'昊讯快递'},
								{cid:'2', title: '组织架构', cont:'组织架构组织架构组织架构组织架构'},
								{cid:'3', title: '组织架构', cont:'组织架构组织架构组织架构组织架构'},
								]
			},
			{key:5, id: 8, pid: 1, cont: [
								{cid:'1', title: '技术沙龙', cont:'技术沙龙'},
								]
			},
			{key:6, id: 9, pid: 1, cont: [
								{cid:'1', title: '业余生活', cont:'组织架构组织架构组织架构组织架构'},
								{cid:'2', title: '组织架构', cont:'组织架构组织架构组织架构组织架构'},
								{cid:'3', title: '组织架构', cont:'组织架构组织架构组织架构组织架构'},
								]
			},
			{key:7, id: 10, pid: 1, cont: [
								{cid:'1', title: '项目介绍', cont:'项目介绍国教学院'},
								{cid:'2', title: '项目架构', cont:'组织架构组织架构组织架构组织架构'},
								{cid:'3', title: '项目地址', cont:'组织架构组织架构组织架构组织架构'},
								]
			},
			{key:8, id: 10, pid: 2, cont: [
								{cid:'1', title: '项目名称', cont:'就业网'},
								{cid:'2', title: '项目架构', cont:'组织架构组织架构组织架构组织架构'},
								{cid:'3', title: '项目地址', cont:'组织架构组织架构组织架构组织架构'},
								]
			},
			{key:9, id: 11, pid: 2, cont: [
								{cid:'1', title: '项目名称', cont:'江西省五河治理项目建设管理系统'},
								{cid:'2', title: '项目架构', cont:'组织架构组织架构组织架构组织架构'},
								{cid:'3', title: '项目地址', cont:'组织架构组织架构组织架构组织架构'},
								]
			},
			{key:10, id: 13, pid: 1, cont: [
								{cid:'1', title: '个人信息', cont:'12-王宏凯'},
								{cid:'2', title: '个人评价', cont:'组织架构组织架构组织架构组织架构'},
								{cid:'3', title: '专业技能', cont:'组织架构组织架构组织架构组织架构'},
								{cid:'4', title: '实习经历', cont:'组织架构组织架构组织架构组织架构'},
								{cid:'5', title: '我的团队', cont:'组织架构组织架构组织架构组织架构'},
								]
			},
			{key:11, id: 13, pid: 2, cont: [
								{cid:'1', title: '个人信息', cont:'12-'},
								{cid:'2', title: '个人评价', cont:'组织架构组织架构组织架构组织架构'},
								{cid:'3', title: '专业技能', cont:'组织架构组织架构组织架构组织架构'},
								{cid:'4', title: '实习经历', cont:'组织架构组织架构组织架构组织架构'},
								{cid:'5', title: '我的团队', cont:'组织架构组织架构组织架构组织架构'},
								]
			},
			{key:12, id: 14, pid: 1, cont: [
								{cid:'1', title: '个人信息', cont:'13-'},
								{cid:'2', title: '个人评价', cont:'组织架构组织架构组织架构组织架构'},
								{cid:'3', title: '专业技能', cont:'组织架构组织架构组织架构组织架构'},
								{cid:'4', title: '实习经历', cont:'组织架构组织架构组织架构组织架构'},
								{cid:'5', title: '我的团队', cont:'组织架构组织架构组织架构组织架构'},
								]
			},
		]
	},
	reducers: {
		'changeDisplay'(state, {payload: item}) {
			const {nav} = state;
			nav.forEach((vo)=>{
				if (vo.pid == 0 && vo.id == item.id) {
					vo.isOpen = vo.isOpen=="block" ? "none" : "block";
					nav.forEach((v)=>{
						if (v.pid == 0 && v.id != item.id) {
							v.isOpen = "none";
						}
					})
				}
			})
			return{
				...state,
			}
		},

		'changeContent'(state,{payload: it}){
			const {list} = state;
			const {cont} = state;
			cont.id = 1;
			let findContent = list.filter(item => item.id == it.id)[0].id;

			return {
				...state,
				findContent,
			}
		},

		'handleContent'(state,{payload: conts}){
			const {item, findContent} = conts;
			const {content} = state;
			const {cont} = state;
			cont.id = 2;
			let contId;
			// console.log(item);
			content.map(function(it) {
				if (it.id == findContent && it.pid == item) {
					contId = it;
				}
			})

			return {
				...state,
				contId,
				findContent
			}
		}
	}
};
