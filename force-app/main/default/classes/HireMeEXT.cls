public with sharing class HireMeEXT {

    public final Contact con {get;set;}
    // use this to get the stadard controller of the page to call its save function
    private ApexPages.StandardController c1;
    public Boolean DisplayConfirm {get;set;}

    
    
    // The extension constructor initializes the private member
    // variable con by using the getRecord method from the standard
    // controller.
    public HireMeEXT(ApexPages.StandardController stdController) {
        this.con = (Contact)stdController.getRecord();
        this.c1 = stdController;
        DisplayConfirm = false;
    }



    // save 2 prevents the standard saves redirect functionality
    public PageReference save2(){

        //insert con;
        c1.save();
        DisplayConfirm = true;
        PageReference newPage = Page.HireMePage;
        newPage.setRedirect(false);

        return newPage;

    }
    
}