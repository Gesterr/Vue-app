new Vue({
	el:"#app",
	data:{
		sortActive:false,
		name:'',//Данный объект отвечает за значение в input name
		secondName:'',//Данный объект отвечает за значение в input Secondname
		email:'',//Данный объект отвечает за значение в input Emails
		names:[
			{namess: 'Никита', secondNames:'Шакирзянов',emails:'Mss@g,as/ru',id:0},
			{namess: 'Антон', secondNames:'Мельников',emails:'Msxzvs@g,as/ru',id:1},
		]
	},
	methods:{//Крч. Получаем значение из input'ов и добавляем в массив под разными названиями
		addName(){
			this.names.push({
				namess: this.name,
				secondNames: this.secondName,
				emails: this.email,
				id: new Date().valueOf()
			}),
			this.name = '',//Очищаем input'ы
			this.secondName = '',
			this.email = ''
		},
		deleteName(i){
			this.names.splice(i,1)
		}
	},
	computed: {
    sortedUsers() {
      return [...this.names].sort((a, b) => a.namess.localeCompare(b.namess));
    },
  },
});