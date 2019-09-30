console.log("is this connected?")

window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        console.log("Yeah! JQuery is working");
    } else {
        // jQuery is not loaded
        console.log("No, JQuery doesn't work");
    }
}

let toDo = [];

$(document).ready(function(){
    $("#submitButton").click(function(){
        console.log("clicked")

        if ($("#task").val() == ""){
            alert('Please enter a task')
        } else {
            let newToDo = $("#task").val();
            toDo.push(newToDo);
            $("#toDo ul").append('<li>' + newToDo + '</li>');
        }
    });

    $("p").click(function(){
        console.log("completed")

        

            
    })

            

        
    
        console.log(toDo)
})




