// Show/Hide Profile Dropdown
function toggleDropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}

// Change Theme
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Logout
function logout() {
    window.location.href = "index.html";
}

// Restrict Future Dates
function setMaxDate() {
    let today = new Date().toISOString().split("T")[0];
    document.getElementById("start-date").setAttribute("max", today);
    document.getElementById("end-date").setAttribute("max", today);
}

// Load attendance data
fetch('attendence_2.json')
    .then(response => response.json())
    .then(data => {
        attendanceData = data;
    })
    .catch(error => console.error('Error loading attendance data:', error));

// Initialize the page
window.onload = function () {
    setMaxDate();
    // Set default dates (today for both)
    let today = new Date().toISOString().split("T")[0];
    document.getElementById("start-date").value = today;
    document.getElementById("end-date").value = today;
}

// Apply Button Functionality
document.getElementById("apply-btn").addEventListener("click", function () {
    displayAttendanceData();
});

// Function to display attendance data based on filters
function displayAttendanceData() {
    let startDate = document.getElementById("start-date").value;
    let endDate = document.getElementById("end-date").value;
    let classType = document.getElementById("class-type").value;

    if (!startDate || !endDate) {
        alert("Please select both start and end dates.");
        return;
    }

    // Filter data based on date range
    // Convert dates to comparable format
    let start = new Date(startDate);
    let end = new Date(endDate);

    let filteredData = attendanceData.filter(item => {
        let itemDate = new Date(item.Date);
        return itemDate >= start && itemDate <= end;
    });

    // Generate HTML for the table
    let tableHTML = `
        <p><strong>Class Type:</strong> ${classType.charAt(0).toUpperCase() + classType.slice(1)}</p>
        <p><strong>Date Range:</strong> ${startDate} to ${endDate}</p>
        <table>
            <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Expected Check-in</th>
                <th>Check-in Time</th>
                <th>Expected Check-out</th>
                <th>Check-out Time</th>
                <th>Status</th>
                <th>Location</th>
            </tr>
    `;

    // Add rows for each filtered attendance record
    filteredData.forEach(item => {
        tableHTML += `
            <tr>
                <td>${item["User ID"]}</td>
                <td>${item.Name}</td>
                <td>${item.Date}</td>
                <td>${item["Expected Check-in Time"]}</td>
                <td>${item["Check-in Time"] || "N/A"}</td>
                <td>${item["Expected Check-out Time"]}</td>
                <td>${item["Check-out Time"] || "N/A"}</td>
                <td>${item["Attendance Status"]}</td>
                <td>${item.Location}</td>
            </tr>
        `;
    });

    tableHTML += `</table>`;

    // Display the table
    document.getElementById("attendance-data").innerHTML = tableHTML;
}

// Download PDF
document.getElementById("download-btn").addEventListener("click", function () {
    window.print();
});