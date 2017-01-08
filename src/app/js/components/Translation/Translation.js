import "./Translation.sass"

import React from "react"
import {observer} from "mobx-react"
import Loader from "../Loader/Loader"

@observer
export default class Translation extends React.Component {
  render() {
    if ( window.require ) {
      setTimeout(function() {
        const remote = window.require('electron').remote;
        const win = remote.getCurrentWindow();
        let height = document.body.clientHeight;
        win.setSize(300, height);
      }, 50);
    }

    const store = this.props.store
    const loaded = store.isLoading ? "loading" : ""

    return (
      <div className={`translation ${loaded}`}>
        {store.translation}
      </div>
    )
  }
}
