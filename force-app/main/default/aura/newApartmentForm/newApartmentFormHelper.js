({
    showHide : function(component) {
		let editForm = component.find("editForm");
        $A.util.toggleClass(editForm, "slds-hide");
        let viewForm = component.find("viewForm");
        $A.util.toggleClass(viewForm, "slds-hide");
	},
    fireCreateEvent : function(component, aptId) {
        let evt = $A.get('e.c:recordCreated')
        evt.setParams({
            "aptId": aptId
        })
        evt.fire()
    }
})