Feature('patch employee');

Scenario('patch employee by id', ({ I }) => {
    
//sendPatchRequest(url,body)
  const response =  I.sendPatchRequest('/Employees/170',
  {"PhoneNumber": "654321987"});
   I.seeResponseCodeIsSuccessful();
  I.seeResponseContainsKeys(['PhoneNumber'])
  
    
})
//


