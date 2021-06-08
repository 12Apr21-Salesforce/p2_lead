({
    createApartment : function(component, apt) {
        let action = component.get('c.saveApartment')
        action.setParams({
            "apt": apt 
        })

        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                let apts = component.get('v.apartments')
                apts.push(response.getReturnValue())
                // console.log('Respone: ' + response)
                const myApartmentId = response.getReturnValue().Id
                // console.log('myApartment: ' + myApartmentId)
                component.set('v.aptId', myApartmentId)
                component.set('v.apartments', apts)
                document.querySelector('.create-form').style.display = 'none'
                document.querySelector('.detail-container').style.display = 'block'
                console.log('reached')
            }
        })
        $A.enqueueAction(action)
    },
    loadData : function(component) {
        let unitTypeList = [
            { value: 'Studio_Apartment', label: 'Studio'},
            { value: 'Loft', label: 'Loft'},
            { value: 'Micro_Apartment', label: 'Micro Apartment'},
            { value: 'Pent_House', label: 'Pent House'},
            { value: 'Duplex', label: 'Duplex'},
            { value: '2Bed 2Bath', label: '2Bed 2Bath'},
            { value: '3Bed 2Bath', label: '3Bed 2Bath'},
            { value: '3Bed 2.5Bath', label: '3Bed 2.5Bath'},
            { value: '3Bed 3Bath', label: '3Bed 3Bath'},
            { value: '4Bed 3Bath', label: '4Bed 3Bath'}
        ]
        let propStatusList = [
            { value: 'Available', label: 'Available'},
            { value: 'On Hold', label: 'On Hold'},
            { value: 'Sold', label: 'Sold'},
        ]
        
        component.set('v.unitTypePickListValues', unitTypeList)
        component.set('v.PropStatusPLValue', propStatusList)
    }
})
