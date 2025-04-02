document.getElementById("dahejForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let salary = parseInt(document.getElementById("salary").value) || 0;
    let property = document.getElementById("property").value.toLowerCase();
    let cows = parseInt(document.getElementById("cow").value) || 0;
    let govJob = document.getElementById("govJob").value.toLowerCase();
    let ageCategory = document.getElementById("age").value; // Get selected age value

    let baseAmount = 0;

    // ✅ Salary-Based Calculation
    if (salary <= 40000) {
        baseAmount = salary * 2;
    } else if (salary <= 60000) {
        baseAmount = salary * 3;
    } else {
        baseAmount = salary * 5;
    }

    // ✅ Government Job Bonus
    if (govJob.includes("yes") || govJob.includes("gov")) {
        baseAmount += 500000;
    } else {
        baseAmount -= 250000;
    }

    // ✅ Property Influence
    if (property.includes("house") || property.includes("land")) {
        baseAmount += 200000;
    } else if (property.includes("flat") || property.includes("shop")) {
        baseAmount += 350000;
    }

    // ✅ Cattle Calculation
    baseAmount += (cows * 50000); // Each Cow adds ₹50,000

    // ✅ Age Category Effect
    if (ageCategory === "18-24") {
        baseAmount += 200000;
    } else if (ageCategory === "25-30") {
        baseAmount += 150000;
    } else if (ageCategory === "36-40") {
        baseAmount -= 100000;
    } else if (ageCategory === "40+") {
        baseAmount -= 200000;
    }

    // ✅ Social Status Bonus (Random)
    let randomBonus = Math.floor(Math.random() * 800000) + 200000; // ₹2L - ₹10L
    baseAmount += randomBonus;

    // ✅ Gift Items Based on Final Dowry
    let items = [];

    if (baseAmount < 1000000) {
        items = ["🏍️ Bike", "📺 Smart TV", "💍 5 Tola Gold"];
    } else if (baseAmount < 1500000) {
        items = ["🚗 Car", "💰 10 Tola Gold", "🏠 House Items"];
    } else {
        items = ["🚘 Luxury Car", "✈️ Foreign Trip", "🏡 Villa", "💎 20 Tola Gold"];
    }

    // Redirect to result page with calculated values
    window.location.href = `result.html?amount=${baseAmount}&items=${items.join(",")}`;
});
