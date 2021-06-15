({
    showHide : function(component) {
        let hero = component.find("hero");
        $A.util.toggleClass(hero, "slds-hide");
    },

 /*    candidateFormTrueToggle : function(component, event, helper) {
        component.set("v.checkClientFormTrue", !component.get("v.checkClientFormTrue"));
    }, */
    candidateListTrueToggle : function(component, event, helper) {
        component.set("v.checkCandidateListTrue", !component.get("v.checkCandidateListTrue"));
    },
})