const accountId = 12;
let accountEmail = "bk@gmail.com"
var accountPassword = "12345"
accountCity = "Jersey City"
let accountState;


// accountId = 2
// console.log(accountId); // TypeError: Assignment to constant variable.

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])

/*
┌─────────┬────────────────┐
│ (index) │     Values     │
├─────────┼────────────────┤
│    0    │       12       │
│    1    │ 'bk@gmail.com' │
│    2    │    '12345'     │
│    3    │ 'Jersey City'  │
│    4    │   undefined    │
└─────────┴────────────────┘ */


/* We will always use let */
/* const can not be changed */
/* not assigning value means undefined */