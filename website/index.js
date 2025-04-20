document.addEventListener("DOMContentLoaded", async () => {
    const counter = document.getElementById("counter");
  
    try {
      counter.innerHTML = "Loading views...";
      const response = await fetch("https://dha4xxv6i6b3xyxsahagw3xj6m0imwqb.lambda-url.ap-southeast-2.on.aws");
      const data = await response.json();
      console.log("Fetched views:", data);
      counter.innerHTML = `Views: ${data.views}`;
    } catch (err) {
      counter.innerHTML = "Couldn't read views 😢";
      console.error("Error fetching views:", err);
    }
  });
  