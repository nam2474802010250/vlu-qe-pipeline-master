const login = require("./auth");

test("Mật khẩu sai", () => {
    expect(login("admin", "1234")).toBe(false);
});

test("Username rỗng", () => {
    expect(login("", "123")).toBe(false);
});

test("Mật khẩu chứa ký tự đặc biệt", () => {
    expect(login("admin", "@#$%")).toBe(false);
});

test("Tài khoản không tồn tại", () => {
    expect(login("user", "123")).toBe(false);
});

test("Username và mật khẩu đều rỗng", () => {
    expect(login("", "")).toBe(false);
});

test("Sai cả username và mật khẩu", () => {
    expect(login("user", "1234")).toBe(false);
});
