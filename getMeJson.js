var myapp=angular.module("myapp",[]);


myapp.filter("myfilter",function()
{
    return function(input,option)
    {

 /*        if(isNaN(option)||(option==""))
        {
            return input;
        }
        else {
*/
          console.log(input); 

          if(option=='rupees'){
              return "₹ "+parseFloat(input);
          }
          else{
            return "\$"+parseFloat(input)/ 64;
          }
          
        
    }
    //}
})

myapp.controller("myctrl",function($scope,$http)
{

    $http.get("https://rajesh-ss.github.io/json/demo1.json")
    .success(function(response)
    {
      //console.log("got the response");
        $scope.data=response;
        
        console.log(response.length);
  

        $scope.filterDropDown = [
          {"option":"Brand"},
          {"option":"model"},
          {"option":"year"}
        ]
    
        $scope.filterDisplay = [
          {"option":"1"},
          {"option":"2"},
          {"option":"3"}
        ]

/*         for(let i=0; i<response.length;i++){
          $scope.brand[0] =
            $scope.brand[0]+={"option":response[i].Brand};

        }

        console.log(response[0].Brand); */
    
        $scope.brand =[
          {"option":"abc"},
          {"option":"bcd"},
          {"option":"cde"}
        ]
    
        $scope.model =[
          {"option":"alto"},
          {"option":"xyz"},
          {"option":"swift"}
        ]
    
        $scope.year =[
          {"option":"2004"},
          {"option":"2007"},
          {"option":"2008"}
        ]

        $scope.currency = [
          {"option": "rupees"},
          {"option": "dollars"}
        ]
    }); 

    

});