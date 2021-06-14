({
/*     handleAddCandidate: function(component, event, helper) {
    var action = component.get("c.saveCandidate");
    action.setParams({"candidate": newCandidate});
    action.setCallback(this, function(response){
    var state = response.getState();
        if (component.isValid() && state === "SUCCESS") {
            // all good, nothing to do.
            var candidates = component.get("v.candidates");
            candidates.push(response.getReturnValue());
            component.set("v.candidates", candidates);
        }
    });
        $A.enqueueAction(action); 
    } */
    handleEvent : function(cmp, event, helper) {
        cmp.set('v.contactId', event.getParam('contactId'))
        console.log("Here Now: " + cmp.get('v.contactId'))
        helper.getCount(cmp, event.getParam('contactId'))
        helper.init(cmp, event)
    },
    doInit : function(cmp, event, helper) {
        cmp.set('v.columns', [
            {label: 'FirstName', fieldName: 'FirstName', type: 'text'},
            {label: 'LastName', fieldName: 'LastName', type: 'text'},
            {label: 'Email', fieldName: 'Email', type: 'email'},
            {label: 'Phone', fieldName: 'Phone', type: 'number'}
        ])
        helper.doInit(cmp, event)
        helper.getCount(cmp, cmp.get('v.contactId'))
    }
})