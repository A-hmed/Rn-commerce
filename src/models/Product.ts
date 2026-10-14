export interface Product {
    id: number;
    name: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
}

export const mockProducts: Product[] = [
    {
        id: 1,
        name: "Aura Sound Wireless Noise-Cancelling Headphones",
        price: 199.99,
        rating: 4.8,
        reviews: 1420,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
    },
    {
        id: 2,
        name: "ErgoFlow Mechanical Keyboard (RGB, Hot-Swap)",
        price: 129.5,
        rating: 4.6,
        reviews: 835,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80"
    },
    {
        id: 3,
        name: "Vantage Pro 4K Ultra HD Action Camera",
        price: 249.0,
        rating: 4.3,
        reviews: 412,
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80"
    },
    {
        id: 4,
        name: "Nordic Ceramic Pour-Over Coffee Dripper Set",
        price: 34.95,
        rating: 4.9,
        reviews: 2150,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80"
    },
    {
        id: 5,
        name: "TitanGrip Matte Steel 32oz Insulated Tumbler",
        price: 28.0,
        rating: 4.7,
        reviews: 978,
        image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?w=500&q=80"
    },
    {
        id: 6,
        name: "Lumina Smart LED Desk Lamp with Wireless Charger",
        price: 59.99,
        rating: 4.2,
        reviews: 310,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80"
    },
    {
        id: 7,
        name: "PulseFit GPS Smartwatch & Fitness Tracker",
        price: 179.95,
        rating: 4.5,
        reviews: 1680,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
    },
    {
        id: 8,
        name: "BreezeTech Compact HEPA Air Purifier",
        price: 89.99,
        rating: 4.4,
        reviews: 645,
        image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500&q=80"
    }
];