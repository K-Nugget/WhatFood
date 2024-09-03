import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import foodData from "./food.json";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Food {
    name: string;
    hunger: string;
}

// Define the structure of the food data
interface FoodData {
    foods: Food[];
}

const data: FoodData = foodData;

function App() {
    const foods: Food[] = data.foods;

    const [selectedHunger, setSelectedHunger] = useState<string>("Hunger");
    const [recommendedFood, setRecommendedFood] = useState<Food | null>(null);

    const recommendFood = () => {
        // Filter foods based on the selected hunger level
        const filteredFoods = foods.filter(
            (food) =>
                selectedHunger === "Hunger" ||
                food.hunger === selectedHunger.toLowerCase()
        );

        // Check if there are any filtered foods
        if (filteredFoods.length > 0) {
            // Select a random food from the filtered list
            const randomIndex = Math.floor(
                Math.random() * filteredFoods.length
            );
            setRecommendedFood(filteredFoods[randomIndex]);
        } else {
            // No food matches the selected hunger level, clear recommendation
            setRecommendedFood(null);
        }
    };

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ModeToggle></ModeToggle>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                What should I eat today?
            </h1>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">{selectedHunger}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Hunger Amount</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={() => setSelectedHunger("Small")}
                    >
                        Small
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => setSelectedHunger("Medium")}
                    >
                        Medium
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => setSelectedHunger("Large")}
                    >
                        Large
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Button style={{ margin: "20px" }} onClick={recommendFood}>
                Recommend Food
            </Button>
            <div style={{ minHeight: "40px", marginTop: "20px" }}>
                {recommendedFood ? (
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        Try: {recommendedFood.name}!
                    </h2>
                ) : (
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        &nbsp;
                    </h2> // Empty space to maintain layout
                )}
            </div>
        </ThemeProvider>
    );
}

export default App;
