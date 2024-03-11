import { Article, Lesson, Question, Quiz, Subject } from "../src/models/";
import images from "./images";

export const tips = [
	{ tip: "Aperte o cinto em todas as viagens, sempre." },
	{ tip: "Evite distrações, concentre-se na estrada." },
	{ tip: "Verifique seus espelhos regularmente para uma visão de 360°." },
	{ tip: "Use os intipdores de direção para comunicar suas intenções." },
	{ tip: "Mantenha uma distância segura do veículo à frente." },
	{ tip: "Respeite os limites de velocidade e ajuste para as condições da estrada." },
	{ tip: "Verifique regularmente a pressão dos pneus e a banda de rodagem para tração ótima." },
	{ tip: "Use os faróis em condições de baixa visibilidade, não apenas à noite." },
	{ tip: "Esteja ciente dos pontos cegos e verifique-os antes de mudar de faixa." },
	{ tip: "Mantenha seu veículo bem mantido para confiabilidade." },
	{ tip: "Use a buzina com moderação e cortesia." },
	{ tip: "Adapte sua condução às condições climáticas (chuva, neve, neblina)." },
	{ tip: "Não siga muito de perto - dê-se tempo para reagir." },
	{ tip: "Fique atento a pedestres e ciclistas em cruzamentos." },
	{ tip: "Faça pausas em viagens longas para permanecer alerta e evitar a fadiga." },
	{ tip: "Respeite as placas de trânsito e os sinais sem exceção." },
	{ tip: "Seja cauteloso em estacionamentos - pedestres podem estar em qualquer lugar." },
	{ tip: "Mantenha a calma e a paciência no trânsito intenso ou em construção de estradas." },
	{ tip: "Não se envolva em comportamentos de direção agressiva." },
	{ tip: "Conheça as regras da estrada e as leis de trânsito locais." },
	{ tip: "Mantenha as mãos no volante e evite fazer várias coisas ao mesmo tempo." },
	{ tip: "Não use o telefone enquanto dirige - pode esperar." },
	{ tip: "Dê espaço suficiente para os ciclistas e seja paciente." },
	{ tip: "Junte-se suavemente e ceda quando necessário." },
	{ tip: "Ajuste seu assento e espelhos antes de dirigir." },
	{ tip: "Sinalize cedo ao se aproximar de uma curva ou saída." },
	{ tip: "Evite mudanças repentinas de faixa ou manobras erráticas." },
	{ tip: "Dirija na faixa da direita e ultrapasse pela esquerda." },
	{ tip: "Seja cauteloso em cruzamentos, mesmo com o sinal verde." },
	{ tip: "Mantenha o controle - não dirija sonolento ou sob a influência." },
	{ tip: "Respeite a vez e seja previsível." },
	{ tip: "Mantenha um kit de emergência rodoviária em seu veículo." },
	{ tip: "Use seus espelhos ao fazer marcha à ré e verifique os pontos cegos." },
	{ tip: "Ajuste sua velocidade em zonas de trabalho e esteja vigilante." },
	{ tip: "Use cautela ao estacionar - esteja atento a outros veículos." },
	{ tip: "Seja cauteloso com as mudanças nas condições da estrada durante as mudanças climáticas." },
	{ tip: "Não ultrapasse um ônibus escolar com sua placa de pare estendida." },
	{ tip: "Verifique seus pontos cegos antes de fazer a junção ou mudar de faixa." },
	{ tip: "Use o freio de estacionamento, especialmente em inclinações." },
	{ tip: "Dirija com as duas mãos no volante para um melhor controle." },
	{ tip: "Esteja ciente de veículos de emergência e ceda quando necessário." },
	{ tip: "Não ultrapasse pela direita, especialmente no trânsito intenso." },
	{ tip: "Antecipe as ações dos outros motoristas e esteja preparado." },
	{ tip: "Ajuste sua velocidade em áreas residenciais - esteja atento aos moradores." },
	{ tip: "Evite acelerações e frenagens agressivas." },
	{ tip: "Mantenha as janelas do veículo limpas para uma visibilidade ótima." },
	{ tip: "Não siga muito de perto no trânsito intenso - mantenha uma distância." },
	{ tip: "Permaneça nas vias marcadas e evite atalhos." },
	{ tip: "Seja cauteloso com os pontos cegos de veículos grandes." },
	{ tip: "Cumpra os limites de velocidade em estacionamentos e observe os pedestres." },
	{ tip: "Não se envolva em fúria no trânsito - mantenha a calma e a compostura." },
	{ tip: "Evite mudanças de faixa desnecessárias - mantenha sua trajetória." },
	{
		tip: "Use cautela ao passar por cruzamentos sem sinais de trânsito.",
	},
	{ tip: "Não dirija com as luzes de advertência acesas, a menos que seja necessário." },
	{ tip: "Reduza a velocidade em zonas de construção e obedeça às placas postadas." },
	{ tip: "Siga os limites de velocidade postados em áreas residenciais." },
	{
		tip: "Seja cauteloso ao ultrapassar carros estacionados - as portas podem abrir inesperadamente.",
	},
	{ tip: "Mantenha uma distância segura das bicicletas na estrada." },
	{ tip: "Observe os limites de peso postados em pontes e viadutos." },
	{ tip: "Use seus espelhos ao estacionar em paralelo." },
	{ tip: "Fique alerta para paradas repentinas no tráfego." },
	{ tip: "Mantenha os faróis acesos em condições climáticas adversas." },
	{ tip: "Mantenha uma velocidade consistente em rodovias." },
	{
		tip: "Seja cauteloso com a vida selvagem perto de estradas, especialmente ao anoitecer e ao amanhecer.",
	},
	{ tip: "Dê a vez aos pedestres nas faixas de travessia." },
	{ tip: "Use suas luzes de advertência apropriadamente em situações de emergência." },
	{ tip: "Evite frenagens agressivas - freie suavemente e gradualmente." },

	{
		tip: "Não bloqueie cruzamentos - espere até poder liberá-lo antes de prosseguir.",
	},
	{ tip: "Fique atento às motocicletas, especialmente nos pontos cegos." },
	{ tip: "Observe as placas e marcações de sentido único." },
	{ tip: "Não infle demais ou infle menos seus pneus." },
	{ tip: "Não use o controle de cruzeiro em condições climáticas adversas." },
	{ tip: "Observe as zonas de proibição de ultrapassagem em estradas de duas pistas." },
	{ tip: "Evite dirigir com um pneu sobressalente por um período prolongado." },
	{ tip: "Mantenha os faróis limpos para máxima visibilidade." },
	{ tip: "Seja cauteloso com ventos laterais, especialmente com veículos de perfil alto." },
	{ tip: 'Observe as "Proibido fazer retorno" placas e regulamentos.' },
	{ tip: "Não dirija com gelo ou neve obstruindo sua visão." },
	{ tip: "Encoste e pare se precisar usar seu telefone." },
	{ tip: "Seja cauteloso com o tráfego de junção em rodovias." },
	{ tip: "Mantenha uma atitude cortês e paciente na estrada." },
	{
		tip: "Observe as restrições de estacionamento perto de hidrantes e zonas de emergência.",
	},
	{ tip: "Ligue os faróis ao anoitecer e ao amanhecer." },
	{ tip: "Permaneça na sua faixa - evite zigzaguear no trânsito." },
	{ tip: "Não ultrapasse um veículo que está virando em um cruzamento." },
	{ tip: "Não bloqueie faixas de incêndio ou saídas de emergência." },
	{ tip: "Sinalize ao entrar ou sair de uma rotatória." },
	{
		tip: "Seja cauteloso ao dirigir em chuva intensa - a visibilidade pode estar reduzida.",
	},
	{ tip: "Use cautela ao dirigir à noite - ajuste-se à visibilidade reduzida." },
	{ tip: "Observe os limites de tempo de estacionamento em áreas designadas." },
	{ tip: "Não use luz alta ao seguir outro veículo." },
	{ tip: "Planeje sua viagem com antecedência para evitar decisões de última hora." },
];

export const slides = [
	{
		index: 0,
		title: "Bem vindo ao InaMova",
		bodyText:
			"A nossa principal missão é ajudá-lo a obter a sua carta de condução o mais rapidamente possível, para que se possa deslocar com mais facilidade, certificando-se de que tem conhecimentos para isso.",
		button: false,
		img: images.CarDriving,
	},
	{
		index: 1,
		title: "Teste",
		bodyText:
			"Para garantir que você está preparado para nossos exames, coletamos as informações da organização responsável por realizá-los.",
		button: false,
		img: images.GirlWithComputer,
	},
	{
		index: 2,
		title: "Pagamento seguro",
		bodyText:
			"Garantimos que suas informações estejam sempre seguras, isso inclui suas informações de pagamento, efetuamos o pagamento de forma fácil e segura.",
		button: true,
		img: images.GirlWithCreditCard,
	},
];

export const drivingRuleQuestions: Question[] = [
	{
		id: "1",
		image: "https://www.cbs17.com/wp-content/uploads/sites/29/2020/02/yellow-light-generic.jpg",
		content: "O que um semáforo amarelo indica?",
		explanation:
			"Um semáforo amarelo indica que você deve proceder com cautela",
		options: [
			{ id: "1", content: "Stop", isCorrect: false },
			{ id: "2", content: "Slow down", isCorrect: false },
			{ id: "3", content: "Proceed with caution", isCorrect: true },
			{ id: "4", content: "Speed up", isCorrect: false },
		],
	},
	// {
	//     id: "2",
	//     image: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-05/230509-car-headlights-mjf-1610-30350e.jpg",
	//     question: "When should you use your vehicle's headlights?",
	//     explanation: "Headlights should be used during fog or rain for better visibility.",
	//     options: ["Only at night", "During fog or rain", "Anytime you want", "Never"],
	//     answer: 1
	// },
	// {
	//     id: "3",
	//     image: "https://www.fvflawfirm.com/wp-content/uploads/What-Does-Yielding-the-Right-of-Way-Mean-1020x680.webp",
	//     question: "What is the purpose of a 'yield' sign?",
	//     explanation: "A 'yield' sign intiptes that you should slow down and be prepared to stop if necessary.",
	//     options: ["Stop and wait for oncoming traffic", "Slow down and be prepared to stop", "Proceed with caution", "Speed up to merge quickly"],
	//     answer: 2
	// },
	// {
	//     id: "4",
	//     image: "https://www.thesun.ie/wp-content/uploads/sites/3/2023/07/ch-op-double-lines.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
	//     question: "What does a solid white line on the road intipte?",
	//     explanation: "A solid white line intiptes that lane changing is not allowed.",
	//     options: ["Lane changing allowed", "No passing allowed", "Merge ahead", "Speed limit zone"],
	//     answer: 1
	// },
	// {
	//     id: "5",
	//     image: "https://edge.sitecorecloud.io/afmic-3e9239cf/media/project/amfam/public/articles/business/ontheroad/mobile/m-parking-on-a-hill-754986274.jpg?h=1320&iar=0&w=1534",
	//     question: "In which direction should you turn your wheels when parking uphill without a curb?",
	//     explanation: "Turn your wheels away from the curb when parking uphill without a curb.",
	//     options: ["Towards the curb", "Away from the curb", "Parallel to the road", "It doesn't matter"],
	//     answer: 2
	// }
	// Add more questions as needed
];

export const lectures: Subject[] = [
	{
		id: "0",
		title: "Exam Guide",
		thumbnail: "empty",
		description: "",
	},
	{
		id: "1",
		title: "Rules and transgressions",
		thumbnail: "empty",
		description: "",
	},
];

export const videoLectures = [
	{
		id: 0,
		title: "Exam Guide",
		onPress: "/",
		locked: false,
		img: images.PinkCar,
	},
	{
		id: 1,
		title: "Rules and transgressions",
		onPress: "/",
		locked: true,
		img: images.BlackCarCones,
	},
	{
		id: 2,
		title: "Traffic Signs",
		onPress: "/",
		locked: true,
		img: images.PedestrianCrossing,
	},
];

export const practiceTests = [
	{
		id: 0,
		image: images.OnlineTest,
		title: "25 free questions",
		onPress: "/",
		locked: false,
		type: "test",
	},
	{
		id: 1,
		image: images.Intersection,
		title: "Full test",
		onPress: "/",
		locked: true,
		type: "test",
	},
	{
		id: 2,
		image: images.way,
		title: "Rules and transgressions",
		onPress: "/",
		locked: true,
		type: "test",
	},
	{
		id: 3,
		image: images.PedestrianCrossing,
		title: "Traffic signs",
		onPress: "/",
		locked: true,
		type: "test",
	},
];

export const lectureCardsTrafficRules: Lesson[] = [
	{
		id: "dfsagagddfsdf",
		title: "1.Traffic Lights",
		thumbnail: images.LightSignal,
		time: 14,
		subjectId: "dfasf",
		
		videoUrl: "",
	},
];

export const personalArticle: Article[] = [
	{
		id: "dfsagagddfsdf",
		content:
			"Lorem ipsum dolor sit amet consectetur. Commodo mollis quam dui ac./hTraffic Lights/bTraffic lights are an integral part of modern urban infrastructure, playing a crucial role in regulating vehicular and pedestrian traffic at intersections. These signal systems use a combination of colors—typically red, yellow (or amber), and green to convey specific instructions to road users./hRed Light/pRed Light: The red light instructs drivers to come to a complete stop. It is positioned at the top of the traffic light and is universally understood as a signal to halt. In most places, it is illegal to proceed through an intersection when the light is red.",
		lessonId: "dfsagagddfsdf",
	},
];

export const faq = [
	{
		id: 1,
		question: "What is Inamova?",
		answer:
			"Inamova is an innovative driving education app designed to simplify the learning process and equip students with essential skills to become responsible drivers.",
	},
	{
		id: 2,
		question: "What methods of payment does Inamova support?",
		answer:
			"Inamova currently supports a variety of payment methods, including credit/debit cards and popular digital wallets. We strive to provide convenient options for our users.",
	},
	{
		id: 3,
		question: "What are the benefits of Inamova?",
		answer:
			"Inamova offers a range of benefits, including interactive driving tests, comprehensive lessons, and personalized learning experiences. Our app is designed to make the journey to obtaining a driver's license efficient, effective, and enjoyable.",
	},
	{
		id: 4,
		question:
			"Are the tests in Inamova similar to those of Inatter (the examining entity)?",
		answer:
			"Inamova's tests are designed to simulate real-world scenarios and assess your driving knowledge. While they may cover similar topics, Inamova's tests are tailored to provide a unique and comprehensive learning experience.",
	},
	// Feel free to add more questions and answers as needed
];
