function rain_trap_water(arr){
    let max_left=0,max_right = 0,left=0,right=arr.length-1,water=0
    while(left<right){
        //Iteration start  from left if return true
        if(arr[left]<arr[right]){
            //check max_left is less than array
            if(arr[left]>max_left){
                //we change the left_max value 
                max_left = arr[left]
            }
            else{
                //if this is less we count the value at current inde
                water+=max_left-arr[left]
            }
            left++;
        }
        else{
            //Iteration from right 
            if(arr[right]>max_right){
                //we change the max_right value
                max_right = arr[right]
            }
            else{
                water+=max_right-arr[right]
            }
            right--

        }

    }
    return water
}
arr=[4,2,0,3,2,5]
console.log( rain_trap_water(arr))
