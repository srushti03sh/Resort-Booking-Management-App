const states = [
    {
        name: "Uttar Pradesh", cities: ["Lucknow", "Kanpur", "Ghaziabad", "Varanasi", "Allahabad(Prayagraj)", "Agra", "Meerut", "Bareilly", "Aligarh", "Moradabad", "Saharanpur", "Gorakhpur",
            "Faizabad", "Jhansi", "Muzaffarnagar", "Mathura", "Noida", "Shahjahanpur", "Firozabad", "Rampur", "Modinagar", "Hapur", "Etawah", "Mirzapur", "Bulandshahr", "Sambhal", "Amroha",
            "Hardoi", "Farrukhabad", "Jaunpur"]
    },
    {
        name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Aurangabad", "Solapur", "Amravati", "Nanded", "Kolhapur", "Sangli", "Jalgaon", "Akola", "Latur", "Dhule",
            "Ahmednagar", "Chandrapur", "Parbhani", "Jalna", "Bhusawal", "Panvel", "Satara", "Beed", "Yavatmal", "Wardha", "Ratnagiri", "Osmanabad", "Washim", "Hingoli", "Gondia", "Barshi",
            "Achalpur", "Nandurbar", "Udgir", "Chandrapur", "Baramati", "Basmat", "Chalisgaon", "Ichalkaranji"]
    },
    {
        name: "Bihar", cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "BiharSharif", "Arrah", "Begusarai", "Katihar", "Munger", "Chhapra", "Danapur", "Saharsa",
            "Hajipur", "Sasaram", "Purnia", "Siwan", "Motihari", "Nawada", "Bagaha", "Buxar", "Kishanganj", "Sitamarhi", "Jamalpur", "Jehanabad", "Aurangabad", "Dehri",
            "Chapra", "Bettiah", "Ramnagar"]
    },
    {
        name: "West Bengal", cities: ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Malda", "Berhampore", "Bardhaman", "Baharampur", "Habra", "Kharagpur", "Haldia",
            "Raiganj", "Krishnanagar", "Medinipur", "Jalpaiguri", "Balurghat", "Bankura", "CoochBehar", "Purulia", "Serampore", "Alipurduar", "Ranaghat", "Krishnagar",
            "Suri", "Basirhat", "Bangaon", "DiamondHarbour", "Arambagh", "Barasat"]
    },
    {
        name: "Madhya Pradesh", cities: ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Dewas", "Satna", "Ratlam", "Rewa", "Murwara(Katni)", "Singrauli", "Burhanpur",
            "Khandwa", "Morena", "Bhind", "Guna", "Shivpuri", "Vidisha", "Chhindwara", "Damoh", "Mandsaur", "Khargone", "Neemuch", "Pithampur", "Hoshangabad", "Itarsi", "Sehore",
            "Betul", "Seoni", "Datia"]
    },
    {
        name: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tiruppur", "Erode", "Vellore", "Tirunelveli", "Thoothukudi", "Nagercoil",
            "Thanjavur", "Dindigul", "Cuddalore", "Kanchipuram", "Tiruvannamalai", "Karur", "Neyveli", "Kumbakonam", "Rajapalayam", "Sivakasi", "Pudukkottai", "Hosur", "Ambur",
            "Karaikkudi", "Nagapattinam", "Pollachi", "Vaniyambadi", "Udhagamandalam", "Thiruvarur"]
    },
    {
        name: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer", "Udaipur", "Bhilwara", "Alwar", "Bharatpur", "Sikar", "Pali", "Ganganagar", "Nagaur",
            "Jhunjhunu", "Churu", "Barmer", "SawaiMadhopur", "Chittorgarh", "Kishangarh", "Beawar", "Hanumangarh", "Dausa", "Dholpur", "Tonk", "Sirohi", "Banswara",
            "Baran", "Dungarpur", "Sikar", "Jalore"]
    },
    {
        name: "Karnataka", cities: ["Bangalore", "Hubli-Dharwad", "Mysore", "Gulbarga", "Belgaum", "Mangalore", "Davanagere", "Bellary", "Vijayapura(Bijapur)", "Shivamogga(Shimoga)",
            "Tumkur", "Raichur", "Hospet", "Bidar", "Hassan", "Gadag-Betageri", "RobertsonPet", "Udupi", "Kolar", "Mandya", "Chitradurga", "Haveri", "Chikkamagaluru",
            "Ramanagara", "Gangawati", "Bagalkot", "Dharwad", "Chamarajanagar", "Gokak", "Kundapura"]
    },
    {
        name: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara(Baroda)", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar(Capital)", "Anand", "Bharuch", "Nadiad",
            "Morbi", "Surendranagar", "Navsari", "Valsad", "Vapi", "Bhuj", "Ankleshwar", "Mehsana", "Porbandar", "Godhra", "Palanpur", "Veraval", "Gandhidham", "Botad",
            "Modasa", "Amreli", "Dahod", "Patan", "Jetpur", "Deesa", "Navsari", "Morvi", "Mahesana", "Kalol", "Bhuj", "Valsad", "ChhotaUdaipur", "Palitana"]
    },
    {
        name: "Andhra Pradesh", cities: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajahmundry", "Tirupati", "Kadapa", "Anantapur", "Eluru", "Ongole",
            "Nandyal", "Machilipatnam", "Tenali", "Proddatur", "Chittoor", "Hindupur", "Bhimavaram", "Madanapalle", "Tadipatri", "Srikakulam", "Anakapalle", "Dharmavaram",
            "Kakinada", "Chilakaluripet", "Vizianagaram", "Gudivada", "Adoni", "Mangalagiri", "Tadepalligudem", "Narasaraopet", "Rajampet", "Kavali", "Palakollu",
            "Sullurpeta", "Tanuku", "Rayachoti", "Repalle", "Amalapuram", "Macherla", "Gudur"]
    },
    {
        name: "Odisha", cities: ["Bhubaneswar", "Cuttack", "Rourkela", "Brahmapur", "Sambalpur", "Puri", "Balasore", "Bhadrak", "Baripada", "Jharsuguda", "Bargarh",
            "Jeypore", "Bhawanipatna", "Kendujhar", "Paradip", "Sunabeda", "Dhenkanal", "Barbil", "Rayagada", "Jatani", "Angul", "Athagarh", "Boudh", "Byasanagar",
            "Parlakhemundi", "Gunupur", "Kuchinda", "Kantabanji", "Malkangiri", "Nabarangpur", "Talcher", "Titlagarh", "Padampur", "Belpahar", "Kesinga", "Bhadrak",
            "Pattamundai"]
    },
    {
        name: "Telangana", cities: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Ramagundam", "Khammam", "Mahbubnagar", "Nalgonda", "Adilabad", "Suryapet", "Miryalaguda",
            "Jagtial", "Nirmal", "Kamareddy", "Siddipet", "Mancherial", "Wanaparthy", "Kothagudem", "Bhongir", "Vikarabad", "Sangareddy", "Kagaznagar", "Bhadrachalam",
            "Sircilla", "Adoni", "Jangaon", "Mahabubabad", "Bellampalli", "Devarakonda", "Jammikunta", "Narayanpet"]
    },

    {
        name: "Kerala", cities: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Kannur", "Alappuzha", "Palakkad", "Kottayam", "Malappuram", "Pathanamthitta",
            "Manjeri", "Kasaragod", "Aluva", "Kayamkulam", "Adoor", "Ponnani", "Thodupuzha", "Punalur", "Perinthalmanna", "Mattannur", "Chalakudy", "Kanhangad", "Kunnamkulam",
            "Changanassery", "Neyyattinkara", "Kalamassery", "Kottakkal", "Koyilandy", "Nilambur", "Attingal"]
    },

    {
        name: "Jharkhand", cities: ["Ranchi", "Jamshedpur", "Dhanbad", "BokaroSteelCity", "Deoghar", "Hazaribagh", "Giridih", "Ramgarh", "Dumka", "Medininagar(Daltonganj)",
            "Phusro", "Chirkunda", "JhumriTilaiya", "Gumia", "Chaibasa", "Jagdalpur", "Chatra", "Kendujhar", "Chakradharpur", "Jharia", "Tenudam-cum-Kathhara", "Simdega",
            "Bermo", "Gumla", "Khunti", "Giridih", "Saunda", "Pakaur", "Barughutu", "Jharia", "Bhuli"]
    },

    {
        name: "Assam", cities: ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tezpur", "Sibsagar", "Tinsukia", "Goalpara", "Karimganj", "Nalbari", "Bongaigaon",
            "NorthLakhimpur", "Dhubri", "Barpeta", "Kokrajhar", "Diphu", "Lanka", "Nagaon", "Hailakandi", "Mangaldoi", "Dhekiajuli", "Lumding", "Mariani", "Rangia",
            "Kharupatia", "Margherita", "Sualkuchi", "Hojai", "Bilasipara", "Chabua"]
    },

    {
        name: "Punjab", cities: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Hoshiarpur", "Mohali", "Batala", "Pathankot", "Moga", "Abohar", "Fazilka",
            "Muktsar", "Gurdaspur", "Firozpur", "Kapurthala", "Rajpura", "Gurdaspur", "Malout", "Khanna", "Faridkot", "Nabha", "Sangrur", "Sunam", "Malerkotla", "Zirakpur",
            "Barnala", "Morinda", "Dhuri", "Jagraon"]
    },

    {
        name: "Chhattisgarh", cities: ["Raipur", "Bhilai", "Durg", "Bilaspur", "Korba", "Raigarh", "Rajnandgaon", "Jagdalpur", "Ambikapur", "Dhamtari", "Chirmiri", "Janjgir",
            "Mahasamund", "Kawardha", "Dongargarh", "Rajpur", "Bhatapara", "TildaNewra", "Saraipali", "Manendragarh", "Sakti", "Simga", "BalodaBazar", "Takhatpur", "Pithora",
            "Khairagarh", "Baloda"]
    },

    {
        name: "Haryana", cities: ["Faridabad", "Gurgaon", "Hisar", "Panipat", "Karnal", "Sonipat", "Yamunanagar", "Rohtak", "Ambala", "Sirsa", "Bhiwani", "Bahadurgarh", "Jind",
            "Thanesar", "Kaithal", "Rewari", "Palwal", "Panchkula", "Narnaul", "Fatehabad", "Tohana", "Jhajjar", "Sirsa", "Ellenabad", "Meham", "Tosham", "Dharuhera",
            "Shahabad", "Gohana", "Indri"]
    },

    {
        name: "Uttarakhand", cities: ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur", "Kashipur", "Rishikesh", "Ramnagar", "Manglaur", "Kichha", "Srinagar",
            "Pithoragarh", "Ranikhet", "Tehri", "Bageshwar", "Kotdwara", "Chamba", "Badrinath", "Mussoorie", "Nainital", "Jaspur", "Jhabrera", "Almora", "Barkot",
            "Didihat", "Khatima", "Sitarganj", "Champawat", "Bhimtal", "Tanakpur"]
    },
    {
        name: "Himachal Pradesh", cities: ["Shimla", "Mandi", "Solan", "Dharamshala", "Una", "Hamirpur", "Kullu", "Chamba", "Bilaspur", "Nahan", "Palampur", "Sundernagar",
            "Nurpur", "NagrotaBagwan", "Jogindernagar", "Baddi", "Mandi", "Chamba", "Sarkaghat", "Jogindernagar", "Mandi", "Sundernagar", "Chamba", "Nadaun", "Nurpur",
            "NagrotaBagwan", "Bhota", "Rampur"]
    },

    {
        name: "Tripura", cities: ["Agartala", "Udaipur", "Dharmanagar", "Ambassa", "Kailasahar", "Belonia", "Santirbazar", "Sabroom", "Kamalpur", "Sonamura", "Khowai",
            "Teliamura", "Bishalgarh", "Srimangal", "Sabroom", "Kumarghat", "Amarpur", "Jogendranagar", "Mohanpur", "Melaghar", "Khayerpur", "Khowai", "Birganj",
            "DharamNagar", "Anandanagar", "Gournagar", "Kalyanpur", "Kamalpur", "Jogendranagar", "Gournagar"]
    },

    {
        name: "Meghalaya", cities: ["Shillong", "Tura", "Jowai", "Nongstoin", "Baghmara", "Williamnagar", "Mairang", "Resubelpara", "Nongpoh", "Nongpoh", "Riwai", "Shella",
            "Cherrapunji", "Khliehriat", "Mawkyrwat", "Amlarem", "Dawki", "Nongstoin", "Baghmara", "Nongpoh", "Nongstoin", "Amlarem", "Ranikor", "Mawlynnong", "Dalu",
            "Mawthadraishan"]
    },

    {
        name: "Manipur", cities: ["Imphal", "Thoubal", "Kakching", "Lilong", "MayangImphal", "Bishnupur", "Churachandpur", "Moirang", "Moreh", "Ukhrul", "Senapati", "Tamenglong",
            "Jiribam", "Noney", "Kakching", "Thoubal", "Nambol", "Wangoi", "Lamshang", "Wangjing", "Lamphelpat", "Heingang", "Lamphel", "Kangpokpi", "Tamei", "Lilong"]
    },

    {
        name: "Nagaland", cities: ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha", "Mon", "Zunheboto", "Phek", "Kiphire", "Longleng", "Tseminyu", "Chumukedima",
            "Kiphire", "Kohima", "Phek", "Tuensang", "Wokha", "Zunheboto", "Chumukedima", "Mokokchung", "Mon", "Kohima", "Chumukedima", "Kiphire", "Longleng", "Mokokchung",
            "Mon", "Phek", "Tuensang", "Wokha"]
    },

    {
        name: "Goa", cities: ["Panaji", "VascodaGama", "Margao", "Mapusa", "Ponda", "Bicholim", "Curchorem", "CurchoremCacora", "Valpoi", "Sanguem", "Quepem", "Canacona", "Marmagao", "Pernem", "Cuncolim", "Sanquelim", "Davorlim"]
    },

    {
        name: "Arunachal Pradesh", cities: ["Itanagar", "Naharlagun", "Pasighat", "Along", "Tezu", "Bomdila", "Ziro", "Tawang", "Aalo", "Yingkiong", "Seppa", "Daporijo",
            "Roing", "Anini", "Hayuliang", "Miao", "Namsai", "Changlang", "Khonsa", "Longding"]
    },

    {
        name: "Mizoram", cities: ["Aizawl", "Lunglei", "Saiha", "Champhai", "Kolasib", "Serchhip", "Lawngtlai", "Hnahthial", "Khawhai"]
    },

    {
        name: "Sikkim", cities: ["Gangtok", "Namchi", "Gyalshing", "Mangan", "Jorethang", "Rangpo", "Singtam", "Ravangla", "NayaBazar"]
    },

    {
        name: "Chandigarh", cities: ["Chandigarh"]
    },

    {
        name: "Dadra And Nagar Haveli", cities: ["Silvassa", "Daman", "Diu", "Naroli", "Khadoli", "Dadra", "Amli", "Samarvarni", "Saraspur", "Umarkui", "Galonda", "Velugam",
            "Dudhani", "Rakholi"]
    },

    {
        name: "Daman And Diu", cities: ["Silvassa", "Daman", "Diu", "Naroli", "Khadoli", "Dadra", "Amli", "Samarvarni", "Saraspur", "Umarkui", "Galonda",
            "Velugam", "Dudhani", "Rakholi"]
    },

    {
        name: "Delhi", cities: ["NewDelhi", "Delhi", "Noida", "Gurgaon", "Faridabad", "Ghaziabad", "Meerut", "Bahadurgarh", "Ballabhgarh", "Panipat", "Sonipat",
            "Karnal", "Rohtak", "Hisar", "Bhiwani", "Jhajjar", "Palwal", "Muzaffarnagar", "Rewari", "Baghpat"]
    },

    {
        name: "Puducherry", cities: ["Puducherry", "Karaikal", "Mahe", "Yanam", "Ozhukarai", "Villianur", "Mudaliarpet", "Bahour", "Kurumbapet", "Nellithope", "Kalapet",
            "Ariyankuppam", "Manavely", "Thirunallar", "Lawspet", "Kottakuppam", "Oulgaret", "Karai", "Kottucherry", "Kurumbapet", "Kariamanickam", "Nadirgul",
            "Nedumgadu", "Nedungadu", "Palliseri", "Uppalam", "Vambakeerapalayam"]
    },

    {
        name: "Ladakh", cities: ["Leh", "Kargil", "Skardu", "Khapalu", "Padum", "Thikse", "Alchi", "Likir", "Hemis", "Lamayuru", "Nubra", "TsoMoriri", "TsoKar",
            "Changthang", "Hanle", "Sakti", "Chumathang", "Phugtal", "Zanskar", "Rangdum"]
    }
];
const sortedStates = states.map(state => ({
    name: state.name,
    cities: state.cities.sort((a, b) => a.localeCompare(b))
}));
states.sort((a, b) => a.name.localeCompare(b.name));

export { states };