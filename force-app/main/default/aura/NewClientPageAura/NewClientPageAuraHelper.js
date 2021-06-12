({
    showHide : function(component) {
        let Theclientform = component.find("Theclientform");
        $A.util.toggleClass(Theclientform, "slds-hide");
        //let viewForm = component.find("viewForm");
        //$A.util.toggleClass(viewForm, "slds-hide");
    },

    clear : function (component) {
        component.find('clientfields').forEach(function(f) {
        f.reset();
        })
        },

        gotoAgentList:function(component,event,helper){
            console.log('Enter Here');
            var evt = $A.get("e.force:navigateToComponent");
            console.log('evt'+evt);
            evt.setParams({
                componentDef: "c:AgentList"

            });
        evt.fire();
        }   
})
