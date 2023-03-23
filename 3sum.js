 function three_sum(arr){
    let n = arr.length,pair = []
    quick_sort ( arr,0,n-1)
    for(let i=0;i<n;i++){
        if(i>0&&arr[i]==arr[i-1]){
            continue;
        }
        let l = i+1, r = n-1
        while(l<r){
            let three_sum = arr[i]+arr[l]+arr[r]
            if(three_sum==0){
                pair.push([arr[i],arr[l],arr[r]])
                l++;
                while(arr[l]==arr[l-1]){
                    l++
                }

            }
            else if(three_sum>0){
                r--
            }
            else{
                l++
            }
        }
    }
    return pair
 }
 function quick_sort(arr,left,right){
    if(left<right){
        let pivot = partition(arr,left,right)
        //left partition
        quick_sort(arr,left,pivot-1)
        //right partition
        quick_sort(arr, pivot+1, right)
    }
    function partition(arr,left,right){
        let pivot =arr[right]
        let sort_index = left 
        for(let j = left;j<right; j++){
            if(arr[j]<pivot){
                [arr[sort_index],arr[j]]=[arr[j],arr[sort_index]];
                sort_index++;
            }
        }
         //swap the pivot element pivot with i+1
        [arr[right],arr[sort_index]]=[arr[sort_index],arr[right]]; 
        return sort_index
    }
    
}
arr = [-1,0,1,2,-1,-4]

three_sum(arr)