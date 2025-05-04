 let userInput;
 while(true){
     userInput = prompt( "Enter"+" Your task 1: ");
     if (userInput==null){
        alert("no tasks completed ,let's get to work!")// if the user presses cancel this alert message should pop out!
         continue; //back to prompt.
     }
     
  switch (userInput){
      case "todo":
          console.log("'Title:' Make correction to JSL01, status: todo");// will show on the console brower if user entered todo.
          break;
          case "doing":
              console.log("Title:"); // will show on the console browser if user entered doing.
              break;
              case "done":
                  console.log("Title: Make correction to JSL01, status: done"); //will show on the console  browser if user entered done.
                  break;
                  default: //If all the options were not met it will result to this alert msg.
                 alert("INVALID STATUS. PLEASE ENTER 'TODO', 'DOING' or 'DOING'.".toLowerCase());
                      continue; //back to prompt.
  }
  break; //only reaches here if input was vaild.
  }