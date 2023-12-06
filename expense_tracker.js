
const expenseList=JSON.parse(localStorage.getItem('expenseList')) || [];
        expenseOnScreen();
        document.querySelector('.js-add-button').addEventListener('click',()=>{
         addExpense();
        });

        function addExpense(){   
          const typeExpense = (document.querySelector('.js-type-expense')).value;
          const dateExpense = (document.querySelector('.js-date-expense')).value;
          const amountExpense = (document.querySelector('.js-expense-amount')).value;

          expenseList.push({
            name:typeExpense,
            date:dateExpense,
            amount:amountExpense
          })
          expenseOnScreen();
          clearItem();
          localStorage.setItem('expenseList',JSON.stringify(expenseList))
  
        }
          
        function expenseOnScreen(){
          let htmlText=``;
        
          const objectHtlm=`
            <caption class="expense-table-caption">Expense List</caption> 
            <tr>
              <th class="expense-table-header">Name</th>
              <th class="expense-table-header">Date</th>
              <th class="expense-table-header">Amount</th>
              <th class="expense-table-header">Remove</th>
            </tr>`
         htmlText+=objectHtlm;
  
          expenseList.forEach((objExpense,i)=>{
            const name=objExpense.name;
            const date=objExpense.date;
            const amount=objExpense.amount;

            const objectHtlm=`
            <tr>  
              <td class="expense-table-data">${name}</td>
              <td class="expense-table-data">${date}</td>
              <td class="expense-table-data">$${(amount/100).toFixed(2)}</td>
              <td class="expense-table-data"><button class="delete-button js-delete-button">Delete</button></td>
            </tr>`;
            htmlText+=objectHtlm;
        });
        document.querySelector('.js-overview-expense').innerHTML=htmlText;

        document.querySelectorAll('.js-delete-button').forEach((dltBtn,index) => {
          dltBtn.addEventListener('click',()=>{
          console.log(index);
          expenseList.splice(index,1);
          expenseOnScreen();
          localStorage.setItem('expenseList',JSON.stringify(expenseList))
          })
        });
        
      }   

      function clearItem(){
        (document.querySelector('.js-type-expense')).value="";
        (document.querySelector('.js-date-expense')).value="";
        (document.querySelector('.js-expense-amount')).value="";
      };
