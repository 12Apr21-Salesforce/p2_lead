public class MultipleUnitsCreation {
    public List<Property__c> propList {get;set;}
    
    public MultipleUnitsCreation(){
        propList = new List<Property__c>();
 		propList.add(new Property__c());  
    }
    
    public void addrow(){
        propList.add(new Property__c());
    }
    
    public PageReference save(){
        insert propList;
        PageReference pList = new PageReference('/apex/NewProperties');
        pList.setRedirect(true);
        return pList;
    }
}