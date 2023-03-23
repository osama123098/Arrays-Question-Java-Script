function max_product_sub_array(arr){
   let min = arr[0],max = arr[0],max_pro = -Infinity;
   for(let i =1;i<arr.length;i++){
        let temp = max
        if(arr[i]==0){
            min=1
            max=1
            continue
        }
        //swap
        if(arr[i]<0){
            min = Math.max(arr[i], Math.max(arr[i]*min, arr[i]*max))
            max = Math.min(arr[i], Math.min(temp*arr[i],min*arr[i]))
        }
        else{
            max = Math.max(arr[i], Math.max(arr[i]*min, arr[i]*max))
            min = Math.min(arr[i], Math.min(temp*arr[i],min*arr[i]))
        }

        max_pro = Math.max(max,max_pro)
   }
   return max_pro
}
arr = [2, -3, 4, -2, 1, 5, -3]
console.log(max_product_sub_array(arr))