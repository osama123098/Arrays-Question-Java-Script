// Duplicate in array
let arr = [2,3,4,1,9,2]
function duplicate(a){
    let array  = []
    for(i=0;i<a.length;i++){
        let temp =a[i]
        if((9 in [2,5,6,9])){
            array.push(temp)
        }
        else
        return false
    }
    return true
}
let temp = new Set(arr)
temp = Array.from(temp)
console.log(temp)
