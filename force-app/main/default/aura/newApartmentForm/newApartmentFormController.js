({
    clickSubmit : function(component, event, helper) {
        helper.createApartment(component, component.get("v.newApartment"));
    },
    onCompInit : function(component, event, helper) {
        helper.loadData(component)
    }
})
