/* No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/

let userNames:string[] = ['admin', 'Shahid', 'inam', 'naveed','farooq']

function greatUsers(usernames:string[]):void {
    if (usernames.length === 0) {
        console.log(`we need to find some users `);
        return;
    } 

    for (const username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log(`Hello thank you for login in again`);
        } else {
            console.log(`Hello ${username}, thank you for login in again`);
    }
}
}
console.log(`for non empty username:\n`)
greatUsers(userNames);

//to make array empty
userNames = [];

console.log(`\n\n for empty users names\n`)
greatUsers(userNames)

export{};
