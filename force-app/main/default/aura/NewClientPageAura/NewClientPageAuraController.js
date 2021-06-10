({
    clickCreateClient : function(component, event, helper) {
    // Make sure fields are in an iterable object by casting to array if not already
    let fields = component.find("clientfields");
    if (fields) {
        fields = Array.isArray(fields) ? fields : [fields];
    }
    else {
        fields = [];
    }
    const valid = fields.reduce((validSoFar, field) => {
        // Return whether all fields up to this point are valid and whether current field is valid
        // reportValidity returns validity and also displays/clear message on element based on validity
        return (validSoFar && field.reportValidity());
    }, true);
    // If all fields aren't validated, throw error message
    if (!valid) {
        const toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "message": "Review all error messages below to correct your data.",
            "type": "error"
        });
        toastEvent.fire();
    }
    // Otherwise submit save
    else {
        component.find("Theform").submit();
    }
}

})