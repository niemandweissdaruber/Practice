let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};

//Write code under this line
user.mood = 'happy';
user['full time'] = 'true';
user.hobby = 'skydiving';
user.premium = 'false';

const keys = Object.keys(user);

for (const key of keys) {
  message += ` ${key}: ${user[key]} \n `;
}

// Write code under this line

console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */
