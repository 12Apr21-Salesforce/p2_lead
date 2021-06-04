public class SeeContactsList {

    public String searchText {
        get {
            return searchText;
        }
        set {
            searchText = value;
        }
    }

    public Boolean matches {
        get {
            return ((contactList != null) && (contactList.size() != 0));
        }
        set;
    }

    public Boolean searched {get; set;}

    //public ApexPages.StandardSetController setCon {get; set;}
    List<Contact> contactList = [SELECT Name, Phone, Email, Account.Name FROM Contact];
    ApexPages.StandardSetController ssc = new ApexPages.StandardSetController(contactList);

      public List<Contact> cListMethod {

            get {
                if (cListMethod == null) {
                        cListMethod = contactList;
                    }
                    return cListMethod;
                }       
                set;
    }

    public void Search() {

       if (String.isNotBlank(searchText) && searchtext.length() > 1) {
            
            if(!searchText.endsWith('*')) {
                searchText = searchText + '*';
            }

                            //  cList = [FIND :searchText
                            //             IN ALL FIELDS
                            //             RETURNING Contact (Name, Email,
                            //             Phone, Account.Name)][0];

            ssc = new ApexPages.StandardSetController(contactList);
            ssc.setPageNumber(1);
            ssc.setPageSize(10);

            searched = true;


        } else {
            ApexPages.addMessage(new ApexPages.message(ApexPages.severity.ERROR,
                                'Please enter search text at least two characters long'));
        }
    }


    
}