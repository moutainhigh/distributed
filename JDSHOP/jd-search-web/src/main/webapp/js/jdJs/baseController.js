/*通用控制器*/
app.controller('baseController',function($scope){
	

	//刷新列表
	$scope.reloadList=function(){
		$scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
		//$scope.findPage($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
	}
	
	//分页控件配置currentPage:当前页   totalItems :总记录数  itemsPerPage:每页记录数  perPageOptions :分页选项  onChange:当页码变更后自动触发的方法 
	$scope.paginationConf = {
		currentPage: 1,
		totalItems: 10,
		itemsPerPage: 10,
		perPageOptions: [10, 20, 30, 40, 50],
		onChange: function(){
			$scope.reloadList();
		}
	};
	
	//创建一个数组
	$scope.selectIds=[];
	//更新复选框
	$scope.updateSelection = function($event,id){
		//如果勾选复选框就向数组添加id
		if($event.target.checked){
			$scope.selectIds.push(id);
		}else{
			//获取id下标并删除
			var i = $scope.selectIds.indexOf(id);
			$scope.selectIds.splice(i,1);
		}
	}
		
});
