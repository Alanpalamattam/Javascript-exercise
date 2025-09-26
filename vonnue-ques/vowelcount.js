const vowelcount=(str)=>{
 str=str.toLowerCase();
 let vowels=['a','e','i','o','u'];
 let count=0
 for(let item of str){
    if(vowels.includes(item)){
        count=count+1;
    }
 }
 return count;
 }

 console.log(vowelcount("uhsbOai"))