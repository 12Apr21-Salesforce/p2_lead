({
    handleEvent : function(component, event, helper) {
        helper.handleEvent(component, event)
    },
    handleCreateUnit : function(component, event, helper) {
        console.log("Hi from controller")
        helper.handleCreateUnit(component, event)
    }
})
