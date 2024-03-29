const stringSub = require('string-substitution')
/* Example 
console.log(stringSub.allCaps('abcde')) */

const mathSub = require('math-substitution')
const dateSub = require('andatelib')

function calculateInterests (total,year,rate) {
  const interest = rate/100+1;
  return parseFloat((total*Math.pow(interest,year)).toFixed(4));
}

function displayData({ id, user_name, first_name, last_name, company_name, loan, rate, date }) {
  return `
    <div data-id="${id}">
      <ul>
        <li>
            <!-- 1) User name needs uppercase -->
          <p>${stringSub.allCaps(user_name)}</p>
          <!-- 2) first and Last name should be first letter uppercase -->
          <p>${stringSub.firstUpper(first_name)+ " " + stringSub.firstUpper(last_name)}</p>
        </li>
        <li>
            <!-- 3) Company Name should be title/heading case -->
          <h1>${stringSub.capitalizeHeadline(company_name)}</h1>
          <!-- 4) slug/kabobcase company name -->
          <p>${stringSub.kabobCase(company_name)}</p>
        </li>
        <!-- 5) format loan amount as dollars -->
        <li>Loan amount: ${mathSub.toDollars(loan)}</li>
        <!-- 6) Calculate tax amount from rate and loan -->
        <li>Tax amount: ${mathSub.toDollars(mathSub.tax(rate * loan))}</li>
        
        <li>
          <!-- 7) format date Year Short Month date and day: Format the dates as: 2011 Jan 11 (Tuesday) -->
          <p>Loan Date: ${ new dateSub.AnDate(date).fullDateString()}</p>
          <!-- 8) Include a relative date from now and date 
                  display this something like: three years ago -->
          <p>${new dateSub.AnDate(date).when()}</p>
        </li>
        
        <!-- 9) Calculate the interest on loan by finding the number of years between now 
        and the date supplied. Use rate as the interest rate. --> 
        <li>Your interest is: ${mathSub.toDollars(calculateInterests(loan, (2019 - new dateSub.AnDate(date).year()), rate))}</li>
      </ul>
    </div>
  `
}




// ------------------------------------------------------
// Do not edit below this line
// ------------------------------------------------------

var data = [{
  "id": 1,
  "user_name": "sbeen0",
  "first_name": "shurwood",
  "last_name": "been",
  "company_name": "feeney, schuster and stiedemann",
  "loan": 89347.818037342,
  "rate": 7.4561316582,
  "date": "2017-05-04T14:45:15Z"
}, {
  "id": 2,
  "user_name": "tmarfell1",
  "first_name": "toni",
  "last_name": "marfell",
  "company_name": "rempel and sons",
  "loan": 7808.0471472916,
  "rate": 7.9795878871,
  "date": "2014-07-10T07:42:34Z"
}, {
  "id": 3,
  "user_name": "webi2",
  "first_name": "whittaker",
  "last_name": "ebi",
  "company_name": "haag, schaefer and watsica",
  "loan": 77266.0450132131,
  "rate": 5.1145553029,
  "date": "2018-02-10T12:32:49Z"
}, {
  "id": 4,
  "user_name": "mbollon3",
  "first_name": "minnie",
  "last_name": "bollon",
  "company_name": "mcclure inc",
  "loan": 35451.5523393344,
  "rate": 6.4822769144,
  "date": "2013-03-15T03:22:07Z"
}, {
  "id": 5,
  "user_name": "neilers4",
  "first_name": "noel",
  "last_name": "eilers",
  "company_name": "gottlieb, heidenreich and predovic",
  "loan": 45248.5124510668,
  "rate": 5.3120603857,
  "date": "2015-01-18T10:36:29Z"
}, {
  "id": 6,
  "user_name": "roldfieldcherry5",
  "first_name": "reeta",
  "last_name": "oldfield-cherry",
  "company_name": "durgan and sons",
  "loan": 22767.4291496243,
  "rate": 5.5495506547,
  "date": "2019-04-16T02:33:18Z"
}, {
  "id": 7,
  "user_name": "ecavolini6",
  "first_name": "ezekiel",
  "last_name": "cavolini",
  "company_name": "west, greenholt and reilly",
  "loan": 81855.7872555914,
  "rate": 9.7757656851,
  "date": "2013-05-04T00:10:11Z"
}, {
  "id": 8,
  "user_name": "mwelbeck7",
  "first_name": "marcela",
  "last_name": "welbeck",
  "company_name": "miller group",
  "loan": 65084.7461867683,
  "rate": 9.0230471538,
  "date": "2014-01-21T09:29:40Z"
}, {
  "id": 9,
  "user_name": "dcuppleditch8",
  "first_name": "danella",
  "last_name": "cuppleditch",
  "company_name": "donnelly and sons",
  "loan": 37997.4805330219,
  "rate": 5.2624202406,
  "date": "2018-11-06T21:22:49Z"
}, {
  "id": 10,
  "user_name": "lsjostrom9",
  "first_name": "leola",
  "last_name": "sjostrom",
  "company_name": "beier, skiles and hauck",
  "loan": 68545.9288765441,
  "rate": 6.0019545806,
  "date": "2012-11-07T20:55:11Z"
}, {
  "id": 11,
  "user_name": "bsolomonidesa",
  "first_name": "barnett",
  "last_name": "solomonides",
  "company_name": "stoltenberg-rempel",
  "loan": 67175.4833057073,
  "rate": 5.8858896719,
  "date": "2017-03-20T21:27:31Z"
}, {
  "id": 12,
  "user_name": "lengledowb",
  "first_name": "lyon",
  "last_name": "engledow",
  "company_name": "crooks-hane",
  "loan": 91241.2974199471,
  "rate": 5.9524173273,
  "date": "2010-01-07T01:33:58Z"
}, {
  "id": 13,
  "user_name": "jmosec",
  "first_name": "jeanine",
  "last_name": "mose",
  "company_name": "cruickshank, hilpert and thiel",
  "loan": 92018.8773701487,
  "rate": 7.9095317844,
  "date": "2014-06-04T04:36:46Z"
}, {
  "id": 14,
  "user_name": "rmccordd",
  "first_name": "rogers",
  "last_name": "mccord",
  "company_name": "langosh and sons",
  "loan": 42036.9624458286,
  "rate": 5.7626036717,
  "date": "2013-09-26T06:15:21Z"
}, {
  "id": 15,
  "user_name": "sdavleye",
  "first_name": "sianna",
  "last_name": "davley",
  "company_name": "reilly, ritchie and frami",
  "loan": 77892.2924548764,
  "rate": 5.5754427479,
  "date": "2018-01-21T11:50:51Z"
}, {
  "id": 16,
  "user_name": "mbokenf",
  "first_name": "marcel",
  "last_name": "boken",
  "company_name": "ullrich group",
  "loan": 93007.9857496257,
  "rate": 8.9109754339,
  "date": "2018-04-21T12:54:43Z"
}, {
  "id": 17,
  "user_name": "mleadbitterg",
  "first_name": "marlow",
  "last_name": "leadbitter",
  "company_name": "labadie-wehner",
  "loan": 3142.1323311071,
  "rate": 5.5216945392,
  "date": "2010-12-18T05:01:25Z"
}, {
  "id": 18,
  "user_name": "ykattenhornh",
  "first_name": "yancey",
  "last_name": "kattenhorn",
  "company_name": "hammes, vonrueden and ullrich",
  "loan": 84241.1519417129,
  "rate": 7.0009202566,
  "date": "2013-12-09T12:10:13Z"
}, {
  "id": 19,
  "user_name": "leadeni",
  "first_name": "lucretia",
  "last_name": "eaden",
  "company_name": "kuvalis-pfannerstill",
  "loan": 35637.1278971603,
  "rate": 6.5916205479,
  "date": "2016-07-24T20:55:39Z"
}, {
  "id": 20,
  "user_name": "proslingj",
  "first_name": "paola",
  "last_name": "rosling",
  "company_name": "veum, gleichner and jacobson",
  "loan": 96170.7331437535,
  "rate": 7.2159429142,
  "date": "2012-02-12T19:18:36Z"
}, {
  "id": 21,
  "user_name": "rpidgenk",
  "first_name": "ralf",
  "last_name": "pidgen",
  "company_name": "stoltenberg, mcdermott and koch",
  "loan": 96658.5195851859,
  "rate": 6.0843629276,
  "date": "2019-03-18T17:04:44Z"
}, {
  "id": 22,
  "user_name": "nmecol",
  "first_name": "nichole",
  "last_name": "meco",
  "company_name": "cummerata, kemmer and heidenreich",
  "loan": 63784.9781125794,
  "rate": 5.2553887585,
  "date": "2016-01-17T22:46:14Z"
}, {
  "id": 23,
  "user_name": "gcastellsm",
  "first_name": "gabbie",
  "last_name": "castells",
  "company_name": "beer-fadel",
  "loan": 16141.0501695525,
  "rate": 8.1337715801,
  "date": "2016-10-10T00:05:01Z"
}, {
  "id": 24,
  "user_name": "shazeupn",
  "first_name": "samaria",
  "last_name": "hazeup",
  "company_name": "leffler, fisher and dickinson",
  "loan": 31616.7448675915,
  "rate": 7.6811956726,
  "date": "2018-05-21T10:52:20Z"
}, {
  "id": 25,
  "user_name": "cberryclotho",
  "first_name": "clayton",
  "last_name": "berrycloth",
  "company_name": "sanford, bashirian and connelly",
  "loan": 87330.6152069689,
  "rate": 8.9955735033,
  "date": "2014-09-30T13:24:17Z"
}, {
  "id": 26,
  "user_name": "cwhitneyp",
  "first_name": "carrie",
  "last_name": "whitney",
  "company_name": "monahan, goldner and reichert",
  "loan": 98810.1999983648,
  "rate": 5.9459151801,
  "date": "2016-11-18T20:22:47Z"
}, {
  "id": 27,
  "user_name": "wlittlefieldq",
  "first_name": "walton",
  "last_name": "littlefield",
  "company_name": "barton-kulas",
  "loan": 46008.152330388,
  "rate": 7.1054383612,
  "date": "2010-10-24T12:31:08Z"
}, {
  "id": 28,
  "user_name": "pupcottr",
  "first_name": "phaidra",
  "last_name": "upcott",
  "company_name": "watsica group",
  "loan": 15231.2310890182,
  "rate": 6.2140332695,
  "date": "2017-07-23T06:00:59Z"
}, {
  "id": 29,
  "user_name": "ttremmils",
  "first_name": "tiffi",
  "last_name": "tremmil",
  "company_name": "gusikowski, olson and hartmann",
  "loan": 54557.087874425,
  "rate": 6.8315247805,
  "date": "2016-09-06T11:02:58Z"
}, {
  "id": 30,
  "user_name": "rsimpkinst",
  "first_name": "rhiamon",
  "last_name": "simpkins",
  "company_name": "orn group",
  "loan": 25170.0618195042,
  "rate": 9.2017464034,
  "date": "2018-05-14T08:11:41Z"
}, {
  "id": 31,
  "user_name": "blemerchantu",
  "first_name": "bourke",
  "last_name": "le merchant",
  "company_name": "howell-nikolaus",
  "loan": 67818.462970025,
  "rate": 5.6854472746,
  "date": "2016-06-19T22:34:52Z"
}, {
  "id": 32,
  "user_name": "spreuvostv",
  "first_name": "sigfried",
  "last_name": "preuvost",
  "company_name": "buckridge-ruecker",
  "loan": 70863.8899079455,
  "rate": 7.0712629662,
  "date": "2014-08-15T17:23:19Z"
}, {
  "id": 33,
  "user_name": "ealkerw",
  "first_name": "elinor",
  "last_name": "alker",
  "company_name": "bogisich, mraz and morissette",
  "loan": 28926.8778708171,
  "rate": 6.7519212191,
  "date": "2012-08-28T00:45:54Z"
}, {
  "id": 34,
  "user_name": "pstertx",
  "first_name": "pepi",
  "last_name": "stert",
  "company_name": "hyatt-schulist",
  "loan": 57440.1689659373,
  "rate": 9.1398150431,
  "date": "2011-11-09T12:57:40Z"
}, {
  "id": 35,
  "user_name": "pdoddingy",
  "first_name": "penni",
  "last_name": "dodding",
  "company_name": "jast llc",
  "loan": 47591.8377493439,
  "rate": 5.7482763258,
  "date": "2019-03-11T07:10:42Z"
}, {
  "id": 36,
  "user_name": "lrabjohnz",
  "first_name": "ly",
  "last_name": "rabjohn",
  "company_name": "witting group",
  "loan": 88379.9722483195,
  "rate": 7.3315085788,
  "date": "2016-10-05T12:09:51Z"
}, {
  "id": 37,
  "user_name": "bfortune10",
  "first_name": "brandy",
  "last_name": "fortune",
  "company_name": "hessel-wilkinson",
  "loan": 62042.4396019785,
  "rate": 7.3036880921,
  "date": "2011-11-02T09:53:07Z"
}, {
  "id": 38,
  "user_name": "fgirardet11",
  "first_name": "fayre",
  "last_name": "girardet",
  "company_name": "satterfield-quitzon",
  "loan": 40890.4952807229,
  "rate": 8.2861183413,
  "date": "2018-04-20T21:39:21Z"
}, {
  "id": 39,
  "user_name": "nworthing12",
  "first_name": "nickey",
  "last_name": "worthing",
  "company_name": "leannon-christiansen",
  "loan": 43477.4990039733,
  "rate": 6.8833136073,
  "date": "2011-03-03T21:29:55Z"
}, {
  "id": 40,
  "user_name": "jmelbourn13",
  "first_name": "josi",
  "last_name": "melbourn",
  "company_name": "kuhn-cole",
  "loan": 33142.2067472787,
  "rate": 8.7868891036,
  "date": "2017-12-13T12:26:11Z"
}, {
  "id": 41,
  "user_name": "vmorant14",
  "first_name": "valentine",
  "last_name": "morant",
  "company_name": "ortiz-morar",
  "loan": 3993.6013102977,
  "rate": 5.1476934595,
  "date": "2013-06-18T04:44:03Z"
}, {
  "id": 42,
  "user_name": "ndifrisco15",
  "first_name": "nikolas",
  "last_name": "di frisco",
  "company_name": "dare llc",
  "loan": 78931.7229475781,
  "rate": 5.2765850348,
  "date": "2014-08-20T11:42:35Z"
}, {
  "id": 43,
  "user_name": "deyton16",
  "first_name": "dulci",
  "last_name": "eyton",
  "company_name": "sanford group",
  "loan": 65548.341631535,
  "rate": 7.0221220011,
  "date": "2019-04-08T07:19:03Z"
}, {
  "id": 44,
  "user_name": "mbrognot17",
  "first_name": "marena",
  "last_name": "brognot",
  "company_name": "bartell, hahn and raynor",
  "loan": 23665.9509663497,
  "rate": 5.1413389735,
  "date": "2014-07-18T10:33:56Z"
}, {
  "id": 45,
  "user_name": "mthewlis18",
  "first_name": "maxwell",
  "last_name": "thewlis",
  "company_name": "cormier-gleason",
  "loan": 50034.5205130126,
  "rate": 8.5181581587,
  "date": "2014-11-05T06:15:52Z"
}, {
  "id": 46,
  "user_name": "jospillane19",
  "first_name": "james",
  "last_name": "o'spillane",
  "company_name": "macgyver-o'hara",
  "loan": 62272.3148784473,
  "rate": 6.3835123529,
  "date": "2011-02-14T17:32:26Z"
}, {
  "id": 47,
  "user_name": "cpawlaczyk1a",
  "first_name": "clo",
  "last_name": "pawlaczyk",
  "company_name": "bashirian, marquardt and botsford",
  "loan": 87246.5507155564,
  "rate": 6.924980167,
  "date": "2013-03-12T15:56:56Z"
}, {
  "id": 48,
  "user_name": "ncowser1b",
  "first_name": "norrie",
  "last_name": "cowser",
  "company_name": "bahringer-kiehn",
  "loan": 7140.8085323733,
  "rate": 7.0094622358,
  "date": "2013-01-24T06:33:23Z"
}, {
  "id": 49,
  "user_name": "lheintzsch1c",
  "first_name": "lissy",
  "last_name": "heintzsch",
  "company_name": "boyle inc",
  "loan": 6307.400649509,
  "rate": 6.2715822842,
  "date": "2011-02-09T10:47:27Z"
}, {
  "id": 50,
  "user_name": "emattam1d",
  "first_name": "emile",
  "last_name": "mattam",
  "company_name": "bernhard-orn",
  "loan": 59548.1863406465,
  "rate": 6.1868456305,
  "date": "2015-11-29T22:08:36Z"
}, {
  "id": 51,
  "user_name": "mhawksby1e",
  "first_name": "maynord",
  "last_name": "hawksby",
  "company_name": "mertz, dubuque and howe",
  "loan": 91475.128345143,
  "rate": 6.9749030702,
  "date": "2017-12-13T14:33:37Z"
}, {
  "id": 52,
  "user_name": "rmathelin1f",
  "first_name": "rockie",
  "last_name": "mathelin",
  "company_name": "moen inc",
  "loan": 23298.1715716438,
  "rate": 7.6034938719,
  "date": "2013-06-15T18:59:30Z"
}, {
  "id": 53,
  "user_name": "ecahani1g",
  "first_name": "emmalee",
  "last_name": "cahani",
  "company_name": "jones, bosco and donnelly",
  "loan": 37159.6474529221,
  "rate": 8.2935779342,
  "date": "2010-04-05T13:04:55Z"
}, {
  "id": 54,
  "user_name": "lwiddowfield1h",
  "first_name": "lucius",
  "last_name": "widdowfield",
  "company_name": "cronin llc",
  "loan": 31487.7275111749,
  "rate": 7.8244254141,
  "date": "2010-12-30T18:43:42Z"
}, {
  "id": 55,
  "user_name": "gcosby1i",
  "first_name": "gabe",
  "last_name": "cosby",
  "company_name": "krajcik-wilkinson",
  "loan": 96986.07775754,
  "rate": 7.9943117917,
  "date": "2015-10-21T17:48:07Z"
}, {
  "id": 56,
  "user_name": "cgornal1j",
  "first_name": "cord",
  "last_name": "gornal",
  "company_name": "roob inc",
  "loan": 76063.5342262266,
  "rate": 7.7740302536,
  "date": "2017-06-02T10:30:24Z"
}, {
  "id": 57,
  "user_name": "cconeybeare1k",
  "first_name": "catharina",
  "last_name": "coneybeare",
  "company_name": "runte-hilll",
  "loan": 79517.0987282855,
  "rate": 5.5695132097,
  "date": "2015-06-23T13:38:23Z"
}, {
  "id": 58,
  "user_name": "ebutler1l",
  "first_name": "emmalynn",
  "last_name": "butler",
  "company_name": "strosin-kuvalis",
  "loan": 72967.4405317052,
  "rate": 5.5366461848,
  "date": "2015-12-21T16:13:48Z"
}, {
  "id": 59,
  "user_name": "cberrey1m",
  "first_name": "christabella",
  "last_name": "berrey",
  "company_name": "kirlin-marks",
  "loan": 83115.0516473121,
  "rate": 6.397516008,
  "date": "2018-11-08T06:38:06Z"
}, {
  "id": 60,
  "user_name": "fstubbeley1n",
  "first_name": "filia",
  "last_name": "stubbeley",
  "company_name": "mckenzie-breitenberg",
  "loan": 45500.5137965011,
  "rate": 6.3682621875,
  "date": "2011-01-27T16:16:52Z"
}, {
  "id": 61,
  "user_name": "rwasbey1o",
  "first_name": "rana",
  "last_name": "wasbey",
  "company_name": "cummerata-lesch",
  "loan": 23230.4803621669,
  "rate": 5.0988299676,
  "date": "2011-10-31T18:02:41Z"
}, {
  "id": 62,
  "user_name": "rrosetti1p",
  "first_name": "rowan",
  "last_name": "rosetti",
  "company_name": "romaguera, hilll and huels",
  "loan": 70870.1741140263,
  "rate": 6.2571761575,
  "date": "2014-11-01T08:17:44Z"
}, {
  "id": 63,
  "user_name": "rhassur1q",
  "first_name": "rex",
  "last_name": "hassur",
  "company_name": "bauch inc",
  "loan": 28905.5905036846,
  "rate": 8.0103100546,
  "date": "2010-11-13T08:06:08Z"
}, {
  "id": 64,
  "user_name": "cmansuer1r",
  "first_name": "craig",
  "last_name": "mansuer",
  "company_name": "douglas-maggio",
  "loan": 24620.5017791014,
  "rate": 5.4181530171,
  "date": "2016-04-15T14:04:20Z"
}, {
  "id": 65,
  "user_name": "cbrookesbie1s",
  "first_name": "cassy",
  "last_name": "brookesbie",
  "company_name": "lowe inc",
  "loan": 27861.0638183526,
  "rate": 5.7695327573,
  "date": "2015-08-09T04:30:15Z"
}, {
  "id": 66,
  "user_name": "amanuely1t",
  "first_name": "alphonse",
  "last_name": "manuely",
  "company_name": "hahn, terry and goyette",
  "loan": 79631.8184774779,
  "rate": 9.2159628831,
  "date": "2016-12-05T07:39:51Z"
}, {
  "id": 67,
  "user_name": "ecockarill1u",
  "first_name": "ellsworth",
  "last_name": "cockarill",
  "company_name": "bahringer-bartoletti",
  "loan": 94714.3179463923,
  "rate": 9.6835384533,
  "date": "2011-07-07T05:35:41Z"
}, {
  "id": 68,
  "user_name": "solunney1v",
  "first_name": "syd",
  "last_name": "o'lunney",
  "company_name": "kshlerin-smith",
  "loan": 44976.2942182213,
  "rate": 7.453908036,
  "date": "2014-02-18T10:13:26Z"
}, {
  "id": 69,
  "user_name": "wcurmi1w",
  "first_name": "worth",
  "last_name": "curmi",
  "company_name": "hansen-brakus",
  "loan": 91443.948398486,
  "rate": 9.5601754726,
  "date": "2016-07-14T07:53:23Z"
}, {
  "id": 70,
  "user_name": "lhan1x",
  "first_name": "louella",
  "last_name": "han",
  "company_name": "bruen llc",
  "loan": 32865.0429878115,
  "rate": 7.9237869852,
  "date": "2019-11-19T06:30:05Z"
}, {
  "id": 71,
  "user_name": "mwellington1y",
  "first_name": "micky",
  "last_name": "wellington",
  "company_name": "heaney, windler and bradtke",
  "loan": 9144.5640652093,
  "rate": 6.933381335,
  "date": "2013-09-23T06:53:50Z"
}, {
  "id": 72,
  "user_name": "tsilberschatz1z",
  "first_name": "tiffi",
  "last_name": "silberschatz",
  "company_name": "jaskolski-hayes",
  "loan": 74749.7946616563,
  "rate": 9.4453162984,
  "date": "2012-10-30T19:15:26Z"
}, {
  "id": 73,
  "user_name": "amacgeffen20",
  "first_name": "ailis",
  "last_name": "macgeffen",
  "company_name": "huels, schultz and lesch",
  "loan": 63063.8588395987,
  "rate": 8.070792281,
  "date": "2017-10-23T21:13:08Z"
}, {
  "id": 74,
  "user_name": "zdellatorre21",
  "first_name": "zebedee",
  "last_name": "dellatorre",
  "company_name": "stiedemann, zulauf and goldner",
  "loan": 98050.4630560774,
  "rate": 8.3015786833,
  "date": "2014-10-27T03:25:10Z"
}, {
  "id": 75,
  "user_name": "jengelbrecht22",
  "first_name": "jodie",
  "last_name": "engelbrecht",
  "company_name": "hauck, bechtelar and fisher",
  "loan": 27653.5493025471,
  "rate": 6.3170976471,
  "date": "2012-12-27T15:33:09Z"
}, {
  "id": 76,
  "user_name": "neldredge23",
  "first_name": "nolana",
  "last_name": "eldredge",
  "company_name": "stamm llc",
  "loan": 54155.0269622544,
  "rate": 8.8155977645,
  "date": "2016-04-15T19:05:50Z"
}, {
  "id": 77,
  "user_name": "bdodworth24",
  "first_name": "banky",
  "last_name": "dodworth",
  "company_name": "christiansen group",
  "loan": 34572.5306982883,
  "rate": 9.0524703637,
  "date": "2013-02-06T09:01:15Z"
}, {
  "id": 78,
  "user_name": "atrubshawe25",
  "first_name": "avrit",
  "last_name": "trubshawe",
  "company_name": "hane-greenfelder",
  "loan": 84128.7013810537,
  "rate": 5.1727483539,
  "date": "2015-02-28T05:54:47Z"
}, {
  "id": 79,
  "user_name": "wpote26",
  "first_name": "walther",
  "last_name": "pote",
  "company_name": "kiehn group",
  "loan": 73221.4124739767,
  "rate": 9.4855764049,
  "date": "2011-06-01T15:46:49Z"
}, {
  "id": 80,
  "user_name": "jsmidmor27",
  "first_name": "josefina",
  "last_name": "smidmor",
  "company_name": "yundt, braun and bogan",
  "loan": 51215.5998643687,
  "rate": 6.3887868597,
  "date": "2010-05-31T00:48:44Z"
}, {
  "id": 81,
  "user_name": "chandrahan28",
  "first_name": "colan",
  "last_name": "handrahan",
  "company_name": "huel-effertz",
  "loan": 82773.455339157,
  "rate": 7.6760926323,
  "date": "2010-06-23T10:14:43Z"
}, {
  "id": 82,
  "user_name": "jdomotor29",
  "first_name": "jackelyn",
  "last_name": "domotor",
  "company_name": "west-effertz",
  "loan": 27497.1616628707,
  "rate": 7.687866665,
  "date": "2014-01-27T03:34:50Z"
}, {
  "id": 83,
  "user_name": "mroffey2a",
  "first_name": "murvyn",
  "last_name": "roffey",
  "company_name": "dare, mitchell and tillman",
  "loan": 52575.5075135911,
  "rate": 6.2163176818,
  "date": "2010-10-23T21:42:04Z"
}, {
  "id": 84,
  "user_name": "jbultitude2b",
  "first_name": "jeniece",
  "last_name": "bultitude",
  "company_name": "nitzsche-aufderhar",
  "loan": 79847.3692981755,
  "rate": 8.7740488596,
  "date": "2016-03-22T09:21:40Z"
}, {
  "id": 85,
  "user_name": "kdovinson2c",
  "first_name": "kaylee",
  "last_name": "dovinson",
  "company_name": "mclaughlin llc",
  "loan": 35876.2426707918,
  "rate": 7.7436537581,
  "date": "2019-08-16T18:55:25Z"
}, {
  "id": 86,
  "user_name": "mdrohane2d",
  "first_name": "minna",
  "last_name": "drohane",
  "company_name": "hudson-lueilwitz",
  "loan": 39567.1510014544,
  "rate": 7.7831808171,
  "date": "2017-12-31T18:15:39Z"
}, {
  "id": 87,
  "user_name": "tbriat2e",
  "first_name": "terri",
  "last_name": "briat",
  "company_name": "conroy inc",
  "loan": 9292.4504717956,
  "rate": 9.4296167662,
  "date": "2010-07-31T16:22:39Z"
}, {
  "id": 88,
  "user_name": "lcleaver2f",
  "first_name": "libbie",
  "last_name": "cleaver",
  "company_name": "hoeger-ondricka",
  "loan": 23723.3799820677,
  "rate": 8.1427615866,
  "date": "2016-10-21T23:32:34Z"
}, {
  "id": 89,
  "user_name": "singolotti2g",
  "first_name": "shawn",
  "last_name": "ingolotti",
  "company_name": "hills, johnson and osinski",
  "loan": 87184.4738270131,
  "rate": 9.2255584971,
  "date": "2015-09-20T01:01:14Z"
}, {
  "id": 90,
  "user_name": "utincombe2h",
  "first_name": "ursa",
  "last_name": "tincombe",
  "company_name": "anderson-harvey",
  "loan": 19512.6073780239,
  "rate": 8.9100198283,
  "date": "2010-02-15T22:32:22Z"
}, {
  "id": 91,
  "user_name": "lcapelin2i",
  "first_name": "lynett",
  "last_name": "capelin",
  "company_name": "pouros-mccullough",
  "loan": 10679.2126954869,
  "rate": 8.2209272341,
  "date": "2016-06-20T07:28:03Z"
}, {
  "id": 92,
  "user_name": "rovize2j",
  "first_name": "raul",
  "last_name": "ovize",
  "company_name": "rempel-metz",
  "loan": 3344.3771589569,
  "rate": 6.4021410856,
  "date": "2019-06-04T03:41:10Z"
}, {
  "id": 93,
  "user_name": "agymblett2k",
  "first_name": "aurthur",
  "last_name": "gymblett",
  "company_name": "hammes-hudson",
  "loan": 45626.3654505152,
  "rate": 7.1490822994,
  "date": "2019-01-25T02:35:37Z"
}, {
  "id": 94,
  "user_name": "agodar2l",
  "first_name": "angeli",
  "last_name": "godar",
  "company_name": "gulgowski and sons",
  "loan": 61632.7374150984,
  "rate": 8.1462523931,
  "date": "2016-08-28T02:14:47Z"
}, {
  "id": 95,
  "user_name": "cferguson2m",
  "first_name": "chryste",
  "last_name": "ferguson",
  "company_name": "cartwright, schoen and erdman",
  "loan": 20520.872983504,
  "rate": 6.7902862942,
  "date": "2010-12-26T05:00:41Z"
}, {
  "id": 96,
  "user_name": "charder2n",
  "first_name": "connie",
  "last_name": "harder",
  "company_name": "schultz and sons",
  "loan": 57151.7546298942,
  "rate": 9.4775603075,
  "date": "2015-08-23T23:27:54Z"
}, {
  "id": 97,
  "user_name": "bkubacki2o",
  "first_name": "bibby",
  "last_name": "kubacki",
  "company_name": "schuppe llc",
  "loan": 56737.1141780122,
  "rate": 7.1555923191,
  "date": "2015-03-24T14:09:12Z"
}, {
  "id": 98,
  "user_name": "jmckibbin2p",
  "first_name": "joann",
  "last_name": "mckibbin",
  "company_name": "jenkins-mohr",
  "loan": 99902.3274781954,
  "rate": 6.9568621252,
  "date": "2010-12-08T11:52:53Z"
}, {
  "id": 99,
  "user_name": "rhumphery2q",
  "first_name": "rosalynd",
  "last_name": "humphery",
  "company_name": "romaguera, paucek and reichert",
  "loan": 38422.576674818,
  "rate": 7.3283194597,
  "date": "2013-03-22T08:13:51Z"
}, {
  "id": 100,
  "user_name": "mclohessy2r",
  "first_name": "morena",
  "last_name": "clohessy",
  "company_name": "dickens, wiegand and green",
  "loan": 49072.5031488698,
  "rate": 6.864073024,
  "date": "2017-04-16T18:54:10Z"
}]

console.log( data.map(displayData).join(''))
