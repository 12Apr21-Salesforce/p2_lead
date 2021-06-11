({
    handleSuccess : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast")
        toastEvent.setParams({
            "title": "Success!",
            "message": "The property's info has been updated.",
            "type": "success"
        })
        toastEvent.fire()
        var aptId = event.getParams().response.id
        component.set('v.aptId', aptId)
        helper.showHide(component)
    },
    handleNewProperty : function(component, event, helper) {
        let aptId = component.get('v.aptId')
        helper.fireCreateEvent(aptId)
    }
})