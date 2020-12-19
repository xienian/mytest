
app.controller('itemController',function($scope){
/*
购买商品数量增删函数
*/
	$scope.addNum=function(x){
		$scope.num=$scope.num+x;
	
		if($scope.num<1){
			$scope.num=1;
		}
	}
	
/*商品规格选择小模块:开始*/
$scope.specificationItems={};

//选中规格方法：添加规格key-value
$scope.selectSpecification=function(name,value){
	$scope.specificationItems[name]=value;
	
	searchSku();//修改页面sku属性
	}
	
//对选中的规格进行标记
$scope.isSelected=function(name,value){
	if($scope.specificationItems[name]==value){
		return true;
	}else{
		return false;
		}
	}


/*商品规格选择小模块：结束*/

//加载sku：开始
$scope.loadSku=function(){
	$scope.sku=skuList[0];
	
	//深拷贝
	$scope.specificationItems=JSON.parse(JSON.stringify($scope.sku.spec));
	
	}

//加载sku：结束

//sku比较：开始
matchObject=function(map1,map2){
	
	for(var k in map1){
		if(map1[k]!=map2[k]){
			
			return false;
			}
		}
		for(var k in map2){
		if(map2[k]!=map1[k]){
			
			return false;
			}
		}
		
		return true;
	
	}
	
searchSku=function(){
	
	for(var i=0;i<skuList.length;i++){
		
		if(matchObject(skuList[i].spec,$scope.specificationItems)){
			$scope.sku=skuList[i];
			return ;//匹配成功，修改了数据，就不要比较后面的数据了
			}
		}
		
	$scope.sku={id:0,title:'--------',price:0};//如果选择的规格不是商品的sku，那么特殊显示标题价格
	}
//sku比较：结束

//添加商品到购物车：开始
	//添加商品到购物车
	$scope.addToCart=function(){
		alert('skuid:'+$scope.sku.id);				
	}

//添加商品到购物车：结束




});