({
    handleSuccess: function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast")
        toastEvent.setParams({
            "title": "Success!",
            "message": "Thank you for submitting a case: " + event.getParam("Id"),
            "type": "success"
        })
        toastEvent.fire()
    }
})