// کورسز کی ڈیٹا
const courses = [
    { id: 1, name: "Python پروگرامنگ", price: 4999, duration: "8 ہفتے" },
    { id: 2, : "ڈیجیٹل مارکیٹنگ", price: 5999, duration: "6 ہفتے" },
    { id: 3, name: "Java اسکرپٹ", price: 3999, duration: "4 ہفتے" }
];

// کورسز دکھائیں
function loadCourses() {
    const coursesSection = document.getElementById('courses');
    courses.forEach(course => {
        const courseHTML = `
            <div class="course-card">
                <h3>${course.name}</h3>
                <p>قیمت: ₹${course.price} | مدت: ${course.duration}</p>
                <button onclick="enroll(${course.id})">خریدیں</button>
            </div>
        `;
        coursesSection.innerHTML += courseHTML;
    });
}

// انرولمنٹ
function enroll(courseId) {
    const course = courses.find(c => c.id === courseId);
    alert(شکریہ! آپ نے ${course.name} کورس میں داخلہ لے لیا ہے۔ ادائیگی کے لیے ہمارے واٹس ایپ پر رابطہ کریں: 03163520679);
}

// صفحہ لوڈ ہونے پر
window.onload = loadCourses;
