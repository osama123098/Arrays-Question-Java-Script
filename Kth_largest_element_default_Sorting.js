function kth_element(arr , k){
    arr.sort()
    for(let  i =arr.length-1;i>=0;i--){
        k--;
        if(k==0){
            console.log(arr[i]);
            break;
        }
    }
}

arr = [3,2,1,5,6,4]
kth_element(arr,2)