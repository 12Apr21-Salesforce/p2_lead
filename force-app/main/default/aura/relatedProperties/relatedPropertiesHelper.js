({
    init: function(cmp, event) {
        let aptId = cmp.get('v.aptId')
        let action = cmp.get('c.getRelatedProperties')
        action.setParams({
            "aptId": aptId
        })
        action.setCallback(this, function(response) {
            let state = response.getState()
            if (state === "SUCCESS") {
                // getCount(cmp, aptId)
                let records = response.getReturnValue()
                records.forEach(function(record){
                    // console.log('List here: '+ record.Id)
                    // console.log(cmp.get('v.propertyList'))
                    record.linkName = '/' + record.Id
                })
                if (cmp.get('v.propertyList') !== '') {
                    let relatedList = cmp.find("relatedList");
                    $A.util.removeClass(relatedList, "slds-hide");
                }
                cmp.set('v.propertyList', records)
                // console.log('Final List: '+ JSON.stringify(cmp.get('v.propertyList')))
            } else {
                console.error('is it me'+state)
            }
        })
        $A.enqueueAction(action)
        // $A.enqueueAction(action);
        //  component.get('v.propertyList')
    },
    getCount: function(cmp, aptId) {
        let action = cmp.get('c.getRelatedPropertyCount')
        action.setParams({
            "aptId": aptId
        })
        action.setCallback(this, function(response) {
            let state = response.getState()
            console.log(state)
            if (state === "SUCCESS") {
                let count = response.getReturnValue()
                console.log(count)
                cmp.set('v.unitCount', count)
            }
        })
        $A.enqueueAction(action)
    }
})
