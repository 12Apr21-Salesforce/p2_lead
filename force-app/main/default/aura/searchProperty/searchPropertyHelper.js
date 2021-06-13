({
	getPropertyList : function(component) {
		let action = component.get('c.findProperties');
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
              component.set('v.propertylist', response.getReturnValue());
            }
           
        });
        $A.enqueueAction(action);
	}
})