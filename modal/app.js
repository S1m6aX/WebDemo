// 获取 body 元素，并尝试设置其文本颜色（这部分代码有误，应该使用 bodyEl[0].style.color）
const bodyEl = document.getElementsByTagName("body");
window.addEventListener("load", () => {
  bodyEl.style.background = "#770000";
});

// 用于存储已注册用户信息的变量
let registeredUsers = [];

// 注册表单提交事件监听器
document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    // 阻止表单的默认提交行为
    event.preventDefault();

    // 获取用户输入的用户名、密码和确认密码
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById(
      "register-confirm-password"
    ).value;

    // 检查两次输入的密码是否一致
    if (password === confirmPassword) {
      // 如果密码一致，存储注册的用户信息
      registeredUsers.push({ username, password });
      alert("Registration successful!");

      // 重置注册表单
      document.getElementById("register-form").reset();

      // 隐藏注册模态框
      var registerModal = bootstrap.Modal.getInstance(
        document.getElementById("registerModal")
      );
      registerModal.hide();
    } else {
      // 如果密码不一致，显示错误提示
      alert("Passwords do not match!");
    }
  });

// 登录表单提交事件监听器
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    // 阻止表单的默认提交行为
    event.preventDefault();

    // 获取用户输入的用户名和密码
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // 查找匹配的用户信息
    const user = registeredUsers.find(
      (user) => user.username === username && user.password === password
    );

    // 如果找到匹配的用户信息，显示登录成功提示
    if (user) {
      alert("Login successful!");

      // 重置登录表单
      document.getElementById("login-form").reset();

      // 隐藏登录模态框
      var loginModal = bootstrap.Modal.getInstance(
        document.getElementById("loginModal")
      );
      loginModal.hide();
    } else {
      // 如果未找到匹配的用户信息，显示错误提示
      alert("Invalid username or password!");
    }
  });
