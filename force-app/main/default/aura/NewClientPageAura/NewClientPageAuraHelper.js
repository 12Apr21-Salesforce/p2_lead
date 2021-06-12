({
    showHide : function(component) {
        let Theclientform = component.find("Theclientform");
        $A.util.toggleClass(Theclientform, "slds-hide");
    },

    handleNavigate: function(cmp, event, helper) {
        var navService = cmp.find("navService");
        // Uses the pageReference definition in the init handler
        var pageReference = cmp.get("v.pageReference");
        event.preventDefault();
        navService.navigate(pageReference);
    },

        gotoAgentList:function(component,event,helper){
            console.log('Enter Here');
            var evt = $A.get("e.force:navigateToComponent");
            console.log('evt'+evt);
            evt.setParams({
                componentDef: "c:AgentList"

            });
        evt.fire();
        },

        clear : function (component) {
            component.find('clientfields').forEach(function(f) {
            f.reset();
            })
            },
    

})
