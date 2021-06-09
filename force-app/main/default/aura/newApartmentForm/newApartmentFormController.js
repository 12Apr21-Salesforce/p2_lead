({
    clickSubmit : function(component, event, helper) {
        console.log('component is,' + component)
        helper.createApartment(component, component.get("v.newApartment"));
    }
})
