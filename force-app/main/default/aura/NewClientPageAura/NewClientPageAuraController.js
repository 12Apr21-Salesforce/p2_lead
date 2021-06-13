({
    doInit : function(cmp, event, helper) {
        //pageReference to AgentList Component
        var navService = cmp.find("navService");
        var pageReference = {
            
            "type": "standard__component",
            "attributes": {
                "componentName": "c__AgentList"    
            }    
        };
        cmp.set("v.pageReference", pageReference);
        var defaultUrl = "#";
        navService.generateUrl(pageReference)
        .then($A.getCallback(function(url) {
            cmp.set("v.url", url ? url : defaultUrl);
        }), $A.getCallback(function(error) {
            cmp.set("v.url", defaultUrl);
        }));
    },
    
    clickCreateClient : function(component, event, helper) {

    let fields = component.find("clientfields");
    if (fields) {
        fields = Array.isArray(fields) ? fields : [fields];
    }
    else {
        fields = [];
    }
    const valid = fields.reduce((validSoFar, field) => {

        return (validSoFar && field.reportValidity());
    }, true);

    if (!valid) {
        const toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "message": "Correct any mistakes before adding the client.",
            "type": "error"
        });
        toastEvent.fire();
    }
    else {
        
        component.find("Theinputform").submit();
        helper.showHide(component);
        const toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "message": "Client Added Successfully",
            "type": "success"
        });
        toastEvent.fire();
        helper.handleNavigate(component, event, helper);
    }
}

})