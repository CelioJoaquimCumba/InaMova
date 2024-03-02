import { Article, Lesson, Question, Quiz, Subject } from "../src/models/";
import images from "./images";

export const tips = [
	{ tip: "Buckle up, every trip, every time." },
	{ tip: "Avoid distractions, focus on the road." },
	{ tip: "Check your mirrors regularly for a 360° view." },
	{ tip: "Use turn signals to communicate your intentions." },
	{ tip: "Keep a safe following distance from the vehicle in front." },
	{ tip: "Obey speed limits and adjust for road conditions." },
	{ tip: "Regularly check tire pressure and tread for optimal traction." },
	{ tip: "Use headlights in low visibility conditions, not just at night." },
	{ tip: "Be aware of blind spots and check them before changing lanes." },
	{ tip: "Keep your vehicle well-maintained for reliability." },
	{ tip: "Use your horn sparingly and courteously." },
	{ tip: "Adapt your driving to weather conditions (rain, snow, fog)." },
	{ tip: "Don't tailgate – give yourself time to react." },
	{ tip: "Watch for pedestrians and cyclists at intersections." },
	{ tip: "Take breaks on long trips to stay alert and avoid fatigue." },
	{ tip: "Obey traffic signs and signals without exception." },
	{ tip: "Be cautious in parking lots – pedestrians could be anywhere." },
	{ tip: "Stay calm and patient in heavy traffic or road construction." },
	{ tip: "Don't engage in aggressive driving behaviors." },
	{ tip: "Know the rules of the road and local traffic laws." },
	{ tip: "Keep your hands on the wheel and avoid multitasking." },
	{ tip: "Don't use your phone while driving – it can wait." },
	{ tip: "Give cyclists plenty of space and be patient." },
	{ tip: "Merge smoothly and yield when required." },
	{ tip: "Adjust your seat and mirrors before driving." },
	{ tip: "Signal early when approaching a turn or exit." },
	{ tip: "Avoid sudden lane changes or erratic maneuvers." },
	{ tip: "Drive in the right lane and pass on the left." },
	{ tip: "Be cautious at intersections, even with a green light." },
	{ tip: "Stay in control – don't drive drowsy or under the influence." },
	{ tip: "Respect the right of way and be predictable." },
	{ tip: "Keep a roadside emergency kit in your vehicle." },
	{ tip: "Use your mirrors when backing up, and check blind spots." },
	{ tip: "Adjust your speed in work zones and be vigilant." },
	{ tip: "Use caution when parking – be mindful of other vehicles." },
	{ tip: "Be cautious of changing road conditions during weather shifts." },
	{ tip: "Don't overtake a school bus with its stop sign extended." },
	{ tip: "Check your blind spots before merging or changing lanes." },
	{ tip: "Use your parking brake, especially on inclines." },
	{ tip: "Drive with both hands on the wheel for better control." },
	{ tip: "Stay aware of emergency vehicles and yield as necessary." },
	{ tip: "Don't overtake on the right, especially in heavy traffic." },
	{ tip: "Anticipate the actions of other drivers and be prepared." },
	{ tip: "Adjust your speed in residential areas – be mindful of residents." },
	{ tip: "Avoid aggressive acceleration and braking." },
	{ tip: "Keep your vehicle windows clear for optimal visibility." },
	{ tip: "Don't follow too closely in heavy traffic – maintain a buffer." },
	{ tip: "Stay on marked roadways and avoid shortcuts." },
	{ tip: "Be cautious of large vehicles' blind spots." },
	{ tip: "Adhere to parking lot speed limits and watch for pedestrians." },
	{ tip: "Don't engage in road rage – stay calm and composed." },
	{ tip: "Avoid unnecessary lane changes – stick to your onPress." },
	{
		tip: "Use caution when passing through intersections with no traffic signals.",
	},
	{ tip: "Don't drive with your hazard lights on unless necessary." },
	{ tip: "Slow down in construction zones and obey posted signs." },
	{ tip: "Follow the posted speed limits in residential areas." },
	{
		tip: "Be cautious when passing parked cars – doors may open unexpectedly.",
	},
	{ tip: "Keep a safe distance from bicycles on the road." },
	{ tip: "Observe posted weight limits on bridges and overpasses." },
	{ tip: "Use your mirrors when parallel parking." },
	{ tip: "Stay alert for sudden stops in traffic." },
	{ tip: "Keep your headlights on in inclement weather." },
	{ tip: "Maintain a consistent speed on highways." },
	{
		tip: "Be cautious of wildlife near roadways, especially at dusk and dawn.",
	},
	{ tip: "Yield to pedestrians in crosswalks." },
	{ tip: "Use your hazard lights appropriately in emergency situations." },
	{ tip: "Avoid aggressive braking – brake smoothly and gradually." },

	{
		tip: "Don't block intersections – wait until you can clear it before proceeding.",
	},
	{ tip: "Watch for motorcycles, especially in blind spots." },
	{ tip: "Obey one-way street signs and markings." },
	{ tip: "Don't overinflate or underinflate your tires." },
	{ tip: "Don't use cruise control in adverse weather conditions." },
	{ tip: "Observe no-passing zones on two-lane roads." },
	{ tip: "Avoid driving on a spare tire for an extended period." },
	{ tip: "Keep your headlights clean for maximum visibility." },
	{ tip: "Be cautious of crosswinds, especially with high-profile vehicles." },
	{ tip: 'Observe "No U-turn" signs and regulations.' },
	{ tip: "Don't drive with frost or snow obstructing your view." },
	{ tip: "Pull over and stop if you need to use your phone." },
	{ tip: "Be cautious of merging traffic on highways." },
	{ tip: "Maintain a courteous and patient attitude on the road." },
	{
		tip: "Observe parking restrictions near fire hydrants and emergency zones.",
	},
	{ tip: "Turn on your headlights at dusk and dawn." },
	{ tip: "Stay in your lane – avoid weaving in and out of traffic." },
	{ tip: "Don't overtake a turning vehicle at an intersection." },
	{ tip: "Don't block fire lanes or emergency exits." },
	{ tip: "Signal when entering or exiting a roundabout." },
	{
		tip: "Be cautious when driving in heavy rain – visibility may be reduced.",
	},
	{ tip: "Use caution when driving at night – adjust to reduced visibility." },
	{ tip: "Observe parking time limits in designated areas." },
	{ tip: "Don't use high beams when following another vehicle." },
	{ tip: "Plan your onPress in advance to avoid last-minute decisions." },
];

export const slides = [
	{
		index: 0,
		title: "Welcome to InaMova",
		bodyText:
			"Our main mission is to help you get your driving license  as soon as possible, so that you can dislocate yourself wih more ease, making sure that you have the knowledge to.",
		button: false,
		img: images.CarDriving,
	},
	{
		index: 1,
		title: "Precise Test",
		bodyText:
			"To make sure that you are prepared for our exams, we take the information from the organization responsible for making them.",
		button: false,
		img: images.GirlWithComputer,
	},
	{
		index: 2,
		title: "Secure Payment",
		bodyText:
			"We make sure that your information is always safe, that includes your payment information, we make payment in a easy and secure way.",
		button: true,
		img: images.GirlWithCreditCard,
	},
];

export const drivingRuleQuestions: Question[] = [
	{
		id: "1",
		image:
			"https://www.cbs17.com/wp-content/uploads/sites/29/2020/02/yellow-light-generic.jpg",
		content: "What does a yellow traffic light indicate?",
		explanation:
			"A yellow traffic light indicates that you should proceed with caution.",
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
	//     explanation: "A 'yield' sign indicates that you should slow down and be prepared to stop if necessary.",
	//     options: ["Stop and wait for oncoming traffic", "Slow down and be prepared to stop", "Proceed with caution", "Speed up to merge quickly"],
	//     answer: 2
	// },
	// {
	//     id: "4",
	//     image: "https://www.thesun.ie/wp-content/uploads/sites/3/2023/07/ch-op-double-lines.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
	//     question: "What does a solid white line on the road indicate?",
	//     explanation: "A solid white line indicates that lane changing is not allowed.",
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
