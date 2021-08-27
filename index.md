<html lang="ja">
   <nav id="s-navi" class="pcnone">
  <dl class="acordion">
  <dt class="trigger"></dt>
  <div id="nav-drawer">
    <input id="nav-input" type="checkbox" class="nav-unshown">
    <label id="nav-open" for="nav-input"><span></span></label>
    <label class="nav-unshown" id="nav-close" for="nav-input"></label>
    <div id="nav-content">
      <!--中身-->
      <div class="hamburger-top">MENU<label class="cancel" for="nav-input"></label></div>
      <div class="top-info">ここに検索窓や画像(サイトマップへのリンク画像)など</div>
      <div class="category">CATEGORY</div>
      <?php
        if ( has_nav_menu( 'smartphone-menu' ) ) : 
          $defaults = array(
            'theme_location' => 'smartphone-menu',
          );
        else : 
          $defaults = array(
            'theme_location' => 'primary-menu',
          );
        endif;?>
        <?php wp_nav_menu( $defaults ); ?>
      </div>
    </div>
    <!--中身ここまで-->
  </dl>
</nav>

<head>
   <link rel="stylesheet" href="style.css">
<header>
  <nav id="global-nav">
    <ul>
      <li><a href="#">メニュー1</a></li>
      <li><a href="#">メニュー2</a></li>
      <li><a href="#">メニュー3</a></li>
      <li><a href="#">メニュー4</a></li>
      <li><a href="#">メニュー5</a></li>
    </ul>
  </nav>
 </header>
  <meta charset="UTF-8">
  <title>HTML </title>
  <link rel="stylesheet" href="style.css">
  <script type="text/javascript" src="sample.js"></script>
   <script src="sen.js"></script>
</head>
<body>
  
    <script type="text/javascript" src="sen.js"></script>
  <div class="main">
    <h1>れんしゅう</h1>
    <p>コピペコンテンツ</p>
      </div>
  <div class="footer">
    <span>Footer領域</span>
      </div>
</body>
<footer>
  <?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="161.36655mm"
   height="161.41273mm"
   viewBox="0 0 161.36655 161.41273"
   version="1.1"
   id="svg4404"
   sodipodi:docname="maru1-1.svg"
   inkscape:version="1.1 (c68e22c387, 2021-05-23)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview4406"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:document-units="mm"
     showgrid="false"
     inkscape:zoom="1.3932941"
     inkscape:cx="217.47025"
     inkscape:cy="351.68456"
     inkscape:window-width="1920"
     inkscape:window-height="986"
     inkscape:window-x="-11"
     inkscape:window-y="-11"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs4401">
    <marker
       id="DistanceX"
       orient="auto"
       refX="0"
       refY="0"
       style="overflow:visible">
      <path
         d="M 3,-3 -3,3 M 0,-5 V 5"
         style="stroke:#000000;stroke-width:0.5"
         id="path4410" />
    </marker>
    <pattern
       id="Hatch"
       patternUnits="userSpaceOnUse"
       width="8"
       height="8"
       x="0"
       y="0">
      <path
         d="M8 4 l-4,4"
         stroke="#000000"
         stroke-width="0.25"
         linecap="square"
         id="path4413" />
      <path
         d="M6 2 l-4,4"
         stroke="#000000"
         stroke-width="0.25"
         linecap="square"
         id="path4415" />
      <path
         d="M4 0 l-4,4"
         stroke="#000000"
         stroke-width="0.25"
         linecap="square"
         id="path4417" />
    </pattern>
    <filter
       inkscape:label="Light Eraser Cracked"
       style="color-interpolation-filters:sRGB;"
       inkscape:menu-tooltip="Basic noise fill texture; adjust color in Flood"
       inkscape:menu="Overlays"
       id="filter4825"
       x="-0.00020559197"
       y="-0.00020531553"
       width="1.0004112"
       height="1.0004106">
      <feColorMatrix
         result="fbSourceGraphic"
         type="luminanceToAlpha"
         in="SourceGraphic"
         id="feColorMatrix4807" />
      <feColorMatrix
         result="result6"
         values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 "
         id="feColorMatrix4809" />
      <feComposite
         in2="result6"
         result="result2"
         operator="out"
         in="SourceGraphic"
         k2="0"
         k1="1"
         k3="0"
         id="feComposite4811" />
      <feTurbulence
         type="fractalNoise"
         baseFrequency="0.04"
         numOctaves="5"
         id="feTurbulence4813" />
      <feColorMatrix
         values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -1.5 0 0 4.5 -1 "
         result="result0"
         id="feColorMatrix4815" />
      <feComposite
         in2="result0"
         in="result0"
         result="result4"
         operator="out"
         id="feComposite4817" />
      <feColorMatrix
         values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -1 "
         result="result7"
         id="feColorMatrix4819" />
      <feComposite
         in2="result2"
         operator="arithmetic"
         result="result5"
         k1="1.5"
         k3="1"
         id="feComposite4821" />
      <feComposite
         in2="SourceGraphic"
         operator="in"
         in="result5"
         result="result8"
         id="feComposite4823" />
    </filter>
  </defs>
  <g
     inkscape:label="レイヤー 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(-27.075249,-89.580999)">
    <g
       id="g4630"
       transform="matrix(0.06632405,0,0,0.06632405,-174.23884,420.78086)"
       style="filter:url(#filter4825)">
      <g
         inkscape:label="_0-0_"
         id="g4548">
        <path
           style="fill:none;stroke:#000000;stroke-linecap:round"
           d="M 3391.97,-2916.97 H 5111.65"
           id="path4422" />
        <path
           style="fill:none;stroke:#000000;stroke-linecap:round"
           d="M 5111.65,-2916.97 V -4636.65"
           id="path4424" />
        <path
           style="fill:none;stroke:#000000;stroke-linecap:round"
           d="M 5111.65,-4636.65 H 3391.97"
           id="path4426" />
        <path
           style="fill:none;stroke:#000000;stroke-linecap:round"
           d="m 3391.97,-4636.65 v 1719.68"
           id="path4428" />
        <path
           d="m 5467.8125,-3776.8124 a 1216.001,1216.001 0 1 0 -2432.0019,0 1216.001,1216.001 0 1 0 2432.0019,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4430" />
        <path
           d="m 5111.6541,-3776.8124 a 859.84255,859.84255 0 1 0 -1719.6851,0 859.84255,859.84255 0 1 0 1719.6851,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4432" />
        <path
           style="fill:none;stroke:#000000;stroke-linecap:round"
           d="m 3391.97,-4636.65 1719.68,1719.68"
           id="path4434" />
        <path
           style="fill:none;stroke:#000000;stroke-linecap:round"
           d="M 5111.65,-4636.65 3391.97,-2916.97"
           id="path4436" />
        <path
           d="m 5215.9705,-4384.8129 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4438" />
        <path
           d="m 3999.9695,-4384.8129 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4440" />
        <path
           d="m 3999.9695,-3168.8119 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4442" />
        <path
           d="m 5215.9705,-3168.8119 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4444" />
        <path
           d="m 4755.4956,-3776.8124 a 503.68409,503.68409 0 1 0 -1007.3681,0 503.68409,503.68409 0 1 0 1007.3681,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4446" />
        <path
           d="m 4964.1284,-4132.9708 a 356.15843,356.15843 0 1 0 -712.3168,0 356.15843,356.15843 0 1 0 712.3168,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4448" />
        <path
           d="m 4964.1284,-3420.654 a 356.15843,356.15843 0 1 0 -712.3168,0 356.15843,356.15843 0 1 0 712.3168,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4450" />
        <path
           d="m 4251.8116,-3420.654 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4452" />
        <path
           d="m 4251.8116,-4132.9708 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4454" />
        <path
           d="m 5467.8125,-3776.8124 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4456" />
        <path
           d="m 3748.1275,-3776.8124 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4458" />
        <path
           d="m 4607.97,-2916.9699 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4460" />
        <path
           d="m 4607.97,-4636.6549 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4462" />
        <path
           style="fill:none;stroke:#000000;stroke-linecap:round"
           d="m 3937.09,-2602.25 1489.29,-859.84"
           id="path4464" />
        <path
           style="fill:none;stroke:#000000;stroke-linecap:round"
           d="M 5426.38,-3462.09 4566.54,-4951.38"
           id="path4466" />
        <path
           style="fill:none;stroke:#000000;stroke-linecap:round"
           d="m 4566.54,-4951.38 -1489.3,859.84"
           id="path4468" />
        <path
           style="fill:none;stroke:#000000;stroke-linecap:round"
           d="m 3077.24,-4091.54 859.85,1489.29"
           id="path4470" />
        <path
           d="m 5467.8125,-3776.8124 a 1216.001,1216.001 0 1 0 -2432.0019,0 1216.001,1216.001 0 1 0 2432.0019,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4472" />
        <path
           d="m 5111.6541,-3776.8124 a 859.84255,859.84255 0 1 0 -1719.6851,0 859.84255,859.84255 0 1 0 1719.6851,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4474" />
        <path
           style="fill:none;stroke:#000000;stroke-linecap:round"
           d="m 3077.24,-4091.54 2349.14,629.45"
           id="path4476" />
        <path
           style="fill:none;stroke:#000000;stroke-linecap:round"
           d="m 4566.54,-4951.38 -629.45,2349.13"
           id="path4478" />
        <path
           d="m 4830.5136,-4607.3565 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4480" />
        <path
           d="m 3777.4259,-3999.356 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4482" />
        <path
           d="m 4385.4264,-2946.2683 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4484" />
        <path
           d="m 5438.5141,-3554.2688 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4486" />
        <path
           d="m 4755.4956,-3776.8124 a 503.68409,503.68409 0 1 0 -1007.3681,0 503.68409,503.68409 0 1 0 1007.3681,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4488" />
        <path
           d="m 4738.333,-4263.3339 a 356.15843,356.15843 0 1 0 -712.3168,0 356.15843,356.15843 0 1 0 712.3168,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4490" />
        <path
           d="m 5094.4915,-3646.4494 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4492" />
        <path
           d="m 4477.607,-3290.2909 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4494" />
        <path
           d="m 4121.4485,-3907.1754 a 356.15843,356.15843 0 1 0 -712.3168,0 356.15843,356.15843 0 1 0 712.3168,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4496" />
        <path
           d="m 5352.6155,-4206.7337 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4498" />
        <path
           d="m 3863.3245,-3346.8911 a 356.15843,356.15843 0 1 0 -712.3168,0 356.15843,356.15843 0 1 0 712.3168,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4500" />
        <path
           d="m 5037.8913,-3032.1669 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4502" />
        <path
           d="m 4178.0487,-4521.4579 a 356.15843,356.15843 0 1 0 -712.3168,0 356.15843,356.15843 0 1 0 712.3168,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4504" />
        <path
           style="fill:none;stroke:#000000;stroke-linecap:round"
           d="m 4566.54,-2602.25 859.84,-1489.29"
           id="path4506" />
        <path
           style="fill:none;stroke:#000000;stroke-linecap:round"
           d="M 5426.38,-4091.54 3937.09,-4951.38"
           id="path4508" />
        <path
           style="fill:none;stroke:#000000;stroke-linecap:round"
           d="m 3937.09,-4951.38 -859.85,1489.29"
           id="path4510" />
        <path
           style="fill:none;stroke:#000000;stroke-linecap:round"
           d="m 3077.24,-3462.09 1489.3,859.84"
           id="path4512" />
        <path
           d="m 5467.8125,-3776.8124 a 1216.001,1216.001 0 1 0 -2432.0019,0 1216.001,1216.001 0 1 0 2432.0019,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4514" />
        <path
           d="m 5111.6541,-3776.8124 a 859.84255,859.84255 0 1 0 -1719.6851,0 859.84255,859.84255 0 1 0 1719.6851,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4516" />
        <path
           style="fill:none;stroke:#000000;stroke-linecap:round"
           d="m 3077.24,-3462.09 2349.14,-629.45"
           id="path4518" />
        <path
           style="fill:none;stroke:#000000;stroke-linecap:round"
           d="m 3937.09,-4951.38 629.45,2349.13"
           id="path4520" />
        <path
           d="m 4385.4264,-4607.3565 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4522" />
        <path
           d="m 3777.4259,-3554.2688 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4524" />
        <path
           d="m 4830.5136,-2946.2683 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4526" />
        <path
           d="m 5438.5141,-3999.356 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4528" />
        <path
           d="m 4755.4956,-3776.8124 a 503.68409,503.68409 0 1 0 -1007.3681,0 503.68409,503.68409 0 1 0 1007.3681,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4530" />
        <path
           d="m 4477.607,-4263.3339 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4532" />
        <path
           d="m 5094.4915,-3907.1754 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4534" />
        <path
           d="m 4738.333,-3290.2909 a 356.15843,356.15843 0 1 0 -712.3168,0 356.15843,356.15843 0 1 0 712.3168,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4536" />
        <path
           d="m 4121.4485,-3646.4494 a 356.15843,356.15843 0 1 0 -712.3168,0 356.15843,356.15843 0 1 0 712.3168,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4538" />
        <path
           d="m 5037.8913,-4521.4579 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4540" />
        <path
           d="m 4178.0487,-3032.1669 a 356.15843,356.15843 0 1 0 -712.3168,0 356.15843,356.15843 0 1 0 712.3168,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4542" />
        <path
           d="m 5352.6155,-3346.8911 a 356.15845,356.15845 0 1 0 -712.3169,0 356.15845,356.15845 0 1 0 712.3169,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4544" />
        <path
           d="m 3863.3245,-4206.7337 a 356.15843,356.15843 0 1 0 -712.3168,0 356.15843,356.15843 0 1 0 712.3168,0 z"
           style="fill:none;stroke:#000000;stroke-linecap:round"
           id="path4546" />
      </g>
      <g
         inkscape:label="ADD_LINE"
         id="g4550" />
      <g
         inkscape:label="0"
         id="g4552" />
    </g>
  </g>
</svg>

<nav id="global-nav">
    <ul>
      <li><a href="#">i</a>mage</li>
      <li><a href="#">t</a>echnical</li>
      <li><a href="#">o</a>riginal</li>
      <li><a href="#">u</a>ser</li>
          </ul>
  </nav>
</footer>
</html>


