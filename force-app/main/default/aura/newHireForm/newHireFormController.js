({    
    /* clickCreateCandidate: function(component, event, helper) {    
     if(helper.validateItemForm(component)){
         // Create the new item
         var newCandidate = component.get("v.newCandidate");
         helper.createItem(component, newCandidate);
         }        
     }*/
/*     handleSubmit : function(cmp, event, helper) {
        event.preventDefault();       // stop the form from submitting
        const fields = event.getParam('fields');
       // fields.LastName = ''; // modify a field
        cmp.find('myRecordForm').submit(fields);
    },
    handleAddCandidate: function(component, event, helper) {
        debugger;
    var action = component.get("c.saveCandidate");
    action.setParams({"candidate": addCandidate});
    action.setCallback(this, function(response){
    var state = response.getState();
        if (component.isValid() && state === "SUCCESS") {
            // all good, nothing to do.
            var candidates = component.get("v.candidates");
            alert(response.getReturnValue());
            candidates.push(response.getReturnValue());
            component.set("v.candidates", candidates);
        }
    });
        $A.enqueueAction(action); 
    }, */
/*      doInit : function(cmp, event, helper) {
        cmp.set('v.columns', [
            {label: 'FirstName', fieldName: 'FirstName', type: 'text'},
            {label: 'LastName', fieldName: 'LastName', type: 'text'},
            {label: 'Email', fieldName: 'Email', type: 'email'},
            {label: 'Phone', fieldName: 'Phone', type: 'number'}
        ])
        helper.doInit(cmp, event)
        helper.getCount(cmp, cmp.get('v.contactId'))
    }, */
    handleCaseSuccess: function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast")
  /*       toastEvent.setParams({
            "title": "Success!",
            "message": "Thank you for submitting a case: " + event.getParam("Id"),
            "type": "success"
        })
        toastEvent.fire() */
    },
        handleSuccess : function(component, event, helper) {
       /*   var toastEvent = $A.get("e.force:showToast")
         toastEvent.setParams({
             "title": "Success!",
             "message": "The Candidate has been updated.",
             "type": "success"
         })
         toastEvent.fire() */
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