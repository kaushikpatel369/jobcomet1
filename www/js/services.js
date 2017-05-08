
angular.module('starter')
 
.service('AuthService', function($q, $http) {
  var LOCAL_TOKEN_KEY = 'yourTokenKey';
  var username = '';
  var isAuthenticated = false;
  var isAuthenticatedcmp = false;
  var isAuthenticatedclg = false;
  var role = '';
  var authToken;
 
  function loadUserCredentials() {
    var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
	console.log(token);
    if (token) {
      useCredentials(token);
    }
  }
 
  function storeUserCredentials(token) {
    window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
    useCredentials(token);
  }
 
  function useCredentials(token) {
    username = token;
	console.log(username);

    authToken = token;
  }
 
  function destroyUserCredentials() {
    authToken = undefined;
    username = '';
    isAuthenticated = false;
    $http.defaults.headers.common['X-Auth-Token'] = undefined;
    window.localStorage.removeItem(LOCAL_TOKEN_KEY);
  }
 
  //--------company credential------------
  
   function loadUserCredentialscmp() {
	   console.log('111111111111111');
	   console.log(isAuthenticatedcmp);
    var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
    if (token) {
      useCredentialscmp(token);
    }
  }
 
  function storeUserCredentialscmp(token) {
	  console.log('222222222222');
	  console.log(isAuthenticatedcmp);
    window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
    useCredentialscmp(token);
  }
 
  function useCredentialscmp(token) {
	  
    username = token;
	console.log(username);
   
    authToken = token;
	console.log('3333333333333333333');
	console.log(isAuthenticatedcmp);
  }
 
  function destroyUserCredentialscmp() {
    authToken = undefined;
    username = '';
		console.log('444444444444444');
	console.log(isAuthenticatedcmp);
    isAuthenticatedcmp = false;
		console.log('555555555555555');
	console.log(isAuthenticatedcmp);
    $http.defaults.headers.common['X-Auth-Token'] = undefined;
    window.localStorage.removeItem(LOCAL_TOKEN_KEY);
  } 
  
  //------------college credential------------
    function loadUserCredentialsclg() {
    var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
    if (token) {
      useCredentialsclg(token);
    }
  }
 
  function storeUserCredentialsclg(token) {
    window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
    useCredentialsclg(token);
  }
 
  function useCredentialsclg(token) {
    username = token;
	console.log(username);
     
    authToken = token;
  }
 
  function destroyUserCredentialsclg() {
    authToken = undefined;
    username = '';
    isAuthenticatedclg = false;
    $http.defaults.headers.common['X-Auth-Token'] = undefined;
    window.localStorage.removeItem(LOCAL_TOKEN_KEY);
  }
  
  var login1 = function(user) {
	  console.log(user);
    return $q(function(resolve, reject) {
		 console.log(user);
		
		$http.post('/studentlogin',user).then(function(response){
					console.log(response);
					console.log(response.data.length);
					if(response.data.length>0)
					{
					 // Make a request and receive your auth token from your server
						storeUserCredentials(user.email);
						     isAuthenticated = true;
							 isAuthenticatedcmp = false;
							 isAuthenticatedclg = false;
						resolve('Login success.');
					}else{
						
						 reject('Login Failed.');
					}
				});
    });
  };
  
  var login2 = function(user) {
	  console.log(user);
    return $q(function(resolve, reject) {
		 console.log(user);
		
		$http.post('/companylogin',user).then(function(response){
					console.log(response);
					console.log(response.data.length);
					if(response.data.length>0)
					{
					 // Make a request and receive your auth token from your server
						storeUserCredentialscmp(user.cmpemail);
						     isAuthenticated = false;
							 isAuthenticatedcmp = true;
							 isAuthenticatedclg = false;
						
						resolve('Login success.');
					}else{
						
						 reject('Login Failed.');
					}
				});
    });
  };
  
  var login3 = function(user) {
	  console.log(user);
    return $q(function(resolve, reject) {
		 console.log(user);
		
		$http.post('/clglogin',user).then(function(response){
					console.log(response);
					console.log(response.data.length);
					if(response.data.length>0)
					{
					 // Make a request and receive your auth token from your server
						storeUserCredentialsclg(user.clgemail);
						 isAuthenticated = false;
						 isAuthenticatedcmp = false;
						 isAuthenticatedclg = true;
						resolve('Login success.');
					}else{
						
						 reject('Login Failed.');
					}
				});
    });
  };
 
  var logout = function() {
    destroyUserCredentials();
  };
  
  var logout2 = function() {
	  	console.log('3333333333333333333');
	console.log(isAuthenticatedcmp);
	
    destroyUserCredentialscmp();
	
	console.log('3333333333333333333');
	console.log(isAuthenticatedcmp);
  };
  var logout3 = function() {
    destroyUserCredentialsclg();
  };
 
  var isAuthorized = function(authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (isAuthenticated && authorizedRoles.indexOf(role) !== -1);
  };
 
  loadUserCredentials();
  loadUserCredentialscmp();
  loadUserCredentialsclg();
 
  return {
    login1: login1,
	login2: login2,
	login3, login3,
    logout: logout,
	logout2: logout2,
	logout3: logout3,
    isAuthorized: isAuthorized,
    isAuthenticated: function() {return isAuthenticated;},
	isAuthenticatedcmp: function() {console.log(isAuthenticatedcmp);return isAuthenticatedcmp;},
	isAuthenticatedclg: function() {return isAuthenticatedclg;},
    username: function() {console.log(username);return username;},
    role: function() {return role;}
  };
})

.factory('AuthInterceptor', function ($rootScope, $q, AUTH_EVENTS) {
  return {
    responseError: function (response) {
      $rootScope.$broadcast({
        401: AUTH_EVENTS.notAuthenticated,
        403: AUTH_EVENTS.notAuthorized
      }[response.status], response);
      return $q.reject(response);
    }
  };
})
 
.config(function ($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
});