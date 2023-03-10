function kth_largest_element(arr,k){
    
    // randam function
    let randiant= (min,max)=> Math.floor((Math.random()*(max-min)+min))
    function partition(left,right,pivot_index){
        let pivot = arr[pivot_index];
        
        // move pivot to the end 
        [arr[pivot_index],arr[right]]=[arr[right],arr[pivot_index]];
        
        // move all the element to the left 
        let store_index = left;
        for(i=left;i<right;i++){
            if(arr[i]<pivot){
                [arr[store_index],arr[i]]=[arr[i],arr[store_index]];
                store_index++;
            }
        }
        [arr[right],arr[store_index]]=[arr[store_index],arr[right]];
        return store_index;
    }

    function quick_select(left,right,k_smallest){
        if (left == right)
            return arr[left];
        
        // select random pivot_index between
        let pivot_index = randiant(left,right);

        //find the pivot position in a sorted array
        pivot_index = partition(left,right,pivot_index);

        //the pivot is in its final sorted position
        if(k_smallest==pivot_index)
            return arr[k_smallest];
        
        //go left
        else if(k_smallest<pivot_index)
            return quick_select(left,pivot_index-1,k_smallest);

        // right
        else
            return quick_select(pivot_index+1,right,k_smallest);

    }
    //kth largest is (n -k)th smallest
    return quick_select(0,arr.length-1,arr.length-k)
}
let arr= [3,2,3,1,2,4,5,5,6], k=4
console.log( kth_largest_element(arr,k))
