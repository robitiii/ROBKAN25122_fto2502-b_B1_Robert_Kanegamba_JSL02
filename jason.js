//Expected Outcome

//A functional task entry system that ensures accurate data collection, validation, and structured storage while maintaining clean and well-documented code for easy future modifications.
 
//Prompt input example

//- The program must prompt users for task 1 title, descrition and status inputs, it must do the same for task 2 information

//Invalid status

//- If the user enters a status other than `todo`, `doing` or `done`, the program must alert the user of this and return to prompting them to enter a status.

//Console log

//- When there is a completed task:
const userInput = prompt("Enter your task 1 title, description or status");

let meInput = "done";
switch (userInput){
    case "todo":
        console.log("you on the todo list.");
        break;
        case "doing":
            console.log("you are doing this.");
            break;
            case "done":
                console.log("you have completed this.");
                break;
                default:
                    console.log("you have not completed this.");
                    break;
}
