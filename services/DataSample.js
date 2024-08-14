export const ProductService = {
    getProductsData() {
        return [
            {
                "id": "1000",
                "code": "re1000",
                "name": "Elegant Apartment in Paris",
                "description": "A beautiful 2-bedroom apartment located in the heart of Paris, offering stunning views of the Eiffel Tower.",
                "image": "1.svg",
                "price": 1200000,
                "category": "Residential",
                "location": "Paris, France",
                "size": "120 sqm",
                "bedrooms": 2,
                "bathrooms": 2,
                "availabilityStatus": "Available",
                "rating": 4.8,
                "amenities": [
                    "Balcony",
                    "Gym",
                    "Swimming Pool",
                    "24/7 Security"
                ],
                "agent": {
                    "name": "John Doe",
                    "contact": "+33 1 2345 6789",
                    "email": "johndoe@example.com"
                }
            },
            {
                "id": "1001",
                "code": "re1001",
                "name": "Modern Loft in London",
                "description": "A spacious and contemporary loft located in the trendy Shoreditch area of London.",
                "image": "2.svg",
                "price": 850000,
                "category": "Residential",
                "location": "London, UK",
                "size": "100 sqm",
                "bedrooms": 1,
                "bathrooms": 1,
                "availabilityStatus": "Available",
                "rating": 4.7,
                "amenities": [
                    "Open Plan Kitchen",
                    "High Ceilings",
                    "Rooftop Terrace",
                    "24/7 Security"
                ],
                "agent": {
                    "name": "Jane Smith",
                    "contact": "+44 20 1234 5678",
                    "email": "janesmith@example.com"
                }
            },
            {
                "id": "1002",
                "code": "re1002",
                "name": "Beachfront Villa in Malibu",
                "description": "A luxurious beachfront villa with stunning ocean views, located in Malibu, California.",
                "image": "3.svg",
                "price": 5000000,
                "category": "Residential",
                "location": "Malibu, USA",
                "size": "450 sqm",
                "bedrooms": 5,
                "bathrooms": 4,
                "availabilityStatus": "Available",
                "rating": 5,
                "amenities": [
                    "Private Beach Access",
                    "Infinity Pool",
                    "Home Theater",
                    "24/7 Security"
                ],
                "agent": {
                    "name": "Michael Brown",
                    "contact": "+1 310 123 4567",
                    "email": "michaelbrown@example.com"
                }
            },
            {
                "id": "1003",
                "code": "re1003",
                "name": "Rustic Country House in Tuscany",
                "description": "A charming rustic country house surrounded by vineyards, located in the picturesque region of Tuscany.",
                "image": "4.svg",
                "price": 950000,
                "category": "Residential",
                "location": "Tuscany, Italy",
                "size": "200 sqm",
                "bedrooms": 3,
                "bathrooms": 2,
                "availabilityStatus": "Available",
                "rating": 4.9,
                "amenities": [
                    "Wine Cellar",
                    "Large Garden",
                    "Swimming Pool",
                    "Fireplace"
                ],
                "agent": {
                    "name": "Luca Rossi",
                    "contact": "+39 055 123 4567",
                    "email": "lucarossi@example.com"
                }
            },
            {
                "id": "1004",
                "code": "re1003",
                "name": "Rustic Country House in Tuscany",
                "description": "A charming rustic country house surrounded by vineyards, located in the picturesque region of Tuscany.",
                "image": "5.svg",
                "price": 950000,
                "category": "Residential",
                "location": "Tuscany, Italy",
                "size": "200 sqm",
                "bedrooms": 3,
                "bathrooms": 2,
                "availabilityStatus": "Available",
                "rating": 4.9,
                "amenities": [
                    "Wine Cellar",
                    "Large Garden",
                    "Swimming Pool",
                    "Fireplace"
                ],
                "agent": {
                    "name": "Luca Rossi",
                    "contact": "+39 055 123 4567",
                    "email": "lucarossi@example.com"
                }
            },
            {
                "id": "1005",
                "code": "re1003",
                "name": "Rustic Country House in Tuscany",
                "description": "A charming rustic country house surrounded by vineyards, located in the picturesque region of Tuscany.",
                "image": "6.svg",
                "price": 950000,
                "category": "Residential",
                "location": "Tuscany, Italy",
                "size": "200 sqm",
                "bedrooms": 3,
                "bathrooms": 2,
                "availabilityStatus": "Available",
                "rating": 4.9,
                "amenities": [
                    "Wine Cellar",
                    "Large Garden",
                    "Swimming Pool",
                    "Fireplace"
                ],
                "agent": {
                    "name": "Luca Rossi",
                    "contact": "+39 055 123 4567",
                    "email": "lucarossi@example.com"
                }
            },
           
        ];
    },


    getProducts() {
        return Promise.resolve(this.getProductsData());
    },
};

