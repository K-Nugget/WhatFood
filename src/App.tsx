import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
    const foods: string[] = ["Pizza", "Sushi", "Burger"];

    const [recommendedFood, setRecommendedFood] = useState<string>("");

    const recommendFood = () => {
        const randomIndex = Math.floor(Math.random() * foods.length);
        setRecommendedFood(foods[randomIndex]);
    };
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ModeToggle></ModeToggle>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                What should I eat today?
            </h1>
            <Button style={{ marginTop: "20px" }} onClick={recommendFood}>
                Recommend Food
            </Button>
            <div style={{ minHeight: "40px", marginTop: "20px" }}>
                {recommendedFood ? (
                    <h2>You should try: {recommendedFood}!</h2>
                ) : (
                    <h2>&nbsp;</h2> // Empty space to maintain layout
                )}
            </div>
        </ThemeProvider>
    );
}

export default App;
