@isTest
public with sharing class HireMe_Test {
   

    
    @istest
    public static void save2test(){

        Contact c = new Contact(LastName = 'newman');
        insert c; 
       PageReference testPage = Page.HireMePage; 
       Test.setCurrentPage(testPage);
       HireMe_CC hm = new HireMe_CC();


       System.assertEquals(false, hm.DisplayConfirm);
       //*
       hm.neuHire.LastName = 'dave';
       hm.neuHire.Email = 'dc@gov.gov';
       hm.neuHire.FirstName = 'checkem';
       hm.neuHire.Phone = '(324) 546-7988';
       //*/
       hm.saveC1();
       System.assertEquals(true, hm.DisplayConfirm);
      
       List<Contact> allCon = [SELECT Id, Name FROM Contact]; 
       System.assertEquals('checkem dave', allcon[1].Name); 


       System.assertEquals(false, hm.DisplayConfirm2);

            hm.nCase.ContactId = hm.neuHire.Id;
            hm.nCase.Reason = '--none--';
            hm.nCase.Subject = 'just testin';
            hm.nCase.Priority = 'Low';
            hm.nCase.Description = 'ahoy';

       hm.saveC2();
       System.assertEquals(true, hm.DisplayConfirm2);
      
       List<Case> allCase = [SELECT Id, Subject FROM Case]; 
       System.assertEquals('just testin', allcase[0].Subject); 
       

    }



}