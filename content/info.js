// Everything the site says that is not a place page: seasons, masks, moonstone, drums, food, festivals, routes, plan and method.
// Pure content. Any design can read it.

exports.ZONES = ['West and south coast', 'East coast', 'Ancient cities', 'Hill country'];
// month, then weather for each zone (g good, m mixed, w wet), then a note
exports.MONTHS = [
  ['Jan', 'g', 'w', 'm', 'g', 'Whale season off Mirissa. Sri Pada pilgrimage season is under way.'],
  ['Feb', 'g', 'm', 'g', 'g', 'The driest, clearest month for most of the island.'],
  ['Mar', 'g', 'm', 'g', 'g', 'Hot and dry. Good for Horton Plains and Yala.'],
  ['Apr', 'm', 'g', 'g', 'g', 'Sinhala and Tamil New Year falls on 13 and 14 April. Many shops close and transport is packed.'],
  ['May', 'w', 'g', 'g', 'm', 'The south-west monsoon arrives. Vesak lanterns light every town at the full moon.'],
  ['Jun', 'w', 'g', 'g', 'm', 'Poson full moon draws pilgrims to Anuradhapura and Mihintale.'],
  ['Jul', 'm', 'g', 'g', 'm', 'East coast at its best. The Kandy Esala Perahera falls in July or August.'],
  ['Aug', 'm', 'g', 'g', 'm', 'Elephants gather at Minneriya. Nallur festival in Jaffna.'],
  ['Sep', 'm', 'g', 'g', 'm', 'Quiet month. Yala is usually closed for some weeks around now.'],
  ['Oct', 'w', 'm', 'w', 'w', 'Between monsoons. The wettest month across the whole island.'],
  ['Nov', 'm', 'w', 'w', 'w', 'The north-east monsoon begins. The south-west starts to clear late in the month.'],
  ['Dec', 'g', 'w', 'm', 'm', 'Peak season on the south and west coasts. Book early and expect higher prices.']
];

// id, name, Sinhala, illness, how the face is drawn, drawing options
exports.MASKS = [
  ['amukku', 'Amukku', 'අමුක්කු', 'Vomiting and stomach sickness', 'Green-faced, tongue hanging out.', { c: 'grn', a: 'yel', mouth: 'tongue' }],
  ['abutha', 'Abutha', 'අභූත', 'Madness with no spirit behind it', 'Wide eyes over a clamped mouth.', { c: 'och', a: 'ind', mouth: 'shut' }],
  ['butha', 'Butha', 'භූත', 'Madness caused by spirits', 'Dark face ringed with flames.', { c: 'ind', a: 'red', crown: 'flame', mouth: 'grin' }],
  ['bihiri', 'Bihiri', 'බිහිරි', 'Deafness', 'A cobra hood covers one ear.', { c: 'och', a: 'grn', crown: 'side', mouth: 'grin' }],
  ['deva', 'Deva', 'දේව', 'Epidemic diseases', 'The one calm, handsome face on the wall.', { c: 'yel', a: 'red', eyes: ['calm', 'calm'], mouth: 'smile' }],
  ['gedi', 'Gedi', 'ගෙඩි', 'Boils and skin diseases', 'Cheeks and brow covered in boils.', { c: 'org', a: 'wht', spots: true, mouth: 'grin' }],
  ['ginijala', 'Gini Jala', 'ගිනි ජල', 'Malaria and high fevers', 'Fever red, crowned with fire.', { c: 'red', a: 'yel', crown: 'flame', mouth: 'grin' }],
  ['golu', 'Golu', 'ගොළු', 'Dumbness', 'Mouth open, no sound, no teeth.', { c: 'wht', a: 'ind', mouth: 'open' }],
  ['gulma', 'Gulma', 'ගුල්ම', 'Parasitic worms and stomach diseases', 'Pale and tight-lipped.', { c: 'wht', a: 'grn', mouth: 'shut' }],
  ['jala', 'Jala', 'ජල', 'Cholera and chills', 'Cold blue with chattering teeth.', { c: 'ind', a: 'wht', mouth: 'grin' }],
  ['kana', 'Kana', 'කණ', 'Blindness', 'One eye shut, the other empty.', { c: 'och', a: 'red', eyes: ['closed', 'blank'], mouth: 'grin' }],
  ['kora', 'Kora', 'කෝර', 'Lameness and paralysis', 'The whole face pulled to one side.', { c: 'org', a: 'ind', skew: 9, mouth: 'twist' }],
  ['maru', 'Maru', 'මරු', 'Delirium and death', 'Bone white under red flames.', { c: 'wht', a: 'red', crown: 'flame', mouth: 'grin' }],
  ['naga', 'Naga', 'නාග', 'Bad dreams about snakes', 'Three cobras rise from the forehead.', { c: 'grn', a: 'yel', crown: 'cobra', mouth: 'grin' }],
  ['pissu', 'Pissu', 'පිස්සු', 'Temporary insanity', 'Eyes that do not match, tongue out.', { c: 'red', a: 'wht', eyes: ['bulge', 'blank'], skew: -6, mouth: 'tongue' }],
  ['pith', 'Pith', 'පිත්', 'Bilious diseases', 'Painted the yellow of bile.', { c: 'yel', a: 'grn', mouth: 'grin' }],
  ['slesma', 'Slesma', 'ස්ලේෂ්ම', 'Phlegm and epilepsy', 'Slack mouth, one eye rolled back.', { c: 'och', a: 'wht', mouth: 'open', eyes: ['blank', 'bulge'] }],
  ['vatha', 'Vatha', 'වාත', 'Flatulence and rheumatism', 'Stiff, with a crooked jaw.', { c: 'ind', a: 'org', skew: -4, mouth: 'twist' }]
];
exports.MASKS_INTRO = 'In the Daha Ata Sanniya, a healing ritual of the southern low country, each illness has a face. A dancer wears the mask of the demon behind the sickness. The demon is called in, fed, teased by the drummer and sent away.';
exports.MASKS_NOTE = 'The faces are original drawings made for this site, not copies of real carvings. The list of eighteen differs between villages and books. To see real masks, visit the mask museums and workshops in Ambalangoda on the south-west coast.';

// moonstone bands, outside to centre
exports.RINGS = [
  ['Flames', 'The outer band of fire is read as the endless burning of desire that keeps the world turning.'],
  ['Four animals', 'Elephant, horse, lion and bull walk in a line. They are read as birth, old age, sickness and death, the four things no life avoids.'],
  ['The creeper', 'A twisting vine called liyawel stands for craving, which winds around everything.'],
  ['Geese', 'The hansa, a goose said to be able to separate milk from water, stands for telling what matters from what does not.'],
  ['The lotus', 'At the centre a half lotus: the stillness reached when the outer bands are left behind. You step over all of it to enter the shrine.']
];
exports.MOONSTONE_INTRO = 'At the foot of temple stairs in Anuradhapura and Polonnaruwa lies a carved half circle of stone called a sandakada pahana (සඳකඩ පහණ).';
exports.MOONSTONE_NOTE = 'This is the reading proposed by the archaeologist Senarath Paranavitana, and the one most often taught. Other scholars read the bands differently. In Polonnaruwa the bull was removed from the design.';

exports.DRUMS = [
  ['Kandyan', 'උඩරට', 'The hill-country style seen in the Kandy Perahera. Ves dancers wear a silver headdress and beaded harness and move to the geta beraya, a drum with two different skins.'],
  ['Low country', 'පහතරට', 'The southern coastal style of masks and healing rituals, driven by the long yak beraya. This is where the Sanni and Raksha masks belong.'],
  ['Sabaragamuwa', 'සබරගමුව', 'The style of the country around Ratnapura, tied to the worship of the god Saman, guardian of Sri Pada. Its drum is the davula.']
];
exports.FOOD = [
  ['Rice and curry', 'Not one dish but a table: rice with four to eight small curries, a sambol and a crisp. Lunch is the main serving. Eat with your right hand if you like.'],
  ['Hoppers (appa)', 'Bowl-shaped pancakes of fermented rice batter, crisp at the edge, soft in the middle. An egg hopper has an egg cooked into it.'],
  ['Kottu', 'Chopped flatbread fried on a hot plate with vegetables, egg or meat. You hear the blades before you see the stall.'],
  ['Pol sambol', 'Fresh coconut ground with chilli, onion and lime. It goes with almost everything.'],
  ['Kiribath', 'Rice cooked in coconut milk and cut into diamonds. The first food of the New Year and of any new beginning.'],
  ['Ceylon tea', 'Grown from sea level to 2,000 metres. High-grown tea from Nuwara Eliya and Uva is lighter. Low-grown tea is dark and strong.']
];
exports.FEST = [
  ['January', 'Thai Pongal', 'Tamil harvest thanksgiving. Milk rice is boiled until it overflows.'],
  ['April', 'Sinhala and Tamil New Year', 'On 13 and 14 April the whole country goes home. Rituals follow set auspicious times.'],
  ['May', 'Vesak', 'The full moon marking the Buddha\'s birth, enlightenment and passing. Lanterns and free food stalls fill the streets.'],
  ['June', 'Poson', 'The full moon that remembers the arrival of Buddhism at Mihintale.'],
  ['July or August', 'Kandy Esala Perahera', 'Ten nights of processions carrying the casket of the Tooth Relic.'],
  ['August', 'Nallur festival', 'Twenty-five days at the great Murugan temple in Jaffna.'],
  ['October or November', 'Deepavali', 'The Hindu festival of lights.'],
  ['Every full moon', 'Poya', 'A public holiday each month. Temples are full and alcohol is not sold.']
];
exports.FEST_NOTE = 'Dates follow the moon and shift each year. Check the year\'s calendar before you plan around one.';

// each day: label, title, text, place ids
exports.ROUTES = [
  { id: 'r7', name: '7 days', title: 'A first taste', text: 'Rock, relic, railway and rampart. Fast, with one long train day in the middle.', days: [
    ['Day 1', 'Airport to Sigiriya', 'About 4 hours by road. Rest, then walk the village at dusk.', []],
    ['Day 2', 'Sigiriya and Dambulla', 'Climb the rock at opening. Cave temple in the late afternoon.', ['sigiriya', 'dambulla']],
    ['Day 3', 'To Kandy', 'About 3 hours. Be at the Temple of the Tooth for the evening offering.', ['kandy']],
    ['Day 4', 'Train to Ella', 'Six to seven hours through the tea country. Sit on the right-hand side leaving Kandy.', ['ella']],
    ['Day 5', 'Ella', 'Nine Arch Bridge at a train time, Little Adam\'s Peak before sunset.', ['ella']],
    ['Day 6', 'To Galle', 'About 4 to 5 hours by road. Walk the ramparts at sunset.', ['galle-fort']],
    ['Day 7', 'Galle to the airport', 'About 2.5 hours on the expressway.', []]
  ] },
  { id: 'r10', name: '10 days', title: 'The classic loop', text: 'The seven-day route with room to breathe, plus a medieval capital and a dawn safari.', days: [
    ['Day 1', 'Airport to Sigiriya', 'About 4 hours by road.', []],
    ['Day 2', 'Sigiriya and Dambulla', 'Rock at opening, caves late afternoon.', ['sigiriya', 'dambulla']],
    ['Day 3', 'Polonnaruwa by bicycle', 'A day trip east. Finish at Gal Vihara.', ['polonnaruwa']],
    ['Day 4', 'To Kandy', 'Evening offering at the Temple of the Tooth.', ['kandy']],
    ['Day 5', 'Train to Ella', 'Six to seven hours.', ['ella']],
    ['Day 6', 'Ella', 'Bridge, tea fields and Little Adam\'s Peak.', ['ella']],
    ['Day 7', 'To Yala', 'About 2 hours to Tissamaharama. Afternoon at the lake.', []],
    ['Day 8', 'Yala at dawn, then the coast', 'Morning drive in the park, then 3 hours west.', ['yala']],
    ['Day 9', 'Galle Fort', 'A slow day inside the walls.', ['galle-fort']],
    ['Day 10', 'To the airport', 'About 2.5 hours.', []]
  ] },
  { id: 'r14', name: '14 days', title: 'North to south', text: 'All twelve places in order, from the Tamil north to the Dutch south. Start by train to Jaffna.', days: [
    ['Days 1 to 2', 'Jaffna', 'Train from Colombo. Nallur, the fort, the library and one island by ferry.', ['jaffna']],
    ['Day 3', 'Anuradhapura', 'Three hours south. Cycle the sacred city.', ['anuradhapura']],
    ['Days 4 to 5', 'Sigiriya, Dambulla, Polonnaruwa', 'Two full days in the Cultural Triangle.', ['sigiriya', 'dambulla', 'polonnaruwa']],
    ['Day 6', 'Kandy', 'The lake, the temple and the evening drums.', ['kandy']],
    ['Day 7', 'Sri Pada or Horton Plains', 'In season, climb Sri Pada overnight. Otherwise walk Horton Plains at dawn.', ['sri-pada', 'horton-plains']],
    ['Days 8 to 9', 'Ella', 'Arrive by train. Rest your legs.', ['ella']],
    ['Day 10', 'Yala', 'Dawn safari.', ['yala']],
    ['Day 11', 'Sinharaja', 'Enter from the south at Deniyaya with a forest guide.', ['sinharaja']],
    ['Days 12 to 13', 'Galle Fort', 'Two unhurried days by the sea.', ['galle-fort']],
    ['Day 14', 'To the airport', 'About 2.5 hours.', []]
  ] }
];
exports.ROUTES_NOTE = 'Drive times are approximate and assume normal traffic.';

// practical guidance; {fact:id} marks where a dated fact card goes
exports.PLAN = [
  { id: 'visa', title: 'Visa', facts: ['visa.eta', 'visa.fee'], html: '<p>Apply only on the official site, <a href="https://eta.gov.lk/" rel="noopener">eta.gov.lk</a>. Look-alike sites charge extra for the same form. Your passport must be valid for six months from arrival.</p>' },
  { id: 'money', title: 'Money', facts: [], html: '<p>The currency is the Sri Lankan rupee (LKR). ATMs are common in towns and accept foreign cards. Carry cash for tuk-tuks, small restaurants, temples and markets. Major sites price foreign tickets in US dollars but usually accept rupees or cards.</p><p>A 10 percent service charge is normally added in restaurants and hotels. Beyond that, small tips for drivers, guides and hotel staff are welcome.</p>' },
  { id: 'around', title: 'Getting around', facts: [], html: '<p><b>Train.</b> Slow, cheap and beautiful, above all between Kandy and Ella. Reserved seats sell out, so book on the <a href="https://seatreservation.railway.gov.lk/" rel="noopener">official reservation site</a> as soon as sales open. Unreserved second and third class tickets are sold at the station on the day.</p><p><b>Tuk-tuk.</b> In cities use a ride app such as PickMe or Uber, which fixes the price. Elsewhere agree the fare before you get in.</p><p><b>Car with driver.</b> The common way to cover the Cultural Triangle. Distances look short but roads are slow. Plan on about 40 km an hour away from the expressways.</p><p><b>Bus.</b> Goes everywhere and costs very little. Fast, loud and crowded.</p>' },
  { id: 'manners', title: 'Temple manners', facts: [], html: '<ul><li>Cover shoulders and knees. Take off shoes and hats before you enter.</li><li>Never pose with your back to a Buddha statue. Selfies with statues have led to arrests.</li><li>A visible tattoo of the Buddha can cause serious trouble, including being refused entry to the country. Keep it covered.</li><li>Women should not touch monks or hand things to them directly.</li><li>Walk around stupas clockwise.</li><li>On Poya (full moon) days alcohol is not sold anywhere.</li></ul>' },
  { id: 'safety', title: 'Safety and common scams', facts: [], html: '<ul><li><b>"It is closed today."</b> A friendly stranger says your destination is shut and offers another. It is almost never shut.</li><li><b>Gem deals.</b> No stranger has a special price on sapphires for you to resell at home.</li><li><b>Spice gardens.</b> Free tours end in a shop with very high prices. You are free to leave.</li><li><b>The sea.</b> Rip currents are strong on many beaches, and few have lifeguards. Ask locally before you swim.</li><li><b>Roads.</b> Buses overtake hard. Cross with care and avoid driving after dark.</li></ul><p>Sri Lankans are widely and rightly known for kindness to visitors. These are the exceptions.</p>' },
  { id: 'wildlife', title: 'Wildlife, done well', facts: [], html: '<ul><li>Do not ride elephants or visit places that chain them for photographs. See them wild at Udawalawe, Minneriya or Yala.</li><li>On safari, ask for a driver who keeps distance and does not race to sightings.</li><li>For whale watching, choose an operator that keeps away from the animals and does not chase.</li><li>Do not feed monkeys or wild elephants on the roadside. Fed animals become dangerous and are often killed.</li><li>Turtle hatcheries vary widely. Avoid any that keep turtles in tanks for handling.</li></ul>' },
  { id: 'sos', title: 'Emergency numbers', facts: ['sos.police', 'sos.ambulance', 'sos.tourist'], html: '<p>Save your embassy\'s number and your insurer\'s emergency line before you fly.</p>' }
];

exports.RULES = [
  ['Every changeable fact is dated.', 'Prices, visa rules and phone numbers show when they were last checked and link to where they were read.'],
  ['Official first.', 'A fact marked "official" was read on a government or site-authority page. One marked "guide" came from a travel guide because the official page did not state it.'],
  ['Old facts say so.', 'After six months a fact turns amber. After twelve it turns red. It stays visible, with its date, so you can judge it.'],
  ['Legend is labelled.', 'History is summarised from UNESCO listings and standard references. Stories from chronicles and local tradition are marked as such.'],
  ['Not yet reviewed locally.', 'This first edition was researched from published sources. It has not yet been reviewed by archaeologists, guides or ritual specialists in Sri Lanka. Corrections are welcome.']
];
