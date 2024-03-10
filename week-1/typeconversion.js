//TYPE CONVERSION IN JAVASCRIPT

let fullname = "Ramandeep kaur";
console.log(typeof fullname);
console.log(typeof (fullname));

let ValueIntNumber = Number(fullname);
console.log(typeof ValueIntNumber);
console.log(ValueIntNumber);

// "21"=> 21
// "21yg"=> NaN
// true => 1; false=>0

let loggedOut="Yes";
let BooleanLoggedOut=Boolean(loggedOut);
console.log(BooleanLoggedOut);

// 1=> true; 0=> false
// ""=> false
// "lovepreet"=>true

let user=45;
let StringUser= String(user);
console.log(StringUser);
console.log(typeof StringUser);
