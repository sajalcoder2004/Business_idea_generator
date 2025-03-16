

// Generate business problem

// Replace 'YOUR_GEMINI_API_KEY' with your actual API key
const API_KEY = "AIzaSyD21ncQ66Pa1j8VjIZcXt5U2497VzXv9jw";

// Function to fetch AI response from Gemini Flash API
async function getAIResponse(userInput) {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: userInput }] }]
        })
    });

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
}

// Function to generate a business problem
async function generateBusinessProblem() {
    document.getElementById("loading").style.display = "block";
    document.getElementById("problemOutput").style.display = "none";

    const userData = document.getElementById("userForm").elements;
    const skills = [...document.querySelectorAll('input[name="skills"]:checked')].map(el => el.value).join(", ");
    
    // AI Prompt
    const prompt = `You are a business consultant. Based on the following user details, generate a unique and profitable business problem that aligns with their skills and interests.

    **User Information:**
    - Education Level: ${userData.education.value}
    - Skills: ${skills}
    - Interests: ${userData.interests.value}
    - Investment Capacity: ${userData.investment.value}

    **Response Format:**
    ### Problem Title:  
    [One-line summary of the business problem]  

    ### Industry:  
    [Relevant industry]  

    ### Problem Details:  
    - [Explain the business problem in detail]  
    - [Why this problem exists]  
    - [Who faces this problem]  

    ### Why It’s Important:  
    - [Why solving this problem is valuable]  
    - [Market demand and potential impact]`;

    // Get AI-generated response
    const aiResponse = await getAIResponse(prompt);

    // Hide loading animation and display AI response
    document.getElementById("loading").style.display = "none";
    document.getElementById("problemOutput").style.display = "block";
    document.getElementById("problemText").innerHTML = aiResponse;
}

// 🔹 Generate Business Problem (Initial)
document.getElementById("generateBtn").addEventListener("click", async function(event) {
    event.preventDefault();
    generateBusinessProblem();
});

// 🔹 Regenerate Business Problem
document.getElementById("regenerateBtn").addEventListener("click", async function(event) {
    event.preventDefault();
    generateBusinessProblem(); // Calls the same function to regenerate a new problem
});

// 🔹 Copy Business Problem to Clipboard
document.getElementById("copyBtn").addEventListener("click", function() {
    navigator.clipboard.writeText(document.getElementById("problemText").innerText);
    alert("Problem copied to clipboard!");
});



// understand the problem


// Function to generate an explanation for the problem
async function generateProblemExplanation() {
    document.getElementById("loadingExplain").style.display = "block";
    document.getElementById("explanationOutput").style.display = "none";

    const problem = document.getElementById("problemInput").value;

    const prompt = `You are a business analyst. Explain the following problem in a structured format:
    **Problem:** ${problem}

    **Response Format:**
    ### Understanding the Problem:  
    - [Detailed explanation]  
    - [Why this problem exists]  

    ### Who Faces This Problem?  
    - [Potential customers/industries]  

    ### Existing Solutions:  
    - [Current approaches]  

    ### Gaps in Current Solutions:  
    - [Why this problem still exists]  
    - [Opportunities for innovation]`;

    const aiResponse = await getAIResponse(prompt);

    document.getElementById("loadingExplain").style.display = "none";
    document.getElementById("explanationOutput").style.display = "block";
    document.getElementById("explanationText").innerHTML = aiResponse;
}

// Initial & Regenerate Buttons
document.getElementById("explainBtn").addEventListener("click", generateProblemExplanation);
document.getElementById("reExplainBtn").addEventListener("click", generateProblemExplanation);

// Copy Button
document.getElementById("copyExplainBtn").addEventListener("click", function() {
    navigator.clipboard.writeText(document.getElementById("explanationText").innerText);
    alert("Explanation copied to clipboard!");
});



// Function to generate a solution for the problem



async function generateProblemSolution() {
    document.getElementById("loadingSolve").style.display = "block";
    document.getElementById("solutionOutput").style.display = "none";

    const problem = document.getElementById("solutionInput").value;

    const prompt = `You are a business strategist. Provide a step-by-step solution for:
    **Problem:** ${problem}

    **Response Format:**
    ### Solution Overview:  
    - [General approach]  

    ### Step 1: [First Actionable Step]  
    - [Explanation]  

    ### Step 2: [Next Step]  
    - [Explanation]  

    ### Step 3: [Further Improvement]  
    - [Advanced strategies]  

    ### Final Step: [Long-term Strategy]  
    - [Sustainability and growth]`;

    const aiResponse = await getAIResponse(prompt);

    document.getElementById("loadingSolve").style.display = "none";
    document.getElementById("solutionOutput").style.display = "block";
    document.getElementById("solutionText").innerHTML = aiResponse;
}

// Initial & Regenerate Buttons
document.getElementById("solveBtn").addEventListener("click", generateProblemSolution);
document.getElementById("reSolveBtn").addEventListener("click", generateProblemSolution);

// Copy Button
document.getElementById("copySolveBtn").addEventListener("click", function() {
    navigator.clipboard.writeText(document.getElementById("solutionText").innerText);
    alert("Solution copied to clipboard!");
});




// Function to generate a business roadmap


async function generateBusinessGuide() {
    document.getElementById("loadingGuide").style.display = "block";
    document.getElementById("guideOutput").style.display = "none";

    const problem = document.getElementById("guideInput").value;

    const prompt = `You are a startup mentor. Provide a personalized business roadmap for:
    **Business Problem:** ${problem}

    **Response Format:**
    ### Phase 1: Research & Validation  
    - [Market research, idea validation]  

    ### Phase 2: Product Development  
    - [Prototyping, MVP creation]  

    ### Phase 3: Marketing & Growth  
    - [Scaling strategies]  

    ### Final Phase: Sustainability & Expansion  
    - [Long-term business growth]`;

    const aiResponse = await getAIResponse(prompt);

    document.getElementById("loadingGuide").style.display = "none";
    document.getElementById("guideOutput").style.display = "block";
    document.getElementById("guideText").innerHTML = aiResponse;
}

// Initial & Regenerate Buttons
document.getElementById("guideBtn").addEventListener("click", generateBusinessGuide);
document.getElementById("reGuideBtn").addEventListener("click", generateBusinessGuide);

// Copy Button
document.getElementById("copyGuideBtn").addEventListener("click", function() {
    navigator.clipboard.writeText(document.getElementById("guideText").innerText);
    alert("Guide copied to clipboard!");
});
