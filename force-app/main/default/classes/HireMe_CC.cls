public with sharing class HireMe_CC {

    // look at sending pagerefe to this function to cut down on repeat code methods, abstract out the one change
    public Boolean DisplayConfirm {get;set;}
    public Boolean DisplayConfirm2 {get;set;}

    
     
    public Contact neuHire{
        get{
            if (neuHire == null) {
                neuHire = new Contact();
                DisplayConfirm = false;
                DisplayConfirm2 = false;
            }
            return neuHire;
        }
        set;
    }
    
    public Case nCase{ /////////////////////////////// REMBER TO ADD CASE OWNER WHEN WE GO TO SAVE
        get{
            if (nCase == null) {
                nCase = new Case();
                
            }
            return nCase;
        }
        set;
    }
    public ApexPages.StandardController c1 = new  ApexPages.StandardController(neuHire);
    public ApexPages.StandardController c2 = new  ApexPages.StandardController(nCase);
    
    
    public PageReference saveC1(){

       
        c1.save();
        DisplayConfirm = true;
        PageReference newPage = Page.HireMePage;
        newPage.setRedirect(false);

        return newPage;

    }

    public PageReference saveC2(){
        nCase.Status = 'New';
        nCase.Origin = 'Web';
       
        c2.save();
        DisplayConfirm2 = true;
        PageReference newPage = Page.HireMePage;
        newPage.setRedirect(false);

        return newPage;

    }
}