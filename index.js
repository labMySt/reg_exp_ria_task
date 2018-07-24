const regions    = require("./groups/regions.js"),
      watersides = require("./groups/watersides.js"),
      types      = require("./groups/types.js"),
      classes    = require("./groups/classes.js"),
      rooms      = require("./groups/rooms.js"),
      keyWords   = require("./groups/keyWords.js");

const watStr      = watersides.join('|'),
      oblStr      = regions.join('|'),
      typesStr    = types.join(`|`),
      classStr    = classes.join(`|`),
      roomStr     = rooms.join(`|`),
      keyWordsStr = keyWords.join(`|`);


const exept    = `(?:${watStr}|${typesStr}|${classStr}|${roomStr}|${classStr}|${keyWordsStr})`;
const TwoWords = `(?!${exept})(\\w+-?(?!${exept})\\w+)`;


const lang_1        = `^\/(ru|uk)\/`,
      novostroyki   = 'novostroyki',
      oblast_2      = `(?:-(${oblStr})-oblast)?`,
      city_3        = `(?:-${TwoWords})?`
//--------------------------`or` group------------------------------------------
const rayon_4       = `(?:-rayon-${TwoWords})`,
      metro_5       = `(?:-metro-${TwoWords})`,
      bereg_6       = `(?:-(${watStr}))`,
      vozle_metro_7 = `(?:-(vozle-metro))`,
      ulitsa_8      = `(?:-ulitsa-${TwoWords})`;

const orBlock = `(?:${rayon_4}|${metro_5}|${bereg_6}|${vozle_metro_7}|${ulitsa_8})?`;
//------------------------------------------------------------------------------

//-----------------------------options------------------------------------------
const sdannyye_9    = `(?:-(sdannyye))?`,
      stroyash_10   = `(?:-(stroyashchiyesya))?`,
      type_11       = `(?:-(${typesStr}))?`,
      slass_12      = `(?:-(${classStr}))?`,
      room_13       = `(?:-(${roomStr}))?`,
      rassrochka_14 = `(?:-(rassrochka))?`,
      s_remontom_15 = `(?:-(s-remontom))?`;


//------------------------------------------------------------------------------

var my_req_exp = lang_1+
                 novostroyki+
                 oblast_2+
                 city_3+
                 orBlock+
                 sdannyye_9+
                 stroyash_10+
                 type_11+
                 slass_12+
                 room_13+
                 rassrochka_14+
                 s_remontom_15;

 var mass = new RegExp(my_req_exp)
 .exec(`/ru/novostroyki-kiyevskaya-oblast-kiyv-ekonom-klassa`);

console.log(mass);
 module.exports = my_req_exp;
