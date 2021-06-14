({
    handleEvent : function(cmp, event, helper) {
        cmp.set('v.aptId', event.getParam('aptId'))
        console.log("Here Now: " + cmp.get('v.aptId'))
        helper.getCount(cmp, event.getParam('aptId'))
        helper.init(cmp, event)
    },
    init : function(cmp, event, helper) {
        cmp.set('v.columns', [
            {label: 'Unit Name', fieldName: 'linkName', type: 'url',
                typeAttributes: {label: {fieldName: 'Name'}, target: '_self'}},
            {label: 'Square Footage', fieldName: 'Area_in_SqFt__c', type: 'text'},
            {label: 'Unit Type', fieldName: 'Unit_Type__c', type: 'text'}
        ])
        helper.init(cmp, event)
        helper.getCount(cmp, cmp.get('v.aptId'))
    }
})