(function(){

/* ============================================================
   COMPUTER IELTS — SHARED HEADER
   Include on ANY page or WordPress post with:
   <div id="site-header"></div>
   <script src="/shared/header.js"></script>
   ============================================================ */

/* ── 1. INJECT CSS ── */
var css = `
:root{
  --blue:#2563eb;--blue2:#1d4ed8;--blue-lt:#3b82f6;--blue-xl:#dbeafe;--blue-xxl:#eff6ff;
  --teal:#0891b2;--teal-lt:#06b6d4;--teal-xl:#ecfeff;
  --purple:#7c3aed;--purple-lt:#8b5cf6;--purple-xl:#f5f3ff;
  --green:#059669;--green-lt:#10b981;--green-xl:#ecfdf5;
  --orange:#ea580c;--orange-lt:#f97316;--orange-xl:#fff7ed;
  --pink:#db2777;--pink-lt:#ec4899;--pink-xl:#fdf2f8;
  --tx:#0f172a;--tx2:#1e293b;--tx3:#475569;--tx4:#94a3b8;--tx5:#cbd5e1;
  --bg:#ffffff;--bg2:#f8fafc;--bg3:#f1f5f9;--bg4:#e2e8f0;
  --border:#e2e8f0;--border2:#cbd5e1;
  --sh-xs:0 1px 2px rgba(0,0,0,.04);
  --sh-sm:0 2px 8px rgba(0,0,0,.06),0 1px 3px rgba(0,0,0,.04);
  --sh:0 4px 20px rgba(0,0,0,.07),0 2px 8px rgba(0,0,0,.05);
  --sh-lg:0 12px 48px rgba(0,0,0,.1),0 4px 16px rgba(0,0,0,.06);
  --sh-xl:0 24px 80px rgba(0,0,0,.12),0 8px 24px rgba(0,0,0,.08);
  --r:12px;--r-lg:18px;--r-xl:24px;--r-2xl:32px;
  --hh:68px;
}


/* ANNOUNCEMENT BAR */
.ci-ann{background:linear-gradient(90deg,var(--blue),var(--teal-lt) 50%,var(--purple-lt));color:#fff;text-align:center;padding:11px 50px;font-size:13px;font-weight:500;letter-spacing:.01em;position:relative;z-index:1001;}
.ci-ann strong{font-weight:700;}
.ci-ann a{color:#fff;text-decoration:underline;text-underline-offset:2px;margin-left:8px;font-weight:600;}
.ci-ann-x{position:absolute;right:16px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,.2);border:none;color:#fff;width:24px;height:24px;border-radius:50%;font-size:12px;display:flex;align-items:center;justify-content:center;cursor:pointer;}
.ci-ann-x:hover{background:rgba(255,255,255,.35);}

/* HEADER */
#ci-hdr{position:sticky;top:0;z-index:1000;background:rgba(255,255,255,.97);backdrop-filter:blur(24px) saturate(200%);-webkit-backdrop-filter:blur(24px) saturate(200%);border-bottom:1px solid var(--border);transition:box-shadow .3s;}
#ci-hdr.scrolled{box-shadow:0 4px 32px rgba(0,0,0,.09);}
.ci-hdr-inner{width:100%;max-width:1440px;margin:0 auto;padding:0 48px;height:var(--hh);display:flex;align-items:center;gap:4px;}

/* LOGO */
.ci-logo{display:flex;align-items:center;gap:11px;flex-shrink:0;text-decoration:none;}
.ci-logo-mark{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#2563eb 0%,#06b6d4 60%,#7c3aed 100%);display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:900;color:#fff;letter-spacing:-.5px;flex-shrink:0;box-shadow:0 4px 16px rgba(37,99,235,.35),0 0 0 1px rgba(37,99,235,.1);font-family:'Manrope',sans-serif;position:relative;overflow:hidden;}
.ci-logo-mark::before{content:'';position:absolute;top:-40%;left:-40%;width:180%;height:180%;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,.25),transparent 60%);}
.ci-logo-text{display:flex;flex-direction:column;line-height:1.1;}
.ci-logo-name{font-size:16px;font-weight:800;color:var(--tx);letter-spacing:-.04em;font-family:'Manrope',sans-serif;}
.ci-logo-tag{font-size:9px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;background:linear-gradient(135deg,var(--blue),var(--teal-lt));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}


/* NAV */
.ci-nav-menu{display:flex;align-items:center;gap:1px;margin-left:24px;}
.ci-nav-it{position:relative;}
.ci-nav-a{display:flex;align-items:center;gap:5px;padding:9px 13px;font-size:13.5px;font-weight:500;color:var(--tx3);border-radius:9px;transition:all .18s;white-space:nowrap;background:none;border:none;cursor:pointer;font-family:'Inter',sans-serif;text-decoration:none;}
.ci-nav-a:hover,.ci-nav-a.on{color:var(--blue);background:var(--blue-xxl);}
.ci-nav-chev{font-size:9px;transition:transform .2s;}
.ci-nav-it.open .ci-nav-chev{transform:rotate(180deg);}
.ci-nb{font-size:9px;font-weight:700;background:linear-gradient(135deg,#10b981,#059669);color:#fff;padding:2px 6px;border-radius:100px;margin-left:5px;vertical-align:middle;}

/* DROPDOWN */
.ci-dd{position:absolute;top:calc(100% + 8px);left:50%;min-width:270px;background:rgba(255,255,255,.98);border:1px solid var(--border);border-radius:var(--r-lg);box-shadow:var(--sh-xl);padding:8px;opacity:0;pointer-events:none;transform:translateX(-50%) translateY(-6px) scale(.97);transition:all .2s cubic-bezier(.16,1,.3,1);z-index:200;backdrop-filter:blur(20px);}
.ci-dd.wide{min-width:520px;display:grid;grid-template-columns:1fr 1fr;gap:2px;}
.ci-nav-it.open .ci-dd{opacity:1;pointer-events:all;transform:translateX(-50%) translateY(0) scale(1);}
.ci-dd-a{display:flex;align-items:flex-start;gap:11px;padding:11px 12px;border-radius:10px;transition:background .15s;color:var(--tx);text-decoration:none;}
.ci-dd-a:hover{background:var(--bg2);}
.ci-dd-ico{width:36px;height:36px;flex-shrink:0;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:15px;}
.ci-di-bl{background:var(--blue-xxl);color:var(--blue);}
.ci-di-te{background:var(--teal-xl);color:var(--teal);}
.ci-di-pu{background:var(--purple-xl);color:var(--purple);}
.ci-di-gr{background:var(--green-xl);color:var(--green);}
.ci-di-or{background:var(--orange-xl);color:var(--orange);}
.ci-di-pk{background:var(--pink-xl);color:var(--pink);}
.ci-dd-t{font-size:13px;font-weight:600;color:var(--tx);margin-bottom:2px;}
.ci-dd-s{font-size:11.5px;color:var(--tx4);line-height:1.4;}
.ci-dd-sep{grid-column:1/-1;border-top:1px solid var(--border);margin:4px 0;}
.ci-dd-label{grid-column:1/-1;font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:var(--tx4);padding:8px 12px 4px;}
.ci-dd-sub{margin-left:47px;display:flex;flex-direction:column;gap:2px;margin-top:4px;}
.ci-dd-sub-a{font-size:12px;color:var(--tx3);padding:5px 10px;border-radius:7px;display:flex;align-items:center;gap:7px;transition:background .15s;text-decoration:none;}
.ci-dd-sub-a:hover{background:var(--blue-xxl);color:var(--blue);}


/* AUTH BUTTONS */
.ci-nav-auth{display:flex;align-items:center;gap:8px;margin-left:auto;flex-shrink:0;}
.ci-btn-login{padding:9px 20px;font-size:13.5px;font-weight:600;color:var(--tx2);background:#fff;border:1.5px solid var(--border2);border-radius:9px;transition:all .18s;cursor:pointer;font-family:'Inter',sans-serif;}
.ci-btn-login:hover{border-color:var(--blue);color:var(--blue);}
.ci-btn-start{padding:9px 22px;font-size:13.5px;font-weight:700;color:#fff;background:linear-gradient(135deg,var(--blue),var(--teal-lt));border-radius:9px;box-shadow:0 2px 12px rgba(37,99,235,.28);transition:all .2s;display:flex;align-items:center;gap:6px;cursor:pointer;font-family:'Inter',sans-serif;border:none;text-decoration:none;}
.ci-btn-start:hover{transform:translateY(-1px);box-shadow:0 5px 22px rgba(37,99,235,.4);color:#fff;}
.ci-hamburger{display:none;width:40px;height:40px;background:#fff;border:1.5px solid var(--border);border-radius:9px;align-items:center;justify-content:center;font-size:16px;color:var(--tx);margin-left:auto;cursor:pointer;}

/* MOBILE DRAWER */
.ci-drawer{display:none;position:fixed;inset:0;z-index:3000;}
.ci-drawer.open{display:block;}
.ci-drawer-back{position:absolute;inset:0;background:rgba(10,15,30,.65);backdrop-filter:blur(5px);}
.ci-drawer-panel{position:absolute;right:0;top:0;bottom:0;width:min(360px,90vw);background:#fff;transform:translateX(100%);transition:transform .28s cubic-bezier(.22,1,.36,1);display:flex;flex-direction:column;overflow:hidden;}
.ci-drawer.open .ci-drawer-panel{transform:translateX(0);}
.ci-dr-hd{padding:16px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;background:#fff;position:sticky;top:0;z-index:2;}
.ci-dr-close{width:36px;height:36px;border:1px solid var(--border);border-radius:9px;background:none;color:var(--tx3);font-size:15px;cursor:pointer;display:flex;align-items:center;justify-content:center;}
.ci-dr-body{flex:1;overflow-y:auto;padding:18px;}
.ci-dr-lbl{font-size:10.5px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:var(--tx4);padding:4px 10px;margin-bottom:4px;margin-top:12px;}
.ci-dr-link{display:flex;align-items:center;gap:10px;padding:12px 10px;border-radius:9px;font-size:14px;font-weight:500;color:var(--tx2);transition:background .15s;text-decoration:none;}
.ci-dr-link:hover{background:var(--bg2);color:var(--blue);}
.ci-dr-link i{width:18px;text-align:center;font-size:13px;color:var(--tx4);}
.ci-dr-ft{padding:16px;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:8px;}
.ci-dr-login{padding:12px;border-radius:9px;border:1.5px solid var(--border2);color:var(--tx);font-weight:600;font-size:14px;text-align:center;display:block;transition:all .2s;text-decoration:none;}
.ci-dr-login:hover{border-color:var(--blue);color:var(--blue);}
.ci-dr-start{padding:13px;border-radius:9px;background:linear-gradient(135deg,var(--blue),var(--teal-lt));color:#fff;font-weight:700;font-size:14px;text-align:center;display:flex;align-items:center;justify-content:center;gap:7px;text-decoration:none;}

/* RESPONSIVE */
@media(max-width:768px){
  .ci-nav-menu,.ci-nav-auth{display:none!important;}
  .ci-hamburger{display:flex!important;}
  .ci-hdr-inner{padding:0 20px;}
}
`;


/* ── 2. INJECT CSS INTO <head> ── */
var styleEl = document.createElement('style');
styleEl.textContent = css;
document.head.appendChild(styleEl);

/* ── 3. DETECT ACTIVE PAGE ── */
var path = window.location.pathname;
function isActive(url){ return path === url || path.indexOf(url) === 0; }

var mockOn   = isActive('/ielts-academic-reading-practice-test/') || isActive('/ielts-general-reading-practice-test/') || isActive('/ielts-listening-practice-test/') || isActive('/ielts-academic-writing-task-1/') || isActive('/ielts-general-writing-task-1/') || isActive('/ielts-writing-task-2-practice-test/') || isActive('/ielts-mock-test-online/') ? 'on' : '';
var selfOn   = isActive('/ielts-practice-test/') || isActive('/ielts-speaking-practice-online/') || isActive('/ielts-writing-evaluation-free/') ? 'on' : '';
var tipsOn   = isActive('/band-9-tips/') || isActive('/vocabulary/') || isActive('/grammar/') || isActive('/band-calculator/') ? 'on' : '';
var blogOn   = isActive('/blog/') ? 'on' : '';
var pricingOn= isActive('/pricing/') ? 'on' : '';


/* ── 4. BUILD HEADER HTML ── */
var html = `
<!-- ANNOUNCEMENT BAR -->
<div class="ci-ann" id="ci-annBar">
  🎉 <strong>New:</strong> 50+ Academic &amp; General Reading Tests Added — All Free, Instant Scoring
  <a href="/ielts-academic-reading-practice-test/">Explore Tests →</a>
  <button class="ci-ann-x" onclick="document.getElementById('ci-annBar').remove()">✕</button>
</div>

<!-- HEADER -->
<header id="ci-hdr">
  <div class="ci-hdr-inner">

    <!-- LOGO -->
    <a class="ci-logo" href="/">
      <div class="ci-logo-mark">CI</div>
      <div class="ci-logo-text">
        <span class="ci-logo-name">Computer IELTS</span>
        <span class="ci-logo-tag">Computer-Based Practice</span>
      </div>
    </a>

    <!-- DESKTOP NAV -->
    <nav class="ci-nav-menu">

      <!-- MOCK TESTS -->
      <div class="ci-nav-it" id="ci-nd-mock">
        <button class="ci-nav-a ${mockOn}" onclick="ciOpenDD('ci-nd-mock')">
          <i class="fa fa-layer-group" style="font-size:12px"></i> Mock Tests
          <i class="fa fa-chevron-down ci-nav-chev"></i>
        </button>
        <div class="ci-dd wide">
          <div class="ci-dd-label" style="grid-column:1/-1">⏱ Exam Mode — Timed Tests with Auto-Submit</div>
          <a class="ci-dd-a" href="/ielts-academic-reading-practice-test/">
            <div class="ci-dd-ico ci-di-bl"><i class="fa fa-book-open"></i></div>
            <div><div class="ci-dd-t">Academic Reading</div><div class="ci-dd-s">Full timed tests · 40 Qs · Instant band score</div></div>
          </a>
          <a class="ci-dd-a" href="/ielts-general-reading-practice-test/">
            <div class="ci-dd-ico ci-di-gr"><i class="fa fa-file-alt"></i></div>
            <div><div class="ci-dd-t">General Reading</div><div class="ci-dd-s">Sections 1, 2 &amp; 3 · Real CBT format</div></div>
          </a>
          <a class="ci-dd-a" href="/ielts-listening-practice-test/">
            <div class="ci-dd-ico ci-di-pu"><i class="fa fa-headphones"></i></div>
            <div><div class="ci-dd-t">Listening Tests</div><div class="ci-dd-s">4 sections with real audio · 40 min timer</div></div>
          </a>
          <div class="ci-dd-a" style="flex-direction:column;cursor:default;">
            <div style="display:flex;align-items:flex-start;gap:11px;width:100%">
              <div class="ci-dd-ico ci-di-or"><i class="fa fa-pen-nib"></i></div>
              <div><div class="ci-dd-t">Writing Exam</div><div class="ci-dd-s">Timed writing with word count tracker</div></div>
            </div>
            <div class="ci-dd-sub">
              <a class="ci-dd-sub-a" href="/ielts-academic-writing-task-1/"><i class="fa fa-arrow-right"></i> Task 1 — Academic (Graph/Chart/Diagram)</a>
              <a class="ci-dd-sub-a" href="/ielts-general-writing-task-1/"><i class="fa fa-arrow-right"></i> Task 1 — General Training (Letter)</a>
              <a class="ci-dd-sub-a" href="/ielts-writing-task-2-practice-test/"><i class="fa fa-arrow-right"></i> Task 2 — Essays (All Types)</a>
            </div>
          </div>
          <div class="ci-dd-sep"></div>
          <a class="ci-dd-a" href="/ielts-mock-test-online/" style="grid-column:1/-1">
            <div class="ci-dd-ico ci-di-te"><i class="fa fa-trophy"></i></div>
            <div><div class="ci-dd-t">Full Mock Test <span class="ci-nb">3 Hours</span></div><div class="ci-dd-s">Complete IELTS simulation — Reading + Listening + Writing</div></div>
          </a>
        </div>
      </div>
`;


html += `
      <!-- SELF PRACTICE -->
      <div class="ci-nav-it" id="ci-nd-self">
        <button class="ci-nav-a ${selfOn}" onclick="ciOpenDD('ci-nd-self')">
          <i class="fa fa-dumbbell" style="font-size:12px"></i> Self Practice
          <i class="fa fa-chevron-down ci-nav-chev"></i>
        </button>
        <div class="ci-dd">
          <div class="ci-dd-label">📚 Learning Mode — No Time Pressure</div>
          <a class="ci-dd-a" href="/ielts-practice-test/">
            <div class="ci-dd-ico ci-di-bl"><i class="fa fa-book-open"></i></div>
            <div><div class="ci-dd-t">Reading Passages</div><div class="ci-dd-s">Passage-by-passage skill building at your own pace</div></div>
          </a>
          <a class="ci-dd-a" href="/ielts-listening-practice-test/">
            <div class="ci-dd-ico ci-di-pu"><i class="fa fa-headphones"></i></div>
            <div><div class="ci-dd-t">Listening Audios</div><div class="ci-dd-s">Topic-wise audio practice with full transcripts</div></div>
          </a>
          <a class="ci-dd-a" href="/ielts-speaking-practice-online/">
            <div class="ci-dd-ico ci-di-gr"><i class="fa fa-microphone"></i></div>
            <div><div class="ci-dd-t">Speaking Cue Cards</div><div class="ci-dd-s">Latest cue cards · Part 1, 2 &amp; 3 tips &amp; model answers</div></div>
          </a>
          <a class="ci-dd-a" href="/ielts-writing-evaluation-free/">
            <div class="ci-dd-ico ci-di-pk"><i class="fa fa-robot"></i></div>
            <div><div class="ci-dd-t">AI Writing Evaluator <span class="ci-nb">NEW</span></div><div class="ci-dd-s">Paste your essay — get instant AI band score &amp; feedback</div></div>
          </a>
        </div>
      </div>

      <!-- IELTS TIPS -->
      <div class="ci-nav-it" id="ci-nd-tips">
        <button class="ci-nav-a ${tipsOn}" onclick="ciOpenDD('ci-nd-tips')">
          <i class="fa fa-lightbulb" style="font-size:12px"></i> IELTS Tips
          <i class="fa fa-chevron-down ci-nav-chev"></i>
        </button>
        <div class="ci-dd">
          <div class="ci-dd-label">🎯 Resources &amp; Study Tools</div>
          <a class="ci-dd-a" href="/band-9-tips/">
            <div class="ci-dd-ico ci-di-or"><i class="fa fa-star"></i></div>
            <div><div class="ci-dd-t">Band 9 Strategies</div><div class="ci-dd-s">Expert tips for Reading, Listening, Writing &amp; Speaking</div></div>
          </a>
          <a class="ci-dd-a" href="/vocabulary/">
            <div class="ci-dd-ico ci-di-bl"><i class="fa fa-spell-check"></i></div>
            <div><div class="ci-dd-t">Vocabulary Builder</div><div class="ci-dd-s">Academic wordlists, collocations &amp; flashcards</div></div>
          </a>
          <a class="ci-dd-a" href="/grammar/">
            <div class="ci-dd-ico ci-di-gr"><i class="fa fa-pencil-alt"></i></div>
            <div><div class="ci-dd-t">Grammar Guide</div><div class="ci-dd-s">Fix the most common IELTS grammar mistakes</div></div>
          </a>
          <a class="ci-dd-a" href="/band-calculator/">
            <div class="ci-dd-ico ci-di-pu"><i class="fa fa-calculator"></i></div>
            <div><div class="ci-dd-t">Band Score Calculator</div><div class="ci-dd-s">Predict your IELTS band score instantly</div></div>
          </a>
        </div>
      </div>

      <a class="ci-nav-a ${blogOn}" href="/blog/" style="text-decoration:none"><i class="fa fa-rss" style="font-size:12px"></i> Blog</a>
      <a class="ci-nav-a ${pricingOn}" href="/pricing/" style="text-decoration:none"><i class="fa fa-tag" style="font-size:12px"></i> Pricing</a>
    </nav>

    <!-- AUTH -->
    <div class="ci-nav-auth">
      <a class="ci-btn-login" href="/login/">Log In</a>
      <a class="ci-btn-start" href="/ielts-academic-reading-practice-test/"><i class="fa fa-play"></i> Start Free</a>
    </div>
    <button class="ci-hamburger" onclick="ciOpenDrawer()"><i class="fa fa-bars"></i></button>
  </div>
</header>
`;


/* ── MOBILE DRAWER HTML ── */
html += `
<!-- MOBILE DRAWER -->
<div class="ci-drawer" id="ci-mDrawer">
  <div class="ci-drawer-back" onclick="ciCloseDrawer()"></div>
  <div class="ci-drawer-panel">
    <div class="ci-dr-hd">
      <a class="ci-logo" href="/" onclick="ciCloseDrawer()">
        <div class="ci-logo-mark" style="width:34px;height:34px;font-size:12px;border-radius:9px">CI</div>
        <span class="ci-logo-name" style="font-size:14px">Computer IELTS</span>
      </a>
      <button class="ci-dr-close" onclick="ciCloseDrawer()"><i class="fa fa-times"></i></button>
    </div>
    <div class="ci-dr-body">
      <div class="ci-dr-lbl">⏱ Mock Tests (Timed)</div>
      <a class="ci-dr-link" href="/ielts-academic-reading-practice-test/"><i class="fa fa-book-open"></i> Academic Reading</a>
      <a class="ci-dr-link" href="/ielts-general-reading-practice-test/"><i class="fa fa-file-alt"></i> General Reading</a>
      <a class="ci-dr-link" href="/ielts-listening-practice-test/"><i class="fa fa-headphones"></i> Listening Tests</a>
      <a class="ci-dr-link" href="/ielts-academic-writing-task-1/"><i class="fa fa-pen-nib"></i> Writing Task 1 — Academic</a>
      <a class="ci-dr-link" href="/ielts-general-writing-task-1/"><i class="fa fa-pen-nib"></i> Writing Task 1 — General</a>
      <a class="ci-dr-link" href="/ielts-writing-task-2-practice-test/"><i class="fa fa-pen-nib"></i> Writing Task 2 — Essays</a>
      <a class="ci-dr-link" href="/ielts-mock-test-online/"><i class="fa fa-trophy"></i> Full Mock Test</a>
      <div class="ci-dr-lbl">📚 Self Practice (No Timer)</div>
      <a class="ci-dr-link" href="/ielts-practice-test/"><i class="fa fa-book-open"></i> Reading Passages</a>
      <a class="ci-dr-link" href="/ielts-listening-practice-test/"><i class="fa fa-headphones"></i> Listening Audios</a>
      <a class="ci-dr-link" href="/ielts-speaking-practice-online/"><i class="fa fa-microphone"></i> Speaking Cue Cards</a>
      <a class="ci-dr-link" href="/ielts-writing-evaluation-free/"><i class="fa fa-robot"></i> AI Writing Evaluator</a>
      <div class="ci-dr-lbl">🎯 IELTS Tips</div>
      <a class="ci-dr-link" href="/band-9-tips/"><i class="fa fa-star"></i> Band 9 Strategies</a>
      <a class="ci-dr-link" href="/vocabulary/"><i class="fa fa-spell-check"></i> Vocabulary Builder</a>
      <a class="ci-dr-link" href="/grammar/"><i class="fa fa-pencil-alt"></i> Grammar Guide</a>
      <a class="ci-dr-link" href="/band-calculator/"><i class="fa fa-calculator"></i> Band Calculator</a>
      <div class="ci-dr-lbl">More</div>
      <a class="ci-dr-link" href="/blog/"><i class="fa fa-rss"></i> Blog</a>
      <a class="ci-dr-link" href="/pricing/"><i class="fa fa-tag"></i> Pricing</a>
    </div>
    <div class="ci-dr-ft">
      <a class="ci-dr-login" href="/login/">Log In</a>
      <a class="ci-dr-start" href="/ielts-academic-reading-practice-test/" onclick="ciCloseDrawer()">
        <i class="fa fa-play" style="font-size:11px"></i> Start Free Test
      </a>
    </div>
  </div>
</div>
`;


/* ── 5. INJECT HTML INTO #site-header ── */
var container = document.getElementById('site-header');
if(container){
  container.innerHTML = html;
} else {
  // Agar #site-header nahi mila toh body ke start mein inject karo
  document.body.insertAdjacentHTML('afterbegin', html);
}

/* ── 6. JAVASCRIPT — Dropdown, Drawer, Scroll ── */

// Dropdown
window.ciOpenDD = function(id){
  document.querySelectorAll('.ci-nav-it').forEach(function(el){
    if(el.id !== id) el.classList.remove('open');
  });
  document.getElementById(id).classList.toggle('open');
};

document.addEventListener('click', function(e){
  if(!e.target.closest('.ci-nav-it')){
    document.querySelectorAll('.ci-nav-it').forEach(function(el){
      el.classList.remove('open');
    });
  }
});

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    document.querySelectorAll('.ci-nav-it').forEach(function(el){
      el.classList.remove('open');
    });
    ciCloseDrawer();
  }
});

// Mobile Drawer
window.ciOpenDrawer = function(){
  var d = document.getElementById('ci-mDrawer');
  if(d){ d.classList.add('open'); document.body.style.overflow = 'hidden'; }
};
window.ciCloseDrawer = function(){
  var d = document.getElementById('ci-mDrawer');
  if(d){ d.classList.remove('open'); document.body.style.overflow = ''; }
};

// Header scroll shadow
var hdr = document.getElementById('ci-hdr');
if(hdr){
  window.addEventListener('scroll', function(){
    hdr.classList.toggle('scrolled', window.scrollY > 30);
  }, {passive: true});
}

})();
