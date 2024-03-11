import { Feather } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { RootStackParamList } from "src/router/stack";
import { faq } from "../../../constants/consts";
import { FaqQuestion } from "../../components/atoms";
import { TopLogoContainer } from "../../components/molecules";

type Props = NativeStackScreenProps<RootStackParamList, "HelpSupport">;
export const HelpSupport = ({ navigation }: Props) => {
	return (
		<View className="flex py-8 bg-gray-50 flex-grow self-stretch h-screen">
			<TopLogoContainer LeftSide="Logo" RightSide="X" />

			<ScrollView
				className="w-full h-auto flex flex-col space-y-2 px-8 mt-2 bg-gray-50"
				showsVerticalScrollIndicator={false}
			>
				<Text className="text-xl font-semibold leading-7">
					Estamos aqui para ajudá-lo com qualquer coisa no Inamova
				</Text>
				<Text className="text-base leading-5 font-normal text-gray-600">
					Bem-vindo a Inamova, o seu ponto de partida para impulsionar
					o sucesso! Se você tem perguntas de teste, precisa de
					assistência de aula ou Busque orientação de aprendizagem,
					nós temos você coberto em todos os momentos!
				</Text>

				{/* FAQ */}
				<Text className="text-lg leading-7 font-medium text-teal-900">
					Perguntas frequentes
				</Text>
				<View className="flex flex-col items-start self-stretch">
					{faq.map((item, index) => (
						<FaqQuestion
							key={item.id}
							question={item.question}
							answer={item.answer}
						/>
					))}
				</View>
				{/* Contact Us */}
				<Text className="text-lg leading-7 font-medium text-teal-900">
					Contactos
				</Text>
				<Text className="text-base leading-5 font-normal text-gray-600">
					If you have any inquiries, get in touch with us. We’ll be
					happy to help you. Se você tiver alguma dúvida, entre em
					contato conosco.
				</Text>
				<View className="flex flex-col items-start space-y-2">
					{/* phone */}
					<View className="flex flex-col items-start space-y-2 p-4 rounded-3xl bg-white self-stretch">
						<View className="flex flex-row items-center space-x-2 justify-center rounded-lg bg-teal-600 p-2">
							<Feather name="phone" size={24} color="white" />
						</View>
						<View className="flex flex-col items-start space-y-1 self-stretch">
							<Text className="text-base leading-6 font-normal text-teal-900">
								Telefone
							</Text>
							<Text className="text-sm leading-5 font-light text-gray-700">
								Voce pode nos contactar por whatsapp pelo
								contacto abaixo.{" "}
							</Text>
						</View>
						<Text className="text-base leading-6 font-medium text-teal-900">
							+258 84 938 3897
						</Text>
					</View>
					{/* email */}
					<View className="flex flex-col items-start space-y-2 p-4 rounded-3xl bg-white self-stretch">
						<View className="flex flex-row items-center space-x-2 justify-center rounded-lg bg-teal-600 p-2">
							<Feather name="mail" size={24} color="white" />
						</View>
						<View className="flex flex-col items-start space-y-1 self-stretch">
							<Text className="text-base leading-6 font-normal text-teal-900">
								Email
							</Text>
							<Text className="text-sm leading-5 font-light text-gray-700">
								Respondemos dentro de uma semana
							</Text>
						</View>
						<Text className="text-base leading-6 font-medium text-teal-900">
							wakandians@gmail.com
						</Text>
					</View>
					{/* social media */}
					<View className="flex flex-col items-start space-y-2 p-4 rounded-3xl bg-white self-stretch">
						<View className="flex flex-row items-center space-x-2 justify-center rounded-lg bg-teal-600 p-2">
							<Feather name="users" size={24} color="white" />
						</View>
						<View className="flex flex-col items-start space-y-1 self-stretch">
							<Text className="text-base leading-6 font-normal text-teal-900">
								Midia social
							</Text>
							<Text className="text-sm leading-5 font-light text-gray-700">
								Siga-nos em nossas redes sociais para ser
								notificado com atualizações e ofertas
								empolgantes.
							</Text>
						</View>
						<View className="flex flex-row flex-wrap self-stretch space-x-2">
							{[
								<Feather
									name="facebook"
									size={24}
									color="white"
								/>,
								<Feather
									name="instagram"
									size={24}
									color="white"
								/>,
								<Feather
									name="youtube"
									size={24}
									color="white"
								/>,
								<Feather
									name="linkedin"
									size={24}
									color="white"
								/>,
							].map((item, index) => (
								<View
									key={index}
									className="flex flex-row p-1 items-start rounded-full bg-teal-600"
								>
									{item}
								</View>
							))}
						</View>
					</View>
				</View>
				{/* About us */}
				<Text className="text-lg leading-7 font-medium text-teal-900">
					Sobre Inamova
				</Text>
				<Text className="text-sm leading-5 font- text-gray-600">
					No Inamova, dedicamo-nos a revolucionar a condução
					experiência educacional. Nossa missão é simplificar e
					otimizar o processo de aprendizagem, equipando os alunos com
					o habilidades essenciais necessárias para se destacar como
					motoristas responsáveis.
				</Text>

				{/* Our Founders */}
				<Text className="text-lg leading-7 font-medium text-teal-900">
					Fundadores
				</Text>
				<Text className="text-sm leading-5 font- text-gray-600">
					Inamova ganhou vida por uma equipe dinâmica de três
					estudantes de engenharia informática do ISUTC — Celio Cumba,
					Martins D'uamba e Cláudio Tomas. Unidos por uma partilha
					visão, decidimos criar um aplicativo que vai além educação
					de condução convencional, combinando eficiência com
					eficácia.
				</Text>

				{/* Our Vision */}
				<Text className="text-lg leading-7 font-medium text-teal-900">
					Nossa visão
				</Text>
				<Text className="text-sm leading-5 font- text-gray-600">
					É movida pela paixão pela inovação, a Inamova pretende ser
					uma catalisador de mudanças positivas na formação de
					condutores. Nós acreditamos que, combinando tecnologia e
					educação, podemos capacitar indivíduos para navegar nas
					estradas com confiança e responsavelmente.
				</Text>

				{/* Join Us on the Road to Driving Success */}
				<Text className="text-lg leading-7 font-medium text-teal-900">
					Junte-se a nós no caminho para o sucesso
				</Text>
				<Text className="text-sm leading-5 font- text-gray-600">
					Embarque em sua jornada de condução com Inamova, onde a
					experiência encontra inovação. Confie em nós para guiá-lo a
					se tornar um motorista habilidoso e consciente.
				</Text>
			</ScrollView>
		</View>
	);
};
