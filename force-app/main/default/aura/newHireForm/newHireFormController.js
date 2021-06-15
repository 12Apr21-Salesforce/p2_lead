({    
     doInit : function(cmp, event, helper) {
        cmp.set('v.columns', [
            {label: 'FirstName', fieldName: 'FirstName', type: 'text'},
            {label: 'LastName', fieldName: 'LastName', type: 'text'},
            {label: 'Email', fieldName: 'Email', type: 'email'},
            {label: 'Phone', fieldName: 'Phone', type: 'number'}
        ])
        var action = component.get("c.getCandidateInfo");
    
        action.setCallback(this, function(data) {
            component.set("v.Contacts", data.getReturnValue());
        });
        $A.enqueueAction(action);
        },

        clickCreateCandidate : function(component, event, helper) {

        let fields = component.find("candidateForm");
        if (fields) {
            fields = Array.isArray(fields) ? fields : [fields];
        }
        else {
            fields = [];
        }
        const valid = fields.reduce((validSoFar, field) => {
    
            return (validSoFar && field.reportValidity());
        }, true);
    
        if (!valid) {
            const toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "message": "Correct any mistakes before adding the client.",
                "type": "error"
            });
            toastEvent.fire();
        }
        else {
            
            component.find("editForm").submit();
            const toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "message": "Candidate Added Successfully",
                "type": "success"
            });
            toastEvent.fire();
         //   helper.candidateFormTrueToggle(component, event, helper);
        }
    },
    
    handleSelect : function(component, event, helper) {
        var selectedRows = event.getParam('selectedRows'); 
        var setRows = [];
        for ( var i = 0; i < selectedRows.length; i++ ) { 
            setRows.push(selectedRows[i]);
        }
        component.set("v.selectedContacts", setRows); 
         
    },
    
    //Functions for Agent List
    showSelectedCandidates: function(component, event, helper) {
        var records = component.get("v.selectedContacts");
        if(records.length > 0){
        helper.candidateListTrueToggle(component, event, helper);
    
    } else {
        const toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "message": "Select At Least One Candidate",
            "type": "error"
        });
        toastEvent.fire();
        }
    },
    
    selectNewAgents: function(component, event, helper){
        helper.candidateListTrueToggle(component, event, helper);
        component.set("v.selectedContacts", []);
    },
    
/*     addAnotherAgents: function(component, event, helper){
        helper.candidateListTrueToggle(component, event, helper);
        helper.candidateFormTrueToggle(component, event, helper);
    } */
 })