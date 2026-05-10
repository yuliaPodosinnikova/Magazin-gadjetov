// ===== ЕДИНАЯ БАЗА ПРЕДМЕТОВ =====
const ITEMS_DB = [
  // === АВАТАРЫ ===
  {id:'av1',name:'Посетитель',desc:'Стартовый аватар',type:'avatar',collection:'arena',rarity:'common',price:0,image:'',default:true},
  
  // === РАМКИ ===
  {id:'fr1',name:'Базовая рамка',desc:'Простое обрамление',type:'frame',collection:'arena',rarity:'common',price:0,image:'',default:true},
  {id:'fr2',name:'Золотой ободок',desc:'Подчёркивает статус',type:'frame',collection:'tournament',rarity:'rare',price:150,image:'https://shared.akamai.steamstatic.com/community_assets/images/items/3080480/fde4583a31c6bd112b47ef192b187111cb10d255.png'},
  {id:'fr3',name:'Чёрная рамка',desc:'Стильная тёмная рамка',type:'frame',collection:'special',rarity:'rare',price:150,image:'https://shared.akamai.steamstatic.com/community_assets/images/items/1299690/3bee53ed573a561275f253839efe760dd0236054.png'},
  {id:'fr4',name:'Котик',desc:'Милый котик',type:'frame',collection:'special',rarity:'epic',price:280,image:'https://shared.akamai.steamstatic.com/community_assets/images/items/253230/27ef3d62a0e42bf4ac60d426f2f172e1790ec0fd.png'},
  {id:'fr5',name:'Китайская рамка',desc:'Восточный стиль',type:'frame',collection:'special',rarity:'epic',price:280,image:'https://shared.akamai.steamstatic.com/community_assets/images/items/730/c30260bb120bf1379f075802653c8eb86da7a7e9.png'},
  {id:'fr6',name:'Зайчик',desc:'Милый зайчик',type:'frame',collection:'special',rarity:'rare',price:150,image:'https://shared.fastly.steamstatic.com/community_assets/images/items/400910/27736cefed1a3045712b562d6af8ca8c5a746a55.png'},
  {id:'fr7',name:'DVD',desc:'Ретро стиль',type:'frame',collection:'special',rarity:'epic',price:280,image:'https://shared.fastly.steamstatic.com/community_assets/images/items/978460/958c368b43281a7c2520d3bd4671e7760ac3e1b6.png'},
  {id:'fr8',name:'Healing Frame',desc:'Исцеляющая рамка',type:'frame',collection:'special',rarity:'rare',price:200,image:'https://shared.fastly.steamstatic.com/community_assets/images/items/527230/18ec71cb7da1182d32164890bac8411a09e26e46.png'},
  
  // === ФОНЫ ===
  {id:'bg1',name:'Базовый фон (Видео)',desc:'Видео фон по умолчанию',type:'background',collection:'default',rarity:'common',price:0,image:'video',videoUrl:'https://vk.com/video_ext.php?oid=-67433146&id=456514647&hd=3&autoplay=1',default:true},
  {id:'bg2',name:'Главная улица Рэнвуда',desc:'Уютная улица из игры',type:'background',collection:'special',rarity:'rare',price:200,image:'https://community.fastly.steamstatic.com/economy/profilebackground/items/3764200/1b30e7f60dfe024c6be97e33e9bec79e6a2b934f.jpg?size=320x200'},
  {id:'bg3',name:'Башня',desc:'Загадочная башня',type:'background',collection:'special',rarity:'legendary',price:500,image:'https://community.fastly.steamstatic.com/economy/profilebackground/items/1030300/f54a2bfa3cb71d295faa1cd1ba95b4aac392f245.jpg?size=320x200'},
  {id:'bg4',name:'Домик у озера',desc:'Уютный домик у воды',type:'background',collection:'special',rarity:'rare',price:200,image:'https://community.fastly.steamstatic.com/economy/profilebackground/items/1263950/9aea5f2f726e050d2df2f0eb531d90b497790c46.jpg?size=320x200'},
  
  // === ТЕМЫ ===
  {id:'th1',name:'Классическая',desc:'Стандартная тёмная тема',type:'theme',collection:'default',rarity:'common',price:0,image:'',default:true}
];

// ===== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ =====
function getItemById(id) { return ITEMS_DB.find(i => i.id === id); }
function getItemsByType(type) { return ITEMS_DB.filter(i => i.type === type); }
function getItemsByCollection(collection) { return ITEMS_DB.filter(i => i.collection === collection); }
function getRarityConfig(rarity) {
  const config = {
    common: { name: 'Обычный', color: '#64748b', bg: 'rgba(100,116,139,0.2)' },
    rare: { name: 'Редкий', color: '#3b82f6', bg: 'rgba(59,130,246,0.2)' },
    epic: { name: 'Эпик', color: '#a855f7', bg: 'rgba(168,85,247,0.2)' },
    legendary: { name: 'Легендарный', color: '#f59e0b', bg: 'rgba(245,158,11,0.2)' }
  };
  return config[rarity] || config.common;
}
function getCollectionName(key) {
  const names = { arena: 'Арена Боевая', tournament: 'Турнирный Мастер', cyber: 'Кибер-Коллекция', winter: 'Зимний Сезон', legend: 'Легенды', special: 'Спец.', default: 'Базовая' };
  return names[key] || key;
}