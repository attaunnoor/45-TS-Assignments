/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/

//Step1: Print the name of the guest who cant make it
let guestList:string[] = ["Farooq", "Shahid","Inam","Naveed"];
let guestCantCome:string = "Naveed";
console.log(guestCantCome + "is unable to joing us");

//Step2: Modify the list, replacing the name
let newGuest:string = "Jarry Abbas"
let indexofguestCantCome = guestList.indexOf(guestCantCome);
if (indexofguestCantCome !==-1){
    guestList[indexofguestCantCome] = newGuest;
}
console.log(guestList);

//Step3: Print a second set of invitation messages, one for each person who is still in your list
console.log("New List");
guestList.forEach(guest => console.log(`Dear ${guest} Please joing us for dinner`));


export {guestList};

