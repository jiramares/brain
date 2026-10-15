<!DOCTYPE html>
<html lang="en">
<head>
    <title>Active24</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
    <meta name="format-detection" content="telephone=no">
    <meta name="keywords" content="">
    <meta name="description" content="">
    <base href="https://cdn.active24.eu">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <link rel="shortcut icon" type="image/x-icon" href="/logos/favicon.ico">

    <style>
      @font-face {
        font-family: 'Active24';
        src: url('https://cdn.active24.eu/fonts/OTF/Active24-Regular.otf') format("opentype"),
        url('https://cdn.active24.eu/fonts/OTF/Active24-Regular.woff2') format("woff2");
        font-weight: 400;
        font-display: swap;
      }
      @font-face {
        font-family: 'Active24';
        src: url('https://cdn.active24.eu/fonts/OTF/Active24-Medium.otf') format("opentype"),
        url('https://cdn.active24.eu/fonts/OTF/Active24-Medium.woff2') format("woff2");
        font-weight: 500;
        font-display: swap;
      }

      @font-face {
        font-family: 'Active24';
        src: url('https://cdn.active24.eu/fonts/OTF/Active24-Bold.otf') format("opentype"),
        url('https://cdn.active24.eu/fonts/OTF/Active24-Bold.woff2') format("woff2");
        font-weight: 600;
        font-display: swap;
      }

      :root {
        --a24-primary: #2EF379;
        --a24-primary-hover: #19ED56;
        --a24-primary-60: #82F8AE;
        --a24-primary-40: #ABFAC9;
        --a24-primary-20: #D6FDE4;
        --a24-primary-hover-40: #1c9249;
        --a24-champagne: #ECEBD5;
        --a24-champagne-60: #BDBCAA;
        --a24-champagne-40: #F7F7EE;
        --a24-mint: #3AE1D1;
        --a24-mustard: #FFD830;
        --a24-lavender: #B8A5FF;
        --a24-lavender-hover: #9c85ff;
        --a24-red: #FF685E;
        --a24-black: #282828;
        --a24-black-60: #7e7e7e;
        --a24-white: #ffffff;

        --bg: var(--a24-champagne-40);
        --text: var(--a24-black);
      }

      * { margin: 0; padding: 0; box-sizing: border-box; -webkit-box-sizing: border-box; -moz-box-sizing: border-box;  }
      * { -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }
      .up html, body.up, .up div, .up span, .up applet, .up object, .up iframe, .up a, .up img, .up select, .up input, .up option { margin: 0; padding: 0; border: 0; outline: 0; }
      .up html { -webkit-text-size-adjust: none; }
      .up button, .up input, .up select, .up textarea { font-size: 100%; margin: 0; vertical-align: baseline; box-shadow: none; }
      .up input[type="button"]   { -webkit-appearance: none !important; }
      .up a { text-decoration: none; }
      .up img { border: 0 none; max-width: 100%; vertical-align: top; }
      .up a { outline: none; cursor: pointer; }
      .up a:hover { text-decoration: none; }
      .up a:focus { text-decoration: none !important; outline: none !important; }
      .up img { max-width: 100%; }
      .up button:focus {outline:0;}
      .up img { vertical-align: bottom; }
      /*Placeholder opacity cross browsers*/
      .up input::-webkit-input-placeholder { color: var(--a24-champagne-60); }
      .up input:-moz-placeholder { color: #000000; opacity:0.6; }
      .up input::-moz-placeholder { color: #000000; opacity:0.6; }
      .up input:-ms-input-placeholder { color: #000000; opacity:0.6; }
      .up button::-moz-focus-inner, .up input[type="submit"]::-moz-focus-inner { border: 0; }
      .up #login-form .sbSelector a{ color: #000 !important; }
      /* ~~~~~ Typography ~~~~~ */
      h1, h2, h3, h4, h5, h6 {font-family: 'Active24'; font-weight: normal;font-style: normal; padding: 0; margin: 0; line-height: 1.3; color: var(--text); letter-spacing: 0; }
      /* #Page Structure
      ================================================== */
      body.up { margin: 0; padding: 0; font-size: 16px; color: var(--text); background: var(--bg); font-family: "Arial", sans-serif; font-weight: 400; overflow-x: hidden;}
      .up .wrapper {width: 100%;
        min-height: 100vh;display: flex;justify-content: center;align-items: center;padding: 30px 0 70px 0;}
      .up .main { max-width: 1200px; margin: 0 auto; padding: 0 45px 45px;}
      /* page_1 Style
      ================================================== */
      .up .mid-container {width: 100%;}
      .up .logo img {width: 100%;max-width: 123px;}
      .up .imgblk {text-align: center;}
      .up .imgblk .imgbox {margin-bottom: 50px;}
      .up .imgblk .imgbox img {max-width: 630px;width: 100%;}
      .up .imgblk .content {margin-bottom: 52px;}
      .up .imgblk .content h1 {color: var(--text);font-size: 24px;text-align: center;line-height:1.17;margin-bottom: 16px;font-weight: 600;font-family: Arial;letter-spacing: 0px;}
      .up .imgblk .content p {color: var(--a24-black-60);font-size: 16px;text-align: center;line-height: 1.5;font-family: Arial;font-weight: 400;margin-bottom: 50px;}
      /* page_3 Style
      ================================================== */
      .up .content .bottom_blk {display: flex;justify-content: space-between;align-items: center;padding: 10px 0;max-width: 450px;width: 100%;}
      .up .content .bottom_blk ul {list-style: none;}
      .up .content .bottom_blk .social_blk ul {display: flex;}
      .up .content .bottom_blk .social_blk ul li:first-child {margin-left: 0px;}
      .up .content .bottom_blk .social_blk ul li {font-family: 'Active24', Arial, sans-serif;font-size: 16px;line-height: 1.26;color: var(--text);text-align: center;font-weight: 400;margin-left: 42px;}
      .up .content .bottom_blk .social_blk ul li a {color: var(--text);transition: color 150ms ease-in-out}
      .up .content .bottom_blk .social_blk ul li a:focus,.up .content .bottom_blk .social_blk ul li a:hover {color: var(--a24-mint);}
      /* page Style
      ================================================== */
      body.page {background: var(--bg);}
      .page.up .logox {display: flex; align-items: center; justify-content: flex-start; margin-bottom: 120px;}
      .page.up .imgblk {text-align: center;display: flex;width: 100%;}
      .page.up .imgblk .content {width: 50%;margin-bottom: 0;}
      .page.up .imgblk .imgbox {width: 50%;text-align: center; padding-top: 10%; padding-left: 15px; padding-right: 15px;}
      .page.up .imgblk .content h1 {font-family: 'Active24', Arial, sans-serif;font-size: 64px;line-height: 1.112;margin-bottom: 17px;text-align: left;font-weight: bold;}
      .page.up .imgblk .content h2 {font-family: 'Active24', Arial, sans-serif;font-size: 22.5px;line-height: 1.266;margin-bottom: 7px;text-align: left;font-weight: bold;}
      .page.up .imgblk .content h4 {font-family: 'Active24', Arial, sans-serif;font-size: 28px;line-height: 1.266;margin-bottom: 7px;text-align: left;font-weight: bold;}
      .page.up .imgblk .content p {font-family: 'Arial', sans-serif; font-size: 18px;text-align: left;margin: 0 0 24px 0;}
      .page.up .imgblk .content p a {color: var(--a24-primary-hover-40);text-decoration: underline;transition: color 150ms ease-in-out}
      .page.up .imgblk .content p a:focus,.page.up .imgblk .content p a:hover {color:var(--a24-primary-hover);}
      .page.up .imgblk .imgbox {margin-bottom: 50px;}
      .page.up form
      {outline: 0;float: left;-webkit-border-radius: 50px;position: relative;z-index:0;margin-top:10px;border: 1px solid var(--a24-champagne-60);background-color: #ffffff}
      .page.up form > .textbox {outline: 0;height: 72px;width: 400px;padding: 0 18px 0 2em;background-color: #ffffff;color: var(--text);border: 0;float: left;
        -webkit-border-radius: 50px 0 0 50px;border-radius: 50px 0 0 50px;font-family: 'Active24';font-weight: 600;font-size: 24px;
        line-height: 1.34;}
      .page.up form .search_btn {outline: 0;height: 72px;width: 72px;min-width: 72px;line-height: 72px;padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        appearance: none;
        border: none;
        background: var(--a24-primary);
        transform: scale(.9);
        color: #ffffff;border: 0;float: left;-webkit-border-radius: 36px;border-radius: 36px;
        position: relative;z-index: 0;cursor: pointer;}
      .page.up form .search_btn img {max-width: 24px;}
      .page.up .search_blk {margin: 64px 0 110px 0;}
      .page.up .btn_all {text-align: left;margin-bottom: 65px;}
      .page.up .btn_all a.btn {font-family: 'Active24', Arial, sans-serif   ;color: #3C0500;font-size: 16px;line-height:1.25;font-weight: 600;
        padding: 14px 26px 14px;text-align: center;display: inline-block;border-radius: 6px;position: relative;z-index: 0;}
      .page.up .btn_all a.btn::before
      {content: "";background: var(--a24-lavender);width: 100%;height: 100%;position: absolute;top:0;left: 0;right: 0;bottom: 0;z-index: -1; border-radius: 50px; transition: all 200ms ease-in-out}
      .page.up .btn_all a.btn:hover::before, .page.up .btn_all a.btn:focus::before{background-color: var(--a24-lavender-hover);}
      .page.up .countries {display: flex; flex-direction: column; justify-content: center; align-items: flex-start; margin-bottom: 20px;}
      .page.up .countries .flags {display: flex;}
      .page.up .countries .flags a:hover {opacity: 0.8;}
      .page.up .countries img {width: 20px; height: 20px; margin-right: 14px;}
      .page.up .content .bottom_blk { align-items: flex-start; }
      /* Responsive Style
      ================================================== */
      @media (max-width: 1440px) {
        .up .imgblk .content p {margin-bottom: 30px;}
        .page.up .search_blk {margin: 30px 0 110px 0;}
        .page.up .imgblk .content { width: 50%; }
        .page.up .imgblk .imgbox { width: 50%; }
        .page.up .imgblk .content h1 {font-size: 44px;}
      }
      @media (max-width: 1200px) {
        .page.up .imgblk .content { width: 50%; }
        .page.up .imgblk .imgbox { width: 50%; }
        .page.up .imgblk .content h1 {font-size: 40px;}
        .page.up .imgblk .content h2 {font-size: 20px;}
        .page.up .search_blk { margin: 50px 0 80px 0; }
        .page.up .imgblk .content h1 br {display: none;}
        .page.up .search_blk { margin: 30px 0 90px 0; }
        .page.up form {display: flex;justify-content: space-between;float: none;align-items: center;}
        .page.up form > .textbox { height: 45px; width: 270px; padding: 0 15px; font-size: 16px; line-height: 1;}
        .page.up form a.search_btn { height: 45px; width: 50px; line-height: 45px; }
        .page.up form a.search_btn img {max-width: 20px;}
      }
      @media (max-width: 767px) {
        .up .main {padding: 0 30px 30px;}
        .up .wrapper {padding: 10px 0;}
        .up .logo img { max-width: 80px; }
        .up .imgblk .content h1 {font-size: 20px;}
        .up .imgblk .content p {margin-bottom: 30px;}
        .up .imgblk .content p br {display: none;}
        .up .imgblk .imgbox { display: none; }
        .up .content .bottom_blk {padding: 20px 0;flex-wrap: wrap;max-width: 100%;}
        .up .social_blk {justify-content: center;width: 100%;margin-bottom: 15px;}
        .up .content .bottom_blk .social_blk ul {justify-content: space-between;}
        .page.up .imgblk {flex-wrap: wrap; width: 100%; max-width: 530px; margin: 0 auto;}
        .page.up .imgblk .content { width: 100%; order: 2;}
        .page.up .imgblk .imgbox { width: 100%; }
        .page.up .imgblk .content h1 { font-size: 34px;}
        .page.up .imgblk .content h2 {text-align: center;}
        .page.up .imgblk .content h4 {display: none;}
        .page.up form > .textbox { height: 42px; width: 240px; padding: 0 12px; font-size: 16px; line-height: 1; }
        .page.up form a.search_btn { height: 42px; width: 42px; line-height: 42px; }
        .page.up .search_blk { margin: 30px 0px; }
        .up .content .bottom_blk .social_blk ul li{margin-left: 25px;}
        .page.up .countries { width: 100%; align-items: center;}
        .page.up .btn_all {text-align: center;margin-bottom: 65px;}
        .page.up .btn_all .btn {width: 100%;}
        .page.up .logox {display: flex; align-items: center; justify-content: center;}
      }</style>
</head>
<body class="up page">

<div class="wrapper">
    <div class="mid-container">
        <div class="main">
            <div class="logox">
                <a href="https://www.active24.cz/">
                    <img src="/logos/a24-logo-green-no-safezone.svg" width="224" height="60" alt="Active24">
                </a>
            </div>
            <div class="imgblk">
                <div class="content">
                    <div class="czech">
                        <h4>Ups!</h4>
                        <h1>Tady už někdo
                            <br>
                            parkuje.
                        </h1>
                        <p>
                            Tato doména je již obsazena a směruje na hosting Active24.
                            <br>
                            Pokud jste vlastníkem této domény a chcete
                            <br>
                            začít se svým webem, uděláte to rychle a snadno
                            <br>
                            prostřednictvím
                            <a href="https://admin.active24.cz/">klientské zóny Active24.</a>
                        </p>
                        <div class="btn_all">
                            <a
                                href="https://admin.active24.cz/" class="btn"
                            >Začněte se svým webem</a>
                        </div>
                        <div class="search_blk">
                            <h4>Najděte si svou doménu na Active24:</h4>
                            <form
                                action="https://www.active24.cz/cart/domain-checker"
                                role="search"
                                method="get"
                            >
                                <input
                                    autofocus
                                    type="text"
                                    name="qd"
                                    class="textbox"
                                    autocomplete="off"
                                    placeholder="moje-domena.cz"
                                />
                                <button type="submit" class="search_btn">
                                    <img src="/parking-pages/search-light.png" alt="Hledat" class="sear_icon">
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="english" style="display:none;">
                        <h4>Whoops!</h4>
                        <h1>Someone has
                            <br>
                            already parked here.
                        </h1>
                        <p>This domain name is purchased and parked by another Active24
                            <br>
                           customer. If you are the owner of this domain and want to
                            <br>
                           get started with your website you do it quickly and easily
                            <br>
                            <a href="https://admin.active24.cz/">via Active24 Customer Zone.</a>
                        </p>
                        <div class="btn_all">
                            <a
                                href="https://admin.active24.cz/en" class="btn"
                            >Get started with your website</a>
                        </div>
                        <div class="search_blk">
                            <h4>Find your own domain at Active24:</h4>
                            <form
                                action="https://www.active24.cz/cart/domain-checker"
                                role="search"
                                method="get"
                            >
                                <input
                                    type="text"
                                    name="qd"
                                    autocomplete="off"
                                    class="textbox"
                                    placeholder="my-domain.com"
                                />
                                <button type="submit" class="search_btn">
                                    <img src="/parking-pages/search-light.png" alt="Hledat" class="sear_icon">
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="bottom_blk">
                        <div class="countries">
                            <div class="flags">
                                <a href="javascript:void(0);" onclick="changeLanguage('cz')">
                                    <img src="/parking-pages/flag_cz.png" alt="CZ" />
                                </a> <a href="javascript:void(0);" onclick="changeLanguage('en')">
                                    <img src="/parking-pages/flag_eng.png" alt="EN" />
                                </a>
                            </div>
                        </div>
                        <div class="social_blk">
                            <ul class="czech">
                                <li><a href="https://admin.active24.cz/">Klientská zóna</a></li>
                                <li><a href="https://www.active24.cz/">Active24</a></li>
                                <li><a href="https://www.active24.cz/support/">Pomoc</a></li>
                            </ul>
                            <ul class="english" style="display:none;">
                                <li><a href="https://admin.active24.cz/">Customer zone</a></li>
                                <li><a href="https://www.active24.cz/">Active24</a></li>
                                <li><a href="https://www.active24.cz/support/">Help</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="imgbox">
                    <img src="/parking-pages/a24-parking-eyes.png" alt="Ups!" aria-hidden="true">
                </div>
            </div>
        </div>
    </div>
</div>

<script>
  var czech = document.querySelectorAll('.czech');
  var english = document.querySelectorAll('.english');

  function getLang() {
    return (navigator.languages !== undefined) ? navigator.languages[0] : navigator.language;
  }

  function show(elements) {
    elements.forEach((element) => {
      element.style.display = null;
    });
  }

  function hide(elements) {
    elements.forEach((element) => {
      element.style.display = 'none';
    });
  }

  function changeLanguage(countryCode) {
    if (countryCode === 'cz') {
      show(czech);
      hide(english);
    } else if (countryCode === 'en') {
      show(english);
      hide(czech);
    }
  }

  var locale = getLang();
  if (locale === 'en-US' || locale === 'en-GB' || locale === 'en' || locale === 'en-US' || locale === 'en-GB' || locale === 'en') {
    changeLanguage('en');
  } else {
    changeLanguage('cz');
  }
</script>
</body>
</html>