({
    showHide : function(component) {
        let Theagentlist = component.find("Theagentlist");
        $A.util.toggleClass(Theagentlist, "slds-hide");
        let hero = component.find("hero");
        $A.util.toggleClass(hero, "slds-hide");
    },
})
