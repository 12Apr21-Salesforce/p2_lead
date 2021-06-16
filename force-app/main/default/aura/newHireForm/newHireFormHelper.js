({
    /* addCandidate: function(component, newCandidate) {
        var addCandidate = $A.get("addCandidate");
        addCandidate.setParams({ "candidate": candidate });
        addCandidate.fire();
                 component.set("v.newCandidate",{ 'sobjectType': 'Contact',
                        'FirstName': '',
                        'LastName': '',
                        'Email': '@email.com',
                        'Phone': 0 });
    },*/
     showHide : function(component) {
         let editForm = component.find("editForm");
         $A.util.toggleClass(editForm, "slds-hide");
         let viewForm = component.find("viewForm");
         $A.util.toggleClass(viewForm, "slds-hide");
     },    
     fireCreateEvent : function(component) {
         let aptId = component.get('v.contactId')
         let evt = $A.get('e.c:recordCreated')
         // console.log('What is this now: ' + aptId)
         evt.setParams({
             "contactId": contactId
         })
         // console.log(aptId)
         evt.fire()
     },
     doInit: function(cmp, event) {
        let contactId = cmp.get('v.contactId')
        let action = cmp.get('c.getCandidateInfo')
        action.setParams({
            "contactId": contactId
        })
        action.setCallback(this, function(response) {
          console.log('response : ' + response);
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
                console.error('is it me'+ state);   
            }
        })
        $A.enqueueAction(action)
        // $A.enqueueAction(action);
        //  component.get('v.candidateList')
    },
     getCount: function(cmp, contactId) {
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
    },
    validateItemForm: function(component) {           
        // Simplistic error checking
        var validItem = true;   
        // Name must not be blank
        var nameField = component.find("candidateform");
        var candidateform = nameField.get("v.value");
        if ($A.util.isEmpty(candidateform)){
            validItem = false;
            nameField.set("v.errors", [{message:"Item name can't be blank."}]);
        }
        else {
            nameField.set("v.errors", null);
        }
        // Quantity must not be blank
        var emailField = component.find("email");
        var email = nameField.get("v.value");
        if ($A.util.isEmpty(email)){
            validItem = false;
            emailField.set("v.errors", [{message:"Email can't be blank."}]);
        }
        else {
            emailField.set("v.errors", null);
        }
        // Price must not be blank
        var phoneField = component.find("phone");
        var phone = priceField.get("v.value");
        if ($A.util.isEmpty(phone)){
            validItem = false;
            phone.set("v.errors", [{message:"Phone can't be blank."}]);
        }
        else {
            phoneField.set("v.errors", null);
        }
        return validItem;   
    }
 })