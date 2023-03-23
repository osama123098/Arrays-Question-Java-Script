function merge_intervals(arr){
    //sorting the array 
    arr.sort(function(a,b){return a[0]-b[0]})

    //making array 
    let merge_list = new Array(arr[0])
    for(let i=0; i < arr.length-1; i++){

        let temp =  merge_list[merge_list.length-1]
        if(temp[1]>arr[i+1][0]){
            //overlaping accur
            temp[1] = Math.max(temp[1],arr[i+1][1])
        }else{
            merge_list.push(arr[i+1])
        }
    }
    return merge_list
}
let arr = [[1,3],[2,4],[6,8],[9,10]]
console.log(merge_intervals(arr))