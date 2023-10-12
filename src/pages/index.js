import React from "react";

import { Avatar, Box, FlatList, HStack, Icon, Pressable } from "native-base";

import { Feather } from "@expo/vector-icons";
import Storys from "../components/Storys";
import Feed from "../components/Feed";

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fulName: "Afreen Khan",
    timeStamp: "12:47 PM",
    recentText: "Good Day!",
    avatarUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinys",
  },
  {
    id: "1a56fe42-839d-49b4-a63a-9db77c631fae",
    fullName: "John Doe",
    timeStamp: "10:30 AM",
    recentText: "Hello there!",
    avatarUrl:
      "https://images.pexels.com/photos/2090350/pexels-photo-2090350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "fc862aa3-ff63-4aa2-bc6f-58159dfdc73d",
    fullName: "Emily Smith",
    timeStamp: "3:15 PM",
    recentText: "How are you?",
    avatarUrl:
      "https://images.pexels.com/photos/247296/pexels-photo-247296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "b1c85dd1-c95b-4b51-aaff-f24e31c9439c",
    fullName: "Michael Johnson",
    timeStamp: "8:22 AM",
    recentText: "Good morning!",
    avatarUrl:
      "https://images.pexels.com/photos/2892371/pexels-photo-2892371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "d8a3bc8e-7319-49d2-93a5-8a88d9edcc4d",
    fullName: "Sophia Anderson",
    timeStamp: "6:50 PM",
    recentText: "See you soon!",
    avatarUrl:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },

  {
    id: "3c2b1a0f-5e4d-7f6e-9c8b-4a3f2d1c5e6b",
    fullName: "Daniel Lee",
    timeStamp: "8:15 AM",
    recentText: "Let's catch up!",
    avatarUrl:
      "https://images.pexels.com/photos/3559043/pexels-photo-3559043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Sujitha Mathur",
    timeStamp: "11:11 PM",
    recentText: "Cheer up, there!",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Anci Barroco",
    timeStamp: "6:22 PM",
    recentText: "Good Day!",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
  },
  {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Aniket Kumar",
    timeStamp: "8:56 PM",
    recentText: "All the best",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
  },
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Kiara",
    timeStamp: "12:47 PM",
    recentText: "I will call today.",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
  },
];

export default function Home() {
  return (
    <Box flex={1} backgroundColor={"#f8f8f8"} flexDirection={"column"}>
      <HStack
        padding={4}
        w="100%"
        alignItems={"center"}
        justifyContent={"space-between"}
        safeArea
      >
        <Box>
          <Pressable>
            <Icon as={Feather} name="menu" size={7} color="#000" />
          </Pressable>
        </Box>

        <Box rounded="md" flexDir="row" alignItems="center">
          <Pressable>
            <Icon
              as={Feather}
              name="bell"
              size={7}
              color="#000"
              marginRight={4}
            />
          </Pressable>

          <Pressable>
            <Avatar
              source={{ uri: "https://sujeitoprogramador.com/steve.png" }}
              height={12}
              width={12}
            />
          </Pressable>
        </Box>
      </HStack>

      <Box paddingX={4}>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) => <Storys data={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </Box>

      <Box paddingX={4}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Feed data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </Box>
  );
}
