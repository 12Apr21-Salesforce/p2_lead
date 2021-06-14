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

    /*handleNavigate: function(cmp, event, helper) {
        var navService = cmp.find("navService");
        var pageReference = cmp.get("v.pageReference");
        event.preventDefault();
        navService.navigate(pageReference);
    },*/

        /*gotoAgentList:function(component,event,helper){
            console.log('Enter Here');
            var evt = $A.get("e.force:navigateToComponent");
            console.log('evt'+evt);
            evt.setParams({
                componentDef: "c:AgentList"

            });
        evt.fire();
        },*/

        /*clear : function (component) {
            component.find('clientfields').forEach(function(f) {
            f.reset();
            })
            },*/
    

})
