({
    handleEvent : function(component, event, helper) {
        helper.handleEvent(component, event)
    },
    handleCreateUnit : function(component, event, helper) {
        // console.log("Hi from controller")
        helper.handleCreateUnit(component, event)
    },
    handleCancel : function(component, event, helper) {
        helper.hideResetForm(component)
    }
    // doInit : function(component, event, helper) {
    //     let aptId = component.get('v.aptId')
    //     helper.doInit(component, event, aptId);
    // }
})
