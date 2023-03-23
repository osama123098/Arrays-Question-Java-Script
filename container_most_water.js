function container_most_water(arr){
    let left =0, right = arr.length-1,max =0
   // max and min to find maximum and minimum length
    
    while(left<right){
        let temp = (right-left)*Math.min(arr[left],arr[right])
        max = Math.max(max,temp)
        if(arr[left]<arr[right]){
            left++
        }
        else{
            right--
        }
    }
    return max;
}
 
arr =[1,8,6,2,5,4,8,3,7]
console.log(container_most_water(arr))