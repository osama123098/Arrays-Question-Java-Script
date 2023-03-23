function product_execept_self(arr){
    let n = arr.length,product = 1
    let a = new Array()
    
    //adding prefex in the array
    for(let i = 0;i<n;i++){
        
        //product of left array
        product*= arr[i]
        a.push(product)

    }
    //traverse from right and updating the output array at the same time 
    product=1
    for(i=n-1;i>0;i--){

        //adding right index to array by calculating left
        a[i]=a[i-1]*product
        
        //calculating right
        product*=arr[i]
    }   
    a[0]=product
    return a
}
arr=[-3,2,4,1]
console.log(product_execept_self(arr))