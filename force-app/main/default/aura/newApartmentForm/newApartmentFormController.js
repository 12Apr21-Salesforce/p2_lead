({
    clickSubmit : function(component, event, helper) {
        let newApt = component.get("v.newApartment")
        console.log(JSON.stringify(newApt))
        helper.createApartment(component, newApt);
    }
})
