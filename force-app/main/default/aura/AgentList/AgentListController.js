({
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

    showSelectedAgents : function(component, event, helper){

    }
})