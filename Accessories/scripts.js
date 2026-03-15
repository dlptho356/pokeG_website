account = document.getElementById('account');
login = document.getElementById('Log-in');
formlog= document.getElementById('login-form');

register = document.getElementById('Sign-up');
formsign = document.getElementById('sign-up-form');

dangky = document.getElementById('submit-register');
dangnhap = document.getElementById('submit-login');
const X = document.querySelectorAll(".close-btn");

login.addEventListener('click', () => {
    formlog.style.display = 'flex';
    formsign.style.display = 'none';
});

register.addEventListener('click', () => {
    formsign.style.display = 'flex';
    formlog.style.display = 'none';
});

X.forEach(function(btn){
    btn.onclick = function(){
        btn.parentElement.style.display = "none";
    }
});

dangky.addEventListener('click', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;


    const user = {
        username: username,
        password: password,
        email: email,
        phone: phone
    };

    try {
        localStorage.setItem('user', JSON.stringify(user));
        console.log('User data saved to localStorage:', user);
        alert('Đăng ký thành công!');
        document.getElementById('sign-up-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'flex';
      } catch (error) {
        console.error('Error saving user data:', error);
        alert('Đã xảy ra lỗi, vui lòng thử lại.');
      }


});

dangnhap.addEventListener('click', (even) => {
    even.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storeUser = JSON.parse(localStorage.getItem('user'));

    if (storeUser && storeUser.username === username && storeUser.password === password) {
        alert('Đăng nhập thành công!');
        formlog.style.display = 'none';
        account.style.display = 'none';
    }   else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
        return dangnhap;
    }
});





