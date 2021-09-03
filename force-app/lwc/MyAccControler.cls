public class MyAccControler {
    @AuraEnabled(cacheable=true)
    public static string getTotalContact(String acccountId){
    return String.valueOf([SELECT COUNT(AccountId) total FROM AccountConta
   ctRelation WHERE AccountId = :acccountId ][0].get('Total'));
    }
   }
   
