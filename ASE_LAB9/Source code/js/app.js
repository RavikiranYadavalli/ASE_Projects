var app = angular.module("myApp", []);
function augment( receivingClass, givingClass ) {
    // only provide certain methods
    if ( arguments[2] ) {
        for ( var i = 2, len = arguments.length; i < len; i++ ) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    // provide all methods
    else {
        for ( var methodName in givingClass.prototype ) {
            // check to make sure the receiving class doesn't
            // have a method of the same name as the one currently
            // being processed
            if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }

            // Alternatively (check prototype chain as well):
            // if ( !receivingClass.prototype[methodName] ) {
            //      receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            // }
        }
    }
}

var Mixin  = function() {}
Mixin.prototype = {
    postMethod: function(){
        console.log( "Inside http POST")
    },
    putMethod: function(){
        console.log( "Inside http PUT" );
    },
    deleteMethod: function(){
        console.log( "Inside http DELETE" );
    },
    getMethod: function(){
        console.log( "Inside http GET" );
    }
};

// A skeleton carAnimator constructor
function Inside() {
    //this.inside = function(){
    // console.log( "move left" );
    // };
}

// A skeleton personAnimator constructor


augment(Inside, Mixin);

var inside = new Inside();

app.controller("RegisterController", function ($scope, $http, $httpParamSerializerJQLike) {

    $scope.pageClass = 'register';
    $scope.visible=true;
    $scope.srcc='UpdateUser.html';
$scope.register=function(username,lastname,emailid,reemailid,password) {

    if(angular.equals(emailid,reemailid))
    {inside.postMethod();
       $scope.checked=true; 
        $scope.msg ="";
        console.log("inside register function");
$http({
    method: 'POST',
    url : 'https://api.mongolab.com/api/1/databases/lab7/collections/users?apiKey=-7Ov9M4e5lWHPyfY0lzFSqhDxN5A_PRX',
    data: JSON.stringify({
                username: username,
                lastname:lastname,
                emailid: emailid,
                password: password,
                
            }),
    contentType: "application/json"
}).success(function() {


    $scope.username ="";
    $scope.lastname ="";
    $scope.password ="";
    $scope.emailid ="";
    $scope.reemailid ="";
    
    $scope.checked=false;
    $scope.msg ="User created successfully";
    
    alert("Registration Success");
    
    
        })
    
        

   
}
    else{
        $scope.emailid ="";
        $scope.reemailid ="";
   $scope.checked=false;
    $scope.msg ="Emaild-id doesnot match";}
}

$scope.login = function(username,password) {
    inside.getMethod();
   //console.log("inside detail function");
   //alert('hie');
    
$http({
    method: 'GET',
    url : 'https://api.mongolab.com/api/1/databases/lab7/collections/users?apiKey=-7Ov9M4e5lWHPyfY0lzFSqhDxN5A_PRX',
}).success(function(jsonDetails) {

		//alert('hie');
	var obj=angular.fromJson(jsonDetails);
	
//alert(obj[0]._id.$oid);
	//alert(angular.equals(a,a));
	for (var i = 0; i < obj.length; i++) {
		
		//alert(obj[i].name);
		//alert(userName);
		if(angular.equals(obj[i].username,username))
		{
					//alert('hie');
            if(angular.equals(obj[i].password,password))
		      {
                  $scope.checked=true;
                  $scope.msg="";
                  //alert('login correct');
                  localStorage.setItem("username",obj[i].username);
                 
                  localStorage.setItem("password",obj[i].password);
                  localStorage.setItem("emailid",obj[i].emailid);
                      localStorage.setItem("lastname",obj[i].lastname);
                  localStorage.setItem("id_user",obj[i]._id.$oid);
					window.location.href='homePage.html';

		      }

		}
        else
        {
            
        }
        
		
	//alert(obj[i].name);
}
    $scope.checked=false;
            $scope.msg="UserName / Password is incorrect";
	
	
	
    /*$scope.userName1 =obj.name;
    $scope.password1 =obj.password;
    $scope.email1 =obj.email;*/
    
    
        })
}

$scope.edit=function(username,username1) {
   
      $http({
    method: 'PUT',
    url : 'https://api.mongolab.com/api/1/databases/lab7/collections/users?apiKey=-7Ov9M4e5lWHPyfY0lzFSqhDxN5A_PRX',
}).success(function(jsonDetails) {

		//alert('hie');
	var obj=angular.fromJson(jsonDetails);
	
//alert(obj[0].username);
	//alert(angular.equals(a,a));
	for (var i = 0; i < obj.length; i++) {
		
		//alert(obj[i].name);
		//alert(userName);
		if(angular.equals(obj[i].username,"Nihar"))
		{
            
					//alert('hie');
            obj[i].username=username1;
            alert('hie');
            break;
            

		}
        else
        {
            
        }
        
		
	//alert(obj[i].name);
}
    
        })
    
    
}

$scope.updateuser = function() {
   //alert('hie');
    $scope.srcc='UpdateUser.html';
}
$scope.deleteuser = function() {
   //alert('hie');
    $scope.srcc='DeleteUser.html';
}
$scope.api_views = function() {
   //alert('hie');
    $scope.srcc='mashup.html';
}


$scope.updateuser1 = function(new_user_name,new_last_name,new_password,new_emailid) {
   //alert('hie');
    inside.putMethod();
var id =localStorage.getItem("id_user");
      // alert(id);
    
    $http({
    method: 'PUT',
    url : 'https://api.mongolab.com/api/1/databases/lab7/collections/users/'+id+'?apiKey=-7Ov9M4e5lWHPyfY0lzFSqhDxN5A_PRX',
    data: JSON.stringify({
                "username": new_user_name,
                "password": new_password,
                "lastname": new_last_name,
                "emailid" : new_emailid
                
            }),
    contentType: "application/json"
}).success(function() {

    alert('success');
    
        })

}

$scope.deleteuser1 = function(user_name) {
   //alert('hie');
    inside.deleteMethod();
var id =localStorage.getItem("id_user");
    var user=localStorage.getItem("username");
	var url="http://localhost:9082/MongoRestApp/UserServlet";
      // alert(id);
    
    $http({
    method: 'DELETE',
    url : url+"?requesttype=4&username="+user,
   
}).success(function() {

    alert('success');
    
        })

}



    
});  

