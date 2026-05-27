<?php
/**
 * COMPUTER IELTS — WordPress Header Snippet
 * 
 * Yeh code apne Astra Child Theme ki header.php mein daalo
 * Ya "Insert Headers and Footers" plugin mein paste karo
 * 
 * ZARURI: Font Awesome aur Google Fonts pehle se load honi chahiye
 * Agar nahi hain toh functions.php mein yeh add karo (niche diya hai)
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- ══ COMPUTER IELTS SHARED HEADER ══ -->
<div id="site-header"></div>
<script src="<?php echo esc_url( home_url('/shared/header.js') ); ?>"></script>
<!-- ══════════════════════════════════ -->
