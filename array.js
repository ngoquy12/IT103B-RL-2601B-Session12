// Khai báo mảng
const numbers = [1, 2, 3, 4, 5, 1, 1];
console.log("numbers: ", numbers);

// Truy cập phần tử trong mảng
console.log("Giá trị của phần tử tại vị trí thứ 1: ", numbers[1]);
console.log("Giá trị của phần tử tại vị trí thứ 3: ", numbers[3]);

// Duyệt mảng
// Lấy ra độ dài của mảng
console.log("Độ dài của mảng là: ", numbers.length);

console.log("=== Mảng trước khi thao tác ===");

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Thêm phần tử vào mảng
// Thêm phàn tử vào đầu mảng
numbers.unshift(6);

console.log("=== Mảng sau khi thêm vào đầu ===");

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Thêm phàn tử vào cuối mảng
numbers.push(7);

console.log("=== Mảng sau khi thêm vào cuối ===");

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Thêm phần từ vào vị trí cụ thể trong mảng
numbers.splice(1, 0, 10);
console.log("=== Mảng sau khi thêm vào 1 vị trí cụ thể ===");

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Sửa
// numbers.splice(1, 1, 11);
numbers[1] = 11;

console.log("=== Mảng sau khi sửa vào 1 vị trí cụ thể ===");

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Xóa
numbers.shift();
console.log("=== Mảng sau khi thêm xóa ở đầu ===");

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.pop();
console.log("=== Mảng sau khi thêm xóa ở cuối ===");

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.splice(1, 1);
console.log("=== Mảng sau khi thêm xóa ở vị trí 1 ===");

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Tìm kiếm
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 1) {
    console.log(numbers[i], i);
    break;
  } else {
    console.log("Không tìm thấy phần tử");
  }
}

// Làm việc với mảng đối tượng
const employee1 = {
  id: 1,
  fullName: "Nguyễn Văn A",
  email: "nva@gmail.com",
  address: "Hà Nội",
};

const employee2 = {
  id: 2,
  fullName: "Nguyễn Văn B",
  email: "nvb@gmail.com",
  address: "Hà Nội",
};

// Các thao tác làm việc với mảng đối tượng
const employees = [];

// Thêm
employees.push(employee1, employee2);

for (let i = 0; i < employees.length; i++) {
  console.log(employees[i]);
}

// Sửa
employees[0] = {
  id: 1,
  fullName: "Nguyễn Văn C",
  email: "nvc@gmail.com",
  address: "Hải Phòng",
};

console.log("=== Danh sách nhân viên sau khi sửa ===");

for (let i = 0; i < employees.length; i++) {
  console.log(employees[i]);
}

// Xóa
employees.splice(1, 1);
console.log("=== Danh sách nhân viên sau khi xóa ===");

for (let i = 0; i < employees.length; i++) {
  console.log(employees[i]);
}
