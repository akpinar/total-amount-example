var input = { rate:[0, 1, 8, 18, 18, 1],  amount:[10, 15, 12, 23, 30, 43], code:[0071, 0071, 0073, 0073, 0071, 0071] }

const findTotalAmount = () => {
   for(let i=0;i<6;i++){
      for(j = 0; j < 6;j++){
         if(i!=j){
            if((input.rate[i]==input.rate[j]) && (input.code[i] == input.code[j])){
                  input.amount[i] = input.amount[i] + input.amount[j]
                  input.rate.splice(j, 1);
                  input.code.splice(j, 1);
                  input.amount.splice(j, 1);
                  input={
                  ...input,
                     code:[...input.code.map((i)=>(String(parseInt(i.toString(8))).padStart(4,'0')))]
                  }
                  console.log('rate',input.rate);
                  console.log('amount',input.amount);
                  console.log('code',input.code);

            }
         }
      }
   }
 }
 findTotalAmount();

