// Every place in the album. Add a place by copying one block and changing it, then run: node tools/build.js
// Prices do not live here. They live in data/facts.json so they can be updated without touching this file.

const UNESCO = n => ({ label: 'UNESCO World Heritage listing', url: 'https://whc.unesco.org/en/list/' + n });
const TOURISM = { label: 'Sri Lanka Tourism', url: 'https://www.srilanka.travel/' };
const DWC = { label: 'Department of Wildlife Conservation', url: 'https://www.dwc.gov.lk/' };
const RAIL = { label: 'Sri Lanka Railways seat reservation', url: 'https://seatreservation.railway.gov.lk/' };

module.exports = [
  {
    id: 'sigiriya', name: 'Sigiriya', si: 'සීගිරිය', region: 'Ancient Cities', tags: ['history', 'hike'],
    lat: 7.957, lng: 80.760, ink: 'red', art: 'rock', unesco: 1982, time: '½ day', months: 'January to April',
    line: 'A king built his palace on top of a 200-metre rock, and painted the way up.',
    why: [
      'The climb passes 1,500-year-old paintings of women in a sheltered pocket of the rock face.',
      'The water gardens at the base are among the oldest surviving landscaped gardens in Asia, and the fountains still work after rain.',
      'From the summit the forest runs flat to the horizon in every direction.'
    ],
    history: [
      'King Kashyapa I ruled from 477 to 495 CE. He had taken the throne from his father, Dhatusena, and expected his half-brother Moggallana to return with an army. He moved the capital from Anuradhapura to this rock and built a palace on its summit.',
      'The approach was the statement. Visitors walked through symmetrical water gardens, past boulder gardens, up a staircase between two giant lion paws and through the lion\'s open mouth. Only the paws remain. Sigiriya means Lion Rock.',
      'Kashyapa died in 495 when Moggallana returned. The capital moved back to Anuradhapura, and the rock became a Buddhist monastery until about the 14th century. On the Mirror Wall, visitors from the 8th century onward scratched poems about the painted women. Those poems are some of the oldest surviving Sinhala verse.'
    ],
    legend: 'The chronicle says Kashyapa had his father walled up alive. It was written by monks of the tradition Kashyapa had fallen out with, so historians treat the detail with care.',
    getting: 'About 4 hours by road from the airport. Dambulla, 30 minutes away, is the nearest bus hub. Most visitors stay in Sigiriya village or Habarana.',
    etiquette: ['No photographs of the paintings.', 'Stay quiet near the wasp warning signs on the upper stairs.'],
    go: 'Be at the gate when it opens. The rock is cooler and far emptier before 8.30.',
    know: 'About 1,200 steps, some on exposed metal stairways. Bring water. There is no shade on top.',
    skip: 'A midday climb. For a view of Sigiriya itself, climb Pidurangala next door at sunrise for a fraction of the price.',
    facts: ['sigiriya.fee'],
    sources: [UNESCO(202), { label: 'Central Cultural Fund', url: 'https://www.ccf.gov.lk/' }],
    photo: { file: 'Sigiriya Rock Fortress View from Pidurangala Rock.jpg', author: 'Gayomiw', license: 'CC BY-SA 4.0' }
  },
  {
    id: 'anuradhapura', name: 'Anuradhapura', si: 'අනුරාධපුරය', region: 'Ancient Cities', tags: ['history', 'sacred'],
    lat: 8.345, lng: 80.396, ink: 'green', art: 'stupa', unesco: 1982, time: '1 day', months: 'May to September',
    line: 'The island\'s first capital, and a living place of worship for over two thousand years.',
    why: [
      'The Sri Maha Bodhi is the oldest tree on record planted by people, tended without a break since the 3rd century BCE.',
      'Jetavanaramaya was one of the tallest structures in the ancient world. Standing under it resets your sense of scale.',
      'Pilgrims in white still come every day. You are a guest at a working sacred city, not a visitor to ruins.'
    ],
    history: [
      'Anuradhapura was the capital of the Sinhalese kingdom from around the 4th century BCE until the end of the 10th century CE, when a Chola invasion ended its rule.',
      'In the 3rd century BCE the monk Mahinda, son of the Indian emperor Ashoka, brought Buddhism to King Devanampiya Tissa at nearby Mihintale. His sister Sanghamitta followed with a cutting from the tree under which the Buddha reached enlightenment. That cutting is the Sri Maha Bodhi.',
      'The kings then built on a scale few cities matched: the white Ruwanwelisaya of King Dutugemunu in the 2nd century BCE, the brick Jetavanaramaya of King Mahasena in the 3rd century CE, and a network of reservoirs that still waters the dry zone today.'
    ],
    getting: 'About 4 hours from Colombo by road or train. The sites spread over several kilometres. Hire a bicycle or a tuk-tuk for the day.',
    etiquette: ['Wear white or light colours and cover shoulders and knees.', 'Shoes and hats come off at every shrine. The stone gets very hot, so carry socks.', 'Never turn your back to a Buddha statue for a photograph.'],
    go: 'Start at the Sri Maha Bodhi early, then Ruwanwelisaya, then cycle north to Abhayagiri.',
    know: 'Full-moon (Poya) days bring very large crowds of pilgrims. Wonderful to witness, slow to move through.',
    skip: 'Trying to see it in two hours on the way to somewhere else.',
    facts: ['anuradhapura.fee'],
    sources: [UNESCO(200), { label: 'Central Cultural Fund', url: 'https://www.ccf.gov.lk/' }],
    photo: { file: 'Ruwanwelisaya Stupa Anuradhapura 2017-10-15 (1).jpg', author: 'Z thomas', license: 'CC BY-SA 4.0' }
  },
  {
    id: 'polonnaruwa', name: 'Polonnaruwa', si: 'පොළොන්නරුව', region: 'Ancient Cities', tags: ['history', 'sacred'],
    lat: 7.940, lng: 81.000, ink: 'ochre', art: 'columns', unesco: 1982, time: '½ to 1 day', months: 'May to September',
    line: 'The medieval capital, compact enough to cycle in a day, with the finest rock carving on the island.',
    why: [
      'At Gal Vihara four Buddha figures are cut from one long face of granite. The reclining figure is 14 metres long.',
      'The Vatadage, a circular relic house, has four staircases each guarded by carved stone and a moonstone at its foot.',
      'It is flatter, greener and easier to read than Anuradhapura. A good first ancient city.'
    ],
    history: [
      'After Anuradhapura fell at the end of the 10th century, Polonnaruwa became the capital. King Vijayabahu I drove out the Cholas in 1070 and ruled from here.',
      'The city reached its height under Parakramabahu I, who ruled from 1153 to 1186. He built the Parakrama Samudra, a reservoir so large it is called a sea, and is remembered for saying that no drop of rain should reach the ocean without first serving people.',
      'By the 13th century invasions pushed the kings south-west, and the forest took the city back.'
    ],
    getting: 'About 1.5 hours east of Sigiriya or Dambulla. Bicycles are rented at the entrance and along the main road.',
    etiquette: ['At Gal Vihara, face the statues. Photographs with your back to them are not allowed.', 'Shoes and hats off at each shrine.'],
    go: 'Cycle the loop from south to north and reach Gal Vihara in the late afternoon light.',
    know: 'Toque macaques will take food from an open bag. Keep it zipped.',
    skip: 'The midday hours. There is little shade between the monuments.',
    facts: ['polonnaruwa.fee'],
    sources: [UNESCO(201), { label: 'Central Cultural Fund', url: 'https://www.ccf.gov.lk/' }],
    photo: { file: 'Gal Vihara Polonnaruwa 1.jpg', author: 'Philip Nalangan', license: 'CC BY 4.0' }
  },
  {
    id: 'dambulla', name: 'Dambulla Cave Temple', si: 'දඹුල්ල', region: 'Ancient Cities', tags: ['sacred', 'history'],
    lat: 7.857, lng: 80.649, ink: 'red', art: 'cave', unesco: 1991, time: '2 hours', months: 'All year',
    line: 'Five caves under one overhanging rock, painted from floor to ceiling.',
    why: [
      'More than 150 Buddha statues sit and lie in the half dark, with murals covering about 2,100 square metres of rock.',
      'The paintings follow every bump of the ceiling, so the whole cave reads like draped cloth.',
      'It is an easy stop between Kandy and Sigiriya.'
    ],
    history: [
      'Monks lived in these caves from at least the 3rd century BCE. In the 1st century BCE King Valagamba, driven out of Anuradhapura by invaders, sheltered here for about 14 years. When he won his throne back he turned the caves into a temple in thanks.',
      'Later kings kept adding to it. Nissanka Malla gilded the statues in the 12th century, which gave the temple its name, the Golden Temple. Most of the paintings you see were renewed by Kandyan artists in the 18th century.'
    ],
    getting: 'Dambulla is the road junction of the Cultural Triangle, about 2 hours north of Kandy. The caves are a 15 to 20 minute climb above the town.',
    etiquette: ['Shoulders and knees covered. Shoes off at the top.', 'No photographs posing with the statues.'],
    go: 'Go late in the afternoon, when the rock has cooled and the view west opens up.',
    know: 'The large modern golden Buddha at the foot of the hill is not the cave temple. The caves are at the top.',
    skip: 'Feeding the monkeys on the stairs.',
    facts: ['dambulla.fee'],
    sources: [UNESCO(561)],
    photo: { file: "Dambulla.- Le grand Bouddha couché fu Temple d'or.jpg", author: 'Pierre André Leclercq', license: 'CC BY 4.0' }
  },
  {
    id: 'kandy', name: 'Kandy', si: 'මහනුවර', region: 'Hill Country', tags: ['sacred', 'history'],
    lat: 7.294, lng: 80.641, ink: 'green', art: 'temple', unesco: 1988, time: '1 to 2 days', months: 'January to April',
    line: 'The last royal capital, built around a lake to guard one tooth.',
    why: [
      'The Temple of the Sacred Tooth Relic holds the most venerated object in Sri Lankan Buddhism.',
      'Drums and horns fill the temple at each daily offering. It is the best place to hear Kandyan drumming where it belongs.',
      'For ten nights each July or August the Esala Perahera fills the streets with dancers, drummers, fire and dozens of dressed elephants.'
    ],
    history: [
      'Tradition holds that a tooth of the Buddha was smuggled to the island in the 4th century CE, hidden in the hair of Princess Hemamali. Whoever held the relic held the right to rule, so it moved with the capital for a thousand years.',
      'It came to Kandy around 1590. The kingdom held out in these hills against the Portuguese and the Dutch for more than two centuries. In 1815 Kandyan chiefs signed the kingdom over to the British, ending 2,300 years of Sinhalese monarchy.',
      'The octagonal tower beside the moat, the Paththirippuwa, was added by the last king, Sri Vikrama Rajasinha.'
    ],
    getting: 'About 3 hours from Colombo by road. The train from Colombo Fort is slower and far better.',
    etiquette: ['Shoulders and knees covered. Shoes off. White is welcome.', 'You will see the gold casket that holds the relic during the offering, not the tooth itself.'],
    go: 'Arrive 30 minutes before an offering (around 5.30, 9.30 and 18.30) to be near the shrine when it opens.',
    know: 'During the Perahera, book a seat and a room months ahead. Prices rise sharply.',
    skip: 'Elephant rides offered around the city. See the wildlife ethics note on the Plan page.',
    facts: ['kandy.fee'],
    sources: [UNESCO(450), { label: 'Sri Dalada Maligawa', url: 'https://sridaladamaligawa.lk/' }],
    photo: { file: 'Sri Lanka, Kandy, Temple of the Tooth, Sri Dalada Maligawa.jpg', author: 'Vyacheslav Argenberg', license: 'CC BY 4.0' }
  },
  {
    id: 'horton-plains', name: 'Horton Plains', si: 'හෝර්ටන් තැන්න', region: 'Hill Country', tags: ['nature', 'hike'],
    lat: 6.802, lng: 80.807, ink: 'blue', art: 'cliff', unesco: 2010, time: '½ day', months: 'January to March',
    line: 'A cold, windy plateau above 2,000 metres that ends in a sheer drop called World\'s End.',
    why: [
      'At World\'s End the ground falls away for about 870 metres. On a clear morning you can see to the south coast.',
      'The cloud forest and grassland are unlike anything else on the island, and sambar deer graze beside the road.',
      'The 9-kilometre loop also passes Baker\'s Falls.'
    ],
    history: [
      'The plateau is the source of three of the island\'s major rivers: the Mahaweli, the Kelani and the Walawe. The British named it in 1834 after a governor, Sir Robert Wilmot-Horton. Its older Sinhala name is Maha Eliya, the great open plain.',
      'It became a national park in 1988. In 2010 UNESCO listed it with the Peak Wilderness and the Knuckles range as the Central Highlands, for the number of plants and animals found nowhere else.'
    ],
    getting: 'About 1 hour by road from Nuwara Eliya or 1.5 hours from Haputale. There is no public transport to the gate, so hire a van or tuk-tuk.',
    etiquette: ['Plastic bags and bottle labels are removed at the entrance check.', 'Stay on the trail. The grassland is fragile.'],
    go: 'Be at the gate by 6. The view at World\'s End is usually lost in cloud by about 9.30.',
    know: 'It is cold at dawn, often under 10°C. Bring a warm layer and a rain jacket.',
    skip: 'Arriving after 9. You will pay the same fee to look at a white wall of mist.',
    facts: ['horton.fee'],
    sources: [UNESCO(1203), DWC],
    photo: { file: 'Worlds end in horton plains in sri lanka.jpg', author: 'Pamuditha2000', license: 'CC BY-SA 4.0' }
  },
  {
    id: 'ella', name: 'Ella', si: 'ඇල්ල', region: 'Hill Country', tags: ['nature', 'hike'],
    lat: 6.867, lng: 81.047, ink: 'green', art: 'bridge', unesco: null, time: '2 days', months: 'January to April',
    line: 'A small hill town at the end of one of the great train rides of Asia.',
    why: [
      'The train from Kandy or Nanu Oya climbs through tea estates for hours with the doors open.',
      'The Nine Arch Bridge curves through the jungle, and you can watch a train cross it from a tea field.',
      'Little Adam\'s Peak is a gentle 45-minute walk to a wide view of Ella Gap.'
    ],
    history: [
      'The railway reached these hills to carry tea. The British planted tea across the highlands after a leaf disease wiped out the coffee estates in the 1870s. James Taylor had started the first commercial tea estate at Loolecondera, near Kandy, in 1867.',
      'The Nine Arch Bridge at Demodara was finished in 1921. It is built of stone, brick and cement with no steel in the arches. A popular local story credits a Sri Lankan builder, P. K. Appuhami, with completing it when steel ran short during the First World War.'
    ],
    getting: 'By train: about 6 to 7 hours from Kandy. Reserved seats sell out weeks ahead, so book online as soon as sales open. Unreserved tickets are sold at the station on the day.',
    etiquette: ['Tea pluckers are at work, not on display. Ask before you photograph anyone.'],
    go: 'Check the train times at Ella station, then walk to the bridge 40 minutes ahead.',
    know: 'Ella is now busy and built up. Stay a little outside the centre for quiet.',
    skip: 'Leaning out of the train or standing on the track for a photograph. People are injured every year.',
    facts: [],
    sources: [RAIL, TOURISM],
    photo: { file: 'Nine arch bridge 1.jpg', author: 'Dbulathwatta', license: 'CC BY-SA 4.0' }
  },
  {
    id: 'sri-pada', name: 'Sri Pada', si: 'ශ්‍රී පාදය', region: 'Hill Country', tags: ['sacred', 'hike'],
    lat: 6.809, lng: 80.499, ink: 'ochre', art: 'peak', unesco: 2010, time: '1 night', months: 'December to May',
    line: 'One mountain, one footprint, and four religions that climb it together at night.',
    why: [
      'You climb by lamplight among grandparents, monks and children, and reach the top for sunrise.',
      'At dawn the mountain throws a perfect triangular shadow across the clouds.',
      'It is the rare great sight that is still a pilgrimage first.'
    ],
    history: [
      'Near the 2,243-metre summit is a hollow in the rock shaped like a footprint. Buddhists hold it to be the Buddha\'s. Hindus call the mountain Sivanolipatha Malai, after Shiva. Many Muslims and Christians link the mark to Adam, which gave it the English name Adam\'s Peak.',
      'People have climbed it for well over a thousand years. Marco Polo and Ibn Battuta both wrote about it. Its other old name, Samanala Kanda, means butterfly mountain.',
      'The surrounding Peak Wilderness is part of the Central Highlands World Heritage listing.'
    ],
    getting: 'The main route starts at Nallathanniya (Dalhousie), about 1.5 hours from Hatton station on the hill line.',
    etiquette: ['This is a holy place. Dress modestly and keep your voice down at the summit.', 'First-time pilgrims are greeted on the way. A smile and "Karunawai" is the reply.'],
    go: 'In season, start around 2 in the morning. The path is lit and tea stalls are open all the way.',
    know: 'About 5,500 steps. Your knees will feel the way down more than the way up. It is cold and windy on top.',
    skip: 'Poya days and weekends, when the last stretch can queue for hours. Out of season the lights are off, so do not go at night without a guide.',
    facts: [],
    sources: [UNESCO(1203), TOURISM],
    photo: { file: 'Sri Pada(Addams Peak)View from Fishing hut2.jpg', author: 'Harshamc00', license: 'CC BY-SA 4.0' }
  },
  {
    id: 'galle-fort', name: 'Galle Fort', si: 'ගාල්ල කොටුව', region: 'South', tags: ['history', 'coast'],
    lat: 6.026, lng: 80.217, ink: 'blue', art: 'lighthouse', unesco: 1988, time: '1 day', months: 'December to April',
    line: 'A walled Dutch town on a rocky point, still lived in after four hundred years.',
    why: [
      'You can walk the full circuit of the ramparts above the sea in about an hour.',
      'Inside are a mosque, a Dutch church, a Buddhist temple and an Anglican church within a few streets of each other.',
      'It is a real town with schools and courts, not a museum.'
    ],
    history: [
      'Galle was a trading harbour long before Europeans arrived. The Portuguese landed in 1505 and built the first small fort in 1588. The Dutch took it in 1640 and over the following decades rebuilt it in granite and coral into the fort that stands today, with a sewer system flushed by the tide.',
      'The British took over in 1796 and changed little. When the 2004 tsunami struck, the old ramparts took the force of the water and the streets inside were largely spared, while the new town beside it was devastated.'
    ],
    getting: 'About 2 hours from Colombo by the Southern Expressway, or 2.5 hours on the coastal train, which runs beside the sea.',
    etiquette: ['Swimwear is for the beach, not the streets.', 'Dress to enter the mosque, temple and churches.'],
    go: 'Walk the ramparts from the clock tower to the lighthouse in the hour before sunset.',
    know: 'Entering and walking the fort is free. It is hot and bright at midday, so plan indoor stops.',
    skip: 'Strangers who offer to guide you to a "special" gem shop.',
    facts: [],
    sources: [UNESCO(451)],
    photo: { file: 'GALLE FORT AND LIGHTHOUSE GALLE SRI LANKA JAN2013 (8510167078).jpg', author: 'calflier001', license: 'CC BY-SA 2.0' }
  },
  {
    id: 'sinharaja', name: 'Sinharaja', si: 'සිංහරාජය', region: 'South', tags: ['nature', 'wildlife', 'hike'],
    lat: 6.400, lng: 80.500, ink: 'green', art: 'forest', unesco: 1988, time: '1 day', months: 'January to April',
    line: 'The last large piece of the rainforest that once covered the wet south-west.',
    why: [
      'More than 60 percent of its trees grow nowhere else on Earth.',
      'Birds here feed in mixed flocks of a dozen species moving together through the canopy.',
      'It is quiet. You walk, and the forest comes to you slowly.'
    ],
    history: [
      'Sinharaja means lion king. It survived because its steep ridges were hard to reach. In the 1970s the state began mechanised logging here for plywood. Public protest and scientific study stopped it in 1977.',
      'It was declared a biosphere reserve in 1978 and a World Heritage site in 1988. The villages on its edge still tap kitul palms for treacle inside the buffer zone.'
    ],
    getting: 'Main entrances are at Kudawa (north-west, from Ratnapura or Colombo) and Pitadeniya near Deniyaya (south, from Galle or Mirissa). Roads are slow. Allow 3 hours from the coast.',
    etiquette: ['A Forest Department guide goes with every group.', 'Take every wrapper back out with you.'],
    go: 'Start at opening time with your guide. Bird activity drops by mid-morning.',
    know: 'There are leeches, more after rain. Wear leech socks and it is a non-issue.',
    skip: 'Expecting big animals. This forest is about trees, birds, lizards and frogs.',
    facts: [],
    sources: [UNESCO(405), { label: 'Forest Department', url: 'https://www.forestdept.gov.lk/' }],
    photo: { file: 'Sinharaja rainforest.jpg', author: 'Jaygayani', license: 'CC BY-SA 4.0' }
  },
  {
    id: 'yala', name: 'Yala', si: 'යාල', region: 'South', tags: ['wildlife', 'nature'],
    lat: 6.370, lng: 81.520, ink: 'ochre', art: 'savanna', unesco: null, time: '1 day', months: 'February to June',
    line: 'Dry scrub, lagoons and granite outcrops with one of the densest leopard populations anywhere.',
    why: [
      'Leopards are the top predator here, so they are bolder in daylight than in Africa or India.',
      'Elephants, sloth bears, crocodiles and hundreds of bird species share the same drive.',
      'The park runs down to an empty stretch of Indian Ocean beach.'
    ],
    history: [
      'This coast was farmed two thousand years ago as part of the ancient kingdom of Ruhuna. Ruined reservoirs and the rock monastery of Sithulpawwa are still inside the park.',
      'Yala was made a wildlife sanctuary in 1900 and a national park in 1938. The 2004 tsunami came ashore here. A memorial at Patanangala remembers the visitors and staff who died.'
    ],
    getting: 'The usual base is Tissamaharama, about 2 hours from Ella and 3 hours from Galle. Jeeps leave before dawn.',
    etiquette: ['Stay in the jeep, keep your voice low and never ask the driver to go closer.'],
    go: 'Take the dawn drive. In the dry months animals gather at the water holes.',
    know: 'The park usually closes for some weeks around September and October. Check before you plan around it.',
    skip: 'Operators who race to sightings. Ask for a driver who keeps distance. For fewer jeeps, consider Wilpattu, or Udawalawe for elephants.',
    facts: ['yala.fee'],
    sources: [DWC],
    photo: { file: 'Sri Lankan Leopard At Yala National Park.jpg', author: 'Eli Solidum', license: 'CC BY-SA 4.0' }
  },
  {
    id: 'jaffna', name: 'Jaffna', si: 'යාපනය', region: 'North', tags: ['history', 'sacred', 'coast'],
    lat: 9.661, lng: 80.025, ink: 'red', art: 'kovil', unesco: null, time: '2 to 3 days', months: 'January to September',
    line: 'The Tamil north: palmyra palms, temple bells, and a kitchen all its own.',
    why: [
      'Nallur Kandaswamy Kovil is the great Hindu temple of the island, with ceremonies several times a day.',
      'Jaffna crab curry and the seafood broth called kool taste like nowhere else in the country.',
      'Ferries cross a shallow lagoon to island shrines such as Nainativu, sacred to both Hindus and Buddhists.'
    ],
    history: [
      'A Tamil kingdom ruled from Nallur from the 13th century until the Portuguese conquered it in 1619. The Dutch enlarged the star-shaped fort after 1658.',
      'In 1981 the Jaffna Public Library, with about 97,000 books and palm-leaf manuscripts, was burned. It is remembered as one of the wounds that led into the civil war of 1983 to 2009, which closed the north to visitors for a generation. The library has been rebuilt and is open.',
      'The Yal Devi train from Colombo returned to Jaffna in 2014.'
    ],
    getting: 'About 6 to 7 hours from Colombo by train, or 3 hours by road from Anuradhapura.',
    etiquette: ['At Nallur, men remove their shirts and everyone removes shoes. No photographs inside.', 'The war is recent and personal here. Listen more than you ask.'],
    go: 'Be at Nallur for the late afternoon ceremony, then eat on the street outside.',
    know: 'It is hotter and drier than the south. In August the 25-day Nallur festival fills the city.',
    skip: 'A rushed day trip. The north rewards slow travel.',
    facts: [],
    sources: [TOURISM],
    photo: { file: 'Nallur Kandasamy front entrance.jpg', author: 'Gane Kumaraswamy', license: 'CC BY-SA 2.0' }
  }
];
