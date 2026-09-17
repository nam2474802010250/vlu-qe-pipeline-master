const login = require("./auth");

test("Đăng nhập đúng tài khoản admin", () => {
    expect(login("admin", "123")).toBe(true);
});
