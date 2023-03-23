function search_rotated(a,low,high,target){
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(target==a[mid])
            return mid
        else if(a[low]<=a[mid]){
            // low to mid sorted
            if(a[low]<=target&&target <a[mid])
                high=mid-1;
            
            else
                low=mid+1;

        }
        else
            //high to mid sorted
            if(a[high]>=target&&target >a[mid])
                low = mid+1

            else
                high = mid-1

    }
    return -1
}


let arr = [5,1,3]

let n=arr.length,hi = n-1

console.log( search_rotated(arr,0,hi,3))