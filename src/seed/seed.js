const mongoose = require('mongoose');
require('dotenv').config(); // es por esto que no me hacia la conexion con la BD
const Character = require('../api/models/characters.model');

const arrayCharacters = [
  {
    name: 'Goku',
    planet: 'Namek',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679483501/dragonBall/Son_Goku_en_Super_Hero_fpw8dt.webp',
    ki: 5000,
  },
  {
    name: 'Krilin',
    planet: 'Earth',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679483498/dragonBall/Krilin_Universo7_sksvqw.webp',
  },
  {
    name: 'Bulma',
    planet: 'Earth',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679483500/dragonBall/Bulma_Conejita_nuqt5u.webp',
    ki: 5000,
  },
  {
    name: 'Maestro Mutenroy',
    planet: 'Earth',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679483559/dragonBall/KameSennin_Universo7_yli7er.webp',
    ki: 5000,
  },
  {
    name: 'Piccolo',
    planet: 'Namek',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679483632/dragonBall/Piccolo_Fin_DB_Render_kmtoc4.webp',
    ki: 5000,
  },
  {
    name: 'Chi-Chi',
    planet: 'Earth',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679483675/dragonBall/Milk_DB_Fin_pgptck.webp',
    ki: 5000,
  },
  {
    name: 'Chaoz',
    planet: 'Earth',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679483764/dragonBall/Chaoz_Artwork_insxdw.webp',
    ki: 5000,
  },
  {
    name: 'Puar',
    planet: 'Earth',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679484530/dragonBall/Puar_Artwork_v0ggfj.webp',
    ki: 5000,
  },
  {
    name: 'Oolong',
    planet: 'Earth',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679484619/dragonBall/Oolong2013_ofc5cq.webp',
    ki: 5000,
  },
  {
    name: 'Yamcha',
    planet: 'Earth',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679484697/dragonBall/Yamcha_DB_Artwork_campkf.webp',
    ki: 5000,
  },
  {
    name: 'Ten Shinhan',
    planet: 'Earth',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679484758/dragonBall/Tenshinhan_DB_Artwork_yiv8wx.webp',
    ki: 5000,
  },
  {
    name: 'Tao Pai Pai',
    planet: 'Earth',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679484805/dragonBall/Tao_Pai_Pai_Artwork_v6rz5g.webp',
    ki: 5000,
  },
  {
    name: 'Maestro Cuervo',
    planet: 'Earth',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679484864/dragonBall/Tsuru-Sen_27nin_hrzskm.webp',
    ki: 5000,
  },
  {
    name: 'Baba',
    planet: 'Earth',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679484938/dragonBall/Uranai_Baba_Artwork_ddsqg2.webp',
    ki: 5000,
  },
  {
    name: 'Upa',
    planet: 'Earth',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679484983/dragonBall/Upa_ni_3Fo_dzg0no.webp',
    ki: 5000,
  },
  {
    name: 'Lunch',
    planet: 'Earth',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679485054/dragonBall/Lunch_forma_mala_Artwork_o6vq8b.webp',
    ki: 5000,
  },
  {
    name: 'Bora',
    planet: 'Earth',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679485105/dragonBall/Dd01u41-c5681e28-971a-4f11-bf1b-512ad8ca9796_qr3sks.webp',
    ki: 5000,
  },
  {
    name: 'Yajirobei',
    planet: 'Earth',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679485169/dragonBall/Yajirobe_Artwork_wakg5o.webp',
    ki: 5000,
  },
  {
    name: 'Pilaf',
    planet: 'Earth',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679485254/dragonBall/Pilaf_Dokkan_ch1ew9.webp',
    ki: 5000,
  },
  {
    name: 'Popo',
    planet: 'Earth',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679485483/dragonBall/Mr._Popo_Artwork_gzy5yb.webp',
    ki: 5000,
  },
  {
    name: 'Dios',
    planet: 'Namek',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679485483/dragonBall/Dios_k0gcdr.webp',
    ki: 5000,
  },
  {
    name: 'Karin',
    planet: 'Earth',
    image:
      'https://res.cloudinary.com/dpeadveub/image/upload/v1679485556/dragonBall/Karin_en_Super_Hero_lgkghb.webp',
    ki: 5000,
  },
];
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCharacters = await Character.find();
    console.log('Todos los personajes' + allCharacters);
    if (allCharacters.length > 0) {
      await Character.collection.drop();
      console.log('Characters borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Characters', err);
  })
  .then(async () => {
    const CharactersMap = arrayCharacters.map(
      (character) => new Character(character)
    );
    console.log(CharactersMap);
    await Character.insertMany(CharactersMap);
    console.log('Characters insertados');
  })
  .catch((err) => {
    console.log('error insertando los Characters', err);
  })
  .finally(() => mongoose.disconnect());
