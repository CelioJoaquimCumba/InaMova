import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { images } from "../../../constants";
import { LectureCard, TopLogoContainer } from "../../components/molecules";
import { RootStackParamList } from "../../router/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLoading } from "../../providers/loadingProvider";
import { Lesson, Subject } from "../../models";
import { getSubject } from "../../api/subjectApi";
import { getLessons } from "../../api/lessonAPi";
import { lectureCardsTrafficRules, lectures } from "../../../constants/consts";

type Props = NativeStackScreenProps<RootStackParamList, "Lecture">;

export const Lecture = ({ route }: Props) => {
	const { setLoadingState } = useLoading();
	const { id } = route.params;
	const [subject, setSubject] = useState<Subject>(lectures[0]);
	const [lessons, setLessons] = useState<Lesson[]>(lectureCardsTrafficRules);

	useEffect(() => {
		const storeSubject = async () => {
			try {
				setLoadingState(true);
				const fetchedSubject = await getSubject(id);
				setSubject(fetchedSubject);
				const fetchedLessons = await getLessons(id);
				setLessons(fetchedLessons);
			} catch (error) {
				console.error("Error fetching data:", error);
				setLoadingState(false);
			} finally {
                setLoadingState(false)
            }
		};

		storeSubject();
	}, []);
	const imagens = [
		images.LightSignal,
		images.RecklessDriving,
		images.HighwayIntersection,
		images.YellowSign,
	];
	return (
		<View className="flex w-full h-full pt-8">
			<View className="w-screen h-full bg-white">
					<TopLogoContainer
						LeftSide={subject?subject.title:"Le titulo"}
						RightSide="X"
					/>
				<View className="flex w-screen flex-row items-center justify-between px-0 pb-3 bg-white">

					<View className="p-2">
						<ScrollView className="flex flex-row mt-2 px-4 pb-0 border-2 border-gray-200 border-t-0 bg-white w-4/5 h-auto">
							{lessons.map((item, index: number = -1) => (
								<LectureCard
									id={item.id}
									title={item.title}
									category={subject.title}
									readTime={item.time}
									imageSrc={imagens[index % imagens.length]} // Ensure proper image cycling
									key={item.id}
									onPress={() => {}}
								/>
							))}
						</ScrollView>
					</View>
				</View>
			</View>
		</View>
	);
};