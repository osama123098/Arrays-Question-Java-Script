// Duplicate in array
arr = [1,2,3,4,5,6,7,8,9,1]
function duplicate(a){
    arr  = []
    for(i=0;i<a.length;i++){
        if(!(a[i]in arr)){
            arr.push(a[i])
        }
        else
        return true
    }
    return false
}
console.log(duplicate(arr))