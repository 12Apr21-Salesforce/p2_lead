({    
    /* clickCreateCandidate: function(component, event, helper) {    
     if(helper.validateItemForm(component)){
         // Create the new item
         var newCandidate = component.get("v.newCandidate");
         helper.createItem(component, newCandidate);
         }        
     }*/
        handleSuccess : function(component, event, helper) {
         var toastEvent = $A.get("e.force:showToast")
         toastEvent.setParams({
             "title": "Success!",
             "message": "The Candidate has been updated.",
             "type": "success"
         })
         toastEvent.fire()
         var contactId = event.getParams().response.id
         component.set('v.contactId', contactId)
         helper.showHide(component)
     },
         handleNewCandidate : function(component, event, helper) {
         helper.fireCreateEvent(component)
     },
         clickCreateMoreCandidates: function(component, event, helper) {
         // component.set('v.isVisible', false)
         // component.set('v.isVisible', true)
         let fields = component.find('field')
         fields.forEach(function(f) {
             f.reset()
         })
         helper.showHide(component)
     }
 })