function find_min_operation(arr){
    let i = 0, j = arr.length-1,ans=0
    while (i<=j){
        if(arr[i]==arr[j]){
            i++;
            j--;
        }
        else if(arr[i]>arr[j]){
            j--
            arr[j]+=arr[j+1]
            ans++
        }
        else{
            i++;
            arr[i]+=arr[i-1];
            ans++;
        }
    }
    return ans
}
let arr = [1, 4, 5, 9, 1];
console.log(find_min_operation(arr))
console.log(arr)