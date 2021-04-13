
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
          rma: document.getElementById('rmaId').value,
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
          rmaId: document.getElementById('rmaId').value,
          startDateTime: document.getElementById('dtStart').value,
          host: document.getElementById('hostName').value,
          reason: document.getElementById('reason').value,
          downTime: document.getElementById('downT').value,
          newHDD: document.getElementById('newHDD').value,
          oldHDD: document.getElementById('oldHDD').value,
          publicIP: document.getElementById('publicIP').value,
          privateIP: document.getElementById('privateIP').value,
          IPMIIP: document.getElementById('IPMIIP').value,
        }
        


        if (caseData.tasks == "Delay In Provisioning"){
               
          compiled_all.innerHTML = (caseData.welcome) + " We regret to inform you that during the provisioning of your recent order(s)# " + (caseData.orderId) + " we encountered a delay in provisioning. This delay is due to " +  (caseData.tasks) + " We will provide more information as it becomes available to us. Please let us know if you have any further questions or concerns and we would be happy to assist you." + "<br /><br /><br />" + (caseData.closing) + "<br/>" + (caseData.signature) + "<br />" + (caseData.sbtLevel)
          
        }
        else if (caseData.tasks == "Net App Drive Swap"){
  
        compiled_all.innerHTML = (caseData.welcome) + " We regret to inform you that during the provisioning of your recent order(s)# " + (caseData.rmaId) + " we encountered a delay in provisioning. This delay is due to " +  (caseData.tasks) + " We will provide more information as it becomes available to us. Please let us know if you have any further questions or concerns and we would be happy to assist you." + " <br /><br /><br />" + (caseData.closing) + "<br/>" + (caseData.signature) + "<br />" + (caseData.sbtLevel)
  
        }
        else if (caseData.tasks == "Hot Swap"){
  
        compiled_all.innerHTML = (caseData.welcome) + " Greetings, Please standby while we prepare this new drive " + (caseData.newHDD) + " for the hot swap of" + (caseData.oldHDD) + "." + "We will update you as soon as we finish." + "<br /><br /><br />"+ (caseData.closing) + (caseData.signature) + " <br />" + (caseData.sbtLevel) + "<br/><br/><br/>FINISHED REPLY:<br/><br/>" + (caseData.welcome) + "We have completed the task at hand." + (caseData.oldHDD) + " has been hot-swapped with "+ (caseData.newHDD) + " and replaced in the hardware profile. The Status light indicates a rebuild is in progress. Please run the following commands and upload the results:<br /><br /> /opt/MegaRAID/storcli/storcli64 <br /> /c0 show all /opt/MegaRAID/storcli/storcli64 <br /> /c0 /eall /sall show all | grep -iE <br /> det|cou|tem|SN|S.M|fir <br /> /opt/MegaRAID/storcli/storcli64 /c0 /eall /sall show rebuild <br /> This will help us to confirm that the drive swap was successful." + "<br/><br/><br/>" + (caseData.closing) + "<br/ >" + (caseData.signature) + "<br />" + (caseData.sbtLevel)
        }

        //Network Port Upgrade
        
        else if (caseData.tasks == "Network Port Upgrade"){
  
        compiled_all.innerHTML = (caseData.welcome) + " We regret to inform you that during the provisioning of your recent order(s)# " + (caseData.orderId) + " we encountered a delay in provisioning. This delay is due to " +  (caseData.tasks) + " We will provide more information as it becomes available to us. Please let us know if you have any further questions or concerns and we would be happy to assist you."+ "<br/><br/><br/>"+ (caseData.closing) + "<br/>" + (caseData.signature) + "<br />"+(caseData.sbtLevel)
        }
        
        //Scheduling a Maintnence.

        else if (caseData.tasks == "Schedule a Maintnence"){
  
          compiled_all.innerHTML = (caseData.welcome) + "<br/><br/> " + (caseData.reason) + " does not require down time. We should schedule this maintenance immediately, or we can set up a scheduled maintenance. Let us know what is best for you, we will do our best to accommodate your request. Due to COVID-19 please be aware due t a limited staff some maintnece windows may be limited.<br/><br>Here are the available windows:<br/><br/>Any day of the week, 1:00am - 4:00am PST (GMT-8)<br/>Any day of the week, 9:00am - 12:00pm PST (GMT-8)<br/>Any day of the week, 5:00pm - 8:00pm PST (GMT-8) <br/><br/>Please let us know how you would like to proceed, we shall be awaiting your reply." + "<br /><br /><br />" + (caseData.closing) + (caseData.signature) + "<br />"+ (caseData.sbtLevel) + "<br/><br/>DOWN TIME REQUIRED!<br/><br/><br/>" + (caseData.welcome) + "<br/><br/> " + (caseData.reason) + "This procedure DOES REQUIRE DOWN time to fix. With that said, we could schedule this maintenance immediately, or we can set up a scheduled maintenance window at future time and date. Let us know what is best for you, we will do our best to accommodate your request. Due to COVID-19 please be aware due to a limited staff some maintnece windows may be limited.<br/><br>Here are the available windows:<br/><br/>Any day of the week, 1:00am - 4:00am PST (GMT-8)<br/>Any day of the week, 9:00am - 12:00pm PST (GMT-8)<br/>Any day of the week, 5:00pm - 8:00pm PST (GMT-8) <br/><br/>Please let us know how you would like to proceed, we shall be awaiting your reply.<br /><br /><br />"+ (caseData.closing) + "<br/>" + (caseData.signature) + "<br />"+(caseData.sbtLevel)
          }
       
        //Maintenance 30 min Warning and Start with finish
        else if (caseData.tasks == "Maintenance 30 minute Warning"){
  
        compiled_all.innerHTML = (caseData.welcome) + "Hello,<br /> <br />At" + (caseData.startDateTime) + "or in about 30 min we will start the maintenance on your server" + (caseData.host) + "of" (caseData.reason) + "."(caseData.downTime) + ". We will update you again before the maintenance starts. If you need to cancel or change the start time or date please contact us IMMEDIATELY." + "<br /><br /><br />"+ (caseData.closing) + (caseData.signature) + "<br />"+(caseData.sbtLevel)
        }
        else if (caseData.tasks == "Maintenance Start"){

        compiled_all.innerHTML = (caseData.welcome) + "<br> <br> It is now" (caseData.startDateTime) + "." + " We will now start the maintenance on your server"+ (caseData.host) +" for " (caseData.reason) + " . " + (caseData.downTime) + ". " + " <br><br><br><br> FINISHED <br><br>" (caseData.welcome) + " We have completed the maintenance on your server " + (caseData.host) + (caseData.reason) + ". Please verify that the task is complete. If you have any questions or concerns please reach out to us. If you are satisfied with the" + (caseData.reason) + "of the host" + (caseData.host)+ "," + " may we close this ticket?" + "<br /><br /><br />"+ (caseData.closing) + "<br/>" + (caseData.signature) + "<br />"+(caseData.sbtLevel)
        
        }

        else if (caseData.tasks == "Ping Test"){

        compiled_all.innerHTML = "COPY and PASTE this in SSH:<br/><br/>" + " echo “IPMI IP” && ping -c3" + (caseData.IPMIIP) + " && echo “PRIVATE IP” && ping -c3" + (caseData.privateIP) +" && echo “PUBLIC IP” && ping -c3 " + (caseData.publicIP) 
        
        }

        else if (caseData.tasks == "Maintenance Start"){

        compiled_all.innerHTML = (caseData.welcome) + "<br> <br> It is now" (caseData.startDateTime)+"."+" We will now start the maintenance on your server"+ (caseData.host) +" for " (caseData.reason) + " . " + (caseData.downTime) + ". " + " <br><br><br><br> FINISHED <br><br>" (caseData.welcome) + " We have completed the maintenance on your server " + (caseData.host) + (caseData.reason) + ". Please verify that the task is complete. If you have any questions or concerns please reach out to us. If you are satisfied with the" + (caseData.reason) + "of the host" + (caseData.host)+ "," + " may we close this ticket?"+ "<br /><br /><br />"+ (caseData.closing) + "<br/>" + (caseData.signature) + "<br />"+(caseData.sbtLevel)
    
        }

        };
  