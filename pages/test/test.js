// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopCar: [
      { isSelected: false, name: "华为", price: 10, num: 1 },
      { isSelected: false, name: "小米", price: 20, num: 2 },
      { isSelected: false, name: "苹果", price: 30, num: 3 },
      { isSelected: false, name: "香蕉", price: 30, num: 3 },
      { isSelected: false, name: "菠萝", price: 30, num: 3 }
    ],

    total:0,
    isAllChecked: false //判断checkbox是否选中
  },

  

// 删除数据
del(e){
// console.log(e);
const {index} = e.currentTarget.dataset;
// console.log(index);
console.log(this.data.shopCar);

 
// this.shopCar.splice(index, 1);
this.data.shopCar.splice(index,1)

// console.log(this.data.shopCar);

 this.setData({shopCar:this.data.shopCar})

 this.getTotal()

}, 

//增减
changeNum(e){
  const {index,num} = e.currentTarget.dataset;

 this.data.shopCar[index].num+=num;

 this.setData({shopCar:this.data.shopCar})

 this.getTotal()

   
},

// 总价的计算
getTotal(){
  let total=0;

  this.data.shopCar.map(v=>{
    total+=v.price*v.num
  })

  this.setData({total})
}


 


})