import logo from "./../logo.svg";
import Search from "./../components/Search";
import Checkboxes from "./../components/Checkboxes";

function _Default() {
  return (
    <div className="default">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*  Second Test */}
        <Search />
        {/*  Second Test */}
      </header>
      {/*  First Test */}
      <Checkboxes />
      {/*  First Test */}
    </div>
  );
}

export default _Default;
