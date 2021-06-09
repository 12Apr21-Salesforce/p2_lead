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
                component.set('v.aptCreated', true)
                setTimeout(() => {
                    document.querySelector('.exampleHolder').style.display = 'none'
                    document.querySelector('.detail-container').style.display = 'block'
                    document.querySelector('.create-unit-form').style.display = 'block'
                }, 500)
                
                console.log('reached')
            }
        })
        $A.enqueueAction(action)
    }
})
