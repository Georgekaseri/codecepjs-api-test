Feature('get employee');

Scenario('get employee by id', ({ I }) => {
    

  const response =  I.sendGetRequest('/Employees/150');//  get req
  
   I.seeResponseCodeIsSuccessful();
  I.seeResponseContainsKeys(['FirstName'])
   I.seeResponseContainsJson({
    "FirstName": "Rahul",
    "SurName": "poul",
    "Prefix": "ER",
    "birthName": "Bradford",
    "Email": "testlio@yahoo.com",
    "Gender": "Male",
    "Type": "Client",
    "DateOfBirth": "1985-02-01",
    "MaritalStatus": "Married",
    "EverDivorced": false,
    "DivorecedDate": null,
    "Smoker": false,
    "Nationality": "UK",
    "Address": [
        {
            "Street": "Park Drive",
            "HouseNumber": "BD94DR",
            "PostalCode": "1556",
            "City": "Bradford",
            "Country": "UK"
        }
    ],
    "PhoneNumber": "0793839359",
    "id": 150
})
//
})

