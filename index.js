
     function write_response(){
        let verify_statement = document.getElementById('verifyStatment')
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
       
        verify_statement.innerHTML = "Welcome Please Verify " + " Your task is " + (caseData.tasks) + " SL Tag: " + (caseData.slTag) + " Order #: " + (caseData.orderId) 
        + " RMA #: " + (caseData.rma);
       
  
      }
  
      function para(){
        let compiled_all = document.getElementById('compileAll')
        let caseData = {   
          id: Date.now(),
          tasks: document.getElementById('task').value,
          slTag: document.getElementById('slTagId').value,
          orderId: document.getElementById('orderId').value,
          welcome: document.getElementById('welcome').value,
          closing: document.getElementById('closing').value,
          signature: document.getElementById('signature').value,
          sbtLevel: document.getElementById('sbtLevel').value,
          rmaId: document.getElementById('rmaId').value
        }
        
        if (caseData.tasks == "Delay In Provisioning"){
               
          compiled_all.innerHTML = (caseData.welcome) + " We regret to inform you that during the provisioning of your recent order(s)# " + (caseData.orderId) + " we encountered a delay in provisioning. This delay is due to " +  (caseData.tasks) + " We will provide more information as it becomes available to us. Please let us know if you have any further questions or concerns and we would be happy to assist you."
          
        }
        else if (caseData.tasks == "Net App Drive Swap"){
  
        compiled_all.innerHTML = (caseData.welcome) + " We regret to inform you that during the provisioning of your recent order(s)# " + (caseData.orderId) + " we encountered a delay in provisioning. This delay is due to " +  (caseData.tasks) + " We will provide more information as it becomes available to us. Please let us know if you have any further questions or concerns and we would be happy to assist you."
  
        }
        else if (caseData.tasks == "Hot Swap"){
  
        compiled_all.innerHTML = (caseData.welcome) + " Greetings, Please standby while we prepare a drive for the hot swap of HDD<number> . "
        }
        else if (caseData.tasks == "Hot Swap Done"){
  
        compiled_all.innerHTML = (caseData.welcome) + " HDD<number> has been hot-swapped / replaced. Status light indicates rebuild in progress. Please run the following commands and upload the results: /opt/MegaRAID/storcli/storcli64 \n /c0 show all /opt/MegaRAID/storcli/storcli64 \n /c0 /eall /sall show all | grep -iE \n det|cou|tem|SN|S.M|fir \n /opt/MegaRAID/storcli/storcli64 /c0 /eall /sall show rebuild \n This will help us to confirm that the drive swap was successful. "
        }
        else if (caseData.tasks == "Network Port Upgrade"){
  
        compiled_all.innerHTML = (caseData.welcome) + " We regret to inform you that during the provisioning of your recent order(s)# " + (caseData.orderId) + " we encountered a delay in provisioning. This delay is due to " +  (caseData.tasks) + " We will provide more information as it becomes available to us. Please let us know if you have any further questions or concerns and we would be happy to assist you."
        }
        else if (caseData.tasks == "Maintenance 30 minute Warning"){
  
        compiled_all.innerHTML = (caseData.welcome) + "Hello \nAt 1 am PST or in about 30 min we will start the maintenance on your server sjc0301dbmn004  To add 2X 8Tb Hard Drives. Per the maintenance these are the 29th and 30th drives, how ever because we number our drives starting at 0 these will be identified as HDD28 and HDD29. This does not require down time and will be hot added. Once added we will update you again shortly before the maintenance starts. "
        }
        else if (caseData.tasks == "Maintenance Start"){
  
        compiled_all.innerHTML = (caseData.welcome) + "<br> <br> It is now 1 am PST (-0800 GMT). We will now start the maintenance on your server 'sjc0301dbmn004' To add 2X 8Tb Hard Drives. Per the maintenance these are the 29th and 30th drives, how ever because we number our drives starting at 0 these will be identified as HDD28 and HDD29. This does not require down time and will be hot added. We will update you again shortly after the maintenance is completed. <br><br><br><br> FINISHED<br><br>  Hello, <br> We have completed the maintenance on your server 'sjc0301dbmn004' To add 2X 8Tb Hard Drives. Per the maintenance these are the 29th and 30th drives, how ever because we number our drives starting at 0 these will be identified as HDD28 and HDD29. Drive lights indicate minimal activity. Please verify that you can see the new drives. HDD28 : ZA19AJLE HDD29 : ZA19AJDY "
      }
        };
  