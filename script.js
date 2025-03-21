document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // دریافت  فرم
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const field = document.getElementById('field').value;
    const studyTime = document.querySelector('input[name="studyTime"]:checked').value;

    // ذخیره‌سازی داده‌ها در localStorage 
    const studentData = {
        name: name,
        age: age,
        field: field,
        studyTime: studyTime
    };

    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(studentData);
    localStorage.setItem('students', JSON.stringify(students));

    // نمایش پیام موفقیت
    alert(" your information was successfully sent!");

    // پاک کردن فرم پس از ارسال
    document.getElementById('studentForm').reset();
});
