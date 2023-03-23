function max_product_sub_array(arr){
    let min = arr[0],max = arr[0],max_pro = arr[0];
    for(let i =1;i<arr.length;i++){
        let temp 
        
        
        temp = Math.max(arr[i], arr[i]*min, arr[i]*max)
        min = Math.min(arr[i], max*arr[i],min*arr[i])

        max =temp
        max_pro = Math.max(max,max_pro)
    }
   return max_pro
}
arr = [2,-3,4,-5,6,-7]
console.log(max_product_sub_array(arr))