({
    showHide : function(component) {
		let editForm = component.find("editForm");
        $A.util.toggleClass(editForm, "slds-hide");
        let viewForm = component.find("viewForm");
        $A.util.toggleClass(viewForm, "slds-hide");
	},
    fireCreateEvent : function(component) {
        let aptId = component.get('v.aptId')
        let evt = $A.get('e.c:recordCreated')
        // console.log('What is this now: ' + aptId)
        evt.setParams({
            "aptId": aptId
        })
        // console.log(aptId)
        evt.fire()
    }
})