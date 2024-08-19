let Todo=[];
let req=prompt("Enter your request");
while(true){
    if(req=="quit"){
        console.log("Good bye");
        break;
    } else    if(req=="list"){
        console.log("-----------------");
        for(let i=0;i<Todo.length;i++){
            console.log(i,Todo[i]);
        }
        console.log("-----------------");
    } else  if(req=="add"){
        add= prompt("enter list item you want to add");
        Todo.push(add);
        console.log("task was added");
    } else   if(req=="delete"){
        let idx= prompt("enter the task idx");
        Todo.splice(idx,1);
        console.log("tack id delete");
    }else{
        console.log("wrong request");
    }
    req=prompt("Enter your request");
   
}