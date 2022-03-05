

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