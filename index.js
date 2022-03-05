

//     Q#1, the printing problem that we disucssed on Sunday.
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1


let n=5;




for(var i=n;i>=0;i--){
    let bag=""
    for(var j=i;j>=0;j--){
        bag=bag+j+" "
    }
    console.log(bag)
}


// Q#2, given a 2D (two dimensional) array, print the total sum of all elements in each array.
// So, if the input is,
// [
// [1, 2, 3, 4, 5 ],
// [5, 4, 3, 2, 1],
// [1, 1, 1, 1, 1]
// ]

// Then the output should be : 35


let mat= [
     [1, 2, 3, 4, 5 ],
    [5, 4, 3, 2, 1],
     [1, 1, 1, 1, 1]
     ]
  
  let m=mat.length;
  let o=mat[0].length;
  let sum=0;
  for(var i=0;i<m;i++){
      for(var j=0;j<o;j++){
          sum=sum+mat[i][j]
      }
  }
  console.log(sum)

    


       
       
        
    
    
   

// Q#3, given a m x m 2D array, find the sum of all the element on the diagonal.
// Note : m x m 2D array means an array which will have same number of rows and columns.
// For example, if the input is
// [
// [1, 2, 3, 4, 5 ],
// [5, 4, 3, 2, 1],
// [1, 1, 1, 1, 1],
// [1, 2, 3, 4, 5 ],
// [5, 4, 3, 2, 1]
// ]

// The output should be the sum of the diagonal elements only (marked in bold) : 11 (1 + 4 + 1 + 4+ 1)


  let mat1=[
     [1, 2, 3, 4, 5 ],
     [5, 4, 3, 2, 1],
     [1, 1, 1, 1, 1],
     [1, 2, 3, 4, 5 ],
     [5, 4, 3, 2, 1]
     ]

     let p=mat1.length;

    

     let bag2=0;

     for(var h=0;h<p;h++){
         for(var f=0;f<p;f++){
             if(h==f){
                 bag2=bag2+mat1[h][f]
             }
         }
         
     }
     console.log(bag2)