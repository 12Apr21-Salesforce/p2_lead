({
	doInit : function(component, event, helper) {
		helper.getPropertyList(component);
	},
     searchKeyChange: function(component, event) {
        let searchKey = component.find("searchKey").get("v.value");
        console.log('searchKey:::::'+searchKey);
        let action = component.get("c.SearchProperties");
        action.setParams({
            "searchKey": searchKey
        });
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
              component.set('v.propertylist', response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    } 
})