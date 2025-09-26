const getDays=(day1,day2)=>
   console.log(Math.abs(new Date(day1).getDate()-new Date(day2).getDate()))  
  
getDays("June 14, 2019","June 20, 2019") 