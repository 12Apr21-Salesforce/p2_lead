public with sharing class SearchProperties_CC {


    public String searchText {
        get {
            return searchText;
        }
        set {
            searchtext = value;
        }
    }

    public Boolean recordsFound {
        get {
            return ((properties != null) && (properties.size() != 0));
        }
        set;
    }

    public Boolean searched {get; set;}

    public ApexPages.StandardSetController setCon {get; set;}

    public SearchProperties_CC() {
        searched=false;
    }

    public List<Property__c> properties {
        get{
            if (setCon != null){
                return(List<Property__c>)setCon.getRecords();
            }
            else {return null;}
        }
        set;
    }

    public void Search() {
        if(String.isNotBlank(searchText) && searchText.length() > 1){
            searchText = (searchText.endsWith('*') ? searchText : (searchText+'*'));

            List<sObject> properties = [FIND :searchText
                                        IN ALL FIELDS
                                        RETURNING Property__c(Name, Apartment_Name__c, City__c, Street_Address__c)][0];

            setCon = new ApexPages.StandardSetController(properties);
            setCon.setPageNumber(1);
            setCon.setPageSize(10);

            searched=true;
        }
        else {
            ApexPages.addMessage(new ApexPages.message(ApexPages.severity.ERROR, 'Search input must be 2 or more characters.'));
        }
    }

}