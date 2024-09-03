declare module "*.json" {
    const value: any;
    export default value;
}
interface Food {
    name: string;
    description: string;
    imageUrl: string;
}

interface FoodData {
    foods: Food[];
}
