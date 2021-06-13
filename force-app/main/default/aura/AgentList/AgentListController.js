({
	doInit : function(component, event, helper) {
    var pageReference = component.get("v.pageReference");

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

    handleSelect : function(component, event, helper) {
        var selectedRows = event.getParam('selectedRows'); 
        var setRows = [];
        for ( var i = 0; i < selectedRows.length; i++ ) { 
            setRows.push(selectedRows[i]);
        }
        component.set("v.selectedContacts", setRows);  
    },
    
    showSelectedAgents: function(component, event, helper) {
        var records = component.get("v.selectedContacts");
        if(records.length > 0){
        for ( var i = 0; i < records.length; i++ ) {
            alert(records[i].Name);
        }
        helper.showHide(component);
    } else {
        const toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "message": "Select At Least One Agent",
            "type": "error"
        });
        toastEvent.fire();
    }
}
})