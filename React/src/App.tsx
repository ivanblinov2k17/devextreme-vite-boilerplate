
import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import './App.css'
import BoxApp from './views/box';
import SplitterApp from './views/splitter';
 
class App extends React.Component {
    render() {
        return (
            <>
                <h1>Box</h1>
                <BoxApp />
                <h1>Splitter</h1>
                <SplitterApp/>
            </>
        );
    }
}
 
export default App;