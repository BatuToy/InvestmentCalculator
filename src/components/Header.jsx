import Logo from "../assets/investment-calculator-logo.png";
function Header() {
    return <header id="header">
        <img src={Logo} alt="Showing money bag" />
        <h1>Investment Calculator</h1>
    </header>
}

export default Header;