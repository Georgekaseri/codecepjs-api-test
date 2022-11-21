Feature('delect employee');

Scenario('delect employee by id', ({ I }) => {
    
 
    const response =  I.sendDeleteRequest('/Employees/180');
    // {"id": "194"});
    //  I.seeResponseCodeIsSuccessful();
    // I.seeResponseContainsKeys(['id'])
    
      
  })
//


