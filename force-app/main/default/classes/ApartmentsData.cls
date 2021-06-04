public class ApartmentsData {

    private final Apartment__c apt;
    
    // The extension constructor initializes the private member
    // variable apt by using the getRecord method from the standard controller.
    public ApartmentsData(ApexPages.StandardController stdController) {
        this.apt = (Apartment__c)stdController.getRecord();
    }
}