({
    handleEvent : function(component, event) {
        let unitEditForm = component.find("unitEditForm");
        $A.util.removeClass(unitEditForm, "slds-hide");
        component.set('v.aptId', event.getParam("aptId"))
    },
    handleCreateUnit : function(component, event) {
        event.preventDefault()
        var toastEvent = $A.get("e.force:showToast")
        toastEvent.setParams({
            "title": "Success!",
            "message": "The unit has been added!",
            "type": "success"
        })
        toastEvent.fire()
        let unitEditForm = component.find("unitEditForm");
        component.find("resetfield").forEach(function(f){
            // if(f.isValid)
            f.reset()
        })
        $A.util.addClass(unitEditForm, "slds-hide");
        component.set('v.aptId', event.getParam("aptId"))
    }
})
