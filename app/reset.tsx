import { router } from "expo-router"
import { useEffect } from "react"
import { Text } from "react-native"
import { useFocusEffect } from "expo-router"

export default function ResetScreen() {
    
    useFocusEffect(() => {
        router.replace('/');
    })

    return <Text style= { {color: "red" } } > loading </Text>
}
