({
	 doInit : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Property', fieldName:'Name',sortable:true,type:'text', initialWidth: 300},
            {label: 'Apartment', fieldName:'Apartment_Name__rName', sortable:true, type:'text', initialWidth: 300},
            {label: 'Street', fieldName:'Street_Address__c',sortable:true,type:'text', initialWidth: 400},
            {label: 'City', fieldName:'City__c', sortable:true, type:'text', initialWidth: 300}
        ]);
         let action=component.get('c.findProperties');
         action.setCallback(this,function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var rows = response.getReturnValue();
                for (var i = 0; i < rows.length; i++) {
                    var row = rows[i];
                    if (row.Apartment_Name__c){
                        row.Apartment_Name__rName = row.Apartment_Name__r.Name;
                    }
                    
                }
                component.set("v.PropertyList", rows);
                
            }     
         });
         $A.enqueueAction(action);
	},
     searchKeyChange: function(cmp, event) {
       var allRecords = cmp.get("v.PropertyList");
        var searchFilter = event.getSource().get("v.value").toUpperCase();
        var tempArray =[];
        var i;
        for(i=0; i<allRecords.length; i++){
            if((allRecords[i].Name && allRecords[i].Name.toUpperCase().indexOf(searchFilter) != -1) || 
               (allRecords[i].ApartmentName && allRecords[i].ApartmentName.toUpperCase().indexOf(searchFilter) != -1)){
                tempArray.push(allRecords[i]);
            }
        }
        cmp.set("v.PropertyList",tempArray);
    },
     handleSort: function(cmp, event, helper) {
        var fieldName = event.getParam('fieldName');
        var sortDirection = event.getParam('sortDirection');
        cmp.set("v.sortedBy", fieldName);
        cmp.set("v.sortedDirection", sortDirection);
        helper.sortData(cmp, fieldName, sortDirection);
    },
})