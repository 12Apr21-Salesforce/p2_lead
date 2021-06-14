({
    //init event for agent list retrieval
    doInit : function(component, event, helper) {
        component.set("v.Columns", [
        {label:"Name", fieldName:"Name", type:"text"},
        {label:"City", fieldName:"City", type:"text"},
        {label:"State", fieldName:"State", type:"text"},
        
    ]);
            var action = component.get("c.getContacts");
    
        action.setCallback(this, function(data) {
            component.set("v.Contacts", data.getReturnValue());
        });
        $A.enqueueAction(action);
        },

    //Functions for Client Form
    clickCreateClient : function(component, event, helper) {

    let fields = component.find("clientfields");
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
        
        component.find("Theinputform").submit();
        const toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "message": "Client Added Successfully",
            "type": "success"
        });
        toastEvent.fire();
        helper.clientFormTrueToggle(component, event, helper);
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
showSelectedAgents: function(component, event, helper) {
    var records = component.get("v.selectedContacts");
    if(records.length > 0){
    helper.agentListTrueToggle(component, event, helper);

} else {
    const toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
        "message": "Select At Least One Agent",
        "type": "error"
    });
    toastEvent.fire();
    }
},

selectNewAgents: function(component, event, helper){
    helper.agentListTrueToggle(component, event, helper);
    component.set("v.selectedContacts", []);
},

addAnotherAgents: function(component, event, helper){
    helper.agentListTrueToggle(component, event, helper);
    helper.clientFormTrueToggle(component, event, helper);
}

})