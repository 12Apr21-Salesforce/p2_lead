({
    handleEvent: function(component, event) {
        let unitEditForm = component.find("unitEditForm");
        $A.util.removeClass(unitEditForm, "slds-hide");
        component.set('v.isVisible', false)
        component.set('v.isVisible', true)
        component.set('v.aptId', event.getParam("aptId"))
            // console.log(component.get("v.aptId"))
    },
    handleCreateUnit: function(component, event) {
        // event.preventDefault()
        var toastEvent = $A.get("e.force:showToast")
        toastEvent.setParams({
            "title": "Success!",
            "message": "The unit has been added!",
            "type": "success"
        })
        toastEvent.fire()
        this.hideResetForm(component);
        // console.log('Look here ' + component.get('v.aptId'))
        this.fireUnitCreatedEvent(component.get("v.aptId"))
    },
    hideResetForm: function(component) {
        let unitEditForm = component.find("unitEditForm");
        $A.util.toggleClass(unitEditForm, "slds-hide");
    },
    fireUnitCreatedEvent: function(aptId) {
            let evt = $A.get("e.c:unitCreated")
            evt.setParams({
                "aptId": aptId
            })
            evt.fire()
        }
        // doInit : function(component, event, aptId) { 

    //     let getRelatedUnits = component.get('c.getRelatedUnits')
    //     getRelatedUnits.setParams({
    //         "aptId": aptId
    //     })
    //     getRelatedUnits.setCallback(this, function(response) {
    //         let state = response.getState()
    //         if (state === 'SUCCESS') {
    //             component.set('v.apartments', response.getReturnValue())
    //         }
    //     })
    //     $A.enqueueAction(getRelatedUnits)
    //     console.log(component.get('v.apartments'))
    // },
})