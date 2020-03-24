////////////////////////////////////////////////
//////////     OBJECT LITERALS     /////////////
////////////////////////////////////////////////

// These should only be used if you're only creating the object one time
// If you're going to repeat yourself, use another method

var user = {
    username: 'xboxslayer23',
    avatar: 'default-avatar',
    liveSubscription: true
  }
  
  
  ////////////////////////////////////////////////
  //////////  CONSTRUCTOR FUNCTIONS  /////////////
  ////////////////////////////////////////////////
  
  //this returns an object that is a user
  
  //named function method
  function User(username,avatar='default-image'){
    this.username = username;
    this.avatar = avatar;
  }
  console.log(new User('jim','image'));
  
  //arrow function method
  const User = (username,avatar='default-image') => {
    this.username = username;
    this.avatar = avatar;
  }
  console.log(new User('jim','image'));
  
  
  
  ////////////////////////////////////////////////
  //////////    FACTORY FUNCTIONS    /////////////
  ////////////////////////////////////////////////
  
  // factory functions are functions that are a factory to create objects
  //these are more flexible because you don't rely on correct parameter placement
  
  //named function method
  function createUser({username,avatar='default-image'}){
    return({
      username,
      avatar
      //username: username - also correct
    })
  }
  let user = createUser({username: 'phil',avatar: 'image'});
  
  //arrow function method
  const createUser = ({username,avatar}) => ({
    username,
    avatar
    //username: username - also correct
  })
  let user = createUser({username: 'phil',avatar: 'image'});
  
  
  //THIS IS THE RECOMMENDED METHOD BECAUSE IT WILL CREATE AN EMPTY OBJECT WITH NO ATTRIBUTES ARE PASSED
  const createAdmin = ({username,avatar}={}) => ({
    username,
    avatar
    //username: username - also correct
  });
  let admin = createAdmin({username:'john',avatar:'image'});
  
  
  
  ////////////////////////////////////////////////
  //////////   CLASS CONSTRUCTORS   /////////////
  ////////////////////////////////////////////////
  
  //classes are more organized, less subject to change, and can handle inheritance
  class User{
    constructor(username,avatar){
      this.username = username;
      this.avatar = avatar;
    }
    login(){
      alert('You have been logged in..');
    }
  }
  let user = User('Jim','image');
  
  
  // this is an example of inheritance - in the constructor we must run 
  // the 'super()' method to first use the class User constructor
  class Admin extends User{
    constructor(username,avatar,accessLevel){
      super(username,avatar);
      this.accessLevel = accessLevel;
    }
    removeAdminRole(){
      this.accessLevel = 0;
      alert('You are no longer an admin');
    }
  }
  let admin = Admin('Albert','image',3);
  
  
  ////////////////////////////////////////////////
  ////////          CLOSURES         ///////////
  ////////////////////////////////////////////////
  
  
  
  
  
  ////////////////////////////////////////////////
  ////////  PROTOTYPING CONSTRUCTORS  ///////////
  ////////////////////////////////////////////////
  
  // this is less recommended as it is not memory safe.
  // ideally you would use closures
  // you can create the function directly using the above options as well
  
  User.prototype.getUsername = function(){
    return this.username;
  }
  
  ////////////////////////////////////////////////
  ////////   SELF-INVOKING FUNCTIONS   ///////////
  ////////////////////////////////////////////////
  
  //self invoking functions; counter is equal to itself + 1
  const counter = (
    function(){//this anonymous function only runs one time since we're invoking at the end
      let counter = 0;
      return function(){//this is the value of counter
        return counter+=1;
      }
    }
  )();
  counter();
  
  