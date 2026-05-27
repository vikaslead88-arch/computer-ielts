# Computer IELTS — Shared Header Setup

## Sirf 2 lines daalni hain har page mein 👇

```html
<div id="site-header"></div>
<script src="/shared/header.js"></script>
```

---

## HTML Pages (Landing, Reading, Writing, Listening)

Har page mein yeh dhundo:
```html
<!-- ANNOUNCEMENT BAR -->
<div class="ann" ...>
...
</div>

<!-- HEADER -->
<header id="hdr">
  ...bohat saara code...
</header>

<!-- MOBILE DRAWER -->
<div class="drawer" ...>
  ...
</div>
```

Yeh POORA section DELETE karo aur uski jagah sirf yeh 2 lines daalo:
```html
<div id="site-header"></div>
<script src="/shared/header.js"></script>
```

---

## WordPress Posts/Pages

### Option A — Plugin (Seedha aur Easy ✅)

1. WordPress Dashboard → Plugins → Add New
2. Search: **"Insert Headers and Footers"** (WPCode)
3. Install & Activate
4. Dashboard → Code Snippets → Header
5. Yeh paste karo:

```html
<div id="site-header"></div>
<script src="/shared/header.js"></script>
```

6. Save ✅ — Har post/page mein automatically aayega!

---

### Option B — Astra Child Theme

1. Child theme mein `header.php` file banao
2. `wordpress-header.php` ka content copy karo usme
3. Child theme upload karo aur activate karo

---

## Future Mein Header Update Karna Ho Toh?

Sirf **`shared/header.js`** ek file edit karo.
Automatically sab pages + WordPress posts update ho jayenge! 🎯
