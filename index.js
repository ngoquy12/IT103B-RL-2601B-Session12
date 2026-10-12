// Dữ liệu ban đầu
let bookings = [
  {
    bookingCode: "CIN-001",
    customerName: "Nguyễn Văn An",
    movieTitle: "Ánh Trăng Cuối Phố",
    ticketCount: 2,
    pricePerTicket: 90000,
    totalAmount: 194400,
  },
  {
    bookingCode: "CIN-002",
    customerName: "Trần Thị Bình",
    movieTitle: "Biệt Đội Sao Băng",
    ticketCount: 4,
    pricePerTicket: 90000,
    totalAmount: 349920,
  },
  {
    bookingCode: "CIN-003",
    customerName: "Lê Minh Châu",
    movieTitle: "Mùa Hè Rực Lửa",
    ticketCount: 6,
    pricePerTicket: 110000,
    totalAmount: 641520,
  },
];

// 1. Hiển thị danh sách đơn đặt vé
function displayBookings(bookings) {
  // Kiểm tra nếu danh sách trống
  if (!bookings || bookings.length === 0) {
    console.log("Danh sách đơn đặt vé trống");
    return;
  }

  let totalRevenue = 0;
  // Logic để xử lý khi mảng có phần tử
  bookings.forEach((element, index) => {
    // Cộng dồn giá tiền
    totalRevenue += element.totalAmount;

    console.log(
      `${index + 1}. ${element.bookingCode} - ${element.customerName} - ${element.movieTitle}
        SL: ${element.ticketCount}| Giá: ${element.pricePerTicket} | Tổng TT: ${element.totalAmount}
      `,
    );
  });

  // Tính tổng số lượng vé và doanh thu
  console.log(
    `Tổng vé: ${bookings.length} đơn đặt vé - Doanh thu: ${totalRevenue}`,
  );
}

// Hàm format tên
function formatName(name) {
  if (!name) {
    return "";
  }

  //   Loại bỏ khoảng trắng ở đầu và cuối
  let trimed = name.trim();

  //  Biến đổi chuỗi thành mảng và truy cập vào từng phần tử trong mảng và biến đổi ký tự đầu thành in hoa
  let words = trimed.split(" ");

  //   lê thị thu => Lê Thị Thu
  // ['lê', 'thị', 'thu']

  //   Dùng map() để biến đổi
  let capitalizeWords = words.map((word) => {
    // Lần 1: word.charAt(0).toUpperCase() <=> L; word.slice(1).toLowerCase() <=> ê
    // Lần 2: word.charAt(0).toUpperCase() <=> T; word.slice(1).toLowerCase() <=> hị
    // Lần 3: word.charAt(0).toUpperCase() <=> T; word.slice(1).toLowerCase() <=> hu
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  //   Biến đổi mảng thành chuỗi
  return capitalizeWords.join(" ");
}

// Kiểm tra xem mã đã tồn tại chưa
function findBookingIndex(bookingCode) {
  if (!bookingCode) {
    return -1;
  }

  //   Biến đổi mã thành in hoa
  let targetBookingCode = bookingCode.trim().toUpperCase();

  for (let i = 0; i < bookings.length; i++) {
    if (bookings[i].bookingCode === targetBookingCode) {
      return i;
    }
  }

  return -1;
}

// Hàm kiểm tra mã đặt đặt vé
function validateBookingCode(bookingCode) {
  if (bookingCode === null) {
    return "Hủy thao tác";
  }

  if (bookingCode === "") {
    return "Lỗi: chưa nhập mã đặt vé";
  }

  //   Biến đổi mã thành in hoa
  let upperCode = bookingCode.trim().toUpperCase();

  if (upperCode.length < 6) {
    return "Lỗi: Độ dài nhỏ hơn 6 ký tự";
  }

  if (!upperCode.startsWith("CIN-")) {
    return "Lỗi: Mã không hợp lệ";
  }

  if (findBookingIndex(upperCode) !== -1) {
    return "Lỗi: Mã đã tồn tại";
  }

  return "";
}

// Hàm yêu cầu người dùng nhập đến khi nào đúng thì thôi (số nguyên > 0, trả về null nếu nhấn cancel)
function inputInteger(message) {
  while (true) {
    let input = prompt(message);

    if (input === null) {
      return null;
    }

    let trimed = input.trim();

    if (trimed === "") {
      alert("Vui lòng không để trống");
    }

    // Kiểm tra xem giá trị nhập vào có phải là số hay không và lớn hơn 0?
    let number = +trimed;

    if (!isNaN(number) && number > 0) {
      return number;
    }

    alert("Giá trị nhập vào cần phải lơn hơn 0");
  }
}

// 2. Thêm đơn đặt vé mới
function handleCreateBooking() {
  //  Validate dữ liệu đầu vào
  let rawCode = prompt("Nhập mã đặt vé");
  if (rawCode === null) {
    console.log("Đã hủy thao tác thêm đơn đặt vé");
    return;
  }

  let validateError = validateBookingCode(rawCode);

  if (validateError !== "") {
    console.log(validateError);
    return;
  }

  let bookingCode = rawCode.trim().toUpperCase();

  //   Nhập tên khách hàng
  let rawName = prompt("Nhập tên khách hàng");
  if (rawCode === null) {
    console.log("Đã hủy thao tác thêm đơn đặt vé");
    return;
  }

  if (rawName.trim() === "") {
    console.log("Lỗi: tên khách hàng không được để trống");
  }

  let customerName = formatName(rawName);

  //   Nhập tên phim
  let rawMovie = prompt("Nhập tên phim");
  if (rawMovie === null) {
    console.log("Đã hủy thao tác thêm đơn đặt vé");
    return;
  }

  if (rawMovie.trim() === "") {
    console.log("Lỗi: tên phim không được để trống");
  }

  let movieTitle = formatName(rawMovie);

  //   Nhập số vé
  let ticketCount = inputInteger("Nhập số vé (> 0)");
  if (ticketCount === null) {
    console.log("Đã hủy thao tác thêm đơn đặt vé");
    return;
  }

  //   Nhập giá mỗi vé
  let pricePerTicket = inputInteger("Nhập giá mỗi vé");
  if (pricePerTicket === null) {
    console.log("Đã hủy thao tác thêm đơn đặt vé");
    return;
  }

  //   Tính toán tổng tiền (Dựa vào công thức để tính toán)

  //   Gom toàn bộ các thông tin ở trên thành 1 đối tượng
  const newBooking = {
    bookingCode: bookingCode,
    customerName: customerName,
    movieTitle: movieTitle,
    ticketCount: ticketCount,
    pricePerTicket: pricePerTicket,
    totalAmount: 0, // Phần này phải tự làm dựa vào công thức
  };

  //   Push dữ liệu vào trong mảng
  bookings.push(newBooking);

  alert("Thêm đơn đặt vé thành công.");
}
// 3. Cập nhật đơn đặt vé
function handleUpdateBooking() {
  console.log("Cập nhật đơn đặt vé");
}

// 4. Xóa đơn đặt vé
function handleDeleteBooking() {
  console.log("Xóa đơn đặt vé");
}

// 5. Tìm kiếm đơn đặt vé theo tên phim
function handleSearchBooking() {
  console.log("Tìm kiếm đơn đặt vé theo tên phim");
}

// Hàm chạy chương trình
function main() {
  let choice;
  do {
    //  Dấu + sẽ có tác dụng ép kiểu dữ liệu thành number
    choice = +prompt(`
        ===================================
        HỆ THỐNG QUẢN LÝ ĐẶT VÉ MOONLIGHT CINEMA
        ===================================
        1. Hiển thị danh sách đơn đặt vé
        2. Thêm đơn đặt vé mới
        3. Cập nhật đơn đặt vé
        4. Xóa đơn đặt vé
        5. Tìm kiếm đơn đặt vé theo tên phim
        0. Thoát chương trình
        ====================================
        Vui lòng nhập lựa chọn của bạn (0 - 5):
    `);

    switch (choice) {
      case 1:
        // 1. Hiển thị danh sách đơn đặt vé
        displayBookings(bookings);

        break;
      case 2:
        // 2. Thêm đơn đặt vé mới
        handleCreateBooking();

        break;
      case 3:
        // 3. Cập nhật đơn đặt vé"
        handleUpdateBooking();

        break;
      case 4:
        // 4. Xóa đơn đặt vé
        handleDeleteBooking();

        break;
      case 5:
        // 5. Tìm kiếm đơn đặt vé theo tên phim"
        handleSearchBooking();

        break;
      case 0:
        alert("Thoát chương trình");
        break;

      default:
        alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        break;
    }
  } while (choice !== 0);
}

main();
