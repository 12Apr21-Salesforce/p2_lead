@isTest
public class AptProp_Test {
    @isTest static void aptTest(){    
               
        NewApartmentAndUnits controller = new NewApartmentAndUnits(); 
        PageReference pageRef = Page.NewApartment;
        
        Test.StartTest();  
        Test.setCurrentPage(pageRef);
        
        controller.wApt.apt = new Apartment__c(Name = 'Lake View Apartments', Total_SqFt_of_the_Building__c=30000, 
                                               Total_No_Of_Units__c=20,Cost_of_Building__c=6000000);
    	PageReference propPage = controller.newApartment();
       	String aptDetailsPage = (String)propPage.getURL();
        
        Apartment__c aResults = [select id, name from Apartment__c where name='Lake View Apartments'];
        System.assertEquals('/apex/NewProperties?id='+aResults.Id,aptDetailsPage);
        
        propPage.getParameters().put('id', aResults.id);

        
        Test.setCurrentPage(propPage);
        controller.wApt.prop[0] = new Property__c(Apartment_Name__c=aResults.id, Name='TwoBed Flat', 
                                                  Property_ID__c='MM101',Area_in_Sqft__c=1000);
        controller.addRow();
        controller.wApt.prop[1] = new Property__c(Apartment_Name__c=aResults.id, Name='ThreeBed Flat', 
                                                  Property_ID__c='MM102',Area_in_Sqft__c=1200);
        PageReference propDetails = controller.saveProperties();
        
        String propDetailsPage = (String)propDetails.getURL();
        Test.setCurrentPage(propDetails);
        
        System.assertEquals('/apex/PropList',propDetailsPage);
        Property__c pResults = [select id, Property_ID__c, Area_in_Sqft__c from Property__c where Property_ID__c='MM101'];
        
        //validating the display of property details in last page.
        System.assertEquals('Lake View Apartments', aResults.Name);
        System.assertEquals(30000, aResults.Total_SqFt_of_the_Building__c);
        System.assertEquals(6000000, aResults.Cost_of_Building__c);
                
        System.assertEquals('MM101',pResults.Property_ID__c);
        System.assertEquals(1000,pResults.Area_in_Sqft__c);
        Test.stopTest();
    }
    /*
    @isTest static void aptLinkTest(){ 
        NewApartmentAndUnits controller = new NewApartmentAndUnits(); 
        PageReference pageRef = Page.NewApartment;
        
        Test.StartTest();  
        Test.setCurrentPage(pageRef);
        controller.wApt.apt = new Apartment__c(Name = 'Lake View Apartments', Total_SqFt_of_the_Building__c=30000, 
                                               Total_No_Of_Units__c=20,Cost_of_Building__c=6000000);
    	PageReference propPage = controller.newApartment();
       	String aptDetailsPage = (String)propPage.getURL();
        Apartment__c aResults = [select id, name from Apartment__c where name='Lake View Apartments'];
        
        System.assertEquals('https://universalcontainers207.lightning.force.com/a0G5e000000l41iEAA', aResults.Id);
        

    }*/
}