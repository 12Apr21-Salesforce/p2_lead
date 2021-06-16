({
 /*    doInit: function(cmp, event) {
        let contactId = cmp.get('v.contactId')
        let action = cmp.get('c.getProspectsInfo')
        action.setParams({
            "contactId": contactId
        })
        action.setCallback(this, function(response) {
            let state = response.getState()
            if (state === "SUCCESS") {
                // getCount(cmp, contactId)
                let records = response.getReturnValue()
                records.forEach(function(record){
                    // console.log('List here: '+ record.Id)
                    // console.log(cmp.get('v.candidateList'))
                    record.linkName = '/' + record.Id
                })
                if (cmp.get('v.candidateList') !== '') {
                    let relatedList = cmp.find("relatedList");
                    $A.util.removeClass(relatedList, "slds-hide");
                }
                cmp.set('v.candidateList', records)
                // console.log('Final List: '+ JSON.stringify(cmp.get('v.candidateList')))
            } else {
                console.error('is it me'+state)
            }
        })
        $A.enqueueAction(action)
        // $A.enqueueAction(action);
        //  component.get('v.candidateList')
    }, */
/*     getCount: function(cmp, contactId) {
        let action = cmp.get('c.saveCandidate')
        action.setParams({
            "contactId": contactId
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
    } */
})
