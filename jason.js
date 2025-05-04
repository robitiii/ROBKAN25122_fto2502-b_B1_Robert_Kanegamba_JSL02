 let userInput;
 while(true){
     userInput = prompt( "Enter"+" Your task 1: ");
     if (userInput==null){
        alert("no tasks completed ,let's get to work!")// if the user presses cancel this alert message should pop out!
         continue; //back to prompt.
     }
     
  switch (userInput){
      case "todo":
          console.log("'Title:' Make correction to JSL01, status: todo");
          break;
          case "doing":
              console.log("Title:");
              break;
              case "done":
                  console.log("Title: Make correction to JSL01, status: done");
                  break;
                  default:
                 alert("INVALID STATUS. PLEASE ENTER 'TODO', 'DOING' or 'DOING'.".toLowerCase());
                      continue; //back to prompt.
  }
  break; //only reaches here if input was vaild.
  }