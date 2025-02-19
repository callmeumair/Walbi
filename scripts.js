document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search-input').value;
    alert('You searched for: ' + searchTerm);
    // Here you would typically make an API call to fetch search results
});

// Example data for featured experiences
const experiences = [
    { name: "City Tour", description: "Explore the city with a local guide.", price: "$50" },
    { name: "Cooking Class", description: "Learn to cook local dishes.", price: "$70" },
    { name: "Hiking Adventure", description: "Hike through scenic trails.", price: "$40" }
];

const experienceList = document.getElementById('experience-list');

experiences.forEach(exp => {
    const experienceDiv = document.createElement('div');
    experienceDiv.className = 'experience';
    experienceDiv.innerHTML = `
        <h3>${exp.name}</h3>
        <p>${exp.description}</p>
        <p>${exp.price}</p>
    `;
    experienceList.appendChild(experienceDiv);
});