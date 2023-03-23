function merge_intervals_optimize(arr){
    
    //sort the array first
    arr.sort(function(a,b){return a[0]-b[0]})
    //find the overlap 
    let index = 0
    for(let i =0 ;i<arr.length-1;i++){
        let temp_0 = arr[index][1] 
        let temp_1 = arr[i+1][1]
        if(arr[index][1]>arr[i+1][0]){
            arr[index][1] = Math.max(arr[index][1],arr[i+1][1])
        }
        else{
            index++;
            arr[index] = arr[i+1]
        }
    }
    arr.splice(index+1)
    return arr

}
let arr = [[1,3],[2,4],[6,8],[9,10]]
console.log(merge_intervals_optimize(arr))