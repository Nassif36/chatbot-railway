const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const opcion43Masc = addKeyword('3')
  .addAnswer(['https://drive.google.com/file/d/1qojm2nLtbJPtshR2exkGsQddXnwwJoU-/view?usp=drive_link'])
  
const opcion42Masc = addKeyword('2')
  .addAnswer(['https://drive.google.com/file/d/1ttUWSKcgvgLUF4JRZfnOjuf_ZKQqTkdP/view?usp=drive_link'])

const opcion41Masc = addKeyword('1')
  .addAnswer(['https://drive.google.com/file/d/1YVd7GsTSR3E-gKMpYfvSiqZ119c5Z_kk/view?usp=drive_link'])

const opcion4Masc = addKeyword('4')
  .addAnswer(['💪🏽 Okey, no problem ❗ Si tenés poco tiempo tenemos la solucion para vos, tenemos las mejores rutinas y combinaciones para que puedas explotar en pocos minutos 💪🏽❗ Qué vas a entrenar hoy? ',
  '1️⃣ Tren superior 💪🏽',
  '2️⃣ Tren inferior 🍑 🦵🏼',
  '3️⃣ Quiero algo para quemar grasa 🏃🏽' 
  ], 
  null,
  null,
  [opcion41Masc, opcion42Masc, opcion43Masc]
  )

const opcion43Fem = addKeyword('3')
  .addAnswer(['https://drive.google.com/file/d/14dZNw4TkiJ75hMtWPfSVOQtZzyLejSYZ/view?usp=drive_link'])
  
const opcion42Fem = addKeyword('2')
  .addAnswer(['https://drive.google.com/file/d/154JGd5K3E1qLZ4JlYkcIOHBXmmd8lZJ_/view?usp=drive_link'])

const opcion41Fem = addKeyword('1')
  .addAnswer(['https://drive.google.com/file/d/1yzDEZE4VHgY6YUofZn3aSUnTBu3dTVbz/view?usp=drive_link'])

const opcion4Fem = addKeyword('4')
  .addAnswer(['💪🏽 Okey, no problem ❗ Si tenés poco tiempo tenemos la solucion para vos, tenemos las mejores rutinas y combinaciones para que puedas explotar en pocos minutos 💪🏽❗ Qué vas a entrenar hoy? ',
  '1️⃣ Tren superior 💪🏽',
  '2️⃣ Tren inferior 🍑 🦵🏼',
  '3️⃣ Quiero algo para quemar grasa 🏃🏽'
  ],
  null,
  null, 
  [opcion41Fem, opcion42Fem, opcion43Fem]
  )


const opcion3Masc = addKeyword('3')
  .addAnswer(['💪🏽 Okey let`s go ❗ Qué grupo muscular quisieras entrenar hoy?',
  '1️⃣ Gluteos',
  '2️⃣ Brazos',
  '3️⃣ Hombros',
  '4️⃣ Pecho',
  '5️⃣ Espalda',
  '6️⃣ Femorales y glúteos',
  '7️⃣ Cuádriceps y glúteos'
  ])
  .addAnswer('masculino')

const opcion3Fem = addKeyword('3')
  .addAnswer(['💪🏽 Okey let`s go ❗ Qué grupo muscular quisieras entrenar hoy?',
  '1️⃣ Gluteos ',
  '2️⃣ Brazos ',
  '3️⃣ Hombros',
  '5️⃣ Espalda',
  '6️⃣ Femorales y glúteos',
  '7️⃣ Cuádriceps y glúteos'
  ])
  .addAnswer('femenina')


const opcion23Masc = addKeyword('3')
  .addAnswer(['💪🏽 Tina te recomienda la siguiente rutina. Además contás con una rutina de HIIT workout para perder peso en caso que te aburra hacer cinta o bici. Recordá que todas las rutinas incluyen videos y tenés el apoyo de los profesores de turno para ayudarte en cualquier duda!', 'https://drive.google.com/drive/folders/101dN9BXqoZDiR85rsrHhE933qFFROWXP?usp=drive_link'])

const opcion22Masc = addKeyword('2')
  .addAnswer(['💪🏽 Tina te recomienda la siguiente rutina. Además contás con una rutina de HIIT workout para perder peso en caso que te aburra hacer cinta o bici. Recordá que todas las rutinas incluyen videos y tenés el apoyo de los profesores de turno para ayudarte en cualquier duda!', 'https://drive.google.com/drive/folders/1DZ_s8sQKBoCQkIiGI5Pg52HT41_cNFUH?usp=drive_link'])

const opcion21Masc = addKeyword('1')
  .addAnswer(['💪🏽 Tina te recomienda la siguiente rutina. Además contás con una rutina de HIIT workout para perder peso en caso que te aburra hacer cinta o bici. Recordá que todas las rutinas incluyen videos y tenés el apoyo de los profesores de turno para ayudarte en cualquier duda!', 'https://drive.google.com/drive/folders/1j0z0qNoVCaJtgrCVRGQQb1c8v7uK1jnI?usp=drive_link'])

const opcion2Masc = addKeyword('2')
  .addAnswer(['💪🏽 ¿Cuántos días a la semana vas a entrenar? ',
  '1️⃣ 3',
  '2️⃣ 4',
  '3️⃣ 5 '
  ],
  null,
  null,
  [opcion21Masc, opcion22Masc, opcion23Masc]
  )


const opcion23Fem = addKeyword('3')
  .addAnswer(['💪🏽 Tina te recomienda la siguiente rutina. Además contás con una rutina de HIIT workout para perder peso en caso que te aburra hacer cinta o bici. Recordá que todas las rutinas incluyen videos y tenés el apoyo de los profesores de turno para ayudarte en cualquier duda!', 'https://drive.google.com/drive/folders/1Sw2BTN1qNi7i4d_OMyyKimzRR1MyxXqq?usp=drive_link'])

const opcion22Fem = addKeyword('2')
  .addAnswer(['💪🏽 Tina te recomienda la siguiente rutina. Además contás con una rutina de HIIT workout para perder peso en caso que te aburra hacer cinta o bici. Recordá que todas las rutinas incluyen videos y tenés el apoyo de los profesores de turno para ayudarte en cualquier duda!', 'https://drive.google.com/drive/folders/14Bj1uKfDEWfVDT4WmU_GtVymBE12rvtf?usp=drive_link'])

const opcion21Fem = addKeyword('1')
  .addAnswer(['💪🏽 Tina te recomienda la siguiente rutina. Además contás con una rutina de HIIT workout para perder peso en caso que te aburra hacer cinta o bici. Recordá que todas las rutinas incluyen videos y tenés el apoyo de los profesores de turno para ayudarte en cualquier duda!', 'https://drive.google.com/drive/folders/18RTd-R99zlgO2wvObJTgcUIgHiWPEww5?usp=drive_link'])

const opcion2Fem = addKeyword('2')
.addAnswer(['💪🏽 ¿Cuántos días a la semana vas a entrenar? ',
 '1️⃣ 3',
 '2️⃣ 4',
 '3️⃣ 5 '],
 null,
 null,
 [opcion21Fem, opcion22Fem, opcion23Fem]
 )


const opcion1Masc = addKeyword('1')
  .addAnswer(['💪🏽 Tina te recomienda la siguiente rutina. Además contás con una rutina de HIIT workout para perder peso en caso que te aburra hacer cinta o bici. Recordá que todas las rutinas incluyen videos y tenés el apoyo de los profesores de turno para ayudarte en cualquier duda!', 'https://drive.google.com/drive/folders/1u0p6QZCwbxu3tvWGFu9slvEvVc0PLLLg?usp=drive_link'])

const opcion1Fem = addKeyword('1')
  .addAnswer(['💪🏽 Buenísimo! Tina te recomienda la siguiente rutina. Además contás con una rutina de HIIT workout para perder peso en caso que te aburra hacer cinta o bici. Recordá que todas las rutinas incluyen videos y tenés el apoyo de los profesores de turno para ayudarte en cualquier duda!', 'https://drive.google.com/drive/folders/11S_9cpG4MtTGvdCXR6xerwJaPSeJupQr?usp=drive_link'])


const trainingFem = addKeyword('1')
  .addAnswer('💪🏽 Contame un poco de vos, en qué nivel de acondicionamiento físico crees que estás? 🏋🏽')
  .addAnswer([
  '1️⃣ Soy iniciante, me gustaría una rutina para aprender y adaptar mi cuerpo 🏋🏽', 
  '2️⃣ Ya vengo entrenando hace rato, me gustaría una rutina para seguir creciendo 💪🏽 🔝',
  '3️⃣ Hoy quiero entrenar un grupo muscular específico  💪🏽 🍑 🦵🏼',
  '4️⃣ Hoy tengo poco tiempo, qué me sugerís Tina? 🤔'
  ],
  null,
  null,
  [opcion1Fem, opcion2Fem, opcion3Fem, opcion4Fem]
  )

const trainingMasc = addKeyword('2')
  .addAnswer('💪🏽 Buenísimo ❗ contame un poco de vos, en qué nivel de acondicionamiento físico crees que estás? 🏋🏽')
  .addAnswer([
  '1️⃣ Soy iniciante, me gustaría una rutina para aprender y adaptar mi cuerpo 🏋🏽', 
  '2️⃣ Ya vengo entrenando hace rato, me gustaría una rutina para seguir creciendo 💪🏽 🔝' ,
  '3️⃣ Hoy quiero entrenar un grupo muscular específico  💪🏽 🍑 🦵🏼' ,
  '4️⃣ Hoy tengo poco tiempo, qué me sugerís Tina? 🤔'
  ],
  null,
  null,
  [opcion1Masc, opcion2Masc, opcion3Masc, opcion4Masc]
  )

const flowOpcion3 = addKeyword('3')
.addAnswer([
  '💪🏽 Buenísimo! Recordá que todas las rutinas incluyen videos y tenés el apoyo de los profesores de turno para ayudarte en cualquier duda! ',
  '*Qué sexo sos?*',
  '1️⃣ 🏋️‍♀️ Femenino',
  '2️⃣ 🏋🏽 Masculino',
  ],
  null,
  null,
  [trainingFem, trainingMasc]
);


const flowOpcion2 = addKeyword(['2'])
.addAnswer('🕛 *Horarios*', {
  media: 'https://firebasestorage.googleapis.com/v0/b/mecacdn-8b7d3.appspot.com/o/meca-horarios.PNG?alt=media&token=cfecd238-c689-412b-818e-fec2cc2ecd82'
})

const flowOpcion1 = addKeyword(['1'])
.addAnswer(['✅ *Servicios*','☕ *Mecca`s Coffe* ','🛒 *Mecca Fitness Shop*'])
.addAnswer('👨🏽‍💻 💳 *Medios de pago*', {media: 'https://firebasestorage.googleapis.com/v0/b/mecacdn-8b7d3.appspot.com/o/meca-precios.PNG?alt=media&token=3e7901f7-e915-4e8b-a88f-b4506da93485'})


  const flowPrincipal = addKeyword(EVENTS.WELCOME)
  .addAnswer([' Buenas ❗ En qué puedo ayudarte?'] )
  .addAnswer([
  '1️⃣ Necesito info de los *aranceles*, *servicios* y *medios de pago* 👨🏽‍💻 💳', 
  '2️⃣ Horario de las *clases* 🕜 🏋🏽', 
  '3️⃣ Ya me inscribí, Quiero mi *rutina* 💪🏽'
  ],
  null,
  null,
  [flowOpcion1, flowOpcion2, flowOpcion3]
 );


const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = createFlow([flowPrincipal])
  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb()
};

main()
