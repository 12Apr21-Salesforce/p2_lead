public class NewPropertyPage{
    public Property__c newProp {get;set;}
    public List<Property__c> propList {get;set;}
    public String Idkey {get;set;}
    public NewPropertyPage(){
        newProp = new Property__c();
        Idkey = ApexPages.currentPage().getParameters().get('id');
        if(Idkey != null){
            propList = [select Id, Name, Apartment_Name__c, Property_ID__c,Area_in_SqFt__c from Property__c where id=:Idkey limit 1];
        }
    }
    public PageReference saveButton(){
        insert newProp;
        System.debug(newProp);
        PageReference pr = new PageReference('/apex/PropRecordPage?&id='+newProp.Id);
        pr.setRedirect(true);
        return pr;
    }
}