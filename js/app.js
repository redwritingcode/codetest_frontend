var myApp = angular.module('myApp',[]);
myApp.controller('MyController', function MyController ($scope){
        $scope.fellows =
// $http service not working- aaargh
// ($scope,$http) {
//     $http.get('js/data.json').then(function(response) {
//         $scope.fellows = response.data;
//     });

[
  {
    "id": "5b2a11c6e8ae88891060533c",
    "isActive": false,
    "age": 34,
    "fellowship": "ZESE",
    "first": "Moreno",
    "last": "Lyons",
    "email": "moreno.lyons@zese.net",
    "about": "Anim culpa duis id qui laboris quis. Fugiat Lorem laboris irure veniam veniam labore nulla elit laboris esse. Eu consectetur fugiat in est fugiat pariatur aliqua ut adipisicing sit non proident officia culpa. Voluptate velit ex id aliquip aliquip fugiat amet labore non consequat. Consequat cillum mollit ut consectetur aliquip sunt velit id et excepteur aute. Irure non irure esse nulla eiusmod adipisicing consequat dolore laboris. Ea excepteur ipsum dolor enim exercitation aute sit tempor laboris ad velit.",
    "registered": "Monday, June 4, 2018 6:52 PM"
  },
  {
    "id": "5b2a11c67f808cf580fb39d2",
    "isActive": true,
    "age": 22,
    "fellowship": "VicWays",
    
      "first": "Rich",
      "last": "Fleming",
   
    "email": "rich.fleming@vicways.org",
    "about": "Velit ad laborum aliqua Lorem exercitation sunt dolore consectetur. Laboris nulla exercitation do et in cillum incididunt elit eu occaecat occaecat tempor aliquip est. Ipsum ex nisi quis proident occaecat commodo culpa.",
    "registered": "Monday, June 4, 2018 10:37 AM"
  },
  {
    "id": "5b2a11c63c8d4a003fec2cfa",
    "isActive": true,
    "age": 23,
    "fellowship": "BLA",
    
      "first": "Hess",
      "last": "Navarro",
   
    "email": "hess.navarro@bla.me",
    "about": "Aute elit tempor sint reprehenderit esse consectetur deserunt reprehenderit reprehenderit duis adipisicing fugiat proident eiusmod. Tempor ad exercitation velit eiusmod esse velit elit cillum ipsum. Dolor aute veniam velit eu. Voluptate veniam minim pariatur labore non ullamco irure mollit labore sint sint. Exercitation dolore do enim in voluptate dolore commodo ea. Ipsum dolore ipsum veniam mollit mollit irure irure minim deserunt in qui ullamco magna.",
    "registered": "Sunday, April 22, 2018 12:45 AM"
  },
  {
    "id": "5b2a11c6811b2682d834beeb",
    "isActive": true,
    "age": 43,
    "fellowship": "BLA",
    
      "first": "Jarvis",
      "last": "Sparks",
   
    "email": "jarvis.sparks@bla.biz",
    "about": "Minim consequat ut cillum ipsum aute ex est nostrud fugiat minim ad anim commodo quis. Consequat esse exercitation nostrud magna laborum nostrud consequat commodo ea dolore esse. In commodo qui tempor Lorem amet ut eiusmod laborum eiusmod dolor dolore nisi dolore ipsum. Exercitation voluptate quis aliqua eu enim anim occaecat aute id est et cillum proident amet. Laboris ad nisi ullamco aliqua ipsum amet qui.",
    "registered": "Thursday, February 8, 2018 11:17 AM"
  },
  {
    "id": "5b2a11c635d456260026ea99",
    "isActive": false,
    "age": 27,
    "fellowship": "ZESE",
    
      "first": "Brittany",
      "last": "Barker",
   
    "email": "brittany.barker@zese.com",
    "about": "Ex tempor culpa eiusmod occaecat. Nostrud nisi dolore cillum cillum esse consectetur qui anim nostrud aliquip officia et adipisicing aliqua. Veniam consequat deserunt consequat quis nulla nisi aliqua. Quis ullamco cillum incididunt eiusmod culpa reprehenderit.",
    "registered": "Sunday, May 20, 2018 4:30 PM"
  },
  {
    "id": "5b2a11c61d7416850349bfa4",
    "isActive": true,
    "age": 23,
    "fellowship": "ZESE",
    
      "first": "Carmen",
      "last": "Spence",
   
    "email": "carmen.spence@zese.io",
    "about": "Veniam nostrud culpa eu Lorem Lorem. Sint adipisicing id ullamco minim. Enim duis do elit nulla aute ullamco velit magna officia. Enim veniam dolore qui elit eiusmod labore pariatur veniam sunt laborum et veniam id.",
    "registered": "Thursday, April 19, 2018 12:06 AM"
  },
  {
    "id": "5b2a11c6056b2d9befd4a7c6",
    "isActive": true,
    "age": 24,
    "fellowship": "ZESE",
    
      "first": "Maryellen",
      "last": "Hammond",
   
    "email": "maryellen.hammond@zese.info",
    "about": "Laboris cillum tempor dolore tempor aute exercitation ut qui labore sunt et ullamco velit. Anim anim laborum magna laborum culpa. Culpa nisi minim dolore eiusmod occaecat eiusmod fugiat cupidatat. Sint amet est ad qui eiusmod qui enim. Dolore ullamco ad proident tempor sunt commodo ea tempor eu minim sint minim minim amet. Culpa aliqua duis consectetur Lorem laborum consectetur dolor excepteur culpa et non commodo. Quis do non sunt ea esse aute qui.",
    "registered": "Sunday, June 3, 2018 12:19 AM"
  },
  {
    "id": "5b2a11c647b06ebe9814116d",
    "isActive": false,
    "age": 32,
    "fellowship": "CityZap",
    
      "first": "Billie",
      "last": "Cook",
   
    "email": "billie.cook@cityzap.co.uk",
    "about": "Sunt esse laborum duis fugiat. Non adipisicing ad nostrud labore duis Lorem commodo consequat reprehenderit esse consequat culpa ea incididunt. Minim anim laboris minim consequat et eiusmod ut elit do aliquip dolore nulla. Ea officia velit irure eiusmod Lorem nostrud ea fugiat aute excepteur aliquip deserunt.",
    "registered": "Saturday, May 19, 2018 3:58 PM"
  },
  {
    "id": "5b2a11c629f3103796f73aa0",
    "isActive": false,
    "age": 42,
    "fellowship": "",
    
      "first": "Keith",
      "last": "Bonner",
   
    "email": "keith.bonner@.biz",
    "about": "In ea dolor qui et occaecat consequat. Est ut consectetur sit esse id ex eiusmod. Lorem cillum deserunt et non eu est nulla. Sunt duis do sit laborum fugiat sunt commodo excepteur aute excepteur cillum nostrud sint irure.",
    "registered": "Sunday, April 15, 2018 2:06 AM"
  },
  {
    "id": "5b2a11c6a40545713d301cba",
    "isActive": false,
    "age": 48,
    "fellowship": "VicWays",
    
      "first": "Logan",
      "last": "Clemons",
   
    "email": "logan.clemons@vicways.tv",
    "about": "Amet officia aliqua commodo nisi voluptate in non. Et culpa cupidatat et commodo ex sint Lorem cillum magna incididunt minim cupidatat. Do ad duis incididunt velit aliquip aliquip culpa duis velit veniam velit exercitation reprehenderit elit. Sunt consequat in voluptate culpa sunt. Deserunt dolore nulla incididunt Lorem ex nisi ut consectetur ea.",
    "registered": "Wednesday, May 30, 2018 2:09 PM"
  },
  {
    "id": "5b2a11c63258cb8b29c91f03",
    "isActive": true,
    "age": 38,
    "fellowship": "CityZap",
    
      "first": "Palmer",
      "last": "Morrow",
   
    "email": "palmer.morrow@cityzap.ca",
    "about": "Cupidatat enim duis quis nostrud Lorem consequat culpa excepteur velit ullamco commodo. Nostrud pariatur ut irure ad occaecat sint Lorem veniam dolore. Pariatur est reprehenderit quis eu deserunt ipsum.",
    "registered": "Thursday, April 19, 2018 6:37 PM"
  },
  {
    "id": "5b2a11c62d0b7ca5302abb42",
    "isActive": false,
    "age": 24,
    "fellowship": "CityZap",
    
      "first": "Krista",
      "last": "Donovan",
   
    "email": "krista.donovan@cityzap.name",
    "about": "Enim ea ea commodo duis adipisicing magna veniam qui. Amet duis cillum Lorem eu nisi ut culpa dolor eu. Minim esse laborum aliquip ipsum aute consectetur labore aliqua enim non cillum consectetur. Nulla elit officia labore anim. Occaecat nulla anim enim sint voluptate non ea nulla laboris enim. Laborum tempor officia ad elit.",
    "registered": "Thursday, March 8, 2018 7:23 AM"
  },
  {
    "id": "5b2a11c6539ad050ae99f34a",
    "isActive": false,
    "age": 50,
    "fellowship": "Relwp",
    
      "first": "Paula",
      "last": "Gonzales",
   
    "email": "paula.gonzales@relwp.net",
    "about": "Velit deserunt aliqua aliqua minim commodo amet velit aliqua do Lorem Lorem exercitation. Reprehenderit velit aliqua incididunt incididunt labore in sunt et cillum nisi. Magna incididunt excepteur consectetur quis enim sunt dolor esse. Nulla labore tempor consectetur non quis officia aute nisi magna nisi consequat aliqua consequat nisi.",
    "registered": "Tuesday, January 23, 2018 11:40 PM"
  },
  {
    "id": "5b2a11c6ae3ed79adeb4e448",
    "isActive": true,
    "age": 38,
    "fellowship": "CityZap",
    
      "first": "Ferrell",
      "last": "Bean",
   
    "email": "ferrell.bean@cityzap.org",
    "about": "Duis amet dolor et velit dolore cupidatat. Non sit dolor irure aliquip consectetur ad id. Quis sit consectetur laboris cillum ea cillum fugiat laboris Lorem sunt.",
    "registered": "Monday, February 5, 2018 10:16 PM"
  },
  {
    "id": "5b2a11c68fe42a385022af15",
    "isActive": true,
    "age": 33,
    "fellowship": "CityZap",
    
      "first": "Moon",
      "last": "Guerrero",
   
    "email": "moon.guerrero@cityzap.me",
    "about": "Aute qui adipisicing veniam ipsum aute minim mollit magna amet enim sit proident aliquip proident. Irure in do anim fugiat mollit irure deserunt sunt. Culpa Lorem dolore dolore sit qui nostrud ea amet adipisicing eu.",
    "registered": "Friday, January 12, 2018 9:08 AM"
  },
  {
    "id": "5b2a11c611dee7051d328f99",
    "isActive": true,
    "age": 23,
    "fellowship": "BLA",
    
      "first": "Jennings",
      "last": "Weiss",
   
    "email": "jennings.weiss@bla.biz",
    "about": "Culpa et deserunt ullamco officia velit occaecat nulla quis adipisicing. Cillum est mollit proident in consequat sint ea est. Tempor ut laboris in mollit.",
    "registered": "Saturday, March 24, 2018 3:23 PM"
  },
  {
    "id": "5b2a11c62b88bcaf7de84f55",
    "isActive": false,
    "age": 38,
    "fellowship": "Relwp",
    
      "first": "Wheeler",
      "last": "Pollard",
   
    "email": "wheeler.pollard@relwp.com",
    "about": "Officia aute consectetur culpa ad. Exercitation reprehenderit elit et nostrud consequat amet proident enim in proident veniam ea eiusmod. Enim non velit reprehenderit anim eiusmod laboris pariatur eiusmod aliqua ad. Fugiat do ipsum nulla do consectetur.",
    "registered": "Monday, January 1, 2018 12:24 AM"
  },
  {
    "id": "5b2a11c62bfd77369cf087c9",
    "isActive": true,
    "age": 50,
    "fellowship": "BLA",
    
      "first": "Frederick",
      "last": "Middleton",
   
    "email": "frederick.middleton@bla.io",
    "about": "Nulla cupidatat qui est dolore adipisicing veniam duis et excepteur aliqua commodo cupidatat. Veniam cillum in tempor in ipsum commodo proident. Non non voluptate sit in ipsum fugiat tempor excepteur pariatur. Eiusmod tempor non laborum mollit voluptate ullamco do adipisicing ex. Dolor sint occaecat sint aliquip sit adipisicing.",
    "registered": "Friday, March 9, 2018 7:08 PM"
  },
  {
    "id": "5b2a11c6bfce91612782f964",
    "isActive": true,
    "age": 22,
    "fellowship": "ZESE", 
      "first": "Jenny",
      "last": "Beasley",
    "email": "jenny.beasley@zese.info",
    "about": "Aliquip ea consectetur Lorem ipsum commodo dolore amet excepteur sit ea ut anim ullamco. Non qui exercitation duis velit pariatur. Ad nulla pariatur consequat elit proident voluptate officia amet fugiat consectetur ea exercitation et cillum.",
    "registered": "Saturday, February 10, 2018 8:42 PM"
  }
]


});


