({
	getPropertyList : function(component) {
        var self=this;
        var fetchDataAction= component.get('c.getParentDetailsWithoutWrapper');
        self.serverSideCall(component, fetchDataAction).then(
            function(responseData){
                var fetchedData  = JSON.parse(responseData.ParentDetails);
                fetchedData.forEach(function(temp,Index){
                   temp.ApartmentName = temp.Apartment_Name__r.Name;
                });
                console.log(fetchedData);
                component.set("v.PropertyList",fetchedData);
            }     
        ).catch(function(error){        
          console.log('errod recieved***'+error);   
        });
    },
    serverSideCall : function(component,action) {
        return new Promise(function(resolve, reject) { 
            action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                var result = response.getReturnValue(); 
                resolve(result);
            } 
        }); 
          $A.enqueueAction(action);
        });
    },
      sortBy: function (field, reverse) {
        var key = function(x) {return x[field]};
        reverse = !reverse ? 1 : -1;
        return function (a, b) {
            return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        }
    },
     
    sortData: function (cmp, fieldName, sortDirection) {
        var fname = fieldName;
        var data = cmp.get("v.PropertyList");
        var reverse = sortDirection !== 'asc';
        data.sort(this.sortBy(fieldName, reverse))
        cmp.set("v.PropertyList", data);
    },
       
        
})