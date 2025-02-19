const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Example API endpoint to get experiences
app.get('/api/experiences', (req, res) => {
    const experiences = [
        { name: "City Tour", description: "Explore the city with a local guide.", price: "$50" },
        { name: "Cooking Class", description: "Learn to cook local dishes.", price: "$70" },
        { name: "Hiking Adventure", description: "Hike through scenic trails.", price: "$40" }
    ];
    res.json(experiences);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});