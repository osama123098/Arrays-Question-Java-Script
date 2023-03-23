function min_rotated_sorted(arr,lu,hi){
    while(lu<hi){

        mid = Math.floor(lu+hi/2)
        if(arr[mid]>arr[mid+1]){
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
let arr = [3,4,5,6,7,8,9,1,2]
console.log(min_rotated_sorted(arr,0,arr.length-1))