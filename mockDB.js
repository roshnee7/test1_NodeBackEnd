

var userdb = [
	{
		userid: 1,
		username: 'ram',
		password: 'ram123'
	},
	{
		userid: 2,
		username: 'shyam',
		password: 'shyam123'
	}
];

var foodItemArr = [
	{
		foodItemId: 1,
		foodName: 'Burger',
		price: 60,
		url: 'https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg'
	},
	{
		foodItemId: 2,
		foodName: 'Pizza',
		price: 300,
		url: 'https://www.pngkit.com/png/detail/830-8301255_whooppeezz-new-year-pizza-ad.png'
	},
	{
		foodItemId: 3,
		foodName: 'Biryani',
		price: 250,
		url: 'https://img.etimg.com/thumb/msid-70476197,width-1200,height-900,imgsize-696197,overlay-etrise/photo.jpg'
	},
	{
		foodItemId: 4,
		foodName: 'Kababs',
		price: 80,
		url: 'https://theurbantandoor.com/wp-content/uploads/2019/07/kebab.jpg'
	},
	{
		foodItemId: 5,
		foodName: 'Shawarma',
		price: 120,
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpA7AwT4JqXiNwtP_cDV_icWIwVnu_4eYsJdnzFrnSgVwd9pGv&s'
	}
]

var Orders =[
	{
		orderId:1, 
		userId:1, 
		items: [
			{foodItemId: 1, quantity:3},
			{foodItemId: 3, quantity:2}
		],
		totalPrice: 240
	},
	{
		orderId:2, 
		userId:2, 
		items: [
			{foodItemId: 1, quantity:4}
		],
		totalPrice: 480
	}
]



function getUser(username) {
	var userDetails = null;
	userdb.map((user) => {
		if(user.username === username)
		{
			userDetails = user;
		}
	});
	return userDetails;
}

function getFoodItems(){
	var foodItems = foodItemArr;
	return foodItems;
}

function getFoodItem(id){
	var foodDetails = null;
	foodItemArr.map((food)=>{
		if(food.foodItemId == id){
			foodDetails = food;
		}
	});
	return foodDetails
}

function getUser(username) {
	var userDetails = null;
	userdb.map((user) => {
		if(user.username === username)
		{
			userDetails = user;
		}
	});
	return userDetails;
}

function getOrder(userId){
	var orderDtails = [];
	Orders.map((order)=>{
		if(order.userId == userId){
			orderDtails.push(order);
		}
	});
	orderDtails.map((order)=>{
		order.items.map((item) =>{
			foodItemArr.map((food)=>{
				if(item.foodItemId == food.foodItemId){
					item.foodName = food.foodName;
					item.price = food.price;
				}
			})

		})
	})


	return orderDtails
}

function addOrder(data){
  var orderId = Orders.length;
  data.orderId = orderId;
  Orders.push(data);
}


module.exports = {
	getUser,getFoodItems, getFoodItem, getOrder, addOrder
}