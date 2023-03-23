function kth_smallest(arr,kth){
    let lu = 0, hi = arr.length-1
    //random Function
    let randiant = (lu,hi)=> Math.floor((Math.random()*(hi-lu)+lu))
    
    function quick_select(kth, lu, hi){
        if(lu==hi){
            //condition if we approch on same index
            return arr[lu]
        }
        //select pivot index
        let pivot_index = randiant(lu, hi)
        
        //find the pivot position in sorted array
        pivot_index = partition(lu,hi,pivot_index)

        //pivot index is on location return the index
        if(pivot_index==kth-1){
            return arr[pivot_index];
        }
        else if(pivot_index>kth-1){
           return quick_select(kth, lu, pivot_index-1)
        }
        else{
           return quick_select(kth,pivot_index+1,hi)
        }
    } 
    // find the pivot position and sorted the array with quick sort
    function partition(lu,hi,pivot_index){
        let pivot_value = arr[pivot_index];
        //shift the value to last index
        [arr[hi],arr[pivot_index]]=[arr[pivot_index],arr[hi]];
        let sort_index = lu
        //arrange the array according to sort index
        for(let i = lu;i<hi;i++){
            if(arr[i] < pivot_value){
                [arr[i],arr[sort_index]]=[arr[sort_index],arr[i]];
                sort_index++;
            }
        }
        //move back the pivot value to its sorted position
        [arr[hi],arr[sort_index]]=[arr[sort_index],arr[hi]];
        
        //add index + 1 because index is start from 0
        return sort_index
    }

    return quick_select(kth,lu,hi)    
}
arr = [7,10,4,3,20,15]
console.log(kth_smallest(arr,3))