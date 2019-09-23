function mutation(arr){
    var firstString = arr[0].toLowerCase()
    var secondString = arr[1].toLowerCase()

    for (letter of secondString){
        if (firstString.includes(letter)==false){
            return false
        }
    }
    return true
}

console.log(mutation (["marry", "aaarmy"]))