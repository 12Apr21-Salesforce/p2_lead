({
    clickSubmit : function(component, event, helper) {
        console.log('component is,' + component)
        helper.createApartment(component, component.get("v.newApartment"));
    },
    onCompInit : function(component, event, helper) {
        helper.loadData(component)
    },
    handleUnitSubmit: function(component, event) {
        helper.createUnit(component, event)
    }
})
