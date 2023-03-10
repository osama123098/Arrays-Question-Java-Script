function quick_sort(arr,left,right){
    if (left<right){
        let pivot_index = helper_partition(arr,left,right)
        //left Recursively calls
        quick_sort(arr,left,pivot_index-1)
        //right Recursively calls
        quick_sort(arr,pivot_index+1,right)
    }
}
function helper_partition(arr,left,right){
    let pivot_value = arr[right];
    i = left-1;
    for(let j =left;j<right;j++){

        //swap its two element if current element is less than the pivot element 
        if(arr[j]<=pivot_value){
            i++;
            [arr[j],arr[i]]=[arr[i],arr[j]];
        }
    }
    //swap the pivot element pivot with i+1
    [arr[right],arr[i+1]]=[arr[i+1],arr[right]]; 
    return i+1
}

let arr= [5,2,9,3,7,6,1,8,4]
quick_sort(arr,0,arr.length-1)
console.log(arr)