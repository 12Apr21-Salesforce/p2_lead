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
        helper.fireCreateEvent(component)
    },
    clickCreateMoreApt: function(component, event, helper) {
        // component.set('v.isVisible', false)
        // component.set('v.isVisible', true)
        let fields = component.find('field')
        fields.forEach(function(f) {
            f.reset()
        })
        helper.showHide(component)
    }
}) 