function traping_rain_water(arr,n){
    let left= new Array(n),right = new Array(n),water=0
    left[0]=arr[0]
    right[n-1]=arr[n-1]
    for(let i =1,j=n-2;i<n;i++,j--){
        left[i]=Math.max(left[i-1],arr[i])
        right[j]=Math.max(right[j+1],arr[j])
    }
    for(i=0;i<n;i++){
        water+=Math.min(left[i],right[i])-arr[i]
    }
    return water
}
arr=[4,2,0,3,2,5]
console.log( traping_rain_water(arr,arr.length))