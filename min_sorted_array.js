function min_rotated_sorted(arr,lu,hi){
    if(arr[lu]<=arr[hi]){
        //array is sorted and not rotated at all
        return arr[0]
    }
    while(lu<=hi){

        let mid = Math.floor((lu+hi)/2)
        if(arr[mid]>arr[mid+1]){
            return arr[mid+1]
        }
        else if (arr[mid]<arr[mid-1]){
            return arr[mid]
        }
        if(arr[lu]<arr[mid]){
            lu =mid+1;
        }
        else{
            hi = mid-1;
        }
    }
}
let arr = [1]
console.log(min_rotated_sorted(arr,0,arr.length-1))