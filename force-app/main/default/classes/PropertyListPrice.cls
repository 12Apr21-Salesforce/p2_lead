public class PropertyListPrice { 

    public List<Property__c> sqftVal{get;set;}
    public Integer area{get;set;}
  //  public Integer sqftVal{get;set;}
    public string apt{get;set;}
    
    public PropertyListPrice(ApexPages.StandardController stdCon){
        sqftVal = [select Property__c.Apartment_Name__r.Cons_Cost_per_SqFt__c from Property__c where Apartment_Name__c=:apt];
    }
}
/*    private final Property__c prop;
    public PropertyListPrice(ApexPages.StandardController stdCon){
        this.prop=(Property__c)stdCon.getRecord();
    }
    public Integer getListPrice(){
        System.debug('List price is '+((integer)prop.Area_in_SqFt__c)*((integer.valueOf(prop.Apartment_Name__r.Cons_Cost_per_SqFt__c))+40));
        return ((integer)prop.Area_in_SqFt__c)*((integer.valueOf(prop.Apartment_Name__r.Cons_Cost_per_SqFt__c))+40);
    }
  	
    public static Integer setListPrice(){
        integer propListPrice;
    	integer area;
    	integer cost;
        
        List<Property__c> propResults = ([select Area_in_SqFt__c, Apartment_Name__r.Name, 
                                          Apartment_Name__r.Cons_Cost_per_SqFt__c from Property__c ]);
        for(Property__c p : propResults){
            If(p.Area_in_SqFt__c == Null){
                p.Area_in_SqFt__c=0;
            } 
            area = (integer)p.Area_in_SqFt__c; 
            cost = (integer.valueOf(p.Apartment_Name__r.Cons_Cost_per_SqFt__c))+40;
            
            propListPrice = (Integer)area*(cost);
            p.List_Sale_Price__c=PropListPrice;
            System.debug('Listprice is '+PropListPrice);
        }
        return propListPrice;
    }
*/
 /*   public Integer getListPrice()
    {
        return porpListPrice;
    }*/