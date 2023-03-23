function sum_pair(arr,sum){
    //Finding the largest element index
    //using binary search
    let n = arr.length
    let hi=binary_search(arr,0,n-1)
    // finding the smallest element index
    let lu = (hi + 1) % n 
    //runs until they meet
    while(lu!=hi){
        //if pair is find we return true
        if(arr[lu]+arr[hi]==sum){
            return true;
        }
        //if sum is greater move to smaller index
        else if(arr[lu]+arr[hi]>sum){
            hi =(n + hi - 1) % n
        }
        // if sum is smaller move to larger index
        else{
            lu = (lu+1) % n
        }
    }
    return false

}
function binary_search(arr,lu,hi){
    //array is sorted at all 
    if(arr[lu]<arr[hi]){
    return arr[arr.length]
    }
    // we return the largest element index
    while(lu<=hi){
        let mid = Math.floor((lu+hi)/2);
        if(arr[mid]>arr[mid+1]){
            return mid
        }
        else if(arr[mid]<arr[mid-1]){
            return mid-1;
        }
        else if(arr[lu]<arr[mid]){
            lu = mid+1
        }
        else hi = mid-1

    }  
}
arr = [11, 15, 6, 8, 9, 10]
console.log(sum_pair(arr,9))