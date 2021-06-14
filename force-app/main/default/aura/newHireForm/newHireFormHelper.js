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