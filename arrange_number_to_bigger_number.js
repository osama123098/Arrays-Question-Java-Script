function arrange_number_to_bigger(arr){
    //we are use binary sort here
    let left = 0, right = arr.length-1
    
    //random function
    let pivot = (min, max)=> Math.floor(Math.random()*(max-min)+min)

    function quick_sort(arr,l,r){
        if(l<r){
            
            let  pivot_index = partition(arr,l,r);
            //left
            quick_sort(arr,l,pivot_index-1);
            //right
            quick_sort(arr,pivot_index+1,r);
        }
    }
    function partition(a,l,r){

        //randomly select the pivot index
        let pivot_index = pivot(l,r);
        let pivot_value = arr[pivot_index]

        //finding the digit in pivot value
        let count_pivot_digit = 0
        while(pivot_value>0){
            count_pivot_digit++
            pivot_value=Math.floor(pivot_value/ 10)
        }

        //move the pivot index to right
        [a[pivot_index],a[r]]=[a[r],a[pivot_index]];

        let sort_index = l
        for(let i=l; i<r;i++){
            let current_value = arr[i]
            //finding the length of current index
            let count_current = 0
            while(current_value>0){
                count_current++
                current_value = Math.floor(current_value/10)
            }
            current_value = arr[i]

            //check the current value is greater than the other 
            if(((arr[r]*10**count_current)+current_value) < ((current_value*10**count_pivot_digit)+arr[r])){
                [arr[i],arr[sort_index]]=[arr[sort_index],arr[i]];
                sort_index++;
            }
        }
        //rearrange the pivot index
        [arr[sort_index],arr[r]]=[arr[r], arr[sort_index]];

        return sort_index;
    }
    //sort the array according to largest position
    quick_sort(arr,left,right)

    arr.forEach(a=>{process.stdout.write(a.toString())})
}
let arr = [3,30,34,9]
arrange_number_to_bigger(arr)