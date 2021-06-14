({
    showHide : function(component) {
        let hero = component.find("hero");
        $A.util.toggleClass(hero, "slds-hide");
    },


    clientFormTrueToggle : function(component, event, helper) {
        component.set("v.checkClientFormTrue", !component.get("v.checkClientFormTrue"));
    },
    agentListTrueToggle : function(component, event, helper) {
        component.set("v.checkAgentListTrue", !component.get("v.checkAgentListTrue"));
    },

})