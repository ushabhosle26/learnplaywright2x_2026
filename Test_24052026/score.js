function classifyJsBasicsScore(score) {
   if(score>89 && score<=100){ 
    console.log("EXCELLENT");
  }
    
  if (score>74 && score<90) {
   console.log(" GOOD");
  }

  if (score>50 && score<75) {
    console.log("NEEDS_PRACTICE");
  }

  if (score<51) {
    console.log("REVISIT");
  }
  return;
}
classifyJsBasicsScore(97);