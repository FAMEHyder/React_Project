import '../components/headerStyle.css'
const Header = () => {
  return (
    <div className="wrapper row1">
  <header id="header" className="hoc clear">
    <div id="logo" className="fl_left"> 
      <h1 className="logoname"><a href="index.html">Chill<span>a</span>id</a></h1>
    </div>
    <nav id="mainav" className="fl_right"> 
      <ul className="clear">
        <li className="active"><a href="index.html">Home</a></li>
        <li><a className="drop" href="#">Pages</a>
          <ul>
            <li><a href="pages/gallery.html">Gallery</a></li>
            <li><a href="pages/full-width.html">Full Width</a></li>
            <li><a href="pages/sidebar-left.html">Sidebar Left</a></li>
            <li><a href="pages/sidebar-right.html">Sidebar Right</a></li>
            <li><a href="pages/basic-grid.html">Basic Grid</a></li>
            <li><a href="pages/font-icons.html">Font Icons</a></li>
          </ul>
        </li>
        <li><a className="drop" href="#">Dropdown</a>
          <ul>
            <li><a href="#">Level 2</a></li>
            <li><a className="drop" href="#">Level 2 + Drop</a>
              <ul>
                <li><a href="#">Level 3</a></li>
                <li><a href="#">Level 3</a></li>
                <li><a href="#">Level 3</a></li>
              </ul>
            </li>
            <li><a href="#">Level 2</a></li>
          </ul>
        </li>
        <li><a href="#">Link Text</a></li>
        <li><a href="#">Link Text</a></li>
        <li><a href="#">Link Text</a></li>
      </ul>
    </nav>
  </header>
</div>
  )
}

export default Header
