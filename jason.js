//Expected Outcome

//A functional task entry system that ensures accurate data collection, validation, and structured storage while maintaining clean and well-documented code for easy future modifications.
 
//Prompt input example

//- The program must prompt users for task 1 title, descrition and status inputs, it must do the same for task 2 information

//Invalid status

//- If the user enters a status other than `todo`, `doing` or `done`, the program must alert the user of this and return to prompting them to enter a status.

//Console log

//- When there is a completed task:
  let userInput;
 while(true){
     userInput = prompt("Enter your task 1: ");
     if (userInput==null){
        alert("no tasks completed let's get to work!")// if the user presses cancel this alert message should pop out!
        continue;
     }
  switch (userInput){
      case "todo":
          console.log("Title: Make correction to JSL01, status: todo");
          break;
          case "doing":
              console.log("Title: Make correction to JSL01, status: doing");
              break;
              case "done":
                  console.log("Title: Make correction to JSL01, status: done");
                  break;
                  default:
                      alert("Invalid status. Please enter 'todo', 'doing' or 'done'.");
                      continue; //back to prompt
  }
  break; //only reaches here if input was vaild
  }