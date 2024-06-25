async function getMatchData() {
    try {
        const response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=fa73533f-af97-4c59-b494-2452f69f9b2d&offset=0");
        const data = await response.json();
        
        if (data.status !== "success") return;

        const matchesList = data.data;
        if (!matchesList) return [];

        const relevantData = matchesList.map(match => `${match.name}, ${match.status}`);
        
        document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join('');

        return relevantData;
    } catch (e) {
        console.log(e);
    }
}

getMatchData();
