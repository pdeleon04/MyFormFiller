<script> 
  
  let caseDataSet = []; //Array of user inputs for refrence use in the auto response output  
  
  
  const addInfo = (ev)=>{
      ev.preventDefault(); //cancels Submit action
      
     
      let caseData = {   
        id: Date.now(),
        tasks: document.getElementById('task').value,
        slTag: document.getElementById('slTagId').value,
        orderId: document.getElementById('orderId').value,
        welcome: document.getElementById('welcome').value,
        closing: document.getElementById('closing').value,
        signature: document.getElementById('signature').value,
        sbtLevel: document.getElementById('sbtLevel').value,
        rma: document.getElementById('rmaId').value
      }   
      
      caseDataset.push(caseData);
      document.forms[0].reset();

      //diplay Purposes
      console.warn('Please double check you info' , {caseDataset} );
      let pre = document.querySelector('#msg pre');
      pre.textContent + '\n' + JSON.stringify(caseDataSet, '\t', 2);
    
    }
    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('btn').addEventListener('click', addInfo);
    });
    
    

    </script>