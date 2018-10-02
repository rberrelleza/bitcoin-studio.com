module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = require(\"react\");\nconst fuse_react_1 = require(\"fuse-react\");\nclass Header extends React.Component {\n    constructor(props) {\n        super(props);\n        this.activate = this.activate.bind(this);\n        this.state = {\n            activeItem: 'HOME'\n        };\n    }\n    componentDidMount() {\n        let page = window.location.pathname;\n        if (page === '/')\n            this.setState({ activeItem: 'HOME' });\n        else if (page === '/workshops')\n            this.setState({ activeItem: 'WORKSHOPS' });\n        else if (page === '/resources')\n            this.setState({ activeItem: 'RESOURCES' });\n        else if (page === '/about')\n            this.setState({ activeItem: 'ABOUT' });\n    }\n    activate(item) {\n        this.setState({ activeItem: item });\n    }\n    render() {\n        return (React.createElement(\"nav\", { className: \"nav\" },\n            React.createElement(\"ul\", null,\n                React.createElement(\"li\", null,\n                    React.createElement(fuse_react_1.Link, { className: this.state.activeItem === 'HOME' ? 'active' : '', onClick: this.activate.bind(this, 'HOME'), to: \"/\" }, \"HOME\")),\n                React.createElement(\"li\", null,\n                    React.createElement(fuse_react_1.Link, { className: this.state.activeItem === 'WORKSHOPS' ? 'active' : '', onClick: this.activate.bind(this, 'WORKSHOPS'), to: \"/workshops\" }, \"WORKSHOPS\")),\n                React.createElement(\"li\", null,\n                    React.createElement(fuse_react_1.Link, { className: this.state.activeItem === 'RESOURCES' ? 'active' : '', onClick: this.activate.bind(this, 'RESOURCES'), to: \"/resources\" }, \"RESOURCES\")),\n                React.createElement(\"li\", null,\n                    React.createElement(fuse_react_1.Link, { className: this.state.activeItem === 'ABOUT' ? 'active' : '', onClick: this.activate.bind(this, 'ABOUT'), to: \"/about\" }, \"ABOUT\")))));\n    }\n}\nexports.default = Header;\n//# sourceMappingURL=Header.js.map",
dependencies: ["react","fuse-react"],
sourceMap: "{\"version\":3,\"file\":\"components/Header.jsx\",\"sourceRoot\":\"\",\"sources\":[\"/src/components/Header.tsx\"],\"names\":[],\"mappings\":\";;AAAA,+BAA8B;AAC9B,2CAAiC;AAIjC,YAAa,SAAQ,KAAK,CAAC,SAA2B;IAEpD,YAAY,KAAK;QACf,KAAK,CAAC,KAAK,CAAC,CAAC;QACb,IAAI,CAAC,QAAQ,GAAG,IAAI,CAAC,QAAQ,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC;QAEzC,IAAI,CAAC,KAAK,GAAG;YACX,UAAU,EAAE,MAAM;SACnB,CAAA;IACH,CAAC;IAED,iBAAiB;QACf,IAAI,IAAI,GAAG,MAAM,CAAC,QAAQ,CAAC,QAAQ,CAAA;QACnC,IAAI,IAAI,KAAK,GAAG;YAAE,IAAI,CAAC,QAAQ,CAAC,EAAC,UAAU,EAAE,MAAM,EAAC,CAAC,CAAA;aAChD,IAAI,IAAI,KAAK,YAAY;YAAE,IAAI,CAAC,QAAQ,CAAC,EAAC,UAAU,EAAE,WAAW,EAAC,CAAC,CAAA;aACnE,IAAI,IAAI,KAAK,YAAY;YAAE,IAAI,CAAC,QAAQ,CAAC,EAAC,UAAU,EAAE,WAAW,EAAC,CAAC,CAAA;aACnE,IAAI,IAAI,KAAK,QAAQ;YAAE,IAAI,CAAC,QAAQ,CAAC,EAAC,UAAU,EAAE,OAAO,EAAC,CAAC,CAAA;IAClE,CAAC;IAED,QAAQ,CAAC,IAAI;QACX,IAAI,CAAC,QAAQ,CAAC,EAAC,UAAU,EAAE,IAAI,EAAC,CAAC,CAAA;IACnC,CAAC;IAED,MAAM;QACJ,OAAO,CACL,6BAAK,SAAS,EAAE,KAAK;YACnB;gBACE;oBACE,oBAAC,iBAAI,IAAC,SAAS,EAAE,IAAI,CAAC,KAAK,CAAC,UAAU,KAAK,MAAM,CAAC,CAAC,CAAC,QAAQ,CAAC,CAAC,CAAC,EAAE,EAAG,OAAO,EAAE,IAAI,CAAC,QAAQ,CAAC,IAAI,CAAC,IAAI,EAAE,MAAM,CAAC,EAAE,EAAE,EAAC,GAAG,WAAY,CAC9H;gBACL;oBACE,oBAAC,iBAAI,IAAC,SAAS,EAAE,IAAI,CAAC,KAAK,CAAC,UAAU,KAAK,WAAW,CAAC,CAAC,CAAC,QAAQ,CAAC,CAAC,CAAC,EAAE,EAAE,OAAO,EAAE,IAAI,CAAC,QAAQ,CAAC,IAAI,CAAC,IAAI,EAAE,WAAW,CAAC,EAAE,EAAE,EAAC,YAAY,gBAAiB,CACrJ;gBACL;oBACE,oBAAC,iBAAI,IAAC,SAAS,EAAE,IAAI,CAAC,KAAK,CAAC,UAAU,KAAK,WAAW,CAAC,CAAC,CAAC,QAAQ,CAAC,CAAC,CAAC,EAAE,EAAE,OAAO,EAAE,IAAI,CAAC,QAAQ,CAAC,IAAI,CAAC,IAAI,EAAE,WAAW,CAAC,EAAE,EAAE,EAAC,YAAY,gBAAiB,CACrJ;gBACL;oBACE,oBAAC,iBAAI,IAAC,SAAS,EAAE,IAAI,CAAC,KAAK,CAAC,UAAU,KAAK,OAAO,CAAC,CAAC,CAAC,QAAQ,CAAC,CAAC,CAAC,EAAE,EAAE,OAAO,EAAE,IAAI,CAAC,QAAQ,CAAC,IAAI,CAAC,IAAI,EAAE,OAAO,CAAC,EAAE,EAAE,EAAC,QAAQ,YAAa,CACrI,CACF,CACD,CACP,CAAA;IACH,CAAC;CACF;AAED,kBAAe,MAAM,CAAA\",\"sourcesContent\":[\"import * as React from 'react'\\nimport { Link } from 'fuse-react'\\n\\ntype MyProps = {  };\\ntype MyState = { activeItem: string };\\nclass Header extends React.Component<MyProps, MyState> {\\n\\n  constructor(props) {\\n    super(props);\\n    this.activate = this.activate.bind(this);\\n\\n    this.state = {\\n      activeItem: 'HOME'\\n    }\\n  }\\n\\n  componentDidMount() {\\n    let page = window.location.pathname\\n    if (page === '/') this.setState({activeItem: 'HOME'})\\n    else if (page === '/workshops') this.setState({activeItem: 'WORKSHOPS'})\\n    else if (page === '/resources') this.setState({activeItem: 'RESOURCES'})\\n    else if (page === '/about') this.setState({activeItem: 'ABOUT'})\\n  }\\n\\n  activate(item) {\\n    this.setState({activeItem: item})\\n  }\\n\\n  render() {\\n    return (\\n      <nav className={\\\"nav\\\"}>\\n        <ul>\\n          <li>\\n            <Link className={this.state.activeItem === 'HOME' ? 'active' : ''}  onClick={this.activate.bind(this, 'HOME')} to=\\\"/\\\">HOME</Link>\\n          </li>\\n          <li>\\n            <Link className={this.state.activeItem === 'WORKSHOPS' ? 'active' : ''} onClick={this.activate.bind(this, 'WORKSHOPS')} to=\\\"/workshops\\\">WORKSHOPS</Link>\\n          </li>\\n          <li>\\n            <Link className={this.state.activeItem === 'RESOURCES' ? 'active' : ''} onClick={this.activate.bind(this, 'RESOURCES')} to=\\\"/resources\\\">RESOURCES</Link>\\n          </li>\\n          <li>\\n            <Link className={this.state.activeItem === 'ABOUT' ? 'active' : ''} onClick={this.activate.bind(this, 'ABOUT')} to=\\\"/about\\\">ABOUT</Link>\\n          </li>\\n        </ul>\\n      </nav>\\n    )\\n  }\\n}\\n\\nexport default Header\"]}",
headerContent: undefined,
mtime: 1536879294042,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}