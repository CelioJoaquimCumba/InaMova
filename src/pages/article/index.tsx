import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { TopLogoContainer } from "../../components/molecules";
import { Button } from "../../components/atoms";
import { Feather } from "@expo/vector-icons";
import { useLoading } from "../../providers/loadingProvider";
import { RootStackParamList } from "src/router/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Article, Lesson } from "../../models";
import { lectureCardsTrafficRules, personalArticle } from "../../../constants/consts";
import { getLesson } from "../../api/lessonAPi";
import { getArticles } from "../../api/articleApi";

type Props = NativeStackScreenProps<RootStackParamList, "ArticlePage">;

export const ArticlePage = ({ route }: Props) => {
	const { setLoadingState } = useLoading();
	const { id } = route.params;
	console.log(id)
	const [lesson, setLesson] = useState<Lesson>(lectureCardsTrafficRules[0]);
	const [selectedArticle, setSelectedArticle]=useState<Article>(personalArticle[0]);
	const [bodyText, setBodyText] = useState<React.JSX.Element[]>(
		[<Text>DSA</Text>,<Text>DSAF</Text>]
		
	);
	useEffect(() => {
		const storeArticle = async () => {
			try {
				setLoadingState(true);
				const fetchedLesson = await getLesson(id);
				setLesson(fetchedLesson);

				const fetchedArticle =await getArticles(id)
				const currentArticle=fetchedArticle[0]
				const parts = currentArticle.content.split("/")
				let styledParts: React.JSX.Element[] = [];
				
				parts.map((item, index: number = 0) => {
					<Text key={item}></Text>
					if (index === 0) {
						styledParts.push(<Text key={item} className="text-base leading-6 font-normal text-gray-500">
							{item}
						</Text>)
					} else if (item[0] === "h" ||item[0] === "H" ) {
						styledParts.push(<Text key={item} className="text-lg leading-7 font-medium">{item.substring(1)}</Text>)
					} else if (item[0] === "p") {
						styledParts.push(<Text key={item}>{item.substring(1)}</Text>)
					} else if (item[0] === "b") {
						styledParts.push(<Text key={item} className="text-base leading-6 font-normal">{item.substring(1)}</Text>)
					}
				});
				
				console.log(styledParts)
				setBodyText(styledParts)
			} catch (e) {
				console.log(e);
				throw e;
			} finally {
				setLoadingState(false);
			}
		};

		storeArticle();
	}, []);
	
	return (
		<View className="flex w-full h-full pt-8">
			<View className="w-full h-full bg-gray-50">
				<TopLogoContainer LeftSide="Chevron" />

				<ScrollView
					className="space-y-2 flex flex-col  mt-2 w-full h-auto mb-6 px-5"
					showsVerticalScrollIndicator={false}>
					<View className=" bg-gray-50 flex flex-col items-center flex-grow">
						<Image
							source={{
								uri: "https://file.fomille.site/1552537707180355586/1669627503962169346.webp",
							}}
							className="h-[198px] aspect-video rounded-3xl"
						/>
					</View>
					{/* <Image source={images.CarDriving} className='w-42'/> */}
					<Text className="text-xl leading-7 font-semibold">
						{lesson.title}
					</Text>
					{bodyText[0]}
					<View className=" flex flex-row justify-between">
						<Button variant={"outline"} className="rounded-3xl">
							<Text className="text-gray-600">{lesson.time} minute read</Text>
						</Button>
						<Button className="rounded-3xl flex flex-row">
							<Text className="text-white ">
								Share <Feather name="share-2" size={18} color="white" />
							</Text>
						</Button>
					</View>
					{bodyText.slice(1)}
					<View className=" bg-gray-50 flex flex-col items-center flex-grow ">
						<Image
							source={{
								uri: "https://media-blog.zutobi.com/wp-content/uploads/sites/2/2021/02/03115540/image-65.jpeg?w=2560&auto=format&ixlib=next&fit=max",
							}}
							className="h-[198px] aspect-video rounded-3xl"
						/>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};
