(function(){

	var app = angular.module('starter', ['ionic','ngCordovaOauth']);

	app.service('sp', function () {
        var property = 'First';
		var paper;
		console.log('inside service');
        return {
            getProperty: function () {
                return paper;
            },
            setProperty: function(pcode) {
				paper=pcode;
				console.log(paper);
            }
        };
    });

	app.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider){
		
		 $ionicConfigProvider.tabs.position('bottom');

		$stateProvider.state('list', {
			url: '/list',

			templateUrl: 'templates/login.html',
			cache: false,
			controller: 'AppCtrl1'
		});

		console.log('3');
		$stateProvider.state('menu', {
			url: '/menu',
			templateUrl: 'templates/pg2.html',
			controller: 'menuCtrl'
		});

		$stateProvider.state('student1', {
			url: '/studentLogin',
			templateUrl: 'templates/pg3.html',
			controller: 's1Ctrl'
		});
		
		$stateProvider.state('studentview', {
			url: '/studentview',
			templateUrl: 'templates/studentview.html',
			controller: 'studentviewCtrl'
		});
		
		$stateProvider.state('cdetails', {
			url: '/cdetails',
			cache:false,
			templateUrl: 'templates/cdetails.html',
			controller: 'stucmpCtrl'
		});

		$stateProvider.state('student2', {
			url: '/studentRegistration',
			templateUrl: 'templates/pg4.html',
			controller: 's2Ctrl'
		});

		$stateProvider.state('company1', {
			url: '/companyLogin',
			templateUrl: 'templates/pg5.html',
			controller: 'c1Ctrl'
		});
		
		$stateProvider.state('companyview', {
			url: '/companyview',
			templateUrl: 'templates/companyview.html',
			controller: 'cmpviewCtrl'
		});
		
		$stateProvider.state('companyevent', {
			url: '/companyevent',
			cache:false,
			templateUrl: 'templates/companyevent.html',
			controller: 'cmpeventCtrl'
		});
		
		$stateProvider.state('companystudent', {
			url: '/companystudent',
			cache:false,
			templateUrl: 'templates/companystudent.html',
			controller: 'cmpstuCtrl'
		});
		
		$stateProvider.state('studentlisting', {
			url: '/studentlisting',
			templateUrl: 'templates/studentlisting.html',
			controller: 'c1Ctrl'
		});

		$stateProvider.state('company2', {
			url: '/companyRegistration',
			templateUrl: 'templates/pg6.html',
			controller: 'c2Ctrl'
		});
		$stateProvider.state('clg1', {
			url: '/collegeLogin',
			templateUrl: 'templates/pg7.html',
			controller: 'clg1Ctrl'
		});

		$stateProvider.state('clg2', {
			url: '/collegeRegistration',
			templateUrl: 'templates/pg8.html',
			controller: 'clg2Ctrl'
		});
		
		$stateProvider.state('companylist', {
			url: '/companylist',
			templateUrl: 'templates/clist.html',
			cache: false,
			controller: 'clistCtrl'
		});
		$stateProvider.state('listcompany', {
			url: '/listcompany',
			templateUrl: 'templates/listcompany.html',
			cache: false,
			controller: 'listcompanyCtrl'
		});
		$stateProvider.state('listclg', {
			url: '/listclg',
			templateUrl: 'templates/listclg.html',
			cache: false,
			controller: 'listclgCtrl'
		});
		
		$stateProvider.state('cd', {
			url: '/cd',
			templateUrl: 'templates/cd.html',
			cache: false,
			controller: 'cdclgCtrl'
		});
		$stateProvider.state('sd', {
			url: '/sd',
			templateUrl: 'templates/sd.html',
			cache: false,
			controller: 'sdclgCtrl'
		});
		$stateProvider.state('general', {
			url: '/general',
			templateUrl: 'templates/generaldetails.html',
			cache: false,
			controller: 's2Ctrl'
		});
		
		$stateProvider.state('edudata', {
			url: '/edudata',
			templateUrl: 'templates/edudetails.html',
			cache: false,
			controller: 's2Ctrl'
		});
		
		$stateProvider.state('clgreg2', {
			url: '/clgreg2',
			templateUrl: 'templates/clgreg2.html',
			cache: false,
			controller: 'clg2Ctrl'
		});
		
		$stateProvider.state('cmpreg2', {
			url: '/cmpreg2',
			templateUrl: 'templates/cmpreg2.html',
			cache: false,
			controller: 'c2Ctrl'
		});
		
		$stateProvider.state('ambassador', {
			url: 'ambassador',
			templateUrl: 'templates/ambassador.html',
			cache: false,
			controller: 'ambassadorCtrl'
		});
		
		$stateProvider.state('showclg', {
			url: 'showclg',
			templateUrl: 'templates/showclg.html',
			cache: false,
			controller: 's2Ctrl'
		});
		
		$stateProvider.state('clgwisestu', {
			url: '/clgwisestu',
			cache:false,
			templateUrl: 'templates/clgwisestu.html',
			controller: 'clgwisestuCtrl'
		});

		console.log('4');


		$urlRouterProvider.otherwise('/list');
	});







	app.controller('AppCtrl1', function($scope, $ionicPopup, $http,$state,$stateParams){
			$scope.login=function(user){
				$state.go('menu');
			}
	});
	
	



	app.controller('menuCtrl', function($scope, $stateParams, $http, $state,$ionicPopup){
		console.log('INNNNNNNNNNNN Student');
		$scope.stud=function(){
			console.log("In student");
			$state.go('student1');
		}
		$scope.comp=function(){
			console.log('Innnnnnn Company');
			$state.go('company1');
		}
		$scope.clg=function(){
			console.log('Innnnnnn College');
			$state.go('clg1');
		}

	});


var studentdata={};
var arrayskill=new Array();
var arraypersonalskill=new Array();
var arrayaoi=new Array();
var arrayhobby=new Array();
var arraylanguage=new Array();
var collegedata={};


	app.controller('s1Ctrl', function($scope, $stateParams,AuthService, $http, $state,$ionicPopup,$cordovaOauth,$window){
		console.log(' student for Registration');
		var mypass={};
		$scope.pop = function() {
			$scope.contact = {};
			var myPopup = $ionicPopup.show({
				template:'<input class="w3-input w3-border w3-round" style="color:black; background:#ffffff; margin-left:0px" type="text" ng-model="contact.email" placeholder=" Enter email">',
				title: 'Find Password',
				scope: $scope,
				buttons: [
					{ text: 'Cancel',
						onTap: function(e) {
						$state.go('student1');
						}
					},
					{
						text: '<b>Ok</b>',
						type: 'button-positive',
						onTap: function(e) {
									console.log($scope.contact.email);
									var domain={};
									domain.email=$scope.contact.email;
									console.log(domain);
										$http.post('/stupass',domain).then(function(response){
											console.log(response.data);
											mypass=response.data[0];
											$ionicPopup.alert({
														title:'Your Password',
														template:mypass.password
											});
										});
								}
					}
				]
			});
			myPopup.then(function(res) {
				console.log('Tapped!', res);	
		});
		}
		
		//login student.
		$scope.login=function(user){
				console.log(user);
				console.log(user);
				    AuthService.login1(user).then(function(authenticated) {
					  $state.go('studentview', {}, {reload: true});
					  //$scope.setCurrentUsername(user.email);
					}, function(err) {
					  var alertPopup = $ionicPopup.alert({
						title: 'Login failed!',
						template: 'Please check your credentials!'
					  });
					});
			
		}
		$scope.sLogin=function(){
			console.log("In student");
			$state.go('student2');
		}

		//Facebook Login
		 $scope.LoginwithFacebook = function(){
			console.log("clicked");
			$cordovaOauth.facebook("269380413509964", ["email"]).then(function(result) {
				console.log("Auth Success..!!"+ JSON.stringify(result));

				$http.get("https://graph.facebook.com/v2.2/me",
                {params :{access_token :result.access_token,
                 fields :"id,email,name,gender",
                 format : "json"
                }
                 }
              ).then(function(data1) {
				//Result will contain the data from FB for the fields which we have mentioned in the fileds key.
				alert("Auth Success..!!"+ JSON.stringify(data1.data.email));
				var user=data1.data;
				alert(user);
				 AuthService.login1(user).then(function(authenticated) {
					  $state.go('studentview', {}, {reload: true});
					  //$scope.setCurrentUsername(user.email);
					}, function(err) {
					  var alertPopup = $ionicPopup.alert({
						title: 'Login failed!',
						template: 'Please check your credentials!'
					  });
					});	
         });


			}, function(error) {
					alert("Auth Failed..!!"+error);
				});
		};
		
		$scope.event=function(){
			$state.go('companylist');
		};
		console.log(AuthService.username());
		$scope.company=function(){
			//$window.location.reload(true);
			console.log(AuthService.username());
			$state.go('cdetails');
		};
		
		$scope.sback=function(){
			$state.go('companyview');
		};
		
		$scope.sback2=function(){
			$state.go('companyview');
		};
		
		$scope.ambassador=function(){
			$state.go('ambassador');
		}
		
	});
	
	app.controller('studentviewCtrl', function($scope, $stateParams, $http, $state,$ionicPopup,$filter){
					$scope.event=function(){
						$state.go('companylist');
					};
					
					$scope.company=function(){
						//$window.location.reload(true);
						$state.go('cdetails');
					};
			
	});
	
	app.controller('studenteventCtrl', function($scope, $stateParams, $http, $state,$ionicPopup,$filter){
						$scope.sback=function(){
							$state.go('companyview');
						};
						
						$scope.sback2=function(){
							$state.go('companyview');
						};
	});

	app.controller('s2Ctrl', function($scope, $stateParams,$window, $http, $state,$ionicPopup,$filter){
		
		 var today = new Date();
		  var minAge = 18;
		  $scope.minAge = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());

		console.log('return to student login');
		//new student register.
		$scope.signup=function(data){
			console.log(data);
			if(data==undefined || data.name==undefined || data.college==undefined || data.stream==undefined || data.sem==undefined || data.phone==undefined || data.username==undefined || data.password==undefined){
					$ionicPopup.alert({
						title:'Fill all fields',
					});
			}else{
					$http.post('/stureg',data).then(function(response){
						console.log("student added");
						var alertPopup=$ionicPopup.alert({
							title:'Student Added Successfully!',
							template:'Now Login with Mobile no & Password... '
						});
						alertPopup.then(function(res){
							console.log('thank u for adding student');
							$state.go('student1');
						});
					});
			}
		};
		$scope.sReturn=function(){
			console.log("In student");
			$state.go('student1');
		};
		
		$scope.personal=function(data){
			console.log(data);
			if(data==undefined || data.name==undefined || data.email==undefined || data.password==undefined || data.phone==undefined || data.address==undefined || data.nationality==undefined || data.sex==undefined){
					$ionicPopup.alert({
						   title:'Fill all fields',
					    });
			}else{
				if(data.dob==undefined){
					$ionicPopup.alert({
						   title:'Dob not valid',
					    });
				}else{
					$http.post('/searchstudent',data).then(function(response){
						console.log(response.data);
						if(response.data.length>0)
						{
							$ionicPopup.alert({
								title:'Already Added!'
							});
						}else{
							studentdata=data;
							console.log(studentdata);
							$state.go('general');
						}
					});
				}
			}
		};
		
	
			var keyskill=new Array();
			var personalskill=new Array();
			var aoiarray=new Array();
			var hobyarray=new Array();
			var langarray=new Array();
			
			//For Key Skill
			$scope.addItem = function (data1) {
					$scope.errortext = "";
					if (!data1) {return;}
					if (keyskill.indexOf(data1) == -1) {
						console.log(data1);
						var lc=$filter('lowercase')(data1);
						console.log(lc);
						keyskill.push(lc);
						$scope.products=keyskill;
						$scope.addMe =null;
					} else {
						$scope.errortext = "The skill already exist.";
					}
					studentdata.keyskill=keyskill;
					console.log(studentdata);
				
				}
			$scope.removekeyskill = function (x) {
				$scope.errortext = "";    
				$scope.products.splice(x, 1);
				keyskill.splice(x, 1);
				studentdata.keyskill=keyskill;
					console.log(studentdata);
			}
			//For Personal Skill
			$scope.pskill = function (data1) {
					$scope.errortext = "";
					if (!data1) {return;}
					if (personalskill.indexOf(data1) == -1) {
						console.log(data1);
						var lc=$filter('lowercase')(data1);
						console.log(lc);
						personalskill.push(lc);
						$scope.products2=personalskill;
					} else {
						$scope.errortext = "The skill already exist.";
					}
					studentdata.pskill=personalskill;
					console.log(studentdata);
				
			}
			$scope.removepskill = function (x) {
				$scope.errortext = "";    
				$scope.products2.splice(x, 1);
				personalskill.splice(x, 1);
				studentdata.pskill=personalskill;
					console.log(studentdata);
			}
			//For Area Of Interest
			$scope.addaoi = function (data1) {
					$scope.errortext = "";
					if (!data1) {return;}
					if (aoiarray.indexOf(data1) == -1) {
						aoiarray.push(data1);
						$scope.products3=aoiarray;
					} else {
						$scope.errortext = "The skill already exist.";
					}
					studentdata.aoi=aoiarray;
					console.log(studentdata);
				
			}
			$scope.removeaoi = function (x) {
				$scope.errortext = "";    
				$scope.products3.splice(x, 1);
				aoiarray.splice(x, 1);
				studentdata.aoi=aoiarray;
				console.log(studentdata);
			}
			
			// For Hobbies
			$scope.addhoby = function (data1) {
					$scope.errortext = "";
					if (!data1) {return;}
					if (hobyarray.indexOf(data1) == -1) {
						hobyarray.push(data1);
						$scope.products4=hobyarray;
					} else {
						$scope.errortext = "The skill already exist.";
					}
					studentdata.hobby=hobyarray;
					console.log(studentdata);
				
			}
			$scope.removehoby = function (x) {
				$scope.errortext = "";    
				$scope.products4.splice(x, 1);
				hobyarray.splice(x, 1);
				studentdata.hobby=hobyarray;
				console.log(studentdata);
			}
			//For Languages Known
			$scope.addlang = function (data1) {
					$scope.errortext = "";
					if (!data1) {return;}
					if (langarray.indexOf(data1) == -1) {
						langarray.push(data1);
						$scope.products5=langarray;
					} else {
						$scope.errortext = "The skill already exist.";
					}
					studentdata.language=langarray;
					console.log(studentdata);	
			}
			$scope.removelang = function (x) {
				$scope.errortext = "";    
				$scope.products5.splice(x, 1);
				langarray.splice(x, 1);
				studentdata.language=langarray;
				console.log(studentdata);
			}
			
			$scope.edudata=function(dad){
				
				if(dad.addMe==undefined || dad.ps==undefined || dad.aoi==undefined || dad.hoby==undefined || dad.lang==undefined ){
					$ionicPopup.alert({
						title:'Fill all fields',
					});
				}else{
				$state.go('edudata');
				}
			}
			$scope.finish=function(data1){
				if(data1.ten==undefined || data1.tenmark==undefined || data1.twelve==undefined || data1.twelvemark==undefined || data1.gclg==undefined || data1.gdeg==undefined || data1.gstream==undefined || data1.gyear==undefined||data1.gmark==undefined){
					$ionicPopup.alert({
						title:'Fill all fields',
					});
			}else{
				console.log(data1);
				studentdata.education=data1;
				console.log(studentdata);
				$http.post('/stureg',studentdata).then(function(response){
						console.log("student added");
						var alertPopup=$ionicPopup.alert({
							title:'Student Added Successfully!',
							template:'Now Login with Email & Password... '
						});
						alertPopup.then(function(res){
							//----------------
							//----------------
							console.log('thank u for adding student');
							$state.go('student1');
						});
					});
			}
			}
			
			$scope.showclg=function(){
				console.log('view show clg');
				$state.go('showclg');
			};
			
		
	});

	app.controller('c1Ctrl', function($scope, $stateParams,AuthService, $http, $state,$ionicPopup,$cordovaOauth, $window){
		console.log(' Company for login');
		//company login
		$scope.login=function(user){
				console.log(user);
				console.log(user);
				 AuthService.login2(user).then(function(authenticated) {
					  $state.go('companyview', {}, {reload: true});
					  //$scope.setCurrentUsername(user.email);
					}, function(err) {
					  var alertPopup = $ionicPopup.alert({
						title: 'Login failed!',
						template: 'Please check your credentials!'
					  });
				});
				
		}
		$scope.cLogin=function(){
			console.log("In company");
			$state.go('company2');
		}
		
		 $scope.LSignIn = function(){
              var linkedinUriApi = "https://api.linkedin.com/v1/people/~:(email-address,first-name)?format=json&oauth2_access_token=";
                 $cordovaOauth.linkedin("81mda76c3mkwv9", "AENWGh8gapZkycmB", ['r_basicprofile', 'r_emailaddress'])
                     .then(function (success) {
                             // Here you will get the access_token
                             console.log('Granted access to linkedin');
                             alert(JSON.stringify(success));
                             // In request below my default header is disabled - otherwise Linkedin API will reject request
                             $http(
                                 {method: 'GET',
                                     url: linkedinUriApi + success.access_token,
                                     headers: {Authorization: undefined}
                                 }).then(function (response) {
                                 alert(JSON.stringify(response.data.email));
								 
								 var userid=response.data.email;
								      AuthService.login2(user).then(function(authenticated) {
										  $state.go('companyview', {}, {reload: true});
										  //$scope.setCurrentUsername(user.email);
										}, function(err) {
										  var alertPopup = $ionicPopup.alert({
											title: 'Login failed!',
											template: 'Please check your credentials!'
										  });
									});
								 
                             }, function (error) {
                                 console.log(error);
                                 alert('Ionic LinkedIn API request after successful login failed');
                             });
                         },
                         function (error) {
                             console.log(error);
                         });
             };
			 
		$scope.event=function(){
			$state.go('companyevent');
			$window.location.reload();
		};
		
		$scope.company=function(){
			$state.go('companystudent');
			$window.location.reload();
		};
		
		$scope.sback=function(){
			$state.go('companyview');
		};
		
		$scope.sback2=function(){
			$state.go('companyview');
		};
		
	});

	
	var companydata={};
	
	app.controller('cmpviewCtrl', function($scope, $stateParams, $http, $state,$ionicPopup, $window){
		$scope.event=function(){
			$state.go('companyevent');
		
		};
		
		$scope.company=function(){
			$state.go('companystudent');
			
		};
		
		$scope.clglist=function(){
			$state.go('clgwisestu');	
		};
	
	});
	app.controller('cmpeventCtrl', function($scope,AuthService,$window, $stateParams, $http, $state,$ionicPopup){
		var user={};
		user.username=AuthService.username();
		console.log(user);
		$http.post('/cmpevent',user).then(function(response){
			console.log(response.data);
			$scope.events=response.data;
		});
		
		$scope.as=function(){
			$state.go('companystudent');
		};
		
		$scope.cs=function(){
			$state.go('clgwisestu');
		};
		
		$scope.logout=function(){
			AuthService.logout2();
			$window.location.reload();
			$state.go('list');
		}
	
	});
	
	
	app.controller('c2Ctrl', function($scope, $stateParams, $http, $state,$ionicPopup){
		console.log(' Company for Registration');
		$scope.cReturn=function(){
			console.log("In company");
			$state.go('company1');
		}
		//new company register.
		$scope.cmpnext=function(data){
			console.log(data);
			if(data==undefined || data.cmpname==undefined || data.cmpemail==undefined || data.cmpwebsite==undefined || data.cmppassword==undefined || data.cmpphone==undefined || data.cpname==undefined || data.cpemail==undefined || data.cpphone==undefined || data.cpdesg==undefined){
					$ionicPopup.alert({
						title:'Fill all fields',
					});
			}else{
					companydata=data;
					console.log(companydata);
					$state.go('cmpreg2');
			}
		};
		
		$scope.cReturn=function(){
			console.log("In company");
			$state.go('company1');
		}
		var cmpdomainarray=new Array();
		var cmptecharray=new Array();
			$scope.adddomain = function (data1) {
					var cmpdomain={};
					cmpdomain=data1;
					console.log(cmpdomain);
					$scope.errortext = "";
					if (!data1) {return;}
					if (cmpdomainarray.indexOf(cmpdomain) == -1) {
						cmpdomainarray.push(cmpdomain);
						$scope.products=cmpdomainarray;
						$scope.jobdomain =null;
						console.log(cmpdomainarray);
						companydata.jobdomain=cmpdomainarray;
					    console.log(companydata);
					} else {
						$scope.errortext = "The skill already exist.";
					}
					
				
			}
			$scope.removekeyskill = function (x) {
				$scope.errortext = "";    
				//$scope.products.splice(x, 1);
				cmpdomainarray.splice(x, 1);
				$scope.products=cmpdomainarray;
				companydata.jobdomain=cmpdomainarray;
				console.log(companydata);
			}
			
			$scope.addtech = function (data1) {
					var cmptech={};
					cmptech=data1;
					console.log(cmptech);
					$scope.errortext2 = "";
					if (!data1) {return;}
					if (cmptecharray.indexOf(cmptech) == -1) {
						cmptecharray.push(cmptech);
						$scope.products2=cmptecharray;
						$scope.tech =null;
						console.log(cmptecharray);
						companydata.technologies=cmptecharray;
					    console.log(companydata);
					} else {
						$scope.errortext2 = "The skill already exist.";
					}
					
				
			}
			$scope.removetech = function (x) {
				$scope.errortext = "";    
				//$scope.products2.splice(x, 1);
				cmptecharray.splice(x, 1);
				$scope.products2=cmptecharray;
				companydata.technologies=cmptecharray;
			    console.log(companydata);
			}
			
			$scope.cmpfinish=function(){
				$http.post('/comreg',companydata).then(function(response){
						console.log("company added");
						var alertPopup=$ionicPopup.alert({
							title:'company Added Successfully',
							template:'please click ok'
						});
						alertPopup.then(function(res){
							console.log('thank u for adding company');
							$state.go('company1');
						});
					});
			}
				

	});
	var clginfo={};
	app.controller('clg1Ctrl', function($scope, $stateParams,AuthService, $http, $state,$ionicPopup){
		console.log(' Student for login');
		$scope.user="";
		//company login
		$scope.login=function(user){
				console.log(user);
				console.log(user);
				AuthService.login3(user).then(function(authenticated) {
					  $state.go('listclg', {}, {reload: true});
					  //$scope.setCurrentUsername(user.email);
					}, function(err) {
					  var alertPopup = $ionicPopup.alert({
						title: 'Login failed!',
						template: 'Please check your credentials!'
					  });
				});
		};
		$scope.clgLogin=function(){
			console.log("In college");
			$state.go('clg2');
		};
	});

		var clgstudent={};
		var clgstudentarray=new Array();
	
	app.controller('clg2Ctrl', function($scope, $stateParams, $http, $state,$ionicPopup){
		console.log(' College for Registration');
		$scope.clgReturn=function(){
			console.log("In college");
			$state.go('clg1');
		}
		//new company register.
		$scope.clgnext=function(data){
			console.log(data);
			if(data==undefined || data.clgname==undefined || data.clggroup==undefined || data.clgwebsite==undefined || data.clgpassword==undefined || data.clgemail==undefined || data.clgphone==undefined || data.cpname==undefined || data.cpemail==undefined || data.cpphone==undefined || data.cpdesg==undefined){
					$ionicPopup.alert({
						title:'Fill all fields',
					});
			}else{
					
					collegedata=data;
					console.log(collegedata);
					$state.go('clgreg2');
			}
		};
		
		$scope.clgReturn=function(){
			console.log("In college");
			$state.go('clg1');
		}

			$scope.addstudent = function (data1) {
					var stream={};
					stream.stream=data1.mdeg;
					stream.total=data1.addstu;
					console.log(stream);
					$scope.errortext = "";
					if (!data1) {return;}
					if (clgstudentarray.indexOf(stream.stream) == -1) {
						clgstudentarray.push(stream);
						$scope.products=clgstudentarray;
						$scope.addstud =null;
						console.log(clgstudentarray);
						collegedata.participate=clgstudentarray;
					    console.log(collegedata);
					} else {
						$scope.errortext = "The skill already exist.";
					}
					
				
			}
			$scope.removekeyskill = function (x) {
				$scope.errortext = "";    
				$scope.products.splice(x, 1);
				clgstudentarray.splice(x, 1);
				collegedata.participate=clgstudentarray;
				console.log(collegedata);
			}
			
			$scope.clgfinish=function(){
				
				$http.post('/clgreg',collegedata).then(function(response){
						console.log("college added");
						var alertPopup=$ionicPopup.alert({
							title:'college Added Successfully',
							template:'please click ok'
						});
						alertPopup.then(function(res){
							console.log('thank u for adding college');
							$state.go('clg1');
						});
					});
			}
				

	});
	

    app.controller('clistCtrl', function($scope,AuthService,$window, $stateParams, $http, $state,$ionicPopup){
		
		$http.post('/stuevent').then(function(response){
			console.log(response.data);
			$scope.events=response.data;
		});
		
		$scope.cd=function(){
			$state.go('cdetails');
		}
		
		$scope.logout=function(){
			AuthService.logout();
			$window.location.reload();
			$state.go('list');
		}

	});

	 app.controller('listcompanyCtrl', function($scope, $stateParams, $http, $state,$ionicPopup){
		 $scope.logout=function(){
			$state.go('company1');
		}

	});
	
	app.controller('listclgCtrl', function($scope,AuthService, $stateParams, $http, $state,$ionicPopup,$window){
		
		console.log(clginfo);
		$scope.logout=function(){
			AuthService.logout();
			$window.location.reload();
			$state.go('clg1');
		};
		
		$scope.cd=function(){
				
			$state.go('cd');
		
			
		};
		$scope.sd=function(){
			
			$state.go('sd');
		
		};
		
		$scope.sback2=function(){
			$state.go('listclg');
		};

	});
	//student company view controller
	app.controller('stucmpCtrl', function($scope,AuthService,$location, $stateParams, $http, $state,$ionicPopup,$window){
		
		$http.post('/stucmp').then(function(response){
			console.log(response.data);
			$scope.company=response.data;
		});
			console.log(AuthService.username());
			function alllist(){
						$http.post('/stucmp').then(function(response){
					console.log(response.data);
					$scope.company=response.data;
				});
			}
		$scope.all=function(){
			alllist();
		}
		$scope.event=function(){
			$state.go('companylist');
		}
		$scope.logout=function(){
			AuthService.logout2();
			$window.location.reload();
			$state.go('list');
		}
	      
		  
		  
		$scope.showPopup = function() {
			$scope.contact = {};
			// An elaborate, custom popup
			var myPopup = $ionicPopup.show({
				template:  '<select style="width:100%" ng-model="contact.value"><option value="" disabled selected>Add domains</option><option value="All">All</option><option value="Software Development">Software Development</option>'+
							'<option value="App Development">App Development</option><option value="Web Development">Web Development</option><option value="Software Testing">Software Testing</option>'+
							'<option value="Data Analytics">Data Analytics</option><option value="Digital Marketing">Digital Marketing</option><option value="IT Networking">IT Networking</option>'+
							'<option value="Sales">Sales</option><option value="Marketing">Marketing</option><option value="Finance">Finance</option>'+
							'<option value="Accounts">Accounts</option><option value="Civil">Civil</option><option value="Electrical">Electrical</option>'+
							'<option value="System Engineer">System Engineer</option><option value="Assistant System Engineer">Assistant System Engineer</option>'+
							'</select><label class="item item-input item-label"><br>'+
				'<input class="w3-input w3-border w3-round" style="color:black; background:#ffffff; margin-left:-15px" type="text" ng-model="contact.loc" placeholder=" Job location">',
				title: 'Job Search',
			//	subTitle: 'Please Add Item Details',
				scope: $scope,
				buttons: [
					{ text: 'Cancel',
						onTap: function(e) {
						$state.go('cdetails');
						}
					},
					{
						text: '<b>Ok</b>',
						type: 'button-positive',
						onTap: function(e) {
							if ($scope.contact.value) {
									//don't allow the user to close unless he enters wifi password
									
									console.log($scope.contact.value);
									var domain={};
									domain.value=$scope.contact.value;
									console.log(domain);
									if(domain.value=='All'){
										$http.post('/stucmp').then(function(response){
											console.log(response.data);
											$scope.company=response.data;
										});
										//$state.go('cdetails');
										
									}else{
										$http.post('/stucmpdomain',domain).then(function(response){
											console.log(response.data);
											$scope.company=response.data;
											
										});
										//$state.go('cdetails');
									}
									
									
									
							} else{
								return $scope.contact.value;
								
							}
						}
					}
				]
			});
			
			myPopup.then(function(res) {
				console.log('Tapped!', res);
	/*			if(res){
					$http.post('/contactlists',$scope.contact).then(function(response){
						$scope.contact = "";
						$state.go('addlist');
						//A Alert Popup
						var alertPopup = $ionicPopup.alert({
							title: 'User Added Successfully',
							template: 'Please Click OK'
						});
						alertPopup.then(function(res) {
							console.log('Thank you for not eating my delicious ice cream cone');
						});
					});
				}
*/			});
			//$timeout(function() {
			// myPopup.close(); //close the popup after 3 seconds for some reason
			//}, 3000);
			//};
		};
		
		$scope.applycmp=function(cmp){
			var user={};
			user.username=AuthService.username();
			var store={};
			$http.post('/studata',user).then(function(response){
				console.log(response.data);
				store.email=response.data[0].email;
				store.phone=response.data[0].phone;
				store.name=response.data[0].name;
				store.gdeg=response.data[0].education.gdeg;
				store.gclg=response.data[0].education.gclg;
				store.mclg=response.data[0].education.mclg;
				store.mdeg=response.data[0].education.mdeg;
				store.gyear=response.data[0].education.gyear;
				store.myear=response.data[0].education.myear;
				store.gmark=response.data[0].education.gmark;
				store.mmark=response.data[0].education.mmark;
				store.keyskill=response.data[0].keyskill;
				store.cmpemail=cmp.cmpemail;
				store.cmpname=cmp.cmpname;
				console.log(store);
				//
				$http.post('/appcmp',store).then(function(response){
					console.log(response.data);
					if(response.data.length>0)
					{
							$ionicPopup.alert({
								title:'Already Added'
							});
					}else{
						$http.post('/storecmp',store).then(function(response){
							var alertPopup=$ionicPopup.alert({
										title:'company Added',
										template:'please click ok'
									});
									alertPopup.then(function(res){
										console.log('thank u for adding');
										$state.go('cdetails');
									});
											
						});
					
					}
				});
				//
				
			});	
		}
		
	
	});
	
	app.controller('cmpstuCtrl', function($scope,AuthService, $stateParams, $http, $state,$ionicPopup,$filter,$window){
		var user={};
		user.username=AuthService.username();
		
		$http.post('/cmpstu',user).then(function(response){
			console.log(response.data);
			$scope.students=response.data;
		});
		
		$scope.all=function(){
			$http.post('/cmpstu',user).then(function(response){
			console.log(response.data);
			$scope.students=response.data;
			});
		}
		$scope.events=function(){
			$state.go('companyevent');
		}
		$scope.logout=function(){
			AuthService.logout2();
			console.log('cmp logout');
			$window.location.reload();
			$state.go('list');
		}
		
		$scope.clgwise=function(){
			$state.go('clgwisestu');
		}
	 
		$scope.showPopup = function() {
			$scope.contact = {};
			// An elaborate, custom popup
			var myPopup = $ionicPopup.show({
				template:  '<select style="width:100%" ng-model="contact.value"><option value="" disabled selected>Add domains</option><option value="All">All</option><option value="EE">EE</option>'+
							'<option value="EIE">EIE</option><option value="CS">CS</option><option value="IT">IT</option>'+
							'<option value="ECE">ECE</option><option value="ME">ME</option><option value="CE">CE</option>'+
							'<option value="MCA">MCA</option><option value="BCA">BCA</option><option value="BBA">BBA</option>'+
							'<option value="MBA">MBA</option><option value="B.Sc">B.Sc</option></select>'+
							'<label class="item item-input item-label"><br>'+
				'<input class="w3-input w3-border w3-round" style="color:black; background:#ffffff; margin-left:-15px" type="text" ng-model="contact.keyskill" placeholder="Key Skill">',
				title: 'Student Search',
			//	subTitle: 'Please Add Item Details',
				scope: $scope,
				buttons: [
					{ text: 'Cancel',
						onTap: function(e) {
						$state.go('companystudent');
						}
					},
					{
						text: '<b>Search</b>',
						type: 'button-positive',
						onTap: function(e) {
							if($scope.contact.value && $scope.contact.keyskill){
									console.log($scope.contact.value);
									var domain={};
									domain.username=user.username;
									domain.value=$scope.contact.value;
									domain.keyskill=$filter('lowercase')($scope.contact.keyskill);
									console.log(domain);
									if(domain.value=='All'){
										//if all is selected in stream then search for keyskill only
										/*$http.post('/cmpstukeyskill',domain).then(function(response){
											console.log(response.data);
											$scope.students=response.data;
										});*/
										$http.post('/cmpstukeyskill',domain).then(function(response){
											console.log(response.data);
											$scope.students=response.data;
										});
										
									}else{
										$http.post('/cmpstuboth',domain).then(function(response){
											console.log(response.data);
											if(response.data.length==0){
												var alertPopup = $ionicPopup.alert({
													title: 'Data Not Found!',
													template: 'Please Search Individual'
												});
											}
											$scope.students=response.data;
										});
									}							
							}else if ($scope.contact.value || $scope.contact.keyskill) {
									//don't allow the user to close unless he enters wifi password
									
									console.log($scope.contact.value);
									var domain={};
									domain.username=user.username;
									domain.value=$scope.contact.value;
									domain.keyskill=$filter('lowercase')($scope.contact.keyskill);
									console.log(domain);
									if(domain.value=='All'){
										$http.post('/cmpstu',user).then(function(response){
											console.log(response.data);
											$scope.students=response.data;
										});
										
									}else{
										$http.post('/cmpstustream',domain).then(function(response){
											console.log(response.data);
											$scope.students=response.data;
										});
									}
									if(domain.keyskill!=undefined){
										
										$http.post('/cmpstukeyskill',domain).then(function(response){
											console.log(response.data);
											$scope.students=response.data;
										});
									}
							
									//e.preventDefault();
							}else{
								return $scope.contact;
							}
						}
					}
				]
			});
			
			myPopup.then(function(res) {
				console.log('Tapped!', res);
	/*			if(res){
					$http.post('/contactlists',$scope.contact).then(function(response){
						$scope.contact = "";
						$state.go('addlist');
						//A Alert Popup
						var alertPopup = $ionicPopup.alert({
							title: 'User Added Successfully',
							template: 'Please Click OK'
						});
						alertPopup.then(function(res) {
							console.log('Thank you for not eating my delicious ice cream cone');
						});
					});
				}
*/			});
			//$timeout(function() {
			// myPopup.close(); //close the popup after 3 seconds for some reason
			//}, 3000);
			//};
		};
		
		$scope.applycmp=function(cmp){
			$http.post('/storecmp',cmp).then(function(response){
				var alertPopup=$ionicPopup.alert({
							title:'company Added',
							template:'please click ok'
						});
						alertPopup.then(function(res){
							console.log('thank u for adding');
							$state.go('cdetails');
						});
								
			});
		}
		
	
	});
	//view company from college
	app.controller('cdclgCtrl', function($scope,$window,AuthService, $stateParams, $http, $state,$ionicPopup){
		
		$http.post('/stucmp').then(function(response){
			console.log(response.data);
			$scope.company=response.data;
		});
		
		$scope.all=function(){
			$http.post('/stucmp').then(function(response){
			console.log(response.data);
			$scope.company=response.data;
			});
		}
		$scope.sd=function(){
			$state.go('sd');
		}
		$scope.logout=function(){
			AuthService.logout3();
			console.log('clg logout');
			$window.location.reload();
			$state.go('list');
		}
	      
		  
		  
		$scope.showPopup = function() {
			$scope.contact = {};
			// An elaborate, custom popup
			var myPopup = $ionicPopup.show({
				template:  '<select style="width:100%" ng-model="contact.value"><option value="" disabled selected>Add domains</option><option value="All">All</option><option value="Software Development">Software Development</option>'+
							'<option value="App Development">App Development</option><option value="Web Development">Web Development</option><option value="Software Testing">Software Testing</option>'+
							'<option value="Data Analytics">Data Analytics</option><option value="Digital Marketing">Digital Marketing</option><option value="IT Networking">IT Networking</option>'+
							'<option value="Sales">Sales</option><option value="Marketing">Marketing</option><option value="Finance">Finance</option>'+
							'<option value="Accounts">Accounts</option><option value="Civil">Civil</option><option value="Electrical">Electrical</option>'+
							'<option value="System Engineer">System Engineer</option><option value="Assistant System Engineer">Assistant System Engineer</option>'+
							'</select><label class="item item-input item-label"><br>'+
				'<input class="w3-input w3-border w3-round" style="color:black; background:#ffffff; margin-left:-15px" type="text" ng-model="contact.loc" placeholder=" Job location">',
				title: 'Job Search',
			//	subTitle: 'Please Add Item Details',
				scope: $scope,
				buttons: [
					{ text: 'Cancel',
						onTap: function(e) {
						$state.go('cd');
						}
					},
					{
						text: '<b>Save</b>',
						type: 'button-positive',
						onTap: function(e) {
							if ($scope.contact.value) {
									//don't allow the user to close unless he enters wifi password
									
									console.log($scope.contact.value);
									var domain={};
									domain.value=$scope.contact.value;
									console.log(domain);
									if(domain.value=='All'){
										$http.post('/stucmp').then(function(response){
											console.log(response.data);
											$scope.company=response.data;
										});
										//$state.go('cdetails');
										
									}else{
										$http.post('/stucmpdomain',domain).then(function(response){
											console.log(response.data);
											$scope.company=response.data;
											
										});
										//$state.go('cdetails');
									}
									
									
									
							} else{
								return $scope.contact.value;
								
							}
						}
					}
				]
			});
			
			myPopup.then(function(res) {
				console.log('Tapped!', res);
	/*			if(res){
					$http.post('/contactlists',$scope.contact).then(function(response){
						$scope.contact = "";
						$state.go('addlist');
						//A Alert Popup
						var alertPopup = $ionicPopup.alert({
							title: 'User Added Successfully',
							template: 'Please Click OK'
						});
						alertPopup.then(function(res) {
							console.log('Thank you for not eating my delicious ice cream cone');
						});
					});
				}
*/			});
			//$timeout(function() {
			// myPopup.close(); //close the popup after 3 seconds for some reason
			//}, 3000);
			//};
		};
		
		$scope.applycmp=function(cmp){
			$http.post('/storecmp',cmp).then(function(response){
				var alertPopup=$ionicPopup.alert({
							title:'company Added',
							template:'please click ok'
						});
						alertPopup.then(function(res){
							console.log('thank u for adding');
							$state.go('cdetails');
						});
								
			});
		}
		
	
	});
	
	
	//view student from college.
	app.controller('sdclgCtrl', function($scope,AuthService, $window,$stateParams, $http, $state,$ionicPopup,$filter){
		var user={};
		user.username=AuthService.username();
		/*console.log(clginfo);
		//generate clg name
		$http.post('/clgname',clginfo).then(function(response){
			console.log(response.data);
			clginfo.clgname=response.data[0].clgname;
			console.log(clginfo);
			//$scope.students=response.data;
		});
		
		$http.post('/cmpstu').then(function(response){
			console.log(response.data);
			$scope.students=response.data;
		});*/
		$http.post('/clgname',user).then(function(response){
			console.log(response.data);
			user.clgname=response.data[0].clgname;
			console.log(user);
			$http.post('/clgstu',user).then(function(response){
				console.log(response.data);
				$scope.students=response.data;
			});
			//$scope.students=response.data;
		});
		
	    $scope.all=function(){
				$http.post('/clgname',user).then(function(response){
				console.log(response.data);
				user.clgname=response.data[0].clgname;
				console.log(user);
				$http.post('/clgstu',user).then(function(response){
					console.log(response.data);
					$scope.students=response.data;
				});
				//$scope.students=response.data;
			});
		}
		$scope.cd=function(){
			$state.go('cd');
		}
		$scope.logout=function(){
			AuthService.logout3();
			console.log('clg logout');
			$window.location.reload();
			$state.go('list');
		}  
		  
		  
		$scope.showPopup = function() {
			$scope.contact = {};
			// An elaborate, custom popup
			var myPopup = $ionicPopup.show({
				template:  '<select style="width:100%" ng-model="contact.value"><option value="" disabled selected>Add domains</option><option value="All">All</option><option value="EE">EE</option>'+
							'<option value="EIE">EIE</option><option value="CS">CS</option><option value="IT">IT</option>'+
							'<option value="ECE">ECE</option><option value="ME">ME</option><option value="CE">CE</option>'+
							'<option value="MCA">MCA</option><option value="BCA">BCA</option><option value="BBA">BBA</option>'+
							'<option value="MBA">MBA</option><option value="B.Sc">B.Sc</option></select>'+
							'<label class="item item-input item-label"><br>'+
				'<input class="w3-input w3-border w3-round" style="color:black; background:#ffffff; margin-left:-15px" type="text" ng-model="contact.keyskill" placeholder="Key Skill">',
				title: 'Student Search',
			//	subTitle: 'Please Add Item Details',
				scope: $scope,
				buttons: [
					{ text: 'Cancel',
						onTap: function(e) {
						$state.go('sd');
						}
					},
					{
						text: '<b>Search</b>',
						type: 'button-positive',
						onTap: function(e) {
							if($scope.contact.value && $scope.contact.keyskill){
									console.log($scope.contact.value);
									var domain={};
									domain.clgname=user.clgname;
									domain.value=$scope.contact.value;
									domain.keyskill=$filter('lowercase')($scope.contact.keyskill);
									console.log(domain);
									if(domain.value=='All'){
										//if all is selected in stream then search for keyskill only
										$http.post('/clgstukeyskill',domain).then(function(response){
											console.log(response.data);
											$scope.students=response.data;
										});
										
									}else{
										$http.post('/clgstuboth',domain).then(function(response){
											console.log(response.data);
											if(response.data.length==0){
												var alertPopup = $ionicPopup.alert({
													title: 'Combined Search Not Found',
													template: 'Please Search Individual'
												});
											}
											$scope.students=response.data;
										});
									}							
							}else if ($scope.contact.value || $scope.contact.keyskill) {
									//don't allow the user to close unless he enters wifi password
									
									console.log($scope.contact.value);
									var domain={};
									domain.clgname=user.clgname;
									domain.value=$scope.contact.value;
									domain.keyskill=$filter('lowercase')($scope.contact.keyskill);
									console.log(domain);
									if(domain.value=='All'){
										$http.post('/clgname',user).then(function(response){
											console.log(response.data);
											user.clgname=response.data[0].clgname;
											console.log(user);
											$http.post('/clgstu',user).then(function(response){
												console.log(response.data);
												$scope.students=response.data;
											});
											//$scope.students=response.data;
										});
										
									}else{
										$http.post('/clgstustream',domain).then(function(response){
											console.log(response.data);
											$scope.students=response.data;
										});
									}
									if(domain.keyskill!=undefined){
										
										$http.post('/clgstukeyskill',domain).then(function(response){
											console.log(response.data);
											$scope.students=response.data;
										});
									}
							
									//e.preventDefault();
							}else{
								return $scope.contact;
							}
						}
					}
				]
			});
			
			myPopup.then(function(res) {
				console.log('Tapped!', res);
	/*			if(res){
					$http.post('/contactlists',$scope.contact).then(function(response){
						$scope.contact = "";
						$state.go('addlist');
						//A Alert Popup
						var alertPopup = $ionicPopup.alert({
							title: 'User Added Successfully',
							template: 'Please Click OK'
						});
						alertPopup.then(function(res) {
							console.log('Thank you for not eating my delicious ice cream cone');
						});
					});
				}
*/			});
			//$timeout(function() {
			// myPopup.close(); //close the popup after 3 seconds for some reason
			//}, 3000);
			//};
		};
		
		$scope.applycmp=function(cmp){
			$http.post('/storecmp',cmp).then(function(response){
				var alertPopup=$ionicPopup.alert({
							title:'company Added',
							template:'please click ok'
						});
						alertPopup.then(function(res){
							console.log('thank u for adding');
							$state.go('cdetails');
						});
								
			});
		}
		
	
	});
	
	app.controller('ambassadorCtrl', function($scope, $stateParams, $http, $state,$ionicPopup){
		$scope.ca=function(data){
			console.log(data);
			if(data==undefined || data.name==undefined || data.college==undefined || data.phone==undefined || data.department==undefined || data.email==undefined){
					$ionicPopup.alert({
						title:'Fill all fields',
					});
			}else{
					$http.post('/careg',data).then(function(response){
						console.log("You are added");
						var alertPopup=$ionicPopup.alert({
							title:'Registered!',
						});
						alertPopup.then(function(res){
							console.log('thank u for adding student');
							$state.go('student1');
						});
					});
			}
			

	}
	});
	
	app.controller('clgwisestuCtrl', function($scope,AuthService,$window, $ionicPopup, $http,$state,$stateParams){
		var user={};
		user.username=AuthService.username();
		$scope.searchclg=function(edu){
			user.clgname=edu.clg;
			$http.post('/clgwise',user).then(function(response){
				console.log(response.data);
				$scope.college=response.data;
			});
		}
		
		$scope.events=function(){
			$state.go('companyevent');
		}
		$scope.logout=function(){
			AuthService.logout2();
			console.log('cmp logout');
			$window.location.reload();
			$state.go('list');
		}
		
		$scope.appliedstu=function(){
			$state.go('companystudent', {}, {reload: true});
		}
			
			
	});


	app.run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			if(window.cordova && window.cordova.plugins.Keyboard) {
				// Hide the accessory bar by default (remove this to show the accessory bar above the
				keyboard
				// for form inputs)
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				// Don't remove this line unless you know what you are doing. It stops the viewport
				// from snapping when text inputs are focused. Ionic handles this internally for
				// a much nicer keyboard experience.
				cordova.plugins.Keyboard.disableScroll(true);
			}
			if(window.StatusBar) {
				StatusBar.styleDefault();
			}
		});
	});
	
	app.run(function ($rootScope, $state, AuthService, AUTH_EVENTS) {
	  $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {
	 
		if ('data' in next && 'authorizedRoles' in next.data) {
		  var authorizedRoles = next.data.authorizedRoles;
		  if (!AuthService.isAuthorized(authorizedRoles)) {
			event.preventDefault();
			console.log('12345678');
			$state.go($state.current, {}, {reload: true});
			$rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
		  }
		}
	 
		if (!AuthService.isAuthenticated()) {
		 if(next.name=='companylist'){
			  console.log(AuthService.isAuthenticated());
			  console.log('NOt log in student');
			  event.preventDefault();
			  $state.go('student1');
		  }
			
		  if(next.name=='cdetails'){
			  console.log(AuthService.isAuthenticated());
			  console.log('NOt log in student');
			  event.preventDefault();
			  $state.go('student1');
		  }
		  if(next.name=='studentview'){
			  console.log('NOt log in student');
			  event.preventDefault();
			  
			  $state.go('student1');
		  }
	  };
	  
	  	if (!AuthService.isAuthenticatedcmp()) {
		 
		  if(next.name=='companyview'){
			  console.log('NOt log in company');
			  event.preventDefault();
			  $state.go('company1');
		  }
		  if(next.name=='companyevent'){
			   console.log(AuthService.isAuthenticatedcmp());
			  console.log('NOt log in company');
			  event.preventDefault();
			  $state.go('company1');
		  }
		  if(next.name=='companystudent'){
			  console.log('NOt log in company');
			  event.preventDefault();
			  $state.go('company1');
		  }
		   if(next.name=='clgwisestu'){
			  console.log('NOt log in company');
			  event.preventDefault();
			  $state.go('company1');
		  }
	  };
	  if (!AuthService.isAuthenticatedclg()) {
		 
		  if(next.name=='listclg'){
			  console.log('NOt log in clg');
			  event.preventDefault();
			  $state.go('clg1');
		  }
		  if(next.name=='cd'){
			  console.log('NOt log in clg');
			  event.preventDefault();
			 $state.go('clg1');
		  }
		  if(next.name=='sd'){
			  console.log('NOt log in clg');
			  event.preventDefault();
			  $state.go('clg1');
		  }
	  };	  
	  
	  
	});
	});
}());
