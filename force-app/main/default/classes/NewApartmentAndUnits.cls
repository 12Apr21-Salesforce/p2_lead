public class NewApartmentAndUnits {
    public WrapAptProp wApt {get;set;}
    public String Idkey {get;set;}
    
    public NewApartmentAndUnits(){
        wApt = new WrapAptProp(new Apartment__c(), new List<Property__c>());
        Idkey = ApexPages.currentPage().getParameters().get('id');
        if(Idkey != null){
            wApt.apt = [select Id, Name, Total_SqFt_of_the_Building__c,Cost_of_Building__c, 
                       Cons_Cost_per_SqFt__c,Total_No_Of_Units__c from Apartment__c where id=:Idkey limit 1];
       }    
 		wApt.prop.add(new Property__c(Apartment_Name__c=wApt.apt.id));  
    }

    //adds new row for every new unit to add
    public void addrow(){
        	wApt.prop.add(new Property__c(Apartment_Name__c=wApt.apt.id));  
    }
    //Insert new apartment record and displays its details and new fields to add child records to newly added apartment
    public PageReference newApartment(){
        insert wApt.apt;
        PageReference aptPage = new PageReference('/apex/NewProperties?&id='+wApt.apt.Id);
        aptPage.setRedirect(true);
        return aptPage;
    }
	//inserts the child records and displays both parent and child records in the same page.
    public PageReference saveProperties(){     
        insert wApt.prop;
        return new PageReference('/apex/PropList'); 
    }     
    
    public class wrapAptProp {
	    public Apartment__c apt {get; set;}
    	public List<Property__c> prop {get; set;} 

        public wrapAptProp(Apartment__c aptList, List<Property__c> propList) {
            apt = aptList;
            prop = propList;
        }
    } 
}