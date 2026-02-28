const categoryMap = {
  en: {
    "Exclusive": "Exclusive",
    "Injury News": "Injury News",
    "Account": "Account",
    "Club": "Club",
    "Friends & Family": "Friends & Family",
    "Match Day": "Match Day",
    "All": "All"
  },
  es: {
    "Exclusive": "Exclusiva",
    "Injury News": "Noticias de lesión",
    "Account": "Cuenta",
    "Club": "Club",
    "Friends & Family": "Familia y Amigos",
    "Match Day": "Día de partido",
    "All": "Todo"
  }
};

const translations = {
  en: {
    siteTitle: "PABLO GAVI'S HUGE FAN",
    navHome: "HOME",
    navNews: "NEWS",
    navMatches: "MATCHES",
    navTrainings: "TRAININGS",
    navGavi: "GAVI",
    navEdits: "EDITS",

    welcomeTo: "WELCOME TO",
    everythingAbout: "Everything about Pablo Gavi here",
    latestNewsBtn: "LATEST NEWS",

    nextMatch: "NEXT MATCH",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    matchDetails: "Match details",

    latestNews: "Latest News",
    seeAllNews: "See all news →",
    injuryNews: "Injury News",
    insideClub: "Club",
    exclusive: "Exclusive",

    featuredEdits: "Featured Edits",
    seeAllEdits: "See all edits →",
    edit1Title: "Gavi Huge Fan account is back!",
    edit2Title: "Today's edit",
    edit3Title: "Pedri x Gavi collage hits top",

    gaviSnapshot: "Gavi Snapshot",
    fullStats: "Full stats & bio →",
    age: "Age",
    number: "Shirt Number",
    midfielder: "Midfielder",
    position: "Position",
    club: "Club",

    footerMadeBy: "© 2025 GaviHugeFan | Made by GHF",
    footerFollow: "Follow on instagram to get the fastest updates",

    news: "News",
    filterAll: "All",
    filterInjury: "Injury News",
    filterAccount: "Account",
    filterClub: "Club",
    filterFamily: "Friends & Family",
    filterExclusive: "Exclusive",
    filterMatch: "Match Day",

    back_to_news: "← Back to News",
    home: "Home",
    news: "News",
    related_articles_title: "Related Articles",
    comments_title: "Comments",
    no_comments: "There are no comments yet.",
    comment_placeholder: "Write a comment...",
    share_article: "Share this Article",
    post_comment: "Post Comment",

    matches_title: "Matches",

    watchTrainingVideo: "WATCH TRAINING VIDEO",
    todaysTraining: "TODAY'S TRAINING",
    trainingSubtitle: "Exclusive daily sessions from Ciutat Esportiva",
    gavisTrainings: "GAVI'S TRAININGS",
    trainingTwo: "TRAINING OF NOVEMBER 30",
    trainingThree: "TRAINING OF MARCH 15",

    pressKicker: "PRESS CONFERENCE",
    pressTitle: "EVERY WORD GAVI SPEAKS BECOMES HISTORY",
    pressSubtitle: "See Gavi's press conferences below.",
    pressScroll: "Scroll",
    pressBumper: "PRESS ROOM • MIC CHECK • FLASHES • QUESTIONS • FOCUS • NO FEAR •",
    pressConfListTitle: "Press conferences",
    pressConfListSubtitle: "Official statements and post-match interviews",

    conf1Kicker: "Press conference ahead of Barcelona vs Borussia Dortmund",
    conf1Title: "Who thinks I don't know how to play, they have no idea",
    conf1Context: "UEFA Champions League · Quarter-final",
    conf1QuoteAccent: "Who thinks I don't know how to play,",
    conf1QuoteMain: "they have no idea.",
    conf1Meta: "— Gavi, UEFA Champions League",
    transcriptTitle: "Full press conference transcript",
    conf1Intro: "Speaking ahead of the Champions League quarter-final, Gavi made it clear that outside criticism does not affect his confidence or his approach to the game.",
    conf1P1: "I try to improve every day. I know what I can do, and the coaching staff knows it too. People who think I don't understand the game simply haven't watched me closely enough.",
    conf1P2: "The midfielder also highlighted the importance of collective effort, insisting that individual recognition means little without team success.",
    conf1P3: "In football, nothing is guaranteed. You have to work, stay humble, and prove yourself every match.",
    conf1Source: "Source: FC Barcelona / UEFA Champions League press conference",

    conf2Kicker: "After Barcelona's win over Athletic Club",
    conf2Title: "The injury was really tough — but I never stopped believing",
    conf2Context: "La Liga · Post-match press conference",
    conf2QuoteAccent: "The injury was really tough.",
    conf2QuoteMain: "But I never stopped believing I would come back.",
    conf2Meta: "— Gavi, post-match",
    conf2Intro: "Following his return from a long-term injury, Gavi spoke emotionally about his recovery and the support from the team and fans.",
    conf2P1: "What hurt me the most was seeing my teammates and not being able to play. But right now, all I want is to keep helping the team and enjoying every minute on the pitch.",
    conf2P2: "I'm meeting the deadlines they set for me, and so far everything is going very well. The fans and my family have been incredible.",
    conf2Source: "Source: FC Barcelona official press conference",

    conf3Kicker: "Ahead of Champions League quarter-final",
    conf3Title: "We're having a great season but we're not unbeatable",
    conf3Quote: "We are putting in a great season but we don't feel unbeatable. In football you can't always win. Every day I try to improve.",
    conf3Meta: "— Gavi, FC Barcelona",
    conf3Source: "Source: fcbarcelona.com",

    gaviHeroTitle: "WELCOME TO GAVI'S WORLD",
    gaviHeroSubtitle: "Everything about Pablo Gavi in one place",
    alltimeKicker: "ALL-TIME STATS",
    alltimeTitle: "Numbers that already feel unreal",
    alltimeSubtitle: "Senior competitive matches · As of December 2025",
    alltimeTagClub: "CLUB",
    alltimeTagCountry: "COUNTRY",
    alltimeTitleBarca: "FC Barcelona",
    alltimeTitleSpain: "Spain National Team",
    statAppearances: "Appearances",
    statGoals: "Goals",
    statAssists: "Assists",
    statTrophies: "Trophies",
    statCaps: "Caps",
    statWorldCupGoal: "World Cup Goal",
    alltimeNoteBarca: "Data from official source with Barça first team: transfermarkt.com",
    alltimeNoteSpain: "Data from official source with Spain national team: transfermarkt.com",
    bioKicker: "BIOGRAPHY",
    bioTitle: "From Los Palacios to the world",
    bioSubtitle: "The story of how a kid from a small Andalusian town became the fearless heart of Barcelona and Spain.",
    familyKicker: "FAMILY",
    familyTitle: "The people behind Pablo",
    family01Tag: "01 — PARENTS",
    family01Heading: "Pablo Paez & Aurora Gavira",
    family02Tag: "02 — SISTER",
    family02Heading: "Pablo's sister",
    family03Tag: "03 — GIRLFRIEND",
    family03Heading: "Anita Pelayo",
    bioTimelineLabel: "GAVI'S PATH",
    familyCaption1: "Barcelona · August 5 2024",
    familyQuote1: "Pablo's family celebrates Pablo's birthday",
    familyPillParents: "Parents",
    familyPillDadMom: "Dad & Mom",
    familyPillSister: "Sister",
    familyCaption2: "Aurora & Pablo · edit by GHF",
    familyQuote2: "Find this edit on our instagram",
    familyPillAurora: "Aurora Paez",
    familyPillGavira: "Gavira",
    familyPillBestSister: "Best Sister in the world",
    familyCaption3: "La Liga Celebration · 2025",
    familyQuote3: "Gavi publicly shows his girlfriend.",
    familyPillAnita: "Anita Pelayo",
    familyPillAna: "Ana",
    familyPillBestCouple: "Best Couple",

    bioYear1: "2004",
    bioHeading1: "Los Palacios y Villafranca",
    bioText1: "Pablo Martín Páez Gavira was born on August 5, 2004, in Los Palacios y Villafranca, a small Andalusian town known for producing football talent. He grew up in a humble, hard-working family: his father Pablo worked long shifts, while his mother Gavira became the emotional pillar of the home.",
    bioChip1: "Los Palacios · 2004",
    bioYear2: "2004–2013",
    bioHeading2: "Tiny kid, huge intensity",
    bioText2: "From the age of 4, Gavi played football everywhere — streets, schoolyards, dirt patches behind buildings. Neighbors remember him dribbling through obstacles he built from stones and bottles, repeating plays again and again if a pass wasn't perfect.<br><br>Coaches at his first club, La Liara Balompié, described him simply as: <span class=\"bio-quote\">\"Tiny kid, huge intensity.\"</span>",
    bioChip2: "La Liara Balompie · 2012",
    bioYear3: "2013–2015",
    bioHeading3: "Andalusia's hidden gem",
    bioText3: "As his technical level exploded, Sevilla FC scouts noticed him and signed him to their academy. Andalusia was far from the spotlight: hard pitches, dusty boots, and long drives from his parents every single week so he could chase his dream.<br><br>One coach remembers: <span class=\"bio-quote\">\"Other kids wanted to score goals. Gavi only wanted the ball. Every ball.\"</span>",
    bioChip3: "Won with Betis · 2014",
    bioYear4: "2015",
    bioHeading4: "La Masia: leaving home at 11",
    bioText4: "At 11, FC Barcelona signed Gavi. The decision changed everything: the family moved hundreds of kilometres, leaving behind friends and familiar streets.<br><br>At La Masia he:<br>• lived in the dormitory with other kids<br>• studied in the mornings<br>• trained every afternoon<br>• watched hours of football at night<br><br>Coaches immediately saw elite competitiveness, fearless duels, rare vision, and unusual maturity.",
    bioChip4: "New Home · 2015",
    bioYear5: "2016–2020",
    bioHeading5: "Lightning through the academy",
    bioText5: "Gavi tore through the youth teams:<br>• U15 standout<br>• U16 captain material<br>• promoted early to U19<br>• then to Barça B<br><br>Analysts compared him to Iniesta's bravery, prime Xavi's intensity and Gattuso's duels — but insisted: <span class=\"bio-quote\">\"Gavi is not the next anyone. He is something new.\"</span>",
    bioChip5: "La Masia · 2017",
    bioYear6: "2021",
    bioHeading6: "Seventeen and fearless",
    bioText6: "At 17, Ronald Koeman called him up for preseason. Players twice his size bounced off him. He demanded the ball from Busquets and dribbled past world-class defenders like it was nothing.<br><br>By autumn he was:<br>• one of Barça's youngest debutants<br>• a regular starter<br>• already a fan favourite for his courage and fight<br><br>Xavi would say later: <span class=\"bio-quote\">\"Gavi has a heart the size of a planet.\"</span>",
    bioChip6: "Debut · 2021",
    bioYear7: "2022",
    bioHeading7: "Golden Boy & world stage",
    bioText7: "2022 was the year the world understood how special he was. Gavi became Golden Boy and Kopa Trophy winner, a leader in Spain's midfield at 18, and one of the youngest ever World Cup goalscorers.<br><br>His goal vs Costa Rica, replayed millions of times, showed not just skill, but maturity, power and identity.",
    bioChip7: "Kopa Trophy · 2022",
    bioYear8: "2023 →",
    bioHeading8: "Future of Barcelona football",
    bioText8: "Spain trusted Gavi with responsibilities usually given to veterans. He pressed like a monster, won duels and played with fire, especially in El Clásico, where his passion turned him into a cult hero.<br><br>Many analysts say: <span class=\"bio-quote\">\"No one represents the future of Spanish football more than Gavi.\"</span>",
    bioChip8: "With Lamine · 2025",
    familyText1: "On the left is Pablo's father, Pablo Páez. Next to him is Aurora Belén Gavira, Pablo and Aurora's mother. Aurora Páez Gavira is Pablo's sister. Gavi comes from a close-knit, working-class family that played an instrumental role in nurturing his talent. When Barcelona's offer came, the decision to allow their young son to move to La Masia represented a profound act of faith and sacrifice. This family foundation has remained crucial to Gavi's development.",
    familyText2: "Aurora Paez Gavira, Pablo's sister who was born on February 27, 2003 and raised in the Seville region of Spain before moving to Barcelona. She studied primary education in the Marismas region of Spain. Aurora graduated from university in 2025.<br>Aurora and Gavi <em>in my edit.</em>",
    familyText3: "Anita Pelayo or Ana Pelayo, Pablo's girlfriend who was born on October 24, 2002 in Seville, Spain. She is a young and rising social media influencer and student from Seville, Spain. Currently she is a student of University of Seville. Ana reportedly met through Pablo's sister and has been in a relationship with Pablo since 2022.<br>Here in video Pablo introduces Ana to Ansu Fati <em>and then Pablo's father comes to wave Ansu.</em>"
  },

  es: {
    siteTitle: "GRAN FAN DE PABLO GAVI",
    navHome: "INICIO",
    navNews: "NOTICIAS",
    navMatches: "PARTIDOS",
    navTrainings: "ENTRENAMIENTOS",
    navGavi: "GAVI",
    navEdits: "EDICIONES",

    welcomeTo: "BIENVENIDO A",
    everythingAbout: "Todo sobre Pablo Gavi aquí",
    latestNewsBtn: "ÚLTIMAS NOTICIAS",

    nextMatch: "PRÓXIMO PARTIDO",
    days: "Días",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    matchDetails: "Detalles del partido",

    latestNews: "Últimas Noticias",
    seeAllNews: "Ver todas →",
    injuryNews: "Noticias de lesión",
    insideClub: "Club",
    exclusive: "Exclusiva",

    featuredEdits: "Ediciones Destacadas",
    seeAllEdits: "Ver todas →",
    edit1Title: "¡La cuenta Gavi Huge Fan ha vuelto!",
    edit2Title: "Edición de hoy",
    edit3Title: "El collage Pedri x Gavi llega a la cima",

    gaviSnapshot: "Resumen de Gavi",
    fullStats: "Estadísticas completas →",
    age: "Años",
    number: "Número",
    midfielder: "Centrocampista",
    position: "Posición",
    club: "Club",

    footerMadeBy: "© 2025 GaviHugeFan | Hecho por GHF",
    footerFollow: "Sígueme en instagram para obtener las actualizaciones más rápidas",

    news: "Noticias",
    filterAll: "Todo",
    filterInjury: "Noticias de lesión",
    filterAccount: "Cuenta",
    filterClub: "Club",
    filterFamily: "Familia y Amigos",
    filterExclusive: "Exclusiva",
    filterMatch: "Día de partido",

    back_to_news: "← Volver a Noticias",
    home: "Inicio",
    news: "Noticias",
    related_articles_title: "Artículos Relacionados",
    comments_title: "Comentarios",
    no_comments: "Aún no hay comentarios.",
    comment_placeholder: "Escribe un comentario...",
    share_article: "Comparte este Artículo",
    post_comment: "Publicar Comentario",

    matches_title: "Partidos",

    watchTrainingVideo: "VER VIDEO DEL ENTRENAMIENTO",
    todaysTraining: "ENTRENAMIENTO DE HOY",
    trainingSubtitle: "Sesiones diarias exclusivas desde la Ciutat Esportiva",
    gavisTrainings: "ENTRENAMIENTOS DE GAVI",
    trainingTwo: "ENTRENAMIENTO DEL 30 DE NOVIEMBRE",
    trainingThree: "ENTRENAMIENTO DEL 15 DE MARZO",

    pressKicker: "RUEDA DE PRENSA",
    pressTitle: "CADA PALABRA DE GAVI SE CONVIERTE EN HISTORIA",
    pressSubtitle: "Las ruedas de prensa de Gavi, aquí abajo.",
    pressScroll: "Desplazar",
    pressBumper: "SALA DE PRENSA • MICRÓFONO • FLASHES • PREGUNTAS • ENFOQUE • SIN MIEDO •",
    pressConfListTitle: "Ruedas de prensa",
    pressConfListSubtitle: "Declaraciones oficiales y entrevistas tras partidos",

    conf1Kicker: "Rueda de prensa previa al Barcelona – Borussia Dortmund",
    conf1Title: "Quien piense que no sé jugar, no tiene ni idea",
    conf1Context: "UEFA Champions League · Cuartos de final",
    conf1QuoteAccent: "Quien piense que no sé jugar,",
    conf1QuoteMain: "no tiene ni idea.",
    conf1Meta: "— Gavi, UEFA Champions League",
    transcriptTitle: "Transcripción completa de la rueda de prensa",
    conf1Intro: "En la previa del partido de cuartos de la Champions, Gavi dejó claro que las críticas externas no afectan su confianza ni su forma de entender el juego.",
    conf1P1: "Intento mejorar cada día. Sé lo que puedo hacer y el cuerpo técnico también lo sabe. Quien piense que no entiendo el juego es que no me ha visto bien.",
    conf1P2: "El centrocampista destacó también la importancia del esfuerzo colectivo: el reconocimiento individual importa poco sin el éxito del equipo.",
    conf1P3: "En el fútbol nada está garantizado. Hay que trabajar, mantenerse humilde y demostrarlo en cada partido.",
    conf1Source: "Fuente: FC Barcelona / rueda de prensa UEFA Champions League",

    conf2Kicker: "Tras la victoria del Barça ante el Athletic",
    conf2Title: "La lesión fue muy dura — pero nunca dejé de creer",
    conf2Context: "La Liga · Rueda de prensa post-partido",
    conf2QuoteAccent: "La lesión fue muy dura.",
    conf2QuoteMain: "Pero nunca dejé de creer que volvería.",
    conf2Meta: "— Gavi, post-partido",
    conf2Intro: "Tras su vuelta de una lesión de larga duración, Gavi habló con emoción de su recuperación y del apoyo del equipo y la afición.",
    conf2P1: "Lo que más me dolió fue ver a mis compañeros y no poder jugar. Pero ahora solo quiero seguir ayudando al equipo y disfrutar cada minuto en el campo.",
    conf2P2: "Voy cumpliendo los plazos que me marcaron y por ahora todo va muy bien. La afición y mi familia han sido increíbles.",
    conf2Source: "Fuente: rueda de prensa oficial FC Barcelona",

    conf3Kicker: "Previa a cuartos de la Champions",
    conf3Title: "Hacemos una gran temporada pero no somos imbatibles",
    conf3Quote: "Estamos haciendo una gran temporada pero no nos sentimos imbatibles. En el fútbol no siempre se puede ganar. Cada día intento mejorar.",
    conf3Meta: "— Gavi, FC Barcelona",
    conf3Source: "Fuente: fcbarcelona.com",

    gaviHeroTitle: "BIENVENIDO AL MUNDO DE GAVI",
    gaviHeroSubtitle: "Todo sobre Pablo Gavi en un solo lugar",
    alltimeKicker: "ESTADÍSTICAS TOTALES",
    alltimeTitle: "Números que ya parecen irreales",
    alltimeSubtitle: "Partidos oficiales · Diciembre 2025",
    alltimeTagClub: "CLUB",
    alltimeTagCountry: "SELECCIÓN",
    alltimeTitleBarca: "FC Barcelona",
    alltimeTitleSpain: "Selección de España",
    statAppearances: "Partidos",
    statGoals: "Goles",
    statAssists: "Asistencias",
    statTrophies: "Títulos",
    statCaps: "Internacional",
    statWorldCupGoal: "Gol Mundial",
    alltimeNoteBarca: "Datos oficiales con el primer equipo del Barça: transfermarkt.com",
    alltimeNoteSpain: "Datos oficiales con la selección española: transfermarkt.com",
    bioKicker: "BIOGRAFÍA",
    bioTitle: "De Los Palacios al mundo",
    bioSubtitle: "La historia de cómo un niño de un pueblo andaluz se convirtió en el corazón del Barça y de España.",
    familyKicker: "FAMILIA",
    familyTitle: "La gente detrás de Pablo",
    family01Tag: "01 — PADRES",
    family01Heading: "Pablo Páez y Aurora Gavira",
    family02Tag: "02 — HERMANA",
    family02Heading: "La hermana de Pablo",
    family03Tag: "03 — PAREJA",
    family03Heading: "Anita Pelayo",
    bioTimelineLabel: "EL CAMINO DE GAVI",
    familyCaption1: "Barcelona · 5 de agosto 2024",
    familyQuote1: "La familia de Pablo celebra su cumpleaños",
    familyPillParents: "Padres",
    familyPillDadMom: "Papá y mamá",
    familyPillSister: "Hermana",
    familyCaption2: "Aurora y Pablo · edit por GHF",
    familyQuote2: "Encuentra este edit en nuestro instagram",
    familyPillAurora: "Aurora Páez",
    familyPillGavira: "Gavira",
    familyPillBestSister: "La mejor hermana del mundo",
    familyCaption3: "Celebración La Liga · 2025",
    familyQuote3: "Gavi presenta en público a su novia.",
    familyPillAnita: "Anita Pelayo",
    familyPillAna: "Ana",
    familyPillBestCouple: "Mejor pareja",

    bioYear1: "2004",
    bioHeading1: "Los Palacios y Villafranca",
    bioText1: "Pablo Martín Páez Gavira nació el 5 de agosto de 2004 en Los Palacios y Villafranca, un pequeño pueblo andaluz conocido por formar talento del fútbol. Creció en una familia humilde y trabajadora: su padre Pablo trabajaba largas jornadas y su madre Gavira era el pilar emocional del hogar.",
    bioChip1: "Los Palacios · 2004",
    bioYear2: "2004–2013",
    bioHeading2: "Niño pequeño, intensidad enorme",
    bioText2: "Desde los 4 años, Gavi jugó al fútbol en todas partes: calles, patios de colegio, descampados. Los vecinos lo recuerdan esquivando obstáculos que montaba con piedras y botellas, repitiendo jugadas una y otra vez si un pase no era perfecto.<br><br>Los entrenadores de su primer club, La Liara Balompié, lo describían así: <span class=\"bio-quote\">\"Niño pequeño, intensidad enorme.\"</span>",
    bioChip2: "La Liara Balompié · 2012",
    bioYear3: "2013–2015",
    bioHeading3: "La joya escondida de Andalucía",
    bioText3: "Cuando su nivel técnico explotó, los ojeadores del Sevilla FC lo ficharon para su cantera. Andalucía quedaba lejos del foco: campos duros, botas polvorientas y viajes largos de sus padres cada semana para perseguir su sueño.<br><br>Un entrenador recuerda: <span class=\"bio-quote\">\"Los demás querían marcar. Gavi solo quería el balón. Siempre el balón.\"</span>",
    bioChip3: "Ganó con Betis · 2014",
    bioYear4: "2015",
    bioHeading4: "La Masia: dejar casa a los 11",
    bioText4: "Con 11 años, el FC Barcelona fichó a Gavi. La decisión lo cambió todo: la familia se mudó cientos de kilómetros, dejando atrás amigos y calles conocidas.<br><br>En La Masia:<br>• vivió en la residencia con otros niños<br>• estudió por las mañanas<br>• entrenó cada tarde<br>• vio horas de fútbol por la noche<br><br>Los entrenadores vieron al instante competitividad de élite, duelos sin miedo, visión y madurez poco habituales.",
    bioChip4: "Nuevo hogar · 2015",
    bioYear5: "2016–2020",
    bioHeading5: "Un rayo por la cantera",
    bioText5: "Gavi arrasó en los equipos de formación:<br>• destacado en juvenil<br>• material de capitán<br>• subido pronto al Juvenil A<br>• y después al Barça B<br><br>Lo compararon con la valentía de Iniesta, la intensidad de Xavi y los duelos de Gattuso, pero insistían: <span class=\"bio-quote\">\"Gavi no es el siguiente de nadie. Es algo nuevo.\"</span>",
    bioChip5: "La Masia · 2017",
    bioYear6: "2021",
    bioHeading6: "Diecisiete años y sin miedo",
    bioText6: "Con 17 años, Ronald Koeman lo convocó para la pretemporada. Jugadores el doble de grandes rebotaban en él. Pedía el balón a Busquets y dejaba atrás defensas de primer nivel como si nada.<br><br>En otoño ya era:<br>• uno de los debutantes más jóvenes del Barça<br>• titular habitual<br>• favorito de la afición por su coraje y lucha<br><br>Xavi diría después: <span class=\"bio-quote\">\"Gavi tiene un corazón del tamaño de un planeta.\"</span>",
    bioChip6: "Debut · 2021",
    bioYear7: "2022",
    bioHeading7: "Golden Boy y escenario mundial",
    bioText7: "2022 fue el año en que el mundo entendió lo especial que es. Gavi ganó el Golden Boy y el Trofeo Kopa, se erigió en líder del mediocampo de España con 18 años y fue uno de los goleadores más jóvenes en un Mundial.<br><br>Su gol ante Costa Rica, repetido millones de veces, mostró no solo técnica, sino madurez, potencia e identidad.",
    bioChip7: "Trofeo Kopa · 2022",
    bioYear8: "2023 →",
    bioHeading8: "El futuro del fútbol del Barça",
    bioText8: "España confió a Gavi responsabilidades propias de veteranos. Presionó como un monstruo, ganó duelos y jugó con fuego, sobre todo en el Clásico, donde su pasión lo convirtió en un ídolo.<br><br>Muchos analistas dicen: <span class=\"bio-quote\">\"Nadie representa mejor el futuro del fútbol español que Gavi.\"</span>",
    bioChip8: "Con Lamine · 2025",
    familyText1: "A la izquierda está el padre de Pablo, Pablo Páez. Junto a él, Aurora Belén Gavira, la madre de Pablo y Aurora. Aurora Páez Gavira es la hermana de Pablo. Gavi viene de una familia unida y trabajadora que fue clave para su talento. Cuando llegó la oferta del Barcelona, decidir que su hijo se mudara a La Masia fue un acto de fe y sacrificio. Esa base familiar sigue siendo fundamental para Gavi.",
    familyText2: "Aurora Páez Gavira, la hermana de Pablo, nació el 27 de febrero de 2003 y se crió en Sevilla antes de mudarse a Barcelona. Estudió magisterio en la zona de las Marismas. Se licenció en 2025.<br>Aurora y Gavi <em>en mi edit.</em>",
    familyText3: "Anita Pelayo o Ana Pelayo, la novia de Pablo, nació el 24 de octubre de 2002 en Sevilla. Es influencer y estudiante. Estudia en la Universidad de Sevilla. Conoció a Pablo a través de su hermana y llevan juntos desde 2022.<br>En el vídeo Pablo presenta a Ana a Ansu Fati <em>y luego su padre saluda a Ansu.</em>"
  }
};

function getCurrentLanguage() {
  return localStorage.getItem("language") || "en";
}

function setLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[key]) {
      el.textContent = dict[key];
    }
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (key && dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  localStorage.setItem("language", lang);

  if (document.getElementById("bumperTrack")) {
    requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
  }
}

let allNews = [];
let newsTranslations = {};
let currentPage = 1;
let currentFilter = "All";
const newsPerPage = 9;

function initNews() {
  const grid = document.querySelector(".news-grid");
  if (!grid) return;

  fetch("data/news.json")
    .then(res => res.json())
    .then(data => {
      allNews = data || [];
      return fetch("data/news_translations.json");
    })
    .then(res => res.json())
    .then(tr => {
      newsTranslations = tr || {};
      prepareFilterButtons();
      renderNews();
      setupFilterButtons();
    })
    .catch(err => {
      console.error("Error loading news or translations:", err);
      prepareFilterButtons();
      renderNews();
      setupFilterButtons();
    });
}

function prepareFilterButtons() {
  document.querySelectorAll(".news-filter-btn").forEach(btn => {
    if (!btn.dataset.filter) {
      btn.dataset.filter = btn.textContent.trim();
    }
  });
}

function getFilteredNews() {
    const lang = getCurrentLanguage();
    const translatedFilter = categoryMap[lang][currentFilter] || currentFilter;

    if (translatedFilter === categoryMap[lang]["All"]) {
        return allNews;
    }

    return allNews.filter(n => {
        const nDisplay = getDisplayArticleData(n);
        return nDisplay.category === translatedFilter;
    });
}

function getDisplayArticleData(article) {
  const lang = getCurrentLanguage();
  if (lang !== "es") return article;

  const t = newsTranslations[article.slug];
  if (!t) return article;

  return {
    ...article,
    title: t.title_es || article.title,
    text: t.text_es || article.text,
    fullText: t.fullText_es || article.fullText,
    category: t.category_es || article.category,
    tags: t.tags_es || article.tags
  };
}

function renderNews() {
  const grid = document.querySelector(".news-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const filtered = getFilteredNews();
  const totalPages = Math.ceil(filtered.length / newsPerPage) || 1;
  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * newsPerPage;
  const end = start + newsPerPage;

  const pageItems = filtered.slice(start, end);

  const col1 = document.createElement("div");
  const col2 = document.createElement("div");
  const col3 = document.createElement("div");

  col1.classList.add("news-column");
  col2.classList.add("news-column");
  col3.classList.add("news-column");

  const cols = [col1, col2, col3];
  let colIndex = 0;

  pageItems.forEach(item => {
    const display = getDisplayArticleData(item);

    const card = document.createElement("article");
    card.className = "news-card news-md";

    card.innerHTML = `
      <a href="news/index.html?slug=${item.slug}" class="news-link">
        <img src="${item.img}" alt="${display.title}">
        <div class="news-card-content">
          <div class="news-tag">${display.category}</div>
          <div class="news-title">${display.title}</div>
          <p class="news-text">${display.text}</p>
        </div>
      </a>
    `;

    cols[colIndex].appendChild(card);
    colIndex = (colIndex + 1) % 3;
  });

  grid.appendChild(col1);
  grid.appendChild(col2);
  grid.appendChild(col3);

  updatePagination(totalPages);
}

function updatePagination(totalPages) {
  const container = document.querySelector(".pagination");
  if (!container) return;

  container.innerHTML = "";

  function createBtn(label, page, active = false, disabled = false) {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.className = "page-num";
    if (active) btn.classList.add("active");
    if (!disabled) {
      btn.addEventListener("click", () => {
        currentPage = page;
        renderNews();
      });
    }
    return btn;
  }

  if (currentPage > 1) {
    container.appendChild(createBtn("← Prev", currentPage - 1));
  }

  const maxButtons = 5;
  let start = Math.max(1, currentPage - 2);
  let end = Math.min(totalPages, start + maxButtons - 1);

  if (end - start < maxButtons - 1) {
    start = Math.max(1, end - maxButtons + 1);
  }

  if (start > 1) container.appendChild(createBtn("1", 1));
  if (start > 2) container.appendChild(createEllipsis());

  for (let i = start; i <= end; i++) {
    container.appendChild(createBtn(i, i, i === currentPage));
  }

  if (end < totalPages - 1) container.appendChild(createEllipsis());
  if (end < totalPages) container.appendChild(createBtn(totalPages, totalPages));

  if (currentPage < totalPages) {
    container.appendChild(createBtn("Next →", currentPage + 1));
  }
}

function createEllipsis() {
  const span = document.createElement("button");
  span.textContent = "...";
  span.className = "page-num";
  span.style.pointerEvents = "none";
  return span;
}

function setupFilterButtons() {
  document.querySelectorAll(".news-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".news-filter-btn")
        .forEach(b => b.classList.remove("active"));

      btn.classList.add("active");
      const filterValue = btn.dataset.filter || btn.textContent.trim();
      currentFilter = filterValue;
      currentPage = 1;
      renderNews();
    });
  });
}

window.addEventListener("scroll", () => {
  const heroImg = document.querySelector(".hero-image");
  if (heroImg) {
    const scrollY = window.scrollY;
    heroImg.style.transform = `translateY(${scrollY * 0.2}px)`;
  }
});

function updateCountdown() {
  const targetDateString = "2026-02-01T20:00:00";
  const matchDate = new Date(targetDateString).getTime();

  const now = new Date().getTime();
  const diff = matchDate - now;

  const timerElement = document.querySelector(".timer");
  const matchDetailsButton = document.querySelector(".next-match-inner .hero-btn");

  if (!timerElement || !matchDetailsButton) {
    return; 
  }

  if (diff <= 0) {
    timerElement.innerHTML =
      `<div><span style="font-size: 2.5rem; font-weight: 700;">MATCH IS LIVE!</span></div>`;
    matchDetailsButton.textContent = "See Scoreboard";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const formatTime = time => (time < 10 ? `0${time}` : time);

  if (document.getElementById("days")) document.getElementById("days").textContent = days;
  if (document.getElementById("hours")) document.getElementById("hours").textContent = formatTime(hours);
  if (document.getElementById("minutes")) document.getElementById("minutes").textContent = formatTime(minutes);
  if (document.getElementById("seconds")) document.getElementById("seconds").textContent = formatTime(seconds);
}

setInterval(updateCountdown, 1000);
updateCountdown();

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("#edit-video-2 video");
  if (video) {
    video.addEventListener("click", () => video.play());
  }
});

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(getCurrentLanguage());

  const spanishFlag = document.querySelector('.flags img[alt="Spanish"]');
  const englishFlag = document.querySelector('.flags img[alt="English"]');

  if (spanishFlag) {
    spanishFlag.addEventListener("click", () => {
      setLanguage("es");
      if (allNews.length && document.querySelector(".news-grid")) {
        renderNews();
      }
    });
  }

  if (englishFlag) {
    englishFlag.addEventListener("click", () => {
      setLanguage("en");
      if (allNews.length && document.querySelector(".news-grid")) {
        renderNews();
      }
    });
  }

  initNews();
});

function renderLatestNewsFullscreen() {
    const container = document.getElementById("latest-slider");
    if (!container) return;

    const latest = allNews.slice(0, 4).map(getDisplayArticleData);

    container.innerHTML = latest.map((a, i) => `
        <div class="latest-slide ${i === 0 ? "active" : ""}">
            <div class="latest-text">
                <h2>${a.title}</h2>
                <p>${a.fullText || a.text}</p>
            </div>
            <div class="latest-image">
                <img src="${a.img}" alt="${a.title}">
            </div>
        </div>
    `).join("");

    let index = 0;
    const slides = document.querySelectorAll(".latest-slide");

    setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 5000);
}

function generateDust(){
    const dustContainer = document.getElementById("dust-container");
    for (let i = 0; i < 60; i++) {
        const d = document.createElement("div");
        d.classList.add("particle");
        d.style.left = Math.random()*100+"%";
        d.style.top = Math.random()*100+"%";
        d.style.animationDuration = 8 + Math.random()*12 + "s";
        dustContainer.appendChild(d);
    }
}

function generateShootingStars(){
    const container = document.getElementById("shooting-container");
    setInterval(() => {
        const s = document.createElement("div");
        s.className = "shooting-star";
        s.style.left = Math.random()*80+"vw";
        s.style.top = Math.random()*20+"vh";
        s.style.animationDuration = (1 + Math.random()*1.5) + "s";
        container.appendChild(s);
        setTimeout(() => s.remove(), 1800);
    }, 2800);
}

document.addEventListener("mousemove", e => {
    const layer = document.getElementById("parallax-layer");
    const x = (window.innerWidth / 2 - e.clientX) * 0.02;
    const y = (window.innerHeight / 2 - e.clientY) * 0.02;
    layer.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener("DOMContentLoaded", () => {
    generateDust();
    generateShootingStars();
});

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".latest-slide");
    let i = 0;

    slides.forEach(s => s.classList.remove("active"));
    slides[0].classList.add("active");

    setInterval(() => {
        slides[i].classList.remove("active");
        i = (i + 1) % slides.length;
        slides[i].classList.add("active");
    }, 6000);
});

function activateRotator(containerSelector, interval = 3000) {
    const containers = document.querySelectorAll(containerSelector);

    containers.forEach(container => {
        const imgs = container.querySelectorAll(".train-img");
        if (imgs.length === 0) return;

        let index = 0;

        imgs.forEach(img => img.classList.remove("active"));
        imgs[0].classList.add("active");

        setInterval(() => {
            imgs[index].classList.remove("active");
            index = (index + 1) % imgs.length;
            imgs[index].classList.add("active");
        }, interval);
    });
}

activateRotator(".training-big-slider");

document.addEventListener("click", function () {
    const vid = document.getElementById("trainingVideo");
    if (vid.muted) {
        vid.muted = false;
        vid.volume = 1.0;
    }
});

   const fadeElements = document.querySelectorAll('.fade-in');

    function checkScroll() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 120) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);

const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 120) {
            el.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const statNumbers = document.querySelectorAll(".stat-number");
let statsAnimated = false;

function animateStats() {
  if (statsAnimated || statNumbers.length === 0) return;

  const section = document.querySelector("#all-time-stats");
  if (!section) return;

  const rect = section.getBoundingClientRect();
  const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;

  if (!inView) return;

  statsAnimated = true;

  statNumbers.forEach(el => {
    const target = parseInt(el.dataset.statTarget, 10);
    if (isNaN(target)) return;

    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = value.toLocaleString("en-US");
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  });
}

window.addEventListener("scroll", animateStats);
window.addEventListener("load", animateStats);

const storyBlocks = document.querySelectorAll(".family-story-block");

const familyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.3 });

storyBlocks.forEach(block => familyObserver.observe(block));

const pressTranscripts = document.querySelectorAll(".press-transcript");
const pressTranscriptObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("in-view");
  });
}, { threshold: 0.2 });
pressTranscripts.forEach(el => pressTranscriptObserver.observe(el));

window.addEventListener("scroll", () => {
  const section = document.querySelector(".family-section");
  const rect = section.getBoundingClientRect();
  const scrollPercent = Math.min(Math.max(rect.top / window.innerHeight, 0), 1);

  const beam1 = section.querySelector("::before");
  const beam2 = section.querySelector("::after");
});

window.addEventListener("scroll", () => {
  const section = document.querySelector(".family-section");
  const rect = section.getBoundingClientRect();
  
  const progress = -(rect.top - window.innerHeight / 2) * 0.02;

  const beam1 = document.querySelector(".beam-left");
  const beam2 = document.querySelector(".beam-right");

  beam1.style.transform = `translateY(${progress}px)`;
  beam2.style.transform = `translateY(${-progress}px)`;
});

const cards = document.querySelectorAll(".gavi-stats-card");
let currentIndex = 0;
let rotating = false;

function resetStats(card) {
    const nums = card.querySelectorAll(".stat-number");
    nums.forEach(n => n.textContent = "0");

    nums.forEach(el => {
        const target = parseInt(el.dataset.statTarget);
        if (!target) return;

        const duration = 1200;
        const start = performance.now();

        function animateNum(time) {
            const progress = Math.min((time - start) / duration, 1);
            const value = Math.floor(progress * target);
            el.textContent = value.toString();

            if (progress < 1) {
                requestAnimationFrame(animateNum);
            }
        }

        requestAnimationFrame(animateNum);
    });
}

function rotateCards() {
    if (rotating) return;
    rotating = true;

    const current = cards[currentIndex];
    const nextIndex = (currentIndex + 1) % cards.length;
    const next = cards[nextIndex];

    current.classList.remove("active");
    current.classList.add("exit");

    setTimeout(() => {
        current.classList.remove("exit");
        next.classList.add("active");

        resetStats(next);

        currentIndex = nextIndex;

        rotating = false;
    }, 1000); 
}

setInterval(rotateCards, 6000);
resetStats(cards[0]);

(function initPressBumper() {
  const track = document.getElementById("bumperTrack");
  if (!track) return;

  let anim;

  function px(n){ return Number.isFinite(n) ? n : 0; }

  function getTotalWidth() {
    const spans = Array.from(track.querySelectorAll(".bumper-text"));
    return spans.reduce((sum, el) => sum + el.getBoundingClientRect().width, 0);
  }

  function start() {
    if (anim) anim.cancel();

    const startX = window.innerWidth;    
    const totalWidth = getTotalWidth();  
    const buffer = 40;                    
    const endX = -(totalWidth + buffer); 

    const pxPerSec = 180;
    const distance = startX - endX;
    const duration = (distance / pxPerSec) * 1000;

    anim = track.animate(
      [
        { transform: `translateX(${startX}px)` },
        { transform: `translateX(${endX}px)` }
      ],
      {
        duration,
        iterations: Infinity,
        easing: "linear"
      }
    );
  }

  requestAnimationFrame(() => requestAnimationFrame(start));
  window.addEventListener("resize", start);
})();