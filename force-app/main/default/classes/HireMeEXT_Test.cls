@isTest
public with sharing class HireMeEXT_Test {
   

    
    @istest
    public static void save2test(){

        Contact c = new Contact(LastName = 'newman');
        insert c; 
       PageReference testPage = Page.HireMePage; 
       Test.setCurrentPage(testPage);
       testPage.getParameters().put('Id', String.valueOf(c.Id));
       
       ApexPages.StandardController sc = new  ApexPages.StandardController(c);     
       HireMeEXT ext = new HireMeEXT(sc); 

       System.assertEquals(false, ext.DisplayConfirm);
      /*
       ext.con.FirstName = 'dave';
       
       ext.con.Email = 'dc@gov.gov';
       ext.con.LastName = 'checkem';
       ext.con.Phone = '(324) 546-7988';
       //*/
       ext.save2();
       System.assertEquals(true, ext.DisplayConfirm);
       //System.assertEquals(Page.HireMePage, //test method to get current page //);
       // ^ need to see if redirect functionality worked
       List<Contact> allCon = [SELECT Id, Name FROM Contact]; 
       //System.assertEquals('dave checkem', allcon[1].Name); 
       //^ need to see 2 records in the contacts to show that the contact was saved succesfully

    }



}