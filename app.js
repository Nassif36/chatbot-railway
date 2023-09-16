const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

 // Crear el flujo principal
 const flowPrincipal = addKeyword('hola', 'Hola', 'Buenas', 'buenas', 'ola', 'que tal')
 .addAnswer(['Hola Soy *Tina* tu coach virtual de La Mecca Fitness!! En que puedo ayudarte?'] )
 .addAnswer([
 'ℹ️ *Servicios*', 
 '🏋️‍♂️ *Clases*, 🕛 *Horarios* y 💲 *Aranceles*', 
 '💪 *Quiero Mi Rutina*'
]);

// Opcion 1
const flowOpcion1 = addKeyword(['servicios', 'Servicios'], { sensitive: true })
 .addAnswer([
   '♨️ Meccas Coffe',
   '🛒 Mecca Fitness Shop'
 ]);

 const flowOpcion2 = addKeyword(['clases', 'training', 'Clases', 'Training'], { sensitive: true })
 .addAnswer([
   '🏋️‍♂️ *Clases*',
   ' - - - -',
   ' - - - -',
   ' - - - -',
   ' - - - -'
 ]);

 const flowOpcion3 = addKeyword(['horarios', 'horario', 'horarios', 'hora', 'apertura', 'Horarios', 'Apertura'], { sensitive: true })
 .addAnswer([
   '🕛 *Horarios*',
   ' - - - -',
   ' - - - -',
   ' - - - -',
   ' - - - -'
 ]);

 const flowOpcion4 = addKeyword(['aranceles', 'Aranceles','costo','Costo','valor', 'Valor'], { sensitive: false })
 .addAnswer([
   '💲 *Aranceles*',
   ' - - - -',
   ' - - - -',
   ' - - - -',
   ' - - - -'
 ]);

// Opcion 2
const flowOpcion5 = addKeyword(['quiero mi', 'rutina', 'Quiero mi', 'Rutina'], { sensitive: false })
 .addAnswer(['Que grupo muscular quisieras entrenar?'])
 .addAnswer([
 'Hombros', 
 'Pecho', 
 'Brazos', 
 'Espalda', 
 'Cuadriceps', 
 'Femorales y Gluteos'
]);

// Hombre o Mujer
const flowHombreMujer = addKeyword(['Hombros', 'Pecho', 'Brazos', 'Espalda', 'Cuadriceps', 'Femorales y Gluteos'])
 .addAnswer(['Hombre o mujer?'])
 .addAnswer(['Intensidad y duracion ?'
]);


const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterProvider = createProvider(BaileysProvider);
  const adapterFlow = createFlow([flowPrincipal, flowOpcion1, flowOpcion2, flowOpcion3, flowOpcion4, flowOpcion5, flowHombreMujer])

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });
};

QRPortalWeb()
main()
