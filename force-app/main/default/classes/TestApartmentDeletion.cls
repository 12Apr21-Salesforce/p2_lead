@isTest
public class TestApartmentDeletion {
    @isTest static void AptDeletionWithProp(){
        Apartment__c Apt = new Apartment__c(Name = 'Lake View Apartments', Cost_of_Building__c=35000000,
                                            Total_No_Of_Units__c=20,Total_SqFt_of_the_Building__c=30000);
    	insert Apt;
        
        Property__c prop = new Property__c(Apartment_Name__c=Apt.Id, Property_ID__c='DD212', 
                              Name='LakeView Flat',Status__c='Available',Area_in_Sqft__c=1200);
        insert prop;
        
        Test.startTest();
        Database.DeleteResult result = Database.delete(Apt,false);
        Test.stopTest();
        
        System.assert(!result.isSuccess());
        System.assert(result.getErrors().size() > 0);
        System.assertEquals('Cannot delete Apartment '+Apt.Name+' with existing related properties.',
                             result.getErrors()[0].getMessage());
    }
    
    @isTest static void AptDeletionWithoutProp(){
        Apartment__c Apt = new Apartment__c(Name = 'Lake View Apartments1', Cost_of_Building__c=35000000,
                                            Total_SqFt_of_the_Building__c=20000, Total_No_Of_Units__c=15);
    	insert Apt;   
        Test.startTest();
        Database.DeleteResult result = Database.delete(Apt,true);
        Test.stopTest();
        System.assert(result.isSuccess());
        
    }
}