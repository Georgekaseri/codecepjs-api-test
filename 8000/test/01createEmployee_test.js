Feature('test');

Scenario('create new user', ({ I }) => {
    

  const response =  I.sendPostRequest('/Employees', {
    "FirstName": "Shahin",
    "SurName": "In",
    "Prefix": "DR",
    "birthName": "Ass",
    "Email": "painInAss@gmail.com",
    "Gender": "Female",
    "Type": "Client",
    "DateOfBirth": "1985-02-01",
    "MaritalStatus": "Married",
    "EverDivorced": false,
    "DivorecedDate": null,
    "Smoker": false,
  });
  
  I.seeResponseCodeIsSuccessful();
})
